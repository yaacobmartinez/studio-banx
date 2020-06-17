import { Grid, makeStyles, Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
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
	btnholder: {
		[theme.breakpoints.down('xs')]: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center"
		}
	}
}));
function HeroButtons() {
	const classes = useStyles();
	return (
		<Grid item xs>
			<div className={classes.btnholder}>
				<Button variant='contained' className={classes.primaryButton}>
					See Our Work
			</Button>
				<Button variant='contained' className={classes.secondaryButton}>
					meet the team
			</Button>
			</div>
		</Grid>
	);
}

export default HeroButtons;
