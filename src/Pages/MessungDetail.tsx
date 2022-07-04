import {Button, Header, Icon, Segment, Table} from "semantic-ui-react";
import React, {useState} from "react";

const MessungDetail = () => {
    // const [thermometer, setThermometer] = useState<{
    //     name: string,
    //     thermometerID: number,
    //     minTemperatur: number,
    //     maxTemperatur: number,
    //     id: number
    // }>();
    const [log, setLog] = useState<String[]>([]);

    const clearLog = () => {
        setLog([]);
    }

    const loggeTemperatur = () => {
        setLog([...log, "logged"]);
        fetch("http://localhost:8089/temperature", {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
            // ,
            // body: JSON.stringify({
            //     "messungID": 1,
            // })
        })
            .then(res => res.json())
            .then((res: {tinestamp: string, temperature: number}) => {
                setLog([...log, `${res.tinestamp} : ${res.temperature}°C`]);
            },
            (error) => {
                console.log(error)
            });
    }

    return (
        <>
            <Segment style={{height: '2vh'}}/>
            <Segment>
                <Header as='h1'>
                    <Icon name='edit'/>
                    <Header.Content>Messungen</Header.Content>
                </Header>
            </Segment>
            <Segment>
                <Header as={"h3"}>
                    <Icon name='info circle'/>
                    <Header.Content>Eigenschaften der Messung</Header.Content>
                </Header>
                <Table singleLine size={"large"}>
                    <Table.Row>
                        <Table.Cell>Name</Table.Cell>
                        <Table.Cell>Messung 1</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Thermometer</Table.Cell>
                        <Table.Cell>Thermometer 1</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Min. Temperatur</Table.Cell>
                        <Table.Cell>10 °C</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Max. Temperatur</Table.Cell>
                        <Table.Cell>20 °C</Table.Cell>
                    </Table.Row>
                </Table>
            </Segment>
            <Segment>
                <Header as={"h3"}>
                    <Icon name='chart bar'/>
                    <Header.Content>Temperaturverlauf</Header.Content>
                </Header>
                <Segment.Group>
                    <Segment style={{minHeight: '5vh'}}>
                        Ausgabe
                        <Button compact size={"small"} floated={"right"} onClick={loggeTemperatur} icon={"terminal"} />
                        <Button compact size='small' floated='right' onClick={clearLog} icon={'trash'}/>
                    </Segment>
                    <Segment secondary>
              <pre>
                {log.map((e, i) => (
                    <div key={i}>{e}</div>
                ))}
              </pre>
                    </Segment>
                </Segment.Group>
            </Segment>
        </>
    );
}
export default MessungDetail;