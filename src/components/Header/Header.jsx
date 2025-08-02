import React from 'react';
import './Header.scss';
import TransitionsModal from '../Modal/Modal';
import Button from '@mui/material/Button';
// import Logo from '../../Images/Logo.png';
import { FaPlus } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { FaBars, FaRobot } from 'react-icons/fa';
import { GoBell } from "react-icons/go";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';


const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
      setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <>
    <header>
      <div className="left-side">
        <img src={""} className="img-fluid" alt="Logo" />
      </div>

        <div className="hamburger-icon" onClick={toggleMenu}>
          <FaBars />
        </div>

      <div className={`right-side ${menuOpen ? "open" : ""}`}>
        <Button className='home-btn'><IoHomeOutline /> Home</Button>

        <div className='sub-right'>
          <Button className='ai-btn'><FaRobot /></Button>
          <Button className='notification-btn'><GoBell /></Button>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker/>
            </DemoContainer>
          </LocalizationProvider>

          <FormControl className='dropdown' sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={10}
              label="Age"
              onChange={handleChange}
              startAdornment={
              <InputAdornment position="start">
                <CorporateFareIcon />
              </InputAdornment>
            }
            >
              <MenuItem value={10}>Outlet name</MenuItem>
            </Select>
          </FormControl>

          <div className='vertical-line'></div>

          <Button className='create-btn' onClick={handleOpen} variant="contained"><FaPlus /> Create</Button>
        </div>
      </div>
    </header>

    <TransitionsModal open={open} handleClose= {handleClose} />
    </>
  );
};

export default Header;