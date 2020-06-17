import { makeStyles, Container, Typography, Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        height: "50vh",
        backgroundColor: "#505050",
        padding: theme.spacing(0, 4),
        [theme.breakpoints.down('xs')]: {
            height: "100%"
        }
    },
    title: {
        fontFamily: "Georgia, serif",
        fontSize: 24,
        fontStyle: "italic",
        color: "#fff",
        padding: theme.spacing(4, 0),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2, 0)
        }
    },
    caption: {
        fontFamily: "Poppins, sans-serif",
        fontSize: 12,
        color: "#fff",
        lineHeight: 2,
    },
    copyright: {
        margin: theme.spacing(10, 0, 0, 0),
        fontFamily: "Poppins, sans-serif",
        fontSize: 12,
        color: "#fff",
        [theme.breakpoints.down('xs')]: {
            margin: 0,
            padding: theme.spacing(2, 0)
        }
    },
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
    }
}));
function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container fixed maxWidth='md'>
                <Grid
                    container
                    className={classes.container}
                    spacing={4}>
                    <Grid item xs={12} sm={8}>
                        <Typography className={classes.title}>
                            What makes us awesome?
						</Typography>
                        <Typography className={classes.caption}>
                            Nulla ut eleifend diam. In feugiat, lacus vitae porttitor lacinia,
                            metus lectus interdum elit, at consectetur orci dolor et metus.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                            posuere cubilia Curae. Suspendisse potenti.
						</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography className={classes.title}>Contact Us</Typography>
                        <Typography className={classes.caption}>
                            Nulla ut eleifend diam. In feugiat, lacus vitae porttitor lacinia,
                            metus lectus interdum elit, at
						</Typography>
                    </Grid>
                </Grid>
                <Typography className={classes.copyright}>
                    Copyright 2020 JCBMRTNZ
				</Typography>
            </Container>
        </div>
    );
}

export default Footer;
