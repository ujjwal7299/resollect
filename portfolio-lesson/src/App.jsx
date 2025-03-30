import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Sidebar from './components/Sidebar';
import Portfolio from './components/Portfolio';

const MainContainer = styled(Box)({
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',
  backgroundColor: '#f5f5f5',
});

const ContentContainer = styled(Box)({
  flexGrow: 1,
  padding: '24px',
  overflowY: 'auto',
});

function App() {
  return (
    <MainContainer>
      <Sidebar />
      <ContentContainer>
        <Portfolio />
      </ContentContainer>
    </MainContainer>
  );
}

export default App; 