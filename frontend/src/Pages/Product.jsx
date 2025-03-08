import React,{useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {AuthContext} from './UserContext'
import { Link } from 'react-router-dom';

function Product() {

  axios.defaults.withCredentials= true;

    //const[user, setUser] = useState(null)

    const {user, logout} = useContext(AuthContext)

    {/*useEffect (() => {
            axios.get('http://localhost:3001/profile')
            
            .then((response => {
              setUser(response.data);
             }))
            .catch(() => alert('unauthorized'))
    }, [])

    if (!user) return <h2>Loading...</h2>;*/}

  return (
    <>
    <div>
                {user ? (
                    <>
                        <span>Welcome, {user.name}</span>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <Link to="/login">
                        <button>Sign In</button>
                    </Link>
                )}
            </div>
    </>
  )
}

export default Product