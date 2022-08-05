import { Card } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogCard = ({ blog }) => {
	const navigate = useNavigate();
	const { id } = useParams();
	return (
		<>
			<Card
				onClick={() => {
					if (!id) {
						navigate(`/blog/${blog?.id}`);
						console.log("click", id);
					}
				}}
				className='mb-4'
				hoverable
				style={{
					width: "100%",
				}}
				cover={<img alt='example' src={blog?.thumbnailUrl} />}>
				<Card.Meta title={blog?.title} />
			</Card>
		</>
	);
};

export default BlogCard;
