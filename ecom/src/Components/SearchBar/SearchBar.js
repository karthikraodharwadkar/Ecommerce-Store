import React from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './SearchBar.css'

export default function SearchBar({searchValueFilter,handleSearchValueFilter}) {
  return (
    <div className='searchbar'>
        <TextField id="outlined-basic" label="Search by title or brand" variant="outlined" fullWidth
        value={searchValueFilter}
        onChange={handleSearchValueFilter}/>
    </div>
  )
}
