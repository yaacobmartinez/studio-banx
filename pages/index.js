import Head from 'next/head'
import { Typography, makeStyles } from '@material-ui/core'
import CustomAppBar from '../src/CustomAppBar';
import Footer from '../src/Footer';
import HeroText from '../src/HeroText';
import Works from '../src/Works';
import Awesome from '../src/Awesome';
const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(/images/banxBG.png) no-repeat top center fixed`,
    backgroundSize: "cover",
    height: "102vh",
    margin: 0, paddingTop: theme.spacing(12)
  },
}));
export default function Home() {
  const classes = useStyles()
  return (
    <>
      <Head>
        <title>Banx | Home</title>
      </Head>
      <div className={classes.root}>
        <CustomAppBar />
        <HeroText />
      </div>
      <Works />
      <Awesome />
      <Footer />

    </>
  )
}
