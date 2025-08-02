import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`custom-tabpanel-${index}`}
      aria-labelledby={`custom-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `custom-tab-${index}`,
    'aria-controls': `custom-tabpanel-${index}`,
  };
}

const CustomTabs = ({ con1, con2, con3, tab1, tab2, tab3 }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="custom tabs">
          <Tab label={tab1()} {...a11yProps(0)} />
          <Tab label={tab2()} {...a11yProps(1)} />
          <Tab label={tab3()} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {con1()}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {con2()}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {con3()}
      </CustomTabPanel>
    </Box>
  );
};

export default CustomTabs;
