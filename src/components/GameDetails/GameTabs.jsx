import React, { Component } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import { Typography, Grid } from '@mui/material'

const GameTabs = ({ game }) => {

  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={2} px={6}>
      <Box sx={{ width: '90%', typography: 'body1' }}>
        <TabContext value={value} >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>
              <Tab label="Description" value="1" />
              <Tab label="Commentaires" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">{game && game.description}</TabPanel>
          <TabPanel value="2">Pas encore de commentaires</TabPanel>
        </TabContext>
      </Box>
    </Grid>
  );
}
export default GameTabs;