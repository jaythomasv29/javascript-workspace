
const Navbar = ({count}) => {
    console.log('NavBar - Rendered');
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Navbar <span className="badge badge-pill badge-primary">Total Counters: {count}</span></span>

            </div>
        </nav>
    )
}

export default Navbar