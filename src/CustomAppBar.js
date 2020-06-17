import { useState, useEffect } from "react";
import {
    Container,
    AppBar,
    Toolbar,
    makeStyles,
    Hidden,
    IconButton,
    Drawer,
    Typography,
} from "@material-ui/core";
import { Menu, Close, ArrowBack } from '@material-ui/icons'
import Link from '../src/Link'
const useStyles = makeStyles((theme) => ({
    appBar: {
        background: "transparent",
        color: "#000",
        paddingTop: theme.spacing(4),
    },
    navlink: {
        margin: theme.spacing(0, 2),
        color: "#4f4d6a",
        textTransform: "uppercase",
        fontFamily: "Poppins",
        fontWeight: 700,
        fontSize: 13,
        "&:hover": {
            color: "#2c2b3d",
            textDecoration: "none",
        },
    },
    title: {
        fontFamily: "Georgia, serif",
        color: "#4f4d6a",
        fontSize: 30,
        fontWeight: 400,
        "&::first-letter ": {
            fontStyle: "italic",
            marginRight: -3,
            fontSize: 33,
        },
        "&:hover": {
            textDecoration: "none",
        },
    },
    drawer: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(34,34,34,0.9)"
    },
    linkHolder: {
        marginTop: theme.spacing(2),
        "& .MuiLink-underlineHover": {
            textDecoration: "none",
        },
        "& .MuiLink-underlineHover:hover": {
            color: "#ccc",
            fontSize: 40,
        }
    },
    drawerLink: {
        display: "block",
        textAlign: "center",
        color: "#fff",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: 35,
        margin: theme.spacing(2),
    }
}));
const menu = [
    { id: 1, link: "/design", title: 'Design' },
    { id: 2, link: "/web-design", title: 'Web Design' },
    { id: 3, link: "/graphic-design", title: 'Graphic Design' },
    { id: 4, link: "/print-design", title: 'Print Design' },
    { id: 5, link: "/video-design", title: 'Video Design' },
]
function CustomAppBar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false)
    const toggleDrawer = () => {
        setOpen(!open)
    }
    return (
        <div>
            <AppBar position='fixed' className={classes.appBar} elevation={0}>
                <Container fixed>
                    <Toolbar>
                        <Link href='/' variant='h6' className={classes.title}>
                            banx
						</Link>
                        <div style={{ flex: 1 }} />
                        <Hidden smDown>
                            {menu.map((page) => (
                                <Link
                                    href={page.link}
                                    className={classes.navlink}
                                    key={page.id}>
                                    {page.title}
                                </Link>
                            ))}
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton onClick={toggleDrawer}>
                                <Menu />
                            </IconButton>
                        </Hidden>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer open={open} onClose={toggleDrawer} anchor="right"  >
                <div className={classes.drawer}>
                    <div style={{ display: "flex" }}>
                        <IconButton onClick={toggleDrawer}>
                            <ArrowBack style={{ color: "#fff" }} />
                        </IconButton>
                        <div style={{ flex: 1 }} />
                        <IconButton onClick={toggleDrawer}>
                            <Close style={{ color: "#fff" }} />
                        </IconButton>
                    </div>
                    <div style={{ display: "flex", flexDirection: 'column', justifyContent: "space-between" }}>
                        <div className={classes.linkHolder}>
                            <Link href="/" className={classes.drawerLink}>Home</Link>
                            {menu.map((page) => (
                                <Link
                                    className={classes.drawerLink}
                                    href={page.link}
                                    key={page.id}>
                                    {page.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Drawer>
        </div >
    );
}

export default CustomAppBar;