import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';

const Navbar = () => {

    const { isAuthenticate, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
    }
  return (
      <>
          <div><Link to="/">Home</Link>
              <Link to="/books">Books</Link>
          </div>
          <div>
              {isAuthenticate ? (
                  <button onClick={handleLogout}>Logout</button>
              ):(<button onClick={()=>navigate("/login")}>Login</button>)}
              
          </div>
          
    </>
  )
}

export default Navbar