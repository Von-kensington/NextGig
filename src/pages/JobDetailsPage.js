import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/JobDetails.css';

const JobDetailsPage = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);

    // Mock data for now (replace with API call later)
    const mockJobs = [
        {
            id: 1,
            title: 'Frontend Developer',
            company: 'TechCorp',
            location: 'Remote',
            type: 'Full-time',
            description: 'Build and maintain amazing user interfaces for our web applications.',
            requirements: ['Proficiency in React', 'Experience with HTML, CSS, and JavaScript', 'Familiarity with REST APIs'],
            salary: '$80,000 - $100,000 per year',
        },
        {
            id: 2,
            title: 'Backend Engineer',
            company: 'CodeWorks',
            location: 'San Francisco, CA',
            type: 'Part-time',
            description: 'Develop and maintain backend systems with high scalability and performance.',
            requirements: ['Proficiency in Node.js', 'Experience with PostgreSQL', 'Familiarity with cloud platforms'],
            salary: '$40,000 - $60,000 per year',
        },
    ];

    useEffect(() => {
        // Simulate API call to fetch job details
        const fetchedJob = mockJobs.find(job => job.id === parseInt(jobId));
        setJob(fetchedJob);
    }, [jobId]);

    if (!job) {
        return <p>Loading job details...</p>;
    }

    return (
        <div className="job-details">
            <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            <h1>{job.title}</h1>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Description:</strong> {job.description}</p>

            <h2>Requirements</h2>
            <ul>
                {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                ))}
            </ul>

            <button className="apply-button">Apply Now</button>
        </div>
    );
};

export default JobDetailsPage;
