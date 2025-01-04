import React, { useState } from 'react';
import Slider from 'react-slick';
import '../styles/Community.css';

const CommunityPage = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'What are the best practices for React development?',
            author: 'Jane Doe',
            content: 'I’d love to hear some insights about clean code in React!',
            community: 'Frontend',
        },
        {
            id: 2,
            title: 'How do you optimize Node.js performance?',
            author: 'John Smith',
            content: 'Looking for tips on handling high traffic in Node.js apps.',
            community: 'Backend',
        },
        {
            id: 3,
            title: 'What are the latest trends in UX design?',
            author: 'Alice Johnson',
            content: 'Let’s discuss how UX design is evolving in 2025.',
            community: 'UI/UX',
        },
    ]);

    const [selectedCommunity, setSelectedCommunity] = useState('All');

    // Mock user data
    const users = [
        { id: 1, name: 'Jane Doe', role: 'Frontend Developer' },
        { id: 2, name: 'John Smith', role: 'Backend Engineer' },
        { id: 3, name: 'Alice Johnson', role: 'UI/UX Designer' },
        { id: 4, name: 'Michael Brown', role: 'Full-Stack Developer' },
        { id: 5, name: 'Emily Davis', role: 'Data Scientist' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const filterPosts = selectedCommunity === 'All'
        ? posts
        : posts.filter(post => post.community === selectedCommunity);

    return (
        <div className="community-page">
            <h1>Community Discussions</h1>

            {/* User Carousel */}
            <div className="user-carousel">
                <h2>Connect with Users</h2>
                <Slider {...settings}>
                    {users.map(user => (
                        <div key={user.id} className="user-card">
                            <h3>{user.name}</h3>
                            <p>{user.role}</p>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Community Selector */}
            <div className="community-selector">
                <select
                    value={selectedCommunity}
                    onChange={(e) => setSelectedCommunity(e.target.value)}
                >
                    <option value="All">All Communities</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="UI/UX">UI/UX</option>
                </select>
            </div>

            {/* Post List */}
            <div className="post-list">
                {filterPosts.map(post => (
                    <div key={post.id} className="post-card">
                        <h2>{post.title}</h2>
                        <p><strong>Author:</strong> {post.author}</p>
                        <p>{post.content}</p>
                        <p><strong>Community:</strong> {post.community}</p>
                    </div>
                ))}
                {filterPosts.length === 0 && <p>No posts found for this community.</p>}
            </div>

        </div>
    );
};

export default CommunityPage;
