import React, { useState } from 'react';

const Comments = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [isVisible, setIsVisible] = useState(true); // Toggle visibility

    const handleAddComment = () => {
        if (name && comment) {
            setComments([...comments, { name, comment }]);
            setName('');
            setComment('');
        }
    };

    return (
        <div className="comments-section">
            <button
                className="toggle-button"
                onClick={() => setIsVisible(!isVisible)}
            >
                {isVisible ? 'Hide comments' : 'Show comments'}
            </button>
            {isVisible && (
                <div>
                    <h2>Add a Comment</h2>
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <textarea
                            placeholder="Your Comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                        <button onClick={handleAddComment}>Add Comment</button>
                    </div>
                    <h3>Comments</h3>
                    <div className="comments-container">
                        {comments.map((c, index) => (
                            <div key={index} className="comment-line">
                                <strong>{c.name}:</strong> {c.comment}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Comments;
