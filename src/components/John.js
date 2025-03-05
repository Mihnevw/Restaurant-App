import { Link } from "react-router-dom";

function John() {
  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
      <div className="team-item text-center rounded overflow-hidden">
        <div className="rounded-circle overflow-hidden m-4">
          <img className="img-fluid" src="img/team-2.jpg" alt="" />
        </div>
        <h5 className="mb-0">John Sterling </h5>
        <p>A master of classic French cuisine, renowned for his attention to detail and exquisite desserts. He works at a Michelin-starred restaurant.</p>
        <div className="d-flex justify-content-center mt-3">
          <Link className="btn btn-square btn-primary mx-1" to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" target="_blank" rel="noopener noreferrer"></i></Link>
          <Link className="btn btn-square btn-primary mx-1" to="https://x.com/?lang=bg" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" target="_blank" rel="noopener noreferrer"></i></Link>
          <Link className="btn btn-square btn-primary mx-1" to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" target="_blank" rel="noopener noreferrer"></i></Link>
        </div>
      </div>
    </div>
  )
}

export default John;