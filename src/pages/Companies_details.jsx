import React from 'react'
import { Link, useParams } from 'react-router-dom'

const companies = [
  {
    company: 'fampay',
    role: 'software-dev-intern',
    title: 'FamPay – Software Dev Intern',
    location: 'Bangalore',
    stipend: '₹25,000'
  },
  {
    company: 'google',
    role: 'frontend-intern',
    title: 'Google – Frontend Intern',
    location: 'Hyderabad',
    stipend: '₹40,000'
  },
  {
    company: 'amazon',
    role: 'backend-intern',
    title: 'Amazon – Backend Intern',
    location: 'Chennai',
    stipend: '₹35,000'
  },
  {
    company: 'microsoft',
    role: 'fullstack-intern',
    title: 'Microsoft – Full Stack Intern',
    location: 'Pune',
    stipend: '₹30,000'
  }
]

const Companies_details = () => {
  const params = useParams()
  const companyName = params.companyName
  const role = params.role

  const selectedCompany =
    companyName && role
      ? companies.find(
          c =>
            c.company === companyName &&
            c.role === role
        )
      : null

  // 🔴 Detail page
  if (companyName && role) {
    if (!selectedCompany) {
      return (
        <div style={{ padding: '20px' }}>
          <h2>Company not found</h2>
          <Link to="/company-details">← Back</Link>
        </div>
      )
    }

    return (
      <div style={{ padding: '20px' }}>
        <h2>{selectedCompany.title}</h2>
        <p><b>Company:</b> {selectedCompany.company}</p>
        <p><b>Role:</b> {selectedCompany.role}</p>
        <p><b>Location:</b> {selectedCompany.location}</p>
        <p><b>Stipend:</b> {selectedCompany.stipend}</p>

        <br />
        <Link to="/company-details">← Back to list</Link>
      </div>
    )
  }

  // 🟢 List page
  return (
    <div style={{ padding: '20px' }}>
      <h2>Company Listings</h2>

      {companies.map((item, index) => (
        <div key={index} style={{ marginBottom: '12px' }}>
          <Link
            to={`/company-details/${item.company}/${item.role}`}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Companies_details
