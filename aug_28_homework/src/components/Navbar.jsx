import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#004d00' }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        {/* <Button color="inherit" component={Link} to="/products">
          Product List
        </Button>
        <Button color="inherit" component={Link} to="/create">
          Create Product
        </Button> */}

        <Button color="inherit" component={Link} to="/profile/upload">
          Profile Picture
        </Button>
        <Button color="inherit" component={Link} to="/resume/upload">
          Resume
        </Button>
        <Button color="inherit" component={Link} to="/video/upload">
          Video
        </Button>


      </Toolbar>
    </AppBar>
  );
};

export default Navbar;




// import React from 'react';
// import { AppBar, Toolbar, Button, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#004d00' }}>
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           My Application
//         </Typography>
//         <Button color="inherit" component={Link} to="/">
//           Home
//         </Button>
//         <Button color="inherit" component={Link} to="/products">
//           Product List
//         </Button>
//         <Button color="inherit" component={Link} to="/create">
//           Create Product
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
