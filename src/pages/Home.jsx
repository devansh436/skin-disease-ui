import 'bootstrap/dist/css/bootstrap.min.css';
import Title from "../components/Title";
import UploadBox from "../components/UploadBox";

function Home() {
    return (
        <div className="bg-light min-vh-100">
            <Title />
            <UploadBox />    

            {/* About Section */}
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card border-0 shadow-sm mb-5" style={{ borderRadius: '15px' }}>
                            <div className="card-body p-4 p-md-5">
                                <h2 className="card-title text-center mb-4" style={{ color: '#3a3a3a' }}>
                                    <span className="border-bottom border-3 border-primary pb-2">About Skin Cancer</span>
                                </h2>
                                <p className="lead text-muted">
                                    Skin cancer is the abnormal growth of skin cells. It often develops on skin exposed to the sun, but it can also occur on areas not typically exposed to sunlight. Early detection is essential for effective treatment and reducing mortality rates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Types of Skin Cancer Section */}
                <div className="row mb-5">
                    <div className="col-12 text-center mb-4">
                        <h3 className="fw-bold" style={{ color: '#dc3545' }}>
                            <i className="bi bi-clipboard2-pulse me-2"></i>
                            Types of Skin Cancer
                        </h3>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card h-100 border-0 shadow-sm hover-effect" style={{ borderRadius: '12px', transition: 'transform 0.3s' }}>
                            <div className="card-body">
                                <div className="text-center mb-3">
                                    <span className="badge bg-danger p-2 px-3 rounded-pill">BCC</span>
                                </div>
                                <h5 className="card-title text-center">Basal Cell Carcinoma</h5>
                                <p className="card-text">
                                    Appears as a slightly transparent bump, often on sun-exposed areas like the head and neck. BCC grows slowly and rarely spreads.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card h-100 border-0 shadow-sm hover-effect" style={{ borderRadius: '12px', transition: 'transform 0.3s' }}>
                            <div className="card-body">
                                <div className="text-center mb-3">
                                    <span className="badge bg-warning p-2 px-3 rounded-pill">SCC</span>
                                </div>
                                <h5 className="card-title text-center">Squamous Cell Carcinoma</h5>
                                <p className="card-text">
                                    Develops as a firm red nodule or flat lesion with a scaly, crusted surface. SCC can spread if untreated.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card h-100 border-0 shadow-sm hover-effect" style={{ borderRadius: '12px', transition: 'transform 0.3s' }}>
                            <div className="card-body">
                                <div className="text-center mb-3">
                                    <span className="badge bg-dark p-2 px-3 rounded-pill">Melanoma</span>
                                </div>
                                <h5 className="card-title text-center">Melanoma</h5>
                                <p className="card-text">
                                    The most dangerous form of skin cancer. It may present as a mole that changes size, color, or shape, often with irregular borders.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="row mb-5 py-4">
                    <div className="col-lg-5">
                        <div className="bg-primary text-white p-4 rounded-3 shadow">
                            <h3 className="fw-bold mb-3">How AI Skin Detection Works</h3>
                            <p>
                                Our AI-powered skin disease detection models use deep learning algorithms to analyze medical images, trained on thousands of labeled skin images to recognize patterns associated with different skin diseases.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="card border-0 shadow-sm" style={{ borderRadius: '12px' }}>
                            <div className="card-body p-4">
                                <h5 className="card-title fw-bold mb-3 text-primary">The Detection Process</h5>
                                <div className="d-flex mb-3 align-items-center">
                                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px', minWidth: '40px' }}>1</div>
                                    <div>
                                        <h6 className="mb-1">Image Input</h6>
                                        <p className="mb-0 text-muted">Upload a clear image of the skin lesion or area of concern</p>
                                    </div>
                                </div>

                                <div className="d-flex mb-3 align-items-center">
                                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px', minWidth: '40px' }}>2</div>
                                    <div>
                                        <h6 className="mb-1">Preprocessing</h6>
                                        <p className="mb-0 text-muted">The image is resized, normalized, and adjusted for better accuracy</p>
                                    </div>
                                </div>

                                <div className="d-flex mb-3 align-items-center">
                                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px', minWidth: '40px' }}>3</div>
                                    <div>
                                        <h6 className="mb-1">Feature Extraction</h6>
                                        <p className="mb-0 text-muted">The AI model extracts specific patterns from the image</p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center">
                                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px', minWidth: '40px' }}>4</div>
                                    <div>
                                        <h6 className="mb-1">Classification</h6>
                                        <p className="mb-0 text-muted">Based on the extracted features, the model predicts the type of skin disease</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Applications Section */}
                <div className="row mb-5">
                    <div className="col-12 text-center mb-4">
                        <h3 className="fw-bold" style={{ color: '#0dcaf0' }}>
                            <i className="bi bi-lightbulb me-2"></i>
                            Applications of AI Skin Detection
                        </h3>
                    </div>

                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="card h-100 border-0 shadow-sm text-center" style={{ borderRadius: '12px' }}>
                            <div className="card-body py-4">
                                <div className="rounded-circle bg-info bg-opacity-10 p-3 d-inline-flex mb-3">
                                    <i className="bi bi-speedometer2 text-info fs-3"></i>
                                </div>
                                <h5 className="mb-3">Faster Diagnosis</h5>
                                <p className="card-text text-muted">Assisting dermatologists in diagnosing skin diseases faster.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="card h-100 border-0 shadow-sm text-center" style={{ borderRadius: '12px' }}>
                            <div className="card-body py-4">
                                <div className="rounded-circle bg-success bg-opacity-10 p-3 d-inline-flex mb-3">
                                    <i className="bi bi-geo-alt text-success fs-3"></i>
                                </div>
                                <h5 className="mb-3">Remote Access</h5>
                                <p className="card-text text-muted">Providing preliminary assessments for patients in remote areas.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="card h-100 border-0 shadow-sm text-center" style={{ borderRadius: '12px' }}>
                            <div className="card-body py-4">
                                <div className="rounded-circle bg-warning bg-opacity-10 p-3 d-inline-flex mb-3">
                                    <i className="bi bi-person-check text-warning fs-3"></i>
                                </div>
                                <h5 className="mb-3">Reduced Workload</h5>
                                <p className="card-text text-muted">Reducing the workload of medical professionals.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="card h-100 border-0 shadow-sm text-center" style={{ borderRadius: '12px' }}>
                            <div className="card-body py-4">
                                <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-3">
                                    <i className="bi bi-clipboard-check text-primary fs-3"></i>
                                </div>
                                <h5 className="mb-3">Second Opinion</h5>
                                <p className="card-text text-muted">Offering a second opinion for better diagnosis accuracy.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Disclaimer Section */}
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="alert alert-warning border-0 shadow-sm" role="alert" style={{ borderRadius: '12px' }}>
                            <h4 className="alert-heading fw-bold">
                                <i className="bi bi-exclamation-triangle-fill me-2"></i> Disclaimer
                            </h4>
                            <p>While AI models offer remarkable accuracy, they are not a replacement for professional medical diagnosis. Always consult a qualified dermatologist for a thorough examination and diagnosis.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-4 mt-5">
                <div className="container">
                    <p className="mb-0">© 2025 AI Skin Disease Detection. All rights reserved.</p>
                </div>
            </footer>

            {/* Add Bootstrap Icons */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" />

            {/* Custom CSS for hover effects */}
            <style>{`
                .hover-effect:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
                }
                .drag-active {
                    border-color: #6a11cb !important;
                    background-color: rgba(106, 17, 203, 0.05) !important;
                }
            `}</style>
        </div>
    );
}

export default Home;
