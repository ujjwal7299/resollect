import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadModal from './UploadModal';

const tabs = [
  'All', 'Pre Sanction', 'NPA', '13(3) Responses', 'Symbolic Possession',
  'DM Order', 'Physical Possession', 'Auctions',
];

const columns = [
  { id: 'checkbox', label: '' },
  { id: 'id', label: 'Loan No.' },
  { id: 'type', label: 'Loan Type' },
  { id: 'borrower', label: 'Borrower' },
  { id: 'baddress', label: 'Borrower Address' },
  { id: 'coname', label: 'Co Borrower 1 Name' },
  { id: 'caddress', label: 'Co Borrower 1 Address' },
  { id: 'dpd', label: 'Current DPD' },
  { id: 'sectiona', label: 'Section Amount' },
  { id: 'region', label: 'Region' },
  { id: 'status', label: 'Status' },
];

const sampleData = [
  {
    id: "L28U3247",
    type: "Home Loan",
    borrower: "Vedika Sachar",
    baddress: "83 Yogi Ganj, Kadapa-058720",
    coname: "Divit Vora",
    caddress: "24/543, Acharya Path Ongole-052360",
    dpd: "91",
    sectiona: "1934068",
    region: "West",
    status: "Under Process"
  },
  {
    id: "L28U3243",
    type: "Car Loan",
    borrower: "Hrishita Agrawal",
    baddress: "86/622, Deo Path, Berhampore 841186",
    coname: "Mahika Tak",
    caddress: "58 Tella Road, Sultan Pur Majira 918878",
    dpd: "100",
    sectiona: "1842143",
    region: "North",
    status: "Approved"
  },
  {
    id: "L28U3250",
    type: "Car Loan",
    borrower: "Priyansh Soman",
    baddress: "H.No. 152 Andra Street Amritsar-417162",
    coname: "Zaina Dara",
    caddress: "H.No. 42, Srivastava Marg, Junagadh-191124",
    dpd: "100",
    sectiona: "4537889",
    region: "East",
    status: "Approved"
  },
  {
    id: "L28U3248",
    type: "Home Loan",
    borrower: "Priyansh Chanda",
    baddress: "24, Ray Chowk Guntakal 809332",
    coname: "Zain Ghosh",
    caddress: "H.No. 59, Dugar Street Kolhapur-543900",
    dpd: "100",
    sectiona: "2681712",
    region: "West",
    status: "Approved"
  },
  {
    id: "L28U3260",
    type: "Home Loan",
    borrower: "Hrishita Sen",
    baddress: "94/36 Barad, Hubli–Dharwad-408790",
    coname: "Shrey Kala",
    caddress: "63/86, Bhardwaj Street Bokaro 662204",
    dpd: "100",
    sectiona: "4456808",
    region: "West",
    status: "Rejected"
  },
  {
    id: "L28U3265",
    type: "Personal Loan",
    borrower: "Vivaan Virk",
    baddress: "H.No. 653 Dada Ganj Ichalkaranji 279923",
    coname: "Elakshi Chahal",
    caddress: "16/45 Divan Road Jabalpur 962051",
    dpd: "76",
    sectiona: "3863514",
    region: "West",
    status: "Mandate Pending"
  },
  {
    id: "L28U3264",
    type: "Personal Loan",
    borrower: "Nirvaan Mander",
    baddress: "543 Singhal Street, Bhalswa Jahangir Pur-348320",
    coname: "Vihaan Dua",
    caddress: "H.No. 115, Saha Road Singrauli 049374",
    dpd: "90",
    sectiona: "1256683",
    region: "South",
    status: "KYC Pending"
  },
  {
    id: "L28U3266",
    type: "Personal Loan",
    borrower: "Nirvi Sahni",
    baddress: "41/42, Dua, Amroha-741195",
    coname: "Dhanuk Lalla",
    caddress: "48/41, Garde Path Uluberia 709356",
    dpd: "75",
    sectiona: "2687368",
    region: "East",
    status: "Waiting Approval"
  },
  {
    id: "L28U3267",
    type: "Personal Loan",
    borrower: "Samaira Jain",
    baddress: "79/10 Barad Zila Thoothukudi 606938",
    coname: "Chirag Tripathi",
    caddress: "23/11 Ravel Street, Panchkula-008035",
    dpd: "76",
    sectiona: "3617146",
    region: "South",
    status: "Granted"
  },
  {
    id: "L28U3269",
    type: "Personal Loan",
    borrower: "Aradhya Jayaraman",
    baddress: "410, Vohra Zila Moradabad 963541",
    coname: "Shaan Hora",
    caddress: "35/41, Bajaj Nagar Nagaon-504713",
    dpd: "76",
    sectiona: "1383439",
    region: "South",
    status: "Approved"
  }
];

function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log(`Selected Tab: ${tab}`);
    // Add your filtering logic based on the active tab here if needed
  };

  const handleFilterChange = () => {
    console.log(`Filtering by Type: ${filterType}, Status: ${filterStatus}`);
  };

  const filteredData = sampleData.filter(row => {
    const searchLower = searchQuery.toLowerCase();
    return (
      (filterType === 'All' || row.type === filterType) &&
      (filterStatus === 'All' || row.status === filterStatus) &&
      (activeTab === 'All' || true) // Add your tab-based filtering logic here
      &&
      Object.values(row).some(value => value.toString().toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="container mt-4">
      <ul className="nav nav-tabs mb-3">
        {tabs.map(tab => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-between align-items-center my-3">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div>
          <button className="btn btn-primary me-2" onClick={() => setIsUploadOpen(true)}>
            Upload Document
          </button>

          <select className="form-select d-inline w-auto mx-2" onChange={(e) => setFilterType(e.target.value)}>
            <option value="All">All Loan Types</option>
            <option value="Home Loan">Home Loan</option>
            <option value="Car Loan">Car Loan</option>
            <option value="Personal Loan">Personal Loan</option>
          </select>

          <select className="form-select d-inline w-auto mx-2" onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="All">All Status</option>
            <option value="Under Process">Under Process</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>

          <button className="btn btn-outline-secondary" onClick={handleFilterChange}>Filter</button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              {columns.map(col => (
                <th key={col.id}>{col.id === 'checkbox' ? <input type="checkbox" /> : col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map(row => (
              <tr key={row.id}>
                {columns.map(col => (
                  <td key={col.id}>
                    {col.id === 'checkbox' ? (
                      <input type="checkbox" />
                    ) : col.id === 'id' ? (
                      <span style={{ textDecoration: 'underline', color: 'blue' }}>
                        {row[col.id] || '-'}
                      </span>
                    ) : (
                      row[col.id] || '-'
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <UploadModal isOpen={isUploadOpen} onClose={() => setIsUploadOpen(false)} />
    </div>
  );
}

export default Portfolio;
