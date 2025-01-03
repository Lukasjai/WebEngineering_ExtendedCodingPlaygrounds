import React from 'react';

const Navbar = () => (
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Our team</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blog</a></li>
        </ul>
        <form className="search">
            <input type="search" placeholder="Search query" />
            <button type="submit">Go!</button>
        </form>
    </nav>
);

export default Navbar;