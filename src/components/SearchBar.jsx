import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-8">
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black/40 w-5 h-5" />
        <input
          type="text"
          placeholder="Search companies, roles, or locations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-black/10 bg-[#FFFDFB] text-black placeholder-black/40 focus:border-[#FA5500] focus:outline-none transition-colors"
        />
      </div>
    </div>
  )
}

export default SearchBar