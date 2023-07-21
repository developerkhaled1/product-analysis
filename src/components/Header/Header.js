import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  CustomLink  from '../CustomLink/CustomLink';
import {RiMenu4Fill} from 'react-icons/ri';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="white" expand="lg" sticky="top 2rem" className='header'>
            <Container>
                <Navbar.Brand>
                    <Link className='title text-black' to='/'>Sports Car Store</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle'>
                    <RiMenu4Fill className='nav-icon'></RiMenu4Fill>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto nav-link py-4">
                    <CustomLink className='link' to='/home'>HOME</CustomLink>
                    <CustomLink className='link' to='/reviews'>REVIEWS</CustomLink>
                    <CustomLink className='link' to='/dashboard'>DASHBOARD</CustomLink>
                    <CustomLink className='link' to='/blogs'>BLOGS</CustomLink>
                    <CustomLink className='link' to='/about'>ABOUT</CustomLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;