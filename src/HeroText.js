import {
	Typography,
	Grid,
	makeStyles,
	Container,
	Divider,
} from "@material-ui/core";
import HeroButtons from "./HeroButtons";
const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: theme.spacing(10),
		[theme.breakpoints.down('xs')]: {
			paddingTop: theme.spacing(5),
		}
	},
	greeting: {
		textAlign: "center",
		fontFamily: "Georgia, serif",
		fontStyle: "italic",
		fontSize: 20,
		textTransform: "uppercase",
		color: "#4f4d6a",
		[theme.breakpoints.down('xs')]: {
			fontSize: 12
		}
	},
	pageName: {
		textAlign: "center",
		fontFamily: "Georgia, serif",
		fontStyle: "bold",
		fontSize: "8vw",
		fontWeight: 900,
		textTransform: "uppercase",
		color: "#4f4d6a",
		[theme.breakpoints.down('xs')]: {
			fontSize: 45
		}
	},
	pageDescription: {
		textAlign: "center",
		fontFamily: "Poppins, sans-serif",
		fontSize: "2vw",
		fontWeight: 800,
		textTransform: "uppercase",
		color: "#4f4d6a",
		[theme.breakpoints.down('xs')]: {
			fontSize: 16
		}
	},
	divider: {
		backgroundColor: "#FFF",
	},
	primaryButton: {
		borderRadius: 20,
		fontFamily: "Georgia, serif",
		fontStyle: "italic",
		backgroundColor: "#4f4d6a",
		color: "#fff",
		textAlign: "center",
		textTransform: "lowercase",
		margin: 20,
		width: 150,
		"& :hover": {
			color: "#4f4d6a",
		},
	},
	secondaryButton: {
		borderRadius: 20,
		fontFamily: "Georgia, serif",
		fontStyle: "italic",
		backgroundColor: "#b39fac",
		color: "#fff",
		textAlign: "center",
		textTransform: "lowercase",
		margin: 20,
		width: 150,
		"& :hover": {
			color: "#4f4d6a",
		},
	},
}));
function HeroText() {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Container maxWidth='md'>
				<Grid container direction='column' justify='center' alignItems='center'>
					<Grid
						item
						xs
						container
						direction='row'
						justify='center'
						alignItems='center'>
						<Grid item xs>
							<Divider className={classes.divider} />
						</Grid>
						<Grid item xs>
							<Typography className={classes.greeting}>We are</Typography>
						</Grid>
						<Grid item xs>
							<Divider className={classes.divider} />
						</Grid>
					</Grid>
					<Grid item xs>
						<Typography className={classes.pageName}>
							Studio Banx
						</Typography>
					</Grid>
					<Grid item xs>
						<Typography className={classes.pageDescription}>
							A CREATIVE WEB AND PRINT DIGITAL AGENCY BUILT ON METHOD AND CREATIVE JUICES
						</Typography>
					</Grid>
					<Grid item xs style={{ marginTop: 40, width: "100%" }}>
						<Divider className={classes.divider} />
					</Grid>
					<HeroButtons />
				</Grid>
			</Container>
		</div>
	);
}

export default HeroText;
