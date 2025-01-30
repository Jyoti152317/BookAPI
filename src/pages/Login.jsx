import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';
import axios from 'axios';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    const { login } = useContext(AuthContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://accidental-quiver-calf.glitch.me/login`, { username, password })
            console.log(response)
            if (response.data.success) {
                console.log(response.data.token, "this is token")
                const { token } = response.data;
                login(token);
            }
        }
        catch (err) {
            console.log(err);
        }
    };

    console.log("hi")
  return (
      <div>
          <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Enter User Name' value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type='submit' value="Login"/>
          </form>
          
    </div>
  )
}

export default Login