import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="py-3 px-2 bg-emerald-900 text-white flex justify-between items-center">
            <h2 className='text-2xl'>Job Portal</h2>
            <div className='flex gap-4 text-lg'> 
                <Link to='/'>Home</Link> {/* so page dont reloads eve tough url changes*/}
                <Link to='/companies_details'>Job Posting</Link> {/* so page dont reloads eve tough url changes*/}
                <Link to='/resources'>Resources</Link>
                <Link to='/contact_us'>Contact Us</Link>  
                <Link to='/legal_info'>Legal</Link>
            </div>
        </div>
    )
}

export default Header
