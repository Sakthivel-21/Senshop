import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    // Fetch user on page load
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/profile`, { withCredentials: true })
            .then(res => {
                if(res.data && !res.data.error){
                setUser(res.data)
            }
            else {
                setUser(null)
            }
            })
            .catch(() => setUser(null)); // User not logged in
    }, []);

    // Logout function
    const logout = () => {
        axios.post(`${process.env.REACT_APP_API_URL}/logout`, {}, { withCredentials: true })
            .then(() => setUser(null)) // Clear user state
            .catch(err => console.log(err));
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
