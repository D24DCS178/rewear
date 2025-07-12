import './Navbar.css';

function Navbar() {
return (
<nav className="navbar">
<div className="logo">ReWear</div>
<ul className="nav-links">
<li><a href="#">Browse Items</a></li>
<li><a href="#">List an Item</a></li>
<li><a href="#">Login</a></li>
</ul>
</nav>
);
}

export default Navbar;