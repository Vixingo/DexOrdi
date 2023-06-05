import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, Menu, MenuItem } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../ThemeProvider";
import { useContext, useEffect, useState } from "react";
import logoLight from "./logo-l.png";
import logoDark from "./logo-d.png";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
const drawerWidth = 240;
const navItems = [
    {
        title: "Discover",
        url: "/",
    },
    {
        title: "NFT Marketplace",
        url: "/nft-marketplace",
        bdg: "new",
    },
    {
        title: "How it Work",
        url: "/how-it-works",
    },
];

function Navbar(props) {
    const location = useLocation();
    const theme = useTheme();
    const { toggleTheme, themeMode } = useContext(ThemeContext);
    const [logo, setLogo] = useState(logoLight);

    useEffect(() => {
        if (themeMode === "light") {
            setLogo(logoLight);
        } else {
            setLogo(logoDark);
        }
    }, [themeMode]);

    // console.log(location.pathname);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Box sx={{ my: 1 }}>
                {" "}
                <img src={logo} alt="logo" />{" "}
            </Box>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton
                            sx={{
                                textAlign: "center",
                                color: theme.palette.text,
                            }}
                        >
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                overflowX: "hidden",
            }}
        >
            <CssBaseline />
            <AppBar
                position="static"
                sx={{
                    background: "transparent",
                    boxShadow: "0",
                    color: "inherit",
                }}
            >
                <Container maxWidth={"xl"}>
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {navItems.map((data) => {
                                return (
                                    <Link to={data.url}>
                                        <MenuItem
                                            onClick={handleCloseNavMenu}
                                            sx={{ color: theme.palette.text }}
                                        >
                                            <Typography>
                                                {data.title}
                                                {data.bdg ? (
                                                    <Typography
                                                        component="span"
                                                        sx={{
                                                            backgroundColor:
                                                                "#8D43F8",
                                                            color: "#fff",
                                                            padding: "5px 10px",
                                                            margin: "5px",
                                                            borderRadius: "5px",
                                                        }}
                                                    >
                                                        {data.bdg}
                                                    </Typography>
                                                ) : (
                                                    ""
                                                )}
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                );
                            })}
                        </Menu>

                        <Box
                            sx={{
                                display: { xs: "flex" },
                                fontWeight: "bold",
                                fontSize: "19px",
                                cursor: "pointer",
                                alignItems: "center",
                                mt: 1,
                                justifyContent: "space-between",
                            }}
                        >
                            <Link to="/">
                                <img
                                    style={{ height: "140px" }}
                                    src={logo}
                                    alt="logo"
                                />
                            </Link>
                        </Box>
                        {location.pathname.includes("/admin") ? (
                            ""
                        ) : (
                            <>
                                <Box
                                    sx={{
                                        display: { xs: "none", md: "flex" },
                                        color: theme.palette.text,
                                        flex: 1,
                                        gap: "85px",
                                        justifyContent: "center",
                                        "@media (max-width:1220px)": {
                                            gap: "20px",
                                        },
                                    }}
                                >
                                    {navItems.map((item) => (
                                        <Link to={item.url}>
                                            <Button color="inherit" sx={{}}>
                                                {" "}
                                                <Typography
                                                    variant="h4"
                                                    sx={{
                                                        textTransform:
                                                            "capitalize",
                                                    }}
                                                >
                                                    {item.title}
                                                    {item.bdg ? (
                                                        <Typography
                                                            component="span"
                                                            sx={{
                                                                backgroundColor:
                                                                    "#8D43F8",
                                                                color: "#fff",
                                                                padding:
                                                                    "5px 10px",
                                                                margin: "5px",
                                                                borderRadius:
                                                                    "5px",
                                                            }}
                                                        >
                                                            {item.bdg}
                                                        </Typography>
                                                    ) : (
                                                        ""
                                                    )}
                                                </Typography>
                                            </Button>
                                        </Link>
                                    ))}
                                </Box>
                                <Box
                                    sx={{
                                        display: { xs: "flex" },
                                        flexWrap: "wrap",
                                        gap: "10px",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            height: "60px",
                                            fontSize: "14px",
                                            ml: 2,
                                            fontWeight: "400",
                                            border: "2px solid #6900FF",
                                            color:
                                                themeMode === "light"
                                                    ? "#373737"
                                                    : theme.palette.primary,
                                            borderRadius: "30px",
                                            "&:hover": {
                                                border: "2px solid #6900FF",
                                                background: "#6900FF",
                                                color: "#ffffff",
                                            },
                                            "@media (max-width:600px)": {
                                                height: "40px",
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                lineHeight: "120%",
                                                mx: 2,
                                            }}
                                        >
                                            Get Started
                                        </Typography>
                                        <img
                                            src="/img/seven.svg"
                                            alt=""
                                            className="my-svg-img"
                                        />
                                    </Button>
                                    <IconButton
                                        sx={{
                                            ml: 2,
                                            width: "40px",

                                            height: "40px",
                                            background:
                                                theme.palette.action.hover,
                                        }}
                                        onClick={toggleTheme}
                                        color="inherit"
                                    >
                                        {theme.palette.mode === "dark" ? (
                                            <Brightness7Icon />
                                        ) : (
                                            <NightlightRoundOutlinedIcon
                                                color="secondary"
                                                sx={{
                                                    transform: "rotate(-45deg)",
                                                }}
                                            />
                                        )}
                                    </IconButton>
                                    <IconButton
                                        aria-label="open drawer"
                                        edge="end"
                                        onClick={handleOpenNavMenu}
                                        sx={{
                                            display: {
                                                xs: "inline-flex",
                                                md: "none",
                                            },
                                            width: "40px",

                                            height: "40px",
                                            ml: 2,
                                        }}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Box>
                            </>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                            color: theme.palette.text,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box component="main">
                <Toolbar />
            </Box>
        </Box>
    );
}

Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Navbar;
