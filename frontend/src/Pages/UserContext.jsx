import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    // Fetch user on page load
    useEffect(() => {
        axios.get("http://localhost:3001/profile", { withCredentials: true })
            .then(res => setUser(res.data))
            .catch(() => setUser(null)); // User not logged in
    }, []);

    // Logout function
    const logout = () => {
        axios.post("http://localhost:3001/logout", {}, { withCredentials: true })
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
