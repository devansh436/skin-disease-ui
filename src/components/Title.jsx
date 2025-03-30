import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Title() {
  return (
    <header className="bg-dark text-white py-3 shadow-lg">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="fw-bold">Skin Disease</h1>
        <div>
            <Link to="/" className="mx-2 px-3 py-2 rounded-pill btn btn-sm btn-primary">Home</Link>
            <Link to="/about" className="mx-2 px-3 py-2 rounded-pill btn btn-sm btn-primary">About</Link>
            <Link to="/contact" className="mx-2 px-3 py-2 rounded-pill btn btn-sm btn-primary">Contact</Link>
        </div>
      </div>
    </header>
  );
}

export default Title;
