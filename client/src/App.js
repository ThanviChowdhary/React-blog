import React from 'react';
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Sidebar from "./pages/single/Single";

import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

function App() {
    const user = false;
    return (
        <BrowserRouter>
            <TopBar />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/login" element={user ? <Home /> : <Login />} />
            </Routes>
            <Routes>
                <Route path="/register" element={user ? <Home /> : < Register />} />
            </Routes>
            <Routes>
                <Route path="/settings" element={user ? <Settings /> : <Register />} />
            </Routes>
            <Routes>
                <Route path="/post/:postId" element={< Single />} />
            </Routes>
            <Routes>
                <Route path="/write" element={user ? <Write /> : <Register />} />
            </Routes>
            <Routes>
                <Route path="/about" element={user ? <About /> : <Register />} />
            </Routes>
            <Routes>
                <Route path="/single" element={user ? <Single /> : <Register />} />
            </Routes>

        </BrowserRouter>
    );
}
export default App;