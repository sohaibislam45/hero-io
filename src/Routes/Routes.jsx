import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import TrendingApps from '../Pages/TrendingApps';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';
import InstalledApps from '../Pages/InstalledApps';

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
                loader: ()=>fetch('/appData.json'),
            },
            {
                path: '/trendingApps',
                Component: TrendingApps,
            },
            {
                path: '/installedApps',
                Component: InstalledApps,
            },
        ]
    },
]);
export default router;