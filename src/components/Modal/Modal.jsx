import './Modal.scss';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import {
  Box,
  Modal,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LanguageIcon from '@mui/icons-material/Language';

const groups = [
  {
    label: 'Savory Bites Bistro',
    items: [
      { name: 'Flavor Haven Cafe', hasExternalIcon: true },
      { name: 'Gourmet Bites Bistro' },
      { name: 'Savory Delights Diner' },
      { name: 'Taste Buds Tavern' },
    ],
  },
  {
    label: 'Delicious Nibbles Bistro',
    items: [
      { name: 'Taste Oasis Cafe' },
      { name: 'Epicurean Escape Bistro' },
      { name: 'Delectable Eats Eatery' },
      { name: 'Culinary Corner Pub' },
      { name: 'Savory Haven Diner' },
      { name: 'Flavor Fiesta Grill' },
    ],
  },
];

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

const styles = {
  modalContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 580,
    bgcolor: 'background.paper',
    borderRadius: '16px',
    boxShadow: 24,
    p: 2,
    outline: 'none',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #eee',
    pb: 1,
    mb: 1,
  },
  title: {
    fontWeight: 600,
    fontSize: '16px',
  },
  searchField: {
    mb: 1.5,
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
    },
  },
  listItem: {
    borderRadius: '8px',
    mb: 0.5,
    '&.Mui-selected': {
      bgcolor: '#f2f4f7 !important',
    },
    '&:hover': {
      bgcolor: '#f5f5f5',
    },
  },
};

export default function TransitionsModal({ open, handleClose }) {

  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('');

  const filteredGroups = groups.map((group) => ({
    ...group,
    items: group.items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  }));

  return (
    <div>
      
      <Modal
        className='custom-modal'
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        {/* <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <button onClick={handleClose}>X</button>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade> */}

        <Box sx={styles.modalContainer}>
        <Box className="modal-header" sx={styles.header}>
          <Typography variant="h6" sx={styles.title}>
            Select HO or Outlet
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <TextField
          placeholder="Search"
          variant="outlined"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={styles.searchField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ maxHeight: '320px', overflowY: 'auto' }}>
          {filteredGroups.map((group, gIdx) => (
            <Box key={gIdx} sx={{ mt: gIdx === 0 ? 1 : 2 }}>
              <ListItem disableGutters>
                <ListItemIcon>
                  <ApartmentIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary={group.label}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    fontSize: 14,
                    color: '#333',
                  }}
                />
              </ListItem>

              <List disablePadding>
                {group.items.map((item, iIdx) => (
                  <ListItem
                    key={iIdx}
                    button
                    onClick={() => setSelected(item.name)}
                    selected={selected === item.name}
                    sx={styles.listItem}
                  >
                    <ListItemIcon>
                      <StorefrontIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                    {item.hasExternalIcon && (
                      <LanguageIcon fontSize="small" sx={{ color: '#2e7d32' }} />
                    )}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      </Box>
      </Modal>
    </div>
  );
}
