import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Book Inventory</Link>
        <div>
          <Link className="btn btn-outline-light" to="/add">Add Book</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
