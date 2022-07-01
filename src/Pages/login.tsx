import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {Link} from "react-router-dom";

const LoginForm = () => (
    <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
                <Image src={'./KeepCoolIcon.png'} /> Melde dich an
            </Header>
            <Form size='large'>
                <Segment stacked>
                    <Form.Input
                        fluid
                        icon='user'
                        iconPosition='left'
                        placeholder='E-Mail'
                    />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Passwort'
                        type='password'
                    />
                    <Button color='blue' fluid size='large' as={Link} to={'/thermometer'}>
                        Login
                    </Button>
                </Segment>
            </Form>
            <Message>
                Noch kein Konto? <Button onClick={() => window.alert("Du dummer Hurensohn")}>Benachrichtige einen Administrator</Button>
            </Message>
        </Grid.Column>
    </Grid>
)

export default LoginForm