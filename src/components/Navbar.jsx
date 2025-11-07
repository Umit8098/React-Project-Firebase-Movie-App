import { Link, useNavigate } from 'react-router-dom'

// Context'ten global state'i import edelim
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { logOut } from '../auth/firebase';

const Navbar = () => {
  
    const navigate = useNavigate();

    // const currentUser = {displayName:"umit developer"}; // Dummy current user object for demonstration
    // const currentUser = false; // No user is logged in

    // Global state'den currentUser bilgisini alacağız..
    const {currentUser} = useContext(AuthContext); // No user is logged in
    // console.log("Navbar currentUser => ", currentUser);

    
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <div className='container-fluid'>

                <Link to="/" className='navbar-brand text-white'>
                    <h4>UmitDev Movie App</h4>
                </Link>
                
                <div className='d-flex text-white align-items-center'>
                    {/* {currentUser && <span className='me-3'>Welcome, {currentUser.displayName}</span>} */}
                    {currentUser ? (
                        <>                        
                            <h5 className='mb-0 text-capitalize'>{currentUser.displayName}</h5>
                            <button className='ms-2 btn btn-outline-light' onClick={()=>logOut()}>Logout</button>                    
                        </>
                        ) : (
                        <>
                            <button 
                                to="/login" 
                                className='btn btn-outline-light' 
                                onClick={() => navigate("/login")}>Login
                            </button>
                            <button 
                                to="/register" 
                                className='ms-2 btn btn-outline-light' 
                                onClick={()=> navigate("/register")}>Register
                            </button>
                        </>
                        )                    
                    }
                </div>

            </div>
        </nav>
    </div>
  )
}

export default Navbar;