import React from 'react';
import {BtnTheme} from './style.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';

//____
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import App from '../../App.jsx';

// import Styles
import {GlobalStyle} from '../../Styles/GlobalStyles';
import './style.css';
import '../../Styles/ButtonStyle.css';

// import Logo
import {Logo} from '../../texts/logoHeader.jsx';





export default function NavBar () {
  
  return (
    <>
    <Navbar className="navbar" expand="sm">
			<Container fluid >
				<Navbar.Brand href="#action1"><Logo/> </Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
							<Nav.Link> <Link to="/">Inicio </Link> </Nav.Link>
							<Nav.Link> <Link to="/Preco">Preço </Link> </Nav.Link>
							<Nav.Link> <Link to="/Portfolio">Portfolio </Link> </Nav.Link>					
						</Nav>
			
						<NavDropdown title="PT" id="navbarDropdown">
							<NavDropdown.Item href="#action3">EN</NavDropdown.Item>
							<NavDropdown.Item href="#action4">ES</NavDropdown.Item>	
						</NavDropdown>
						<BtnTheme />
						<Button className="BtnPrimary">Contato</Button>
					</Navbar.Collapse>

				
				</Container>
			</Navbar>


			
    </>
  )
};