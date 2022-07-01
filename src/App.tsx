import React from 'react';
import './App.css';
import LoginForm from "./Pages/login";
import {Menu, Segment, Dropdown, Image, Button} from "semantic-ui-react";
import {Nav, Navbar, NavDropdown, Container} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, useNavigate
} from "react-router-dom";
import Thermometer from "./Pages/thermometer";
import Messung from "./Pages/messung";

function App() {
    const [activeItem, setActiveItem] = React.useState("home");
    // const navigate = useNavigate();

    const handleItemClick = (e: any, {name}: any) => setActiveItem(name as string);

    return (
        <Router>
            <div>
                <nav>
                    {/*<p>Hallo Welt!</p>*/}
                    {/*<Link to={'/'}>Home</Link>*/}
                    {/*<Link to={'/login'}>Login</Link>*/}
                    {/*<Segment inverted >*/}
                    {/*    <Menu inverted pointing secondary attached={"top"}>*/}
                    {/*        <Menu.Item*/}
                    {/*            name='home'*/}
                    {/*            active={activeItem === 'home'}*/}
                    {/*            onClick={handleItemClick}*/}
                    {/*        />*/}
                    {/*        <Menu.Item*/}
                    {/*            name='messages'*/}
                    {/*            active={activeItem === 'messages'}*/}
                    {/*            onClick={handleItemClick}*/}
                    {/*        />*/}
                    {/*        <Menu.Item*/}
                    {/*            name='friends'*/}
                    {/*            active={activeItem === 'friends'}*/}
                    {/*            onClick={handleItemClick}*/}
                    {/*        />*/}
                    {/*    </Menu>*/}
                    {/*</Segment>*/}
                    <Menu fixed='top' inverted>
                        <Container>
                            <Menu.Item as={Link} to={'/login'} header>
                                <Image size='mini' inline src='KeepCoolIcon.png' style={{marginRight: '1.5em'}}/>
                                KeepCool®
                            </Menu.Item>
                            <Menu.Item as={Link} to={'/thermometer'}>
                                Thermometer
                            </Menu.Item>
                            <Menu.Item as={Link} to={'/messung'}>
                                Messung
                            </Menu.Item>

                            {/*<Dropdown item simple text='Schnellzugriff'>*/}
                            {/*    <Dropdown.Menu>*/}
                            {/*        <Dropdown.Item as={Link} to={'/thermometer'}>*/}
                            {/*            Thermometer*/}
                            {/*        </Dropdown.Item>*/}
                            {/*        <Dropdown.Item as={Link} to={'/messung'}>*/}
                            {/*            Messung*/}
                            {/*        </Dropdown.Item>*/}
                            {/*        <Dropdown.Divider/>*/}
                            {/*        <Dropdown.Header>Header Item</Dropdown.Header>*/}
                            {/*        <Dropdown.Item>*/}
                            {/*            <i className='dropdown icon'/>*/}
                            {/*            <span className='text'>Submenu</span>*/}
                            {/*            <Dropdown.Menu>*/}
                            {/*                <Dropdown.Item>List Item</Dropdown.Item>*/}
                            {/*                <Dropdown.Item>List Item</Dropdown.Item>*/}
                            {/*            </Dropdown.Menu>*/}
                            {/*        </Dropdown.Item>*/}
                            {/*        <Dropdown.Item>List Item</Dropdown.Item>*/}
                            {/*    </Dropdown.Menu>*/}
                            {/*</Dropdown>*/}
                        </Container>
                        <Menu.Item position='right' >
                            <Button as={Link} to={'/login'} inverted >
                                Login
                            </Button>
                        </Menu.Item>
                    </Menu>
                    {/*<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">*/}
                    {/*    <Container>*/}
                    {/*        <Navbar.Brand href="#home">❄️ KeepCool®</Navbar.Brand>*/}
                    {/*        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>*/}
                    {/*        <Navbar.Collapse id="responsive-navbar-nav">*/}
                    {/*            <Nav className="me-auto">*/}
                    {/*                <Nav.Link href="#features">Dashboard</Nav.Link>*/}
                    {/*                <Nav.Link href="#pricing">Schnellsuche</Nav.Link>*/}
                    {/*                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">*/}
                    {/*                    <NavDropdown.Item href="#action/3.1">Messungen</NavDropdown.Item>*/}
                    {/*                    <NavDropdown.Item href="#action/3.2">Thermometer</NavDropdown.Item>*/}
                    {/*                    <NavDropdown.Item href="#action/3.3">Richtlinien</NavDropdown.Item>*/}
                    {/*                    <NavDropdown.Divider/>*/}
                    {/*                    <NavDropdown.Item href="#action/3.4">Admin Panel</NavDropdown.Item>*/}
                    {/*                </NavDropdown>*/}
                    {/*            </Nav>*/}
                    {/*            <Nav>*/}
                    {/*                <Nav.Link href="#deets">Hilfe</Nav.Link>*/}
                    {/*                <Nav.Link eventKey={2}><Link to={'/login'} style={{*/}
                    {/*                    textDecoration: 'inherit',*/}
                    {/*                    color: 'inherit'*/}
                    {/*                }}>Anmelden</Link></Nav.Link>*/}
                    {/*            </Nav>*/}
                    {/*        </Navbar.Collapse>*/}
                    {/*    </Container>*/}
                    {/*</Navbar>*/}
                </nav>
                <Routes>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/thermometer" element={<Thermometer/>}/>
                    <Route path="/messung" element={<Messung/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
