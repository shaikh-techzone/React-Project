import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
	function Copyright(props) {
		return (
			<Typography
				variant='body2'
				color='text.secondary'
				align='center'
				{...props}>
				{"Copyright © "}
				<Link color='inherit'>Your Website</Link> {new Date().getFullYear()}
				{"."}
			</Typography>
		);
	}
	return <Copyright sx={{ mt: 5 }} />;
};

export default Footer;
