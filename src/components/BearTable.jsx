import React, { useState } from 'react';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [showComments, setShowComments] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && comment) {
            setComments([...comments, { name, comment }]);
            setName('');
            setComment('');
        }
    };

    return (
        <section className="comments">
            <button onClick={() => setShowComments(!showComments)}>
                {showComments ? 'Hide comments' : 'Show comments'}
            </button>
            {showComments && (
                <div>
                    <h2>Add a Comment</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={name}
                            placeholder="Your name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <textarea
                            value={comment}
                            placeholder="Your comment"
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <button type="submit">Submit</button>
                    </form>
                    <ul>
                        {comments.map((c, index) => (
                            <li key={index}>
                                <p><strong>{c.name}</strong>: {c.comment}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
};

export default Comments;