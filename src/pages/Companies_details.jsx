import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import companiesData from '../data/jobData/jobData'
import CompanyDetailPage from '../components/CompanyDetailPage'
import CompanyListPage from '../components/CompanyListPage'

const Companies_details = () => {
  const { companyName, role } = useParams()
  const [searchTerm, setSearchTerm] = useState('')

  const selectedCompany = companyName && role 
    ? companiesData.find(c => c.company === companyName && c.role === role)
    : null

  const filteredCompanies = companiesData.filter(item => 
    item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Detail page
  if (companyName && role) {
    if (!selectedCompany) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Company Not Found</h2>
            <Link to="/company-details" className="text-orange-600 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      )
    }

    return (
      <CompanyDetailPage 
        selectedCompany={selectedCompany} 
        allCompanies={companiesData} 
      />
    )
  }

  // List page
  return (
    <CompanyListPage 
      filteredCompanies={filteredCompanies}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
    />
  )
}

export default Companies_details