import { Image } from "antd";
import React from "react";

const ImageCard = ({ image }) => {
	return (
		<>
			<Image
				// onClick={() => {
				// 	if (!id) {
				// 		navigate(`/image/${image?.id}`);
				// 		console.log("click", id);
				// 	}
				// }}
				className='mb-4'
				width={"300px"}
				height={"250px"}
				src={image?.webformatURL}></Image>
		</>
	);
};

export default ImageCard;
