import React from 'react';
import './App.css';
import LoginForm from "./Pages/Login";
import {Button, Image, Menu} from "semantic-ui-react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Thermometer from "./Pages/Thermometer";
import Messungen from "./Pages/Messungen";
import MessungDetail from "./Pages/MessungDetail";
import {Messung} from "./Types";
import Richtlinien from "./Pages/Richtlinien";

function App() {
    const [messung, setMessung] = React.useState<Messung>({} as Messung);

    return (
        <Router>
            <div style={{overflow: "hidden"}}>
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
                        <Menu.Item as={Link} to={'/richtlinien'}>
                            Richtlinien
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
                    <Route path="/messungen" element={<Messungen setMessung={setMessung}/>}/>
                    <Route path="/messungDetail" element={<MessungDetail messung={messung} />}/>
                    <Route path="/richtlinien" element={<Richtlinien />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
