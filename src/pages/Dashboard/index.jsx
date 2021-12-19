import React from 'react'
import CreateGame from 'components/forms/CreateGame'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AdminNav from 'pages/Dashboard/AdminNav';
import AdminRent from './AdminRent'
import EditGameList from 'components/forms/EditGame/EditGameList';
import ManagingTag from 'components/forms/ManagingTag';
import UserList from 'components/UserList'
import StatsUser from 'components/UserList/StatsUser.jsx'
import { Grid } from '@mui/material';

const Dashboard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  const TabPanel = () => {
    switch (value) {
      case 0:
        return <CreateGame />
      case 1:
        return <EditGameList />
      case 2:
        return <AdminRent />
      case 3:
        return <ManagingTag />
      case 4:
        return <UserList />
      case 5:
        return <StatsUser />
      default: ;
    }
  }



  return (
    <>
      <AdminNav />
      <Box
        sx={{ flexGrow: 1, display: 'flex', height: 224 }}
      >
        <Grid sx={{ mr: 3 }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab label="Ajouter un jeu" {...a11yProps(0)} />
            <Tab label="Editer un jeu" {...a11yProps(1)} />
            <Tab label="Autres" {...a11yProps(2)} />
            <Tab label="Catégories" {...a11yProps(3)} />
            <Tab label="Utilisateurs" {...a11yProps(4)} />
            <Tab label="Stats" {...a11yProps(5)} />
          </Tabs>
        </Grid>
        {TabPanel()}
      </Box>
    </>
  );
}

export default Dashboard;
