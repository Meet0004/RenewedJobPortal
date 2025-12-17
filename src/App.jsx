import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Companies_details from './pages/Companies_details'
import Resources from './pages/Resources'
import Contact_us from './pages/Contact_us'
import Legal_info from './pages/Legal_info'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
<Route path="/company-details" element={<Companies_details />} />
<Route
  path="/company-details/:companyName/:role"
  element={<Companies_details />}
/>



        <Route path="/resources" element={<Resources />} />
        <Route path="/contact_us" element={<Contact_us />} />
        <Route path="/legal_info" element={<Legal_info />} />
      </Routes>
    </div>
  )
}

export default App
