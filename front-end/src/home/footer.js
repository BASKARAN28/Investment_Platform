import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
return (
	<Box className="b1">
	<h1 style={{ color: "white",
				textAlign: "center",
				marginTop: "0px" }}>
		For More..
	</h1>
	<Container>
		<Row>
		<Column className="b2">
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column className="b3">
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column className="b4">
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column className="b5">
			<Heading>Social Media</Heading>
			<pre><FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				<SocialIcon url="https://facebook.com" />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				<SocialIcon url="https://instagram.com" />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>		
<SocialIcon url="https://twitter.com" />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				<SocialIcon url="https://youtube.com" />
				</span>
			</i>
			</FooterLink></pre>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
