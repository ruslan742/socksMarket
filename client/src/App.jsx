import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import axiosInstance, { setAccessToken } from './axiosInstance';
import Layout from './components/Layout';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import SocksPage from './components/pages/SocksPage';
import ProtectedRoute from './components/hoc/ProtectedRoute';
import AccountPage from './components/pages/AccountPage';
import GeneratorPage from './components/pages/GeneratorPage';
import FavoritesPage from './components/pages/FavoritesPage';
import BasketPage from './components/pages/BasketPage';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    axiosInstance('/tokens/refresh').then(({ data }) => {
      setUser(data.user);
      setAccessToken(data.accessToken);
    }).catch(() => {
      setUser(null);
      setAccessToken('');
    });
  }, []);

  const signUpHandler = async (e) => {
    try {
      e.preventDefault();
      const formData = Object.fromEntries(new FormData(e.target));
      const { data } = await axiosInstance.post('/auth/signup', formData);
      setUser(data.user);
      setAccessToken(data.accessToken);
    } catch (error) {
      alert(error.response.data.message || 'Oops!');
    }
  };

  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      const formData = Object.fromEntries(new FormData(e.target));
      const { data } = await axiosInstance.post('/auth/login', formData);
      setUser(data.user);
      setAccessToken(data.accessToken);
    } catch (error) {
      alert(error.response.data.message || 'Oops!');
    }
  };

  const logoutHandler = async () => {
    await axiosInstance('/auth/logout');
    setUser(null);
    setAccessToken('');
  };

  const router = createBrowserRouter([
    {
      element: <Layout user={user} logoutHandler={logoutHandler} />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/socks',
          element: <SocksPage user={user} />,
        },
        {
          path: '/favorites',
          element: <FavoritesPage user={user} />,
        },
        {
          path: '/basket',
          element: <BasketPage user={user} />,
        },
        {
          path: '/generator',
          element: <GeneratorPage user={user} />,
        },
        {
          path: '/socks/account',
          element: <ProtectedRoute isAllowed={!!user} redirect="/login"><AccountPage /></ProtectedRoute>,
        },
        {
          element: <ProtectedRoute isAllowed={!user} />,
          children: [
            {
              path: '/signup',
              element: <SignUpPage signUpHandler={signUpHandler} />,
            },
            {
              path: '/login',
              element: <LoginPage loginHandler={loginHandler} />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
