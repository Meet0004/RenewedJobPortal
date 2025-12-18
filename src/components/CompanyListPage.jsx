import React from 'react'
import { Building2 } from 'lucide-react'
import SearchBar from './SearchBar'
import CompanyCard from './CompanyCard'

const CompanyListPage = ({ filteredCompanies, searchTerm, setSearchTerm }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Company Listings
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing opportunities at top companies
          </p>
        </div>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((item, index) => (
            <CompanyCard key={index} company={item} />
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No listings found</h3>
            <p className="text-gray-500">Try adjusting your search filters</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CompanyListPage