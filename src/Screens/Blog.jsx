import { Alert, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogCard from "../Components/BlogCard";

const Blog = () => {
	const [blog, setBlog] = useState([]);
	const [isloading, setIsloading] = useState(false);
	const [error, setError] = useState("");
	const [show, setShow] = useState(false);
	const { id } = useParams();

	async function getBlogbyId() {
		try {
			setIsloading(true);
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/photos/${id}`
			);
			const blog = await res.json();
			setIsloading(false);
			setBlog(blog);
			// console.log({ blog });
		} catch (err) {
			setError(err.message);
			console.log({ error });
			setIsloading(false);
			setShow(true);
		}
	}

	useEffect(() => {
		getBlogbyId();
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
				<div className='col-sm-12 ' key={blog.id}>
					<BlogCard blog={blog} />
				</div>
			</div>
		);
	}
};

export default Blog;
