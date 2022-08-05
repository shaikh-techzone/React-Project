import { Alert, Spin } from "antd";
import React, { useEffect, useState } from "react";
import ImageCard from "../Components/ImageCard";

const Images = () => {
	const [images, setImages] = useState([]);
	const [isloading, setIsloading] = useState(false);
	const [error, setError] = useState("");
	const [show, setShow] = useState(false);

	// console.log(process.env.REACT_APP_KEY);

	async function getImages() {
		try {
			setIsloading(true);
			const res = await fetch(
				`https://pixabay.com/api/?key=${process.env.REACT_APP_KEY}`
			);
			const data = await res.json();
			setIsloading(false);
			setImages(data.hits);
			// console.log(data.hits);
		} catch (err) {
			setError(err.message);
			// console.log({ error });
			setIsloading(false);
			setShow(true);
		}
	}

	useEffect(() => {
		getImages();
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
				{images?.length > 0 &&
					images?.map((image, index) => {
						// console.log(post);
						return (
							<div
								className='col-sm-12 col-md-6 col-lg-4 col-xl-3'
								key={image.id}>
								<ImageCard image={image} />
							</div>
						);
					})}
			</div>
		);
	}
};

export default Images;
