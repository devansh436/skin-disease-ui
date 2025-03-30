import React from 'react';
import { Link } from 'react-router-dom';
import faqs from '../data/faqs.js';
import Title from '../components/Title';

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <div className="min-vh-100 bg-light">
            <Title />

            {/* Hero Section */}
            <div className="py- text-white"
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
                    <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
                    <p className="lead mb-4">Have questions? We're here to help!</p>
                </div>
            </div>

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card shadow-lg border-0 rounded-4">
                            <div className="card-body p-5">
                                <h3 className="mb-4 gradient-text text-center">Send us a message</h3>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" className="form-control mb-3" placeholder="Your Name" required />
                                    <input type="email" className="form-control mb-3" placeholder="Email Address" required />
                                    <select className="form-select mb-3" required>
                                        <option value="">Select a subject</option>
                                        <option value="support">Technical Support</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <textarea className="form-control mb-3" placeholder="Message" rows="4" required></textarea>
                                    <button type="submit" className="btn btn-primary w-100">Send</button>
                                </form>

                                {/* Contact Info */}
                                <div className="mt-5">
                                    <h4 className="gradient-text">Contact Information</h4>
                                    <p>Email: contact@aiskindetection.com</p>
                                    <p>Phone: +1 (555) 123-4567</p>
                                    <p>Address: 123 AI Street, Tech City, TC 10001</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FAQ Section */}
            < div className="container pb-5" >
                <h2 className="text-center mb-5 gradient-text underline">Frequently Asked Questions</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="accordion" id="faqAccordion">
                            {Array.isArray(faqs) && faqs.map((item, index) => (
                                <div className="accordion-item border-0 shadow-sm mb-3" key={index}>
                                    <h3 className="accordion-header" id={`heading${index}`}>
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${index}`}
                                            aria-expanded="false"
                                            aria-controls={`collapse${index}`}
                                        >
                                            {item.question}
                                        </button>
                                    </h3>
                                    <div
                                        id={`collapse${index}`}
                                        className="accordion-collapse collapse"
                                        aria-labelledby={`heading${index}`}
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
            {/* Footer */}
            < footer className="footer-bg text-white text-center py-4" >
                <div className="container">
                    <p className="mb-0">© 2025 AI Skin Disease Detection. All rights reserved.</p>
                </div>
            </footer >

            {/* Add Bootstrap Icons */}
            < link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" />

            {/* Custom CSS */}
            < style jsx > {`
                .gradient-btn {
                    background: linear-gradient(135deg, #6A11CB 0%, #2575FC 100%);
                    color: white;
                    border: none;
                    transition: all 0.3s ease;
                }

                .gradient-btn:hover {
                    background: linear-gradient(135deg, #2575FC 0%, #6A11CB 100%);
                    color: white;
                    transform: translateY(-2px);
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

                .footer-bg {
                    background: #1a0a2b;
                }

                .social-icon {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }

                .social-icon:hover {
                    background: linear-gradient(135deg, #6A11CB 0%, #2575FC 100%);
                    color: white !important;
                }

                .accordion-button:not(.collapsed) {
                    color: #6A11CB;
                    background-color: rgba(106, 17, 203, 0.05);
                }

                .accordion-button:focus {
                    box-shadow: 0 0 0 0.25rem rgba(106, 17, 203, 0.25);
                }
            `}</style >
        </div >
    );
}

export default Contact;