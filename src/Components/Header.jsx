import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Header = () => {
	let activeStyle = {
		textDecoration: "underline",
	};

	return (
		<Navbar bg='light' expand='lg'>
			<Container>
				<Navbar.Brand href='/'>Free-Stockz</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<NavLink
							className={"nav-link"}
							to='/'
							style={({ isActive }) => (isActive ? activeStyle : undefined)}>
							Home
						</NavLink>
						<NavLink
							className={"nav-link"}
							to='/contact'
							style={({ isActive }) => (isActive ? activeStyle : undefined)}>
							Contact
						</NavLink>
						<NavLink
							className={"nav-link"}
							to='/blogs'
							style={({ isActive }) => (isActive ? activeStyle : undefined)}>
							Blogs
						</NavLink>
						<NavLink
							className={"nav-link"}
							to='/images'
							style={({ isActive }) => (isActive ? activeStyle : undefined)}>
							Images{" "}
						</NavLink>
						<NavLink
							className={"nav-link"}
							to='/videos'
							style={({ isActive }) => (isActive ? activeStyle : undefined)}>
							Videos
						</NavLink>
						{/* <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
							<NavDropdown.Item href='/blogs'>Blogs</NavDropdown.Item>
							<NavDropdown.Item href='/images'>Images</NavDropdown.Item>
							<NavDropdown.Item href='/videos'>Videos</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4'>
								Separated link
							</NavDropdown.Item>
						</NavDropdown> */}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
