
import {
	makeStyles,
	Typography,
	Container,
	Grid,
	Divider,
} from "@material-ui/core";
import WorksTitle from "./WorksTitle";
import HeroButtons from "./HeroButtons";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(0, 4),
		height: "102vh",
		backgroundColor: "#ebebeb",
		[theme.breakpoints.down('sm')]: {
			height: "100%",
			paddingBottom: theme.spacing(4)
		}
	},
	img: {
		padding: theme.spacing(2, 0),
		height: 160,
		[theme.breakpoints.down('sm')]: {
			height: 200,
		}
	},
	workTitle: {
		fontFamily: "Georgia, serif",
		color: "#4f4d6a",
		fontSize: 20,
		fontStyle: "italic",
	},
	workCaption: {
		fontFamily: "Georgia, serif",
		color: "#4f4d6a",
		fontSize: 13,
		fontStyle: "italic",
		lineHeight: 2,
	},
	divider: {
		marginTop: 30,
		backgroundColor: "#FFF",
	},
}));

const works = [
	{
		id: 1,
		title: "Desire",
		caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "/images/works/desire.png"
	},
	{
		id: 2,
		title: "Aspiration",
		caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "/images/works/aspiration.png"
	},
	{
		id: 3,
		title: "Design",
		caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "/images/works/design.png"
	},
	{
		id: 4,
		title: "Lust",
		caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "/images/works/lust.png"
	},
]
const Work = ({ work }) => {
	const classes = useStyles();
	return (
		<div style={{ textAlign: "center" }}>
			<img src={work.image} alt='featured_img' className={classes.img} />
			<Typography className={classes.workTitle}>
				{work.title}
			</Typography>
			<Typography className={classes.workCaption}>{work.caption}</Typography>
		</div>
	);
};
function Works() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<WorksTitle />
			<Container fixed maxWidth='md'>
				<Grid
					container
					direction='column'
					justify='center'
					alignItems='center'
					spacing={2}>
					<Grid
						container
						direction='row'
						justify='center'
						alignItems='center'
						spacing={2}>
						{works.map((work) => (
							<Grid item xs={12} sm={6} md={3} key={work.id}>
								<Work work={work} />
							</Grid>))}
					</Grid>
					<Grid item xs style={{ width: "100%" }}>
						<Divider className={classes.divider} />
					</Grid>
					<HeroButtons />
				</Grid>
			</Container>
		</div>
	);
}

export default Works;
