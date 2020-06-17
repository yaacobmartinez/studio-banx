import {
	makeStyles,
	Container,
	Typography,
	Grid,
	Button,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	root: {
		height: "52vh",
		padding: theme.spacing(0, 4),
		[theme.breakpoints.down('sm')]: {
			height: "100%",
			paddingBottom: theme.spacing(4)
		}
	},
	title: {
		fontFamily: "Georgia, serif",
		fontSize: 24,
		fontStyle: "italic",
		color: "#4f4d6a",
		padding: theme.spacing(4, 0),
	},
	content: {
		fontFamily: "Georgia, serif",
		fontSize: 13,
		fontStyle: "italic",
		color: "#4f4d6a",
		lineHeight: 2,
	},
	button: {
		textTransform: "none",
		fontFamily: "Georgia, serif",
		fontStyle: "italic",
		fontWeight: 600,
		padding: theme.spacing(0, 2),
		backgroundColor: "#4f4d6a",
		color: "#fff",
		marginTop: theme.spacing(4),
		"& :hover": {
			color: "#4f4d6a",
		},
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(4)
		}
	},
}));

function Awesome() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Container fixed maxWidth='md'>
				<Typography className={classes.title}>
					What makes us awesome?
				</Typography>
				<Grid container direction='row' justify='center' alignItems='center'>
					<Grid item xs={12} md={4}>
						<Typography className={classes.content}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Duis eros ligula, lacinia quis euismod in, dignissim at neque.
							Aliquam quis consectetur magna.
								</Typography>
						<Button size='small' className={classes.button} variant='contained'>
							View More
						</Button>
					</Grid>
					<Grid item xs={12} md={4}>
						<Typography className={classes.content}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Duis eros ligula, lacinia quis euismod in, dignissim at neque.
							Aliquam quis consectetur magna.
								</Typography>
						<Button size='small' className={classes.button} variant='contained'>
							View More
						</Button>
					</Grid>
					<Grid item xs={12} md={4}>
						<Typography className={classes.content}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Duis eros ligula, lacinia quis euismod in, dignissim at neque.
							Aliquam quis consectetur magna.
								</Typography>
						<Button size='small' className={classes.button} variant='contained'>
							View More
						</Button>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Awesome;
