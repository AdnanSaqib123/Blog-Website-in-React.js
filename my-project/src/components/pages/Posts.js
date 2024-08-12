import React, { useState, useEffect } from 'react';
import './Posts.css';
import Loader from './Loader'; // Import the Loader component

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [todos, setTodos] = useState([]);
    const [popupType, setPopupType] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    const postsApi = 'https://jsonplaceholder.typicode.com/posts?_limit=50';
    const commentsApi = 'https://jsonplaceholder.typicode.com/comments?postId=';
    const todosApi = 'https://jsonplaceholder.typicode.com/todos?userId=';
    const randomImageApi = 'https://api.api-ninjas.com/v1/randomimage?category=technology';
    const apiKey = 'jmX5J29bgrFnyIrSkWLHiA==7vL13nlG6jcbkHai';

    // Fetch random image
    const fetchRandomImage = async () => {
        try {
            const response = await fetch(randomImageApi, {
                headers: { 'X-Api-Key': apiKey }
            });
            if (!response.ok) throw new Error('Failed to fetch random image');
            const contentType = response.headers.get('Content-Type');
            if (contentType.includes('application/json')) {
                const data = await response.json();
                return data.url;
            } else if (contentType.includes('image')) {
                const base64String = await response.text();
                return `data:image/jpeg;base64,${base64String}`;
            } else {
                throw new Error('Unsupported content type');
            }
        } catch (error) {
            console.error('Error fetching random image:', error);
            return '';
        }
    };

    // Fetch posts
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(postsApi);
                if (!response.ok) throw new Error('Failed to fetch posts');
                const data = await response.json();

                // Fetch random images for posts
                const imagePromises = data.map(() => fetchRandomImage());
                const images = await Promise.all(imagePromises);

                // Assign images and set posts state
                const postsWithImages = data.map((post, index) => ({
                    ...post,
                    image: images[index],
                    publishedBy: getPublishedBy(index),
                }));
                setPosts(postsWithImages);
                setLoading(false); // Set loading to false once posts are loaded
            } catch (error) {
                console.error('Error fetching posts:', error);
                setLoading(false); // Ensure loading is stopped even if there's an error
            }
        };

        fetchPosts();
    }, []);

    // Get "Published by" text
    const getPublishedBy = (index) => {
        const names = ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch', 'Patricia Lebsack', 'Chelsey Dietrich'];
        // Determine the range of indexes for each name
        const nameIndex = Math.floor(index / 10);
        return names[nameIndex % names.length];
    };

    // Fetch comments
    const fetchComments = async (postId) => {
        try {
            const response = await fetch(commentsApi + postId);
            if (!response.ok) throw new Error('Failed to fetch comments');
            const data = await response.json();
            setComments(data);
            setPopupType('comments');
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    // Fetch todos
    const fetchTodos = async (userId) => {
        try {
            const response = await fetch(todosApi + userId);
            if (!response.ok) throw new Error('Failed to fetch todos');
            const data = await response.json();
            setTodos(data);
            setPopupType('todos');
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    // Close popup
    const closePopup = () => {
        setPopupType(null);
    };

    // Close popup when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            const popup = document.getElementById('popup');
            const popup2 = document.getElementById('popup2');
            if ((popup && !popup.contains(event.target)) || (popup2 && !popup2.contains(event.target))) {
                setPopupType(null);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <section id="allpost">
            <div className="post-filter animate__animated wow animate__zoomIn">
                <span className="filter-item active-filter" data-filter="all">Latest Posts</span>
            </div><br />
            {loading && <Loader containerClassName="allpost-loader" />}
            <div className="post post-box container">
                <div className="grid-container post-box" id="post-data-container">
                    {posts.map(post => (
                        <div key={post.id} className="post-data">
                            <img src={post.image} alt={post.title + ' image'} />
                            <p style={{ fontSize: '13px', color: '#111' }}><strong>Title:</strong> {post.title}</p>
                            <p style={{ fontSize: '13px', color: '#111' }}><strong>Body:</strong> {post.body}</p><br />
                            <p style={{ fontSize: '11px', color: '#111' }}>Published by "{post.publishedBy}"</p><br />
                            <div className="post-buttons">
                                <button className="showCommentsBtn" onClick={() => fetchComments(post.id)}>Show Comments</button>
                                <button className="showTodosBtn" onClick={() => fetchTodos(post.userId)}>Show Todos</button>
                            </div>
                        </div>
                    ))}
                </div>

                {popupType === 'comments' && comments.length > 0 && (
                    <div id="popup" className="popup show" onClick={closePopup}>
                        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close-btn" onClick={closePopup}>&times;</span>
                            <div className="grid-container1" id="comment-data-container">
                                <h2 className="h2class">Comments</h2><br />
                                {comments.map(comment => (
                                    <div key={comment.id} className="user-data">
                                        <p><strong>Name:</strong> {comment.name}</p>
                                        <p><strong>Email:</strong> {comment.email}</p>
                                        <p><strong>Comment:</strong> {comment.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {popupType === 'todos' && todos.length > 0 && (
                    <div id="popup2" className="popup show" onClick={closePopup}>
                        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close-btn" onClick={closePopup}>&times;</span>
                            <div className="grid-container1" id="todo-data-container">
                                <h2 className="h2class">Todos</h2><br />
                                {todos.map(todo => (
                                    <div key={todo.id} className="user-data">
                                        <p><strong>Title</strong> {todo.title}</p>
                                        <p><strong>Completed:</strong> {todo.completed ? 'true' : 'false'}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Posts;
