import React from "react";
import { Card } from "react-bootstrap";

const VideosCard = ({ video }) => {
	return (
		<>
			<Card className='border border-success border-2 mb-3'>
				<iframe src={video?.videos?.small?.url} title={video?.tags[1]} />
			</Card>
		</>
	);
};

export default VideosCard;
