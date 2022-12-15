import React from 'react';
import { GlobalStyles } from 'utils/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from 'components/Navbar';
import { StartPage } from 'pages/StartPage';
import { LoginPage } from 'pages/LoginPage';
import { DashboardPage } from 'pages/DashboardPage';
import { AllEventsPage } from 'pages/AllEventsPage';
import { CreateEditEventsPage } from 'pages/CreateEditEventsPage';
import { AccountSettingsPage } from 'pages/AccountSettingsPage';

export const App = () => {
  return (
    <> 
    <GlobalStyles />
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/events" element={<AllEventsPage />} />
      <Route path="/create-events" element={<CreateEditEventsPage />} />
      <Route path="/account-settings" element={<AccountSettingsPage />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}
