import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import LoginView from 'src/views/auth/LoginView';
import RegisterView from 'src/views/auth/RegisterView';
import CvView from 'src/views/cv/CvView';
import NotFoundView from 'src/views/errors/NotFoundView';


// TODO: make navigate to Error page 2 level. goBack(-2)

const routes = [
  {
    path: 'cv',
    element: <DashboardLayout />,
    children: [
      // { path: 'account', element: <AccountView /> },
      // { path: 'customers', element: <CustomerListView /> },
      { path: '/', element: <CvView /> },
      // { path: ':id', element: <CvInfoView /> },
      // { path: 'products', element: <ProductListView /> },
      // { path: 'settings', element: <SettingsView /> },
      // { path: 'upload', element: <CvUploadView /> },

      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/cv" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
