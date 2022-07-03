import React from 'react';
import './App.css';
import LoginForm from "./Pages/login";
import {Button, Image, Menu} from "semantic-ui-react";
import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Thermometer from "./Pages/thermometer";
import Messung from "./Pages/messung";

function App() {
    return (
        <Router>
            <div>
                <nav>
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
                        </Container>
                        <Menu.Item position='right' >
                            <Button as={Link} to={'/login'} inverted >
                                Login
                            </Button>
                        </Menu.Item>
                    </Menu>
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
