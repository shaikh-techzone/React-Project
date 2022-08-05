import React from "react";
import { Card } from "react-bootstrap";

const Home = () => {
	return (
		<Card
			bg='light'
			text='dark'
			style={{ width: "100%", height: "500px" }}
			className='mb-2 text-center '>
			{/* <Card.Header>Header</Card.Header> */}
			<Card.Body>
				<h1 className=''>WELCOME TO FREE-STOCKZ </h1>
				{/* <Card.Text>WELCOME TO FREE-STOCKZ</Card.Text> */}
			</Card.Body>
		</Card>
	);
};

export default Home;
