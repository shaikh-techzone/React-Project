import { Alert, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideosCard from "../Components/VideosCard";

const Video = () => {
	const [video, setVideo] = useState([]);
	const [isloading, setIsloading] = useState(false);
	const [error, setError] = useState("");
	const [show, setShow] = useState(false);
	const { id } = useParams();

	// console.log(process.env.REACT_APP_KEY);

	async function getVideobyId() {
		try {
			setIsloading(true);
			const res = await fetch(
				`https://pixabay.com/api/videos/?key=${process.env.REACT_APP_KEY}&id=${id}`
			);
			const data = await res.json();
			setIsloading(false);
			setVideo(data.hits);
			console.log(video);
		} catch (err) {
			setError(err.message);
			// console.log({ error });
			setIsloading(false);
			setShow(true);
		}
	}

	useEffect(() => {
		getVideobyId();
		console.log(video);
		return () => {};
	}, [id]);

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
				<div className='col-sm-12 col-md-6 col-lg-4 col-xl-3' key={video.id}>
					<VideosCard video={video} />
				</div>
			</div>
		);
	}
};

export default Video;
