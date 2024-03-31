import { Link } from "react-router-dom";

const Home: React.FC = () => {
return(
    <>
    <nav className="n1 navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src='/image/logo.png' alt="Logo" width="300" height="100" className="d-inline-block align-text-top" />

          </a>
          <p className='p1 '>Todo Application</p>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5 sticky-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">Expernetic</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <Link className="nav-link" to={"/"} > Home </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
                <div className='d2 row'>
                    <div className=' text-center'>
                        <img src='/image/logo.png' alt="Logo" width="200" height="100" className="d-inline-block align-text-top" />
                    </div>
                </div>

      <div className='d3 row'>
                    <div className=' text-center'>
                        <p className='mt-2'>Copyright © 2024 - All Rights Reserved. Concept, Design & Development By Hiran</p>
                    </div>
                </div>
           

                </div>

    </>
)

}

export default Home;