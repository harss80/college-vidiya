import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import MockCalls from './pages/MockCalls';
import UniversityDetails from './pages/UniversityDetails';
import SpecializationDetails from './pages/SpecializationDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="mock-calls" element={<MockCalls />} />
          <Route path="mock-calls/university/:uniId" element={<UniversityDetails />} />
          <Route path="mock-calls/university/:uniId/program/:programName/specialization/:specName" element={<SpecializationDetails />} />
          {/* Placeholder for Manual */}
          <Route path="manual" element={<div className="pt-24 min-h-screen grid items-center justify-center text-xl font-bold text-slate-500">Manual Module Under Construction</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
