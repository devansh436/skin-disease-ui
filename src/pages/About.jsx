import React from 'react';
import teamMembers from '../data/teamMembers.js';
import { Link } from 'react-router-dom';
import Title from '../components/Title';

function About() {

    return (
        <div>
            <Title />
            <div className="min-vh-100 bg-light">
                {/* Hero Section */}
                <div className="text-white"
                    style={{
                        background: "linear-gradient(135deg,rgb(192, 109, 255) 0%, #2575fc 100%)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
                    }}>
                    <Link to="/">
                        <button className="m-3 rounded-circle btn gradient-btn">
                            <i className="bi bi-arrow-left"></i>
                        </button>
                    </Link>
                    <div className="container text-center py-4">
                        <h1 className="display-4 fw-bold mb-3">Meet the Team</h1>
                        <p className="lead mb-4">The talented individuals behind AI Skin Disease Detection</p>

                        <div className="d-flex justify-content-center align-items-center mt-4">
                            <div className="px-4 py-2 bg-white bg-opacity-25 rounded-pill">
                                <span className="fw-bold text-white">Keyboard Warriors</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Description */}
                <div className="container py-5 mt-4">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8">
                            <div className="card border-0 shadow-lg mission-card">
                                <div className="card-body p-5">
                                    <h2 className="text-center mb-4 gradient-text">
                                        Our Mission
                                    </h2>
                                    <p className="lead text-center text-muted">
                                        We are a team of passionate technologists committed to revolutionizing healthcare through
                                        artificial intelligence. Our AI-powered skin disease detection platform aims to make
                                        early diagnosis accessible to everyone, everywhere.
                                    </p>

                                    <div className="row mt-5 text-center">
                                        {['Innovation', 'Accuracy', 'Accessibility'].map((item, index) => (
                                            <div className="col-md-4 mb-4 mb-md-0" key={index}>
                                                <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-3">
                                                    <i className={`bi bi-${index === 0 ? 'lightbulb' : index === 1 ? 'shield-check' : 'people'} text-primary fs-3`}></i>
                                                </div>
                                                <h5 className="gradient-text">{item}</h5>
                                                <p className="text-muted">{
                                                    index === 0 ? 'Pushing boundaries in AI and healthcare' :
                                                    index === 1 ? 'Committed to reliable results' :
                                                    'Making healthcare available for all'
                                                }</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Members */}
                    <h2 className="text-center mb-5 gradient-text underline">
                        Meet Our Team
                    </h2>

                    <div className="row">
                        {teamMembers.map((member, index) => (
                            <div className="col-lg-6 mb-4" key={index}>
                                <div className="card border-0 shadow-sm h-100 team-card">
                                    <div className="row g-0">
                                        <div className="col-md-4 position-relative">
                                            <div className="gradient-bg h-100">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="member-image"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body p-4">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h5 className="card-title fw-bold mb-0">{member.name}</h5>
                                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="btn linkedin-btn">
                                                        <i className="bi bi-linkedin"></i>
                                                    </a>
                                                </div>
                                                <p className="text-primary mb-1">{member.role}</p>
                                                <p className="text-muted small mb-2">Roll No: {member.rollNo}</p>
                                                <p className="card-text text-secondary">{member.bio}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tech Stack Section */}
                    <div className="mt-5 pt-4">
                        <h2 className="text-center mb-4 gradient-text underline">Our Technology Stack</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="card border-0 shadow-sm tech-card">
                                    <div className="card-body py-5">
                                        <div className="row text-center">
                                            {['React', 'Bootstrap', 'Node.js', 'TensorFlow'].map((tech, index) => (
                                                <div className="col-md-3 col-6 mb-4" key={index}>
                                                    <div className="tech-icon">
                                                        <i className={`bi bi-${
                                                            tech === 'React' ? 'filetype-jsx' :
                                                            tech === 'Bootstrap' ? 'bootstrap' :
                                                            tech === 'Node.js' ? 'braces' : 'gpu-card'
                                                        } fs-1`}></i>
                                                    </div>
                                                    <h5 className="gradient-text">{tech}</h5>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="row justify-content-center mt-5 pt-4 mb-5">
                        <div className="col-lg-8">
                            <div className="card border-0 shadow-lg contact-card">
                                <div className="card-body p-5 text-center">
                                    <h3 className="mb-4 fw-bold text-white">Interested in collaborating?</h3>
                                    <p className="lead mb-4 text-light opacity-75">We're always open to new partnerships and opportunities to make a difference.</p>
                                    <button className="btn btn-light btn-lg px-4 gradient-hover">
                                        <i className="bi bi-envelope me-2"></i>
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="footer-bg text-white text-center py-4">
                    <div className="container">
                        <p className="mb-0">© 2025 Keyboard Warriors. All rights reserved.</p>
                    </div>
                </footer>

                {/* Add Bootstrap Icons */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" />

                {/* Custom CSS */}
                <style jsx>{`
                    .gradient-bg {
                        background: linear-gradient(45deg, #6A11CB, #2575FC);
                    }
                    
                    .gradient-text {
                        background: linear-gradient(to right, #6A11CB, #2575FC);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }

                    .underline {
                        border-bottom: 3px solid #6A11CB;
                        display: inline-block;
                        padding-bottom: 8px;
                    }

                    .mission-card {
                        border-radius: 20px;
                        transform: translateY(-40px);
                    }

                    .member-image {
                        width: 120px;
                        height: 120px;
                        object-fit: cover;
                        border: 5px solid white;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }

                    .team-card {
                        border-radius: 15px;
                        transition: all 0.3s ease;
                        overflow: hidden;
                    }

                    .team-card:hover {
                        transform: translateY(-10px);
                        box-shadow: 0 15px 30px rgba(106,17,203,0.1) !important;
                    }

                    .linkedin-btn {
                        border: 1px solid #6A11CB;
                        color: #6A11CB;
                        width: 36px;
                        height: 36px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all 0.3s ease;
                    }

                    .linkedin-btn:hover {
                        background: linear-gradient(135deg, #6A11CB 0%, #2575FC 100%);
                        color: white !important;
                        border-color: transparent !important;
                    }

                    .tech-icon {
                        width: 80px;
                        height: 80px;
                        background: rgba(106,17,203,0.1);
                        border-radius: 50%;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 1rem;
                        color: #6A11CB;
                        transition: all 0.3s ease;
                    }

                    .tech-icon:hover {
                        background: linear-gradient(135deg, #6A11CB 0%, #2575FC 100%);
                        color: white;
                        transform: scale(1.1);
                    }

                    .contact-card {
                        border-radius: 20px;
                        background: linear-gradient(135deg, #6A11CB 0%, #2575FC 100%);
                    }

                    .footer-bg {
                        background: #1a0a2b;
                    }

                    .gradient-btn {
                        background: linear-gradient(135deg, #6A11CB 0%, #2575FC 100%);
                        color: white;
                        border: none;
                        transition: all 0.3s ease;
                    }

                    .gradient-btn:hover {
                        background: linear-gradient(135deg, #2575FC 0%, #6A11CB 100%);
                        color: white;
                    }

                    .gradient-hover:hover {
                        background: linear-gradient(135deg, #6A11CB 0%, #2575FC 100%);
                        color: white !important;
                    }
                `}</style>
            </div>
        </div>
    );
}

export default About;