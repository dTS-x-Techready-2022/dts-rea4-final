import { useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { Grid, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import { styled } from "@mui/material/styles";

const News = () => {
	let { category } = useParams();
	const [news, setNews] = useState([]);
	if (category === undefined) {
		category = "terbaru";
	}
	let url = `https://api-berita-indonesia.vercel.app/antara/${category}`;
	useEffect(() => {
		(async () => {
			await axios.get(url).then((response) => {
				setNews(response.data.data);
			});
		})();
	}, [category]);
	useEffect(() => {
		console.log(news);
	}, [news]);

	const Div = styled("div")(({ theme }) => ({
		...theme.typography.button,
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(1),
	}));

	return (
		<Container sx={{ width: "100%" }}>
			<Div>{news.title}</Div>
			<Grid container spacing={2}>
				{news.posts ? (
					news.posts.map((item, index) => {
						return (
							<Grid item xs={4} key={index}>
								<Card>
									<CardMedia
										component="img"
										alt="image"
										height="140"
										image={item.thumbnail}
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											{item.title}
										</Typography>
										<Typography variant="body2" color="text.secondary">
											{item.description}
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small">Share</Button>
										<Button size="small" to={item.link}>
											Learn More
										</Button>
									</CardActions>
								</Card>
							</Grid>
						);
					})
				) : (
					<RotatingLines
						strokeColor="grey"
						strokeWidth="5"
						animationDuration="0.75"
						width="96"
						visible={true}
					/>
				)}
			</Grid>
		</Container>
	);
};

export default News;
