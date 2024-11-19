function Pages() {
    return(
        <div className="nav-item dropdown">
        <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
        <div className="dropdown-menu m-0">
            <a href="/booking" className="dropdown-item">Booking</a>
            <a href="/team" className="dropdown-item">Our Team</a>
            <a href="/testimonial" className="dropdown-item">Testimonial</a>
        </div>
    </div>
    )
}

export default Pages;