import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./search.css";
function Search() {
  /**
   * search bar component
   */
  return (
    <TextField
      id='outlined-basic'
      className='searchbar'
      size="small"
      sx={{ width: "50%", marginRight: "4%"}}
      label='Search'
      variant='outlined'
    />
  );
}
export default Search;
