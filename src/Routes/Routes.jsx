import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import TrendingApps from '../Pages/TrendingApps';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/home',
                Component: Home,
            },
            {
                path: '/trendingApps',
                Component: TrendingApps,
            },
        ]
    },
]);
export default router;