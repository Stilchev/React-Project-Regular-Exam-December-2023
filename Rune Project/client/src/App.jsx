import { useState } from 'react'

import AuthContext from './contexts/authContext'
import * as authService from './services/authService'

import Header from './components/Header/Header'

import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home/Home'
import Runes from './components/Runes/Runes';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import RuneCalculator from './components/RuneCalculator/RuneCalculator'
import HighRunes from './components/HighRunes/HighRunes'
import RuneProject from './components/RuneProject/RuneProject'
import Logout from './components/Logout/Logout'

function App() {
    const navigate = useNavigate()

    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate('/');
    }
    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.password);
        console.log(result);
        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate('/');
    }

    const logoutHandler = () => {
        setAuth({});

        localStorage.removeItem('accessToken');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.email,
    };

    return (
        <>

            <AuthContext.Provider value={values}>
                <Header />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/runes' element={<Runes />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/runes-calculator' element={<RuneCalculator />} />
                    <Route path='/hrs' element={<HighRunes />} />
                    <Route path='/runes-project' element={<RuneProject />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/*' element={<Home />} />
                </Routes>
            </AuthContext.Provider>
        </>
    )
}

export default App
