import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { FaUserCircle, FaWhatsapp } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

// const pages = ['Home', 'Properties', 'Property Detail', 'Agent', 'Agent Detail'];
const pages = ['Home', 'Property', 'Agent', 'Gallery', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" className='p-3 xl:px-30 sm:pt-4 bg-transparent! shadow-none!'>
            <Container maxWidth="xl">
                <Toolbar disableGutters className='flex justify-between items-center'>


                    <img className='w-[120px] h-[62px] hidden md:flex' src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2021/10/rh-logo-retina.png" alt="realhomes-logo" />


                    <Box className='hidden md:flex justify-center items-center'>
                        {pages.map((page) => (
                            <NavLink key={page} onClick={handleCloseNavMenu} to={`/${page.toLowerCase().replace(' ', '-')}`} className={({ isActive }) =>
                                `${isActive ? 'text-white bg-[var(--blue)]' : ''} capitalize font-[borik] font-semibold text-lg p-3 rounded`
                            }>
                                {page}
                            </NavLink>
                        ))}
                    </Box>
                    <img className='w-[120px] h-[62px] flex md:hidden' src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2021/10/rh-logo-retina.png" alt="realhomes-logo" />


                    <Box className='hidden md:flex justify-center items-center gap-6'>
                        <div className="flex items-center gap-2 text-md ">
                            <FaWhatsapp className='text-xl' />
                            <span className='text-xl'>1-800-555-1234</span>
                        </div>
                        <Tooltip title="Open settings">
                            <IconButton onMouseEnter={handleOpenUserMenu} sx={{ p: 0 }}>
                                <FaUserCircle className='text-white' />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box className=' flex md:hidden justify-center items-center gap-4'>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <NavLink key={page} onClick={handleCloseNavMenu} to={`/${page.toLowerCase().replace(' ', '-')}`} className={
                                    ` capitalize font-[borik] rounded block`
                                }>
                                    <MenuItem className='!justify-center'>
                                        <Typography className='capitalize! font-semibold font-[borik]!' sx={{ textAlign: 'center' }}>{page}</Typography>
                                    </MenuItem>
                                </NavLink>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
