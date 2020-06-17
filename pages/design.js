import Head from 'next/head'
import { Typography, makeStyles } from '@material-ui/core'
import CustomAppBar from '../src/CustomAppBar';
import Footer from '../src/Footer';
const useStyles = makeStyles((theme) => ({
    root: {
        background: `url(/images/banxBG.png) no-repeat top center fixed`,
        backgroundSize: "cover",
        height: "102vh",
        margin: 0, paddingTop: theme.spacing(30)
    },
    title: {
        textAlign: "center",
        fontFamily: "Georgia, serif",
        fontStyle: "bold",
        fontSize: "8vw",
        fontWeight: 900,
        textTransform: "uppercase",
        color: "#4f4d6a",
        [theme.breakpoints.down('xs')]: {
            fontSize: 45,
            margin: theme.spacing(0, 4)
        }
    },
}));
function Design() {
    const classes = useStyles()
    return (
        <>
            <Head>
                <title>Banx | Design</title>
            </Head>
            <div className={classes.root}>
                <CustomAppBar />
                <Typography className={classes.title}>
                    Design
                </Typography>
            </div>
            <Footer />
        </>
    )
}

export default Design
