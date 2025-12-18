import React from 'react'

const Header = () => {
    return (
        <div className="relative bg-white shadow-lg">
            <div className="py-5 px-8 flex justify-between items-center">
                <h2 className='text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent'>
                    Job Portal
                </h2>
                <nav className='flex gap-8 text-xl font-medium mr-8'> 
                    <a 
                        href='/' 
                        className='text-gray-700 hover:text-orange-500 transition-colors duration-200 relative group'
                    >
                        Home
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200'></span>
                    </a>
                    <a 
                        href='/company-details' 
                        className='text-gray-700 hover:text-orange-500 transition-colors duration-200 relative group'
                    >
                        Job Posting
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200'></span>
                    </a>
                    <a 
                        href='/resources' 
                        className='text-gray-700 hover:text-orange-500 transition-colors duration-200 relative group'
                    >
                        Resources
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200'></span>
                    </a>
                    <a 
                        href='/contact-us' 
                        className='text-gray-700 hover:text-orange-500 transition-colors duration-200 relative group'
                    >
                        Contact Us
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200'></span>
                    </a>
                    {/* <a 
                        href='/legal-info' 
                        className='text-gray-700 hover:text-orange-500 transition-colors duration-200 relative group'
                    >
                        Legal
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200'></span>
                    </a> */}
                </nav>
            </div>
            <div className="h-1 bg-gradient-to-t from-orange-500 to-transparent"></div>
        </div>
    )
}

export default Header