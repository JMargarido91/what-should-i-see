import { Link } from "react-router-dom";
import logo from '../images/tmdb.svg'

const Footer = () => {

    return (
        <div className="bg-dark text-white py-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-2 col-4 mx-auto text-center">
                        All movies data from 
                        <a target="_blank" rel="noreferrer" href="https://www.themoviedb.org/">
                        <img className="img-fluid" src={logo} alt="tmdb"/>
                        </a>
                        
                    </div>
                    <div className="col-md-10 col-sm-12">
                        <div className="nav nav-footer justify-content-center justify-content-md-end">
                            <Link to="/" className="nav-link text-white">&copy; WSIS</Link>
                            <Link className="nav-link text-white">Support</Link>
                            <Link className="nav-link text-white">Feedback</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;