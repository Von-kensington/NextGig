import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Jobs.css'; // Add styles here

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    // Mock data for now (replace with API later)
    const mockJobs = [
        { id: 1, title: 'Frontend Developer', company: 'TechCorp', location: 'Remote', type: 'Full-time' },
        { id: 2, title: 'Backend Engineer', company: 'CodeWorks', location: 'San Francisco, CA', type: 'Part-time' },
        { id: 3, title: 'UI/UX Designer', company: 'DesignStudio', location: 'New York, NY', type: 'Freelance' },
    ];

    useEffect(() => {
        // Simulate API call
        setJobs(mockJobs);
    }, []);

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="jobs-page">
            <h1>Explore Job Listings</h1>

            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search jobs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Job Cards */}
            <div className="job-list">
                {filteredJobs.map(job => (
                    <div key={job.id} className="job-card">
                        <h2>{job.title}</h2>
                        <p><strong>Company:</strong> {job.company}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                        <p><strong>Type:</strong> {job.type}</p>
                        <button className="btn-primary" onClick={() => navigate(`/jobs/${job.id}`)}>View Details</button>
                    </div>
                ))}
                {filteredJobs.length === 0 && <p>No jobs found</p>}
            </div>
        </div>
    );
};

export default JobsPage;
