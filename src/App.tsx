import React from 'react';
import './App.css';
import LoginForm from "./Pages/Login";
import {Button, Image, Menu} from "semantic-ui-react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Thermometer from "./Pages/Thermometer";
import Messungen from "./Pages/Messungen";
import MessungDetail from "./Pages/MessungDetail";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Menu fixed='top' inverted>
                        <Menu.Item as={Link} to={'/login'} header>
                            <Image size='mini' inline src='KeepCoolIcon.png' style={{marginRight: '1.5em'}}/>
                            KeepCool®
                        </Menu.Item>
                        <Menu.Item as={Link} to={'/thermometer'}>
                            Thermometer
                        </Menu.Item>
                        <Menu.Item as={Link} to={'/messungen'}>
                            Messungen
                        </Menu.Item>
                        <Menu.Item position='right'>
                            <Button as={Link} to={'/login'} inverted>
                                Login
                            </Button>
                        </Menu.Item>
                    </Menu>
                </nav>
                <Routes>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/thermometer" element={<Thermometer/>}/>
                    <Route path="/messungen" element={<Messungen/>}/>
                    <Route path="/messung1" element={<MessungDetail />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
