import {Header, Icon, Segment, Tab} from "semantic-ui-react";
import React from "react";
import {panes} from "../Panes";

const Richtlinien = () => {
    return (
        <>
            <Segment style={{height: '2vh'}}/>
            <Segment>
                <Header as='h1'>
                    <Icon name='law'/>
                    <Header.Content>Richtlinien</Header.Content>
                </Header>
            </Segment>
            <Tab menu={{secondary: true, pointing: true}} panes={panes}/>
        </>
    );
}

export default Richtlinien;