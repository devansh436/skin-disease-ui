import { useState, useCallback } from 'react';

function UploadBox() {
    const [dragActive, setDragActive] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleDrag = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            if (file.type.match('image.*')) {
                setSelectedFile(file);
            }
        }
    }, []);

    const handleChange = useCallback((e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    }, []);

    const handleUpload = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('image', selectedFile); // Correct key

        try {
            const response = await fetch('http://localhost:3001/upload', { // Adjusted port
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Analysis Result:', data);
            } else {
                console.error('Upload failed');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div className="py-5 text-white"
            style={{
                background: "linear-gradient(135deg,rgb(192, 109, 255) 0%, #2575fc 100%)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
            }}>
            <div className="container text-center py-4">
                <h1 className="display-4 fw-bold mb-3">AI-Powered Skin Disease Detection</h1>
                <p className="lead mb-4">Upload an image to get an instant analysis using our advanced AI technology</p>

                <div className="card p-4 shadow-lg mx-auto" style={{ maxWidth: '500px', borderRadius: '15px' }}>
                    <div className="card-body">
                        <div className="mb-4">
                            <label
                                htmlFor="file-upload"
                                className={`form-label fw-bold text-primary d-block ${dragActive ? 'drag-active' : ''}`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                                style={{
                                    border: dragActive ? '2px dashed #6a11cb' : '2px dashed #dee2e6',
                                    borderRadius: '10px',
                                    padding: '40px 20px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    backgroundColor: dragActive ? 'rgba(106, 17, 203, 0.05)' : '#f8f9fa'
                                }}
                            >
                                {selectedFile ? (
                                    <div>
                                        <i className="bi bi-file-earmark-image fs-1 text-primary mb-2"></i>
                                        <p className="mb-1">{selectedFile.name}</p>
                                        <small className="text-muted">Click or drag to change file</small>
                                    </div>
                                ) : (
                                    <div>
                                        <i className="bi bi-cloud-arrow-up fs-1 text-primary mb-2"></i>
                                        <p className="mb-1">Drag & drop your image here</p>
                                        <small className="text-muted">or click to browse files</small>
                                    </div>
                                )}
                                <input
                                    id="file-upload"
                                    type="file"
                                    accept="image/*"
                                    className="d-none"
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <button
                            className="btn btn-outline-primary btn-lg w-100 shadow-sm"
                            style={{ borderRadius: '10px', transition: 'all 0.3s' }}
                            disabled={!selectedFile}
                            onClick={handleUpload}
                        >
                            <i className="bi bi-upload me-2"></i> Upload & Analyze
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadBox;