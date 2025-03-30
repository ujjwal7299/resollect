import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Tabs,
  Tab,
  styled,
  Checkbox,
  TextField,
  Menu,
  MenuItem,
  Chip,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import UploadDialog from './UploadDialog';

const StyledTableContainer = styled(TableContainer)`
  margin: 20px 0;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const HeaderBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
`;

const SearchBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  justify-content: space-between;
`;

const FilterBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const StyledTabs = styled(Tabs)`
  .MuiTabs-indicator {
    background-color: #1976d2;
  }
`;

const StyledTab = styled(Tab)`
  text-transform: none;
  font-size: 14px;
  &.Mui-selected {
    color: #1976d2;
  }
`;

const UploadButton = styled(Button)`
  background-color: #1976d2;
  text-transform: none;
  border-radius: 8px;
  padding: 6px 16px;
  &:hover {
    background-color: #1565c0;
  }
`;

const SearchTextField = styled(TextField)`
  width: 300px;
  .MuiOutlinedInput-root {
    border-radius: 8px;
  }
`;

const FilterButton = styled(Button)`
  text-transform: none;
  border-radius: 4px;
  padding: 6px 12px;
  color: #1976d2;
  border-color: #1976d2;
  font-size: 14px;
  &:hover {
    border-color: #1565c0;
    background-color: rgba(25, 118, 210, 0.04);
  }
`;

const columns = [
  { id: 'checkbox', label: '', sortable: false },
  { id: 'id', label: 'Document ID', sortable: true },
  { id: 'type', label: 'Type', sortable: true },
  { id: 'applicant', label: 'Applicant', sortable: true },
  { id: 'details', label: 'Details', sortable: true },
  { id: 'assignedTo', label: 'Assigned To', sortable: true },
  { id: 'amount', label: 'Amount', sortable: true },
  { id: 'status', label: 'Status', sortable: true },
];

const sampleData = [
  {
    id: 'L345-2022',
    type: 'Home Loan',
    applicant: 'Vinitha',
    details: 'RS 1Cr Core Function',
    assignedTo: 'Gauri Shah',
    amount: 10000000,
    status: 'Won',
    date: '2024-02-20',
  },
  {
    id: 'L346-2022',
    type: 'Business Loan',
    applicant: 'Rahul Mehta',
    details: 'Working Capital Loan',
    assignedTo: 'Priya Patel',
    amount: 5000000,
    status: 'In Progress',
    date: '2024-03-15',
  },
  {
    id: 'L347-2022',
    type: 'Personal Loan',
    applicant: 'Amit Kumar',
    details: 'Education Expenses',
    assignedTo: 'Raj Singh',
    amount: 2000000,
    status: 'Pending',
    date: '2024-03-10',
  },
  {
    id: 'L348-2022',
    type: 'Home Loan',
    applicant: 'Sneha Reddy',
    details: 'Property Purchase',
    assignedTo: 'Gauri Shah',
    amount: 15000000,
    status: 'Approved',
    date: '2024-03-01',
  },
  {
    id: 'L349-2022',
    type: 'Business Loan',
    applicant: 'Karthik Menon',
    details: 'Factory Expansion',
    assignedTo: 'Priya Patel',
    amount: 25000000,
    status: 'Under Review',
    date: '2024-03-18',
  },
  {
    id: 'L350-2022',
    type: 'Home Loan',
    applicant: 'Meera Iyer',
    details: 'Apartment Purchase',
    assignedTo: 'Raj Singh',
    amount: 8000000,
    status: 'Approved',
    date: '2024-03-20',
  },
  {
    id: 'L351-2022',
    type: 'Personal Loan',
    applicant: 'Sanjay Gupta',
    details: 'Medical Emergency',
    assignedTo: 'Gauri Shah',
    amount: 1500000,
    status: 'Urgent',
    date: '2024-03-21',
  },
  {
    id: 'L352-2022',
    type: 'Business Loan',
    applicant: 'Pradeep Kumar',
    details: 'Inventory Finance',
    assignedTo: 'Priya Patel',
    amount: 7500000,
    status: 'In Progress',
    date: '2024-03-19',
  },
  {
    id: 'L353-2022',
    type: 'Home Loan',
    applicant: 'Anita Desai',
    details: 'Villa Purchase',
    assignedTo: 'Raj Singh',
    amount: 20000000,
    status: 'Pending',
    date: '2024-03-22',
  },
  {
    id: 'L354-2022',
    type: 'Personal Loan',
    applicant: 'Rajesh Shah',
    details: 'Wedding Expenses',
    assignedTo: 'Gauri Shah',
    amount: 3000000,
    status: 'Approved',
    date: '2024-03-17',
  },
  {
    id: 'L355-2022',
    type: 'Business Loan',
    applicant: 'Maya Enterprises',
    details: 'Equipment Purchase',
    assignedTo: 'Priya Patel',
    amount: 12000000,
    status: 'Won',
    date: '2024-03-16',
  },
  {
    id: 'L356-2022',
    type: 'Home Loan',
    applicant: 'Vikram Singh',
    details: 'Plot Purchase',
    assignedTo: 'Raj Singh',
    amount: 5500000,
    status: 'Under Review',
    date: '2024-03-23',
  }
];

const tabs = [
  'All',
  'Pre Sanction',
  'NPA',
  'YSLD Responses',
  'Symbolic Possession',
  'DM Order',
  'Physical Possession',
  'Auctions',
];

function Portfolio() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [columnMenuAnchor, setColumnMenuAnchor] = useState(null);
  const [filterMenuAnchor, setFilterMenuAnchor] = useState(null);
  const [visibleColumns, setVisibleColumns] = useState(columns.map(col => col.id));
  const [activeFilters, setActiveFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);

  // Filter data based on search query
  const filteredData = sampleData.filter(row => {
    const searchLower = searchQuery.toLowerCase();
    return (
      row.id.toLowerCase().includes(searchLower) ||
      row.applicant.toLowerCase().includes(searchLower) ||
      row.type.toLowerCase().includes(searchLower) ||
      row.details.toLowerCase().includes(searchLower) ||
      row.assignedTo.toLowerCase().includes(searchLower) ||
      row.status.toLowerCase().includes(searchLower) ||
      row.amount.toString().includes(searchQuery)
    );
  });

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleColumnMenuOpen = (event) => {
    setColumnMenuAnchor(event.currentTarget);
  };

  const handleColumnMenuClose = () => {
    setColumnMenuAnchor(null);
  };

  const handleFilterMenuOpen = (event) => {
    setFilterMenuAnchor(event.currentTarget);
  };

  const handleFilterMenuClose = () => {
    setFilterMenuAnchor(null);
  };

  const toggleColumn = (columnId) => {
    setVisibleColumns(prev =>
      prev.includes(columnId)
        ? prev.filter(id => id !== columnId)
        : [...prev, columnId]
    );
  };

  const addFilter = (filter) => {
    setActiveFilters(prev => [...prev, filter]);
    handleFilterMenuClose();
  };

  const removeFilter = (filter) => {
    setActiveFilters(prev => prev.filter(f => f !== filter));
  };

  const handleUploadClick = () => {
    setIsUploadDialogOpen(true);
  };

  const handleUploadDialogClose = () => {
    setIsUploadDialogOpen(false);
  };

  return (
    <Box>
      <HeaderBox>
        <StyledTabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((tab, index) => (
            <StyledTab key={tab} label={tab} />
          ))}
        </StyledTabs>
        <UploadButton variant="contained" onClick={handleUploadClick}>
          Upload Document
        </UploadButton>
      </HeaderBox>

      <SearchBox>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <SearchTextField
            placeholder="Search in all columns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1 }} />,
            }}
          />
          <FilterButton
            variant="outlined"
            onClick={handleColumnMenuOpen}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Columns
          </FilterButton>
          <FilterButton
            variant="outlined"
            onClick={handleFilterMenuOpen}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Filter
          </FilterButton>
        </Box>
      </SearchBox>

      {activeFilters.length > 0 && (
        <FilterBox>
          {activeFilters.map((filter) => (
            <Chip
              key={filter}
              label={filter}
              onDelete={() => removeFilter(filter)}
              size="small"
            />
          ))}
        </FilterBox>
      )}

      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns
                .filter(column => visibleColumns.includes(column.id))
                .map(column => (
                  <TableCell key={column.id}>
                    {column.id === 'checkbox' ? (
                      <Checkbox size="small" />
                    ) : (
                      column.label
                    )}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row.id}>
                {columns
                  .filter(column => visibleColumns.includes(column.id))
                  .map(column => (
                    <TableCell key={column.id}>
                      {column.id === 'checkbox' ? (
                        <Checkbox size="small" />
                      ) : column.id === 'amount' ? (
                        `₹${row[column.id].toLocaleString()}`
                      ) : (
                        row[column.id]
                      )}
                    </TableCell>
                  ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>

      <Menu
        anchorEl={columnMenuAnchor}
        open={Boolean(columnMenuAnchor)}
        onClose={handleColumnMenuClose}
      >
        {columns
          .filter(column => column.id !== 'checkbox')
          .map(column => (
            <MenuItem key={column.id} onClick={() => toggleColumn(column.id)}>
              <Checkbox
                checked={visibleColumns.includes(column.id)}
                size="small"
              />
              {column.label}
            </MenuItem>
          ))}
      </Menu>

      <Menu
        anchorEl={filterMenuAnchor}
        open={Boolean(filterMenuAnchor)}
        onClose={handleFilterMenuClose}
      >
        <MenuItem onClick={() => addFilter('Status: Won')}>Status: Won</MenuItem>
        <MenuItem onClick={() => addFilter('Type: Home Loan')}>
          Type: Home Loan
        </MenuItem>
        <MenuItem onClick={() => addFilter('Amount > 10L')}>Amount > 10L</MenuItem>
      </Menu>

      <UploadDialog open={isUploadDialogOpen} onClose={handleUploadDialogClose} />
    </Box>
  );
}

export default Portfolio; 