import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import BlogCard from "../Components/BlogCard";

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);
	const [isloading, setIsloading] = useState(false);
	const [error, setError] = useState("");
	const [show, setShow] = useState(false);

	async function getBlogs() {
		try {
			setIsloading(true);
			const res = await fetch("https://jsonplaceholder.typicode.com/photos");
			const blogs = await res.json();
			setIsloading(false);
			setBlogs(blogs);
			// console.log({ posts });
		} catch (err) {
			setError(err.message);
			// console.log({ error });
			setIsloading(false);
			setShow(true);
		}
	}

	useEffect(() => {
		getBlogs();
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
				{blogs?.length > 0 &&
					blogs?.slice(0, 100).map((blog, index) => {
						// console.log(post);
						return (
							<div
								className='col-sm-12 col-md-6 col-lg-4 col-xl-3'
								key={blog.id}>
								{/* <Card
									className='mb-4'
									hoverable
									style={{
										width: "100%",
									}}
									cover={<img alt='example' src={post.thumbnailUrl} />}>
									<Card.Meta title={post.title} />
								</Card> */}
								<BlogCard blog={blog} />
							</div>
						);
					})}
			</div>
		);
	}
};

export default Blogs;
