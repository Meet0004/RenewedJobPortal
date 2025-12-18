import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-8">
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search companies, roles, or locations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors"
        />
      </div>
    </div>
  )
}

export default SearchBar