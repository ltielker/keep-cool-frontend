import {Button, Header, Icon, Segment, Table, Modal} from "semantic-ui-react";
import React, {useState} from "react";
import {Messung} from "../Types";

interface MessungDetailProps {
    messung: Messung
}

const MessungDetail = (props: MessungDetailProps) => {
    const [messung] = useState<Messung>(props.messung);
    const [log, setLog] = useState<String[]>([]);
    const [notificationPermission, setNotificationPermission] = useState<boolean>(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [toHot, setToHot] = useState(false);

    Notification.requestPermission().then(permission => setNotificationPermission(permission === "granted"))

    const clearLog = () => {
        setLog([]);
    }

    const loggeTemperatur = () => {
        setLog([...log, "logged"]);
        fetch("http://localhost:8080/KeepCool-1.0/KeepCool/Messwert/messen", {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then((res: {date: string, time: number, temperatur: number, durchschnittstemperatur: string, akku: number}) => {
                    setLog([...log, `${res.date}, ${res.time}: ${res.temperatur}°C, Durchscnitt: ${res.durchschnittstemperatur} °C, Akkustand: ${res.akku}%`]);
                if (res.temperatur < messung.minTemperatur) {
                    if (notificationPermission) {
                        new Notification("KeepCool - Temperatur unterschritten", {
                            body: `${res.date}, ${res.time}: ${res.temperatur} °C, Durchscnitt: ${res.durchschnittstemperatur} °C, Akkustand: ${res.akku}%`
                        });
                        setToHot(false);
                        setModalOpen(true);
                    }
                }

                if (res.temperatur > messung.minTemperatur) {
                    if (notificationPermission) {
                        new Notification("KeepCool - Temperatur überschritten", {
                            body: `${res.date}, ${res.time}: ${res.temperatur} °C, Durchscnitt: ${res.durchschnittstemperatur} °C, Akkustand: ${res.akku}%`
                        });
                        setToHot(true);
                        setModalOpen(true);
                    }
                }
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
                        <Table.Cell>{messung.name}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>ID</Table.Cell>
                        <Table.Cell>{messung.id}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Thermometer</Table.Cell>
                        <Table.Cell>{messung.thermometerID}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Min. Temperatur</Table.Cell>
                        <Table.Cell>{messung.minTemperatur} °C</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Max. Temperatur</Table.Cell>
                        <Table.Cell>{messung.maxTemperatur} °C</Table.Cell>
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
            <Modal basic onClose={() => setModalOpen(false)} open={modalOpen} size='small'>
                <Header icon>
                    <Icon name='warning sign' />
                    {toHot ? "Temperatur zu hoch" : "Temperatur zu niedrig"}
                </Header>
                <Modal.Content>
                    <p>
                        {
                            toHot ?
                            "Die Temperatur ist zu hoch. Bitte kühlen Sie die Ware."
                            :
                            "Die Temperatur ist zu niedrig. Bitte stellen Sie die Kühlung ein wenig wärmer."
                        }
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' inverted onClick={() => setModalOpen(false)}>
                        <Icon name='checkmark' /> Verstanden
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    );
}
export default MessungDetail;
