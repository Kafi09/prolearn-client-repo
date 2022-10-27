import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../../assets/image/pro.png';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/home" ><Link to='/'><img style={{ width: '200px' }} src={logo} alt=''></img></Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/courses/:id"><Link style={{ color: 'white' }} to='/'>Courses</Link></Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/faq">FAQ</Nav.Link>
                       
                    </Nav>

                    
                    
                    <Nav>
                        <Nav.Link>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link style={{ color: 'white' }} to='/login'>Login</Link>
                                        <Link style={{ color:'white' }} 
                                        to='/register'>Register</Link>
                                    </>
                            }


                        </Nav.Link>
                        <Link style={{ color: 'white' }} to={"/profile"} eventKey={2}>
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUserCircle></FaUserCircle>
                            }
                        </Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;