import { Alert, Spin } from "antd";
import React, { useEffect, useState } from "react";
// import { Card } from "react-bootstrap";
import VideosCard from "../Components/VideosCard";

const Videos = () => {
	const [videos, setVideos] = useState([]);
	const [isloading, setIsloading] = useState(false);
	const [error, setError] = useState("");
	const [show, setShow] = useState(false);

	// console.log(process.env.REACT_APP_KEY);

	async function getVideos() {
		try {
			setIsloading(true);
			const res = await fetch(
				`https://pixabay.com/api/videos/?key=${process.env.REACT_APP_KEY}`
			);
			const data = await res.json();
			setIsloading(false);
			setVideos(data.hits);
			console.log(videos);
		} catch (err) {
			setError(err.message);
			// console.log({ error });
			setIsloading(false);
			setShow(true);
		}
	}

	useEffect(() => {
		getVideos();
		console.log(videos);
		return () => {};
	}, []);

	if (isloading) {
		return (
			<div className='example'>
				<Spin size='large' />
			</div>
		);
	} else if (error && !isloading && show) {
		return (
			<Alert variant='danger' onClose={() => setShow(false)} dismissible>
				<Alert.Heading>Oh snap! You got an error!</Alert.Heading>
				<p>{error}</p>
			</Alert>
		);
	} else {
		return (
			<div className='row'>
				{videos?.length > 0 &&
					videos?.map((video, index) => {
						// console.log(post);
						return (
							<div
								className='col-sm-12 col-md-6 col-lg-4 col-xl-3'
								key={video.id}>
								<VideosCard video={video} />
							</div>
						);
					})}
			</div>
		);
	}
};

export default Videos;
