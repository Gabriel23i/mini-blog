import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { useAuthentication } from './hooks/useAuthentication';
import { AuthProvider } from './context/AuthContext';
import { UserImageProfileProvider } from './context/UserImageProfileContext';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';
import EditPost from './pages/EditPost/EditPost';
import RecoverPassword from './pages/RecoverPassword/RecoverPassword';

import { Box } from '@mui/material';
import Loading from './components/Loading/Loading';

function App() {

    const [user, setUser] = useState(undefined);

    const { auth } = useAuthentication();

    const loadingUser = user === undefined;

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            setUser(user);
        });
    },[auth]);

    if(loadingUser){
        return(<Loading />);
    };

    return (
        <Box className='App'>
            <AuthProvider value={{ user }}>
                <UserImageProfileProvider>
                    <BrowserRouter>
                        <Navbar />
                        <Box className='container'>
                            <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/search' element={<Search />} />
                            <Route path='/posts/:id' element={<Post />} />
                            <Route path='/recoverpassword' element={<RecoverPassword />} />
                            <Route
                                path='/login'
                                element={!user ? <Login /> : <Navigate to="/" />}
                            />
                            <Route
                                path='/register'
                                element={!user ? <Register /> : <Navigate to="/" />}
                            />
                            <Route
                                path='/posts/edit/:id'
                                element={user ? <EditPost /> : <Navigate to='/login' />}
                            />
                            <Route
                                path='/posts/create'
                                element={user ? <CreatePost /> : <Navigate to='/login' />}
                            />
                            <Route
                                path='/dashboard'
                                element={user ? <Dashboard /> : <Navigate to='/login' />}
                            />
                            </Routes>
                        </Box>
                        <Footer />
                    </BrowserRouter>
                </UserImageProfileProvider>
            </AuthProvider>
            <ToastContainer />
        </Box>
    );
};

export default App;
