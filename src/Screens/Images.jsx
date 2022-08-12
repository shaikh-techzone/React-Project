import { Alert, Select, Spin } from "antd";
import React, { useEffect, useState } from "react";
import ImageCard from "../Components/ImageCard";
const { Option } = Select;

const orders = ["popular", "latest"];

const image_type = ["all", "photo", "illustration", "vector"];

const categories = [
	"backgrounds",
	"fashion",
	"nature",
	"science",
	"education",
	"feelings",
	"health",
	"people",
	"religion",
	"places",
	"animals",
	"industry",
	"computer",
	"food",
	"sports",
	"transportation",
	"travel",
	"buildings",
	"business",
	"music",
];

const Images = () => {
	const [images, setImages] = useState([]);
	const [isloading, setIsloading] = useState(false);
	const [error, setError] = useState("");
	const [show, setShow] = useState(false);
	const [order, setOrder] = useState("");
	const [type, setType] = useState("");
	const [category, setCategory] = useState("");

	const handleCatergory = (value) => {
		setCategory(value?.value);
	};
	const handleType = (value) => {
		setType(value?.value);
	};
	const handleOrder = (value) => {
		setOrder(value?.value);
	};

	// console.log(process.env.REACT_APP_KEY);

	async function getImages() {
		try {
			setIsloading(true);
			const res = await fetch(
				`https://pixabay.com/api/?key=${process.env.REACT_APP_KEY}&category=${category}&image_type=${type}&order=${order}`
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
	}, [category, order, type]);

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
			<>
				<h6>Category</h6>
				<Select
					labelInValue
					defaultValue={{
						value: category,
						label: category,
					}}
					style={{
						width: 120,
					}}
					onChange={handleCatergory}>
					{categories?.length > 0 &&
						categories?.map((category, index) => {
							return (
								<Option key={index} value={category}>
									{category}
								</Option>
							);
						})}
				</Select>

				<h6>Type</h6>
				<Select
					labelInValue
					defaultValue={{
						value: type,
						label: type,
					}}
					style={{
						width: 120,
					}}
					onChange={handleType}>
					{image_type?.length > 0 &&
						image_type?.map((type, index) => {
							return (
								<Option key={index} value={type}>
									{type}
								</Option>
							);
						})}
				</Select>

				<h6>Order</h6>
				<Select
					labelInValue
					defaultValue={{
						value: order,
						label: order,
					}}
					style={{
						width: 120,
					}}
					onChange={handleOrder}>
					{orders?.length > 0 &&
						orders?.map((order, index) => {
							return (
								<Option key={index} value={order}>
									{order}
								</Option>
							);
						})}
				</Select>

				<div className='row mt-3'>
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
			</>
		);
	}
};

export default Images;
