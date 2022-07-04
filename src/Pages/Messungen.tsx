import {Button, Card, Grid, Header, Icon, Input, Modal, Segment} from "semantic-ui-react";
import React, {ChangeEvent, useState} from "react";
import {Link} from "react-router-dom";

const Messungen = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [log, setLog] = useState<String[]>([]);
    const [messungAddOpen, setMessungAddOpen] = useState(false);
    const [alleMessungen, setAlleMessungen] = useState<{
        name: string,
        thermometerID: number,
        minTemperatur: number,
        maxTemperatur: number,
        id: number
    }[]>([]);
    const [name, setName] = useState<string>("");
    const [thermometerID, setThermometerID] = useState<number>(0);
    const [minTemperature, setMinTemperature] = useState<number>(0);
    const [maxTemperature, setMaxTemperature] = useState<number>(0);

    const clearLog = () => {
        setLog([])
    };

    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleThermometerID = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number.parseInt(e.target.value) > 0) {
            setThermometerID(Number.parseInt(e.target.value));
        }
    }

    const handleMinTemperature = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number.parseInt(e.target.value) > 0) {
            setMinTemperature(Number.parseInt(e.target.value));
        }
    }

    const handleMaxTemperature = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number.parseInt(e.target.value) > 0) {
            setMaxTemperature(Number.parseInt(e.target.value));
        }
    }

    const handleCreateMessung = () => {
        fetch("http://localhost:8080/KeepCool-1.0/KeepCool/Messung/anlegen", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "name": name,
                "thermometerID": thermometerID,
                "minTemperature": minTemperature,
                "maxTemperature": maxTemperature
            })
        })
            .then(res => res.json())
            .then((data: { "id": number }) => {
                    setMessungAddOpen(false);
                    setAlleMessungen([...alleMessungen, {
                        "name": name,
                        "thermometerID": thermometerID,
                        "minTemperatur": minTemperature,
                        "maxTemperatur": maxTemperature,
                        "id": data.id
                    }]);
                    setLog([...log, "Messung angelegt"]);
                    console.log(data.id)
                }, (error) => {
                    console.log(error);
                    setMessungAddOpen(false);
                    setAlleMessungen([...alleMessungen, {
                        "name": name,
                        "thermometerID": thermometerID,
                        "minTemperatur": minTemperature,
                        "maxTemperatur": maxTemperature,
                        "id": 42
                    }]);
                    setLog([...log, "Messung angelegt"]);
                }
            )
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
                <Button onClick={() => setMessungAddOpen(!messungAddOpen)} icon={'plus'}
                        content={'Neue Messung erstellen'}/>
                <Modal basic open={modalOpen} size={'large'} onClose={() => {
                    setModalOpen(false)
                }}>
                    <Header icon>
                        <Icon name='thermometer full'/>
                        Hohe Temperatur erkannt
                    </Header>
                    <Modal.Actions>
                        <Button color='green' inverted onClick={() => setModalOpen(false)}>
                            <Icon name='checkmark'/> OK
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Segment>
            {
                messungAddOpen &&
                <Segment>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <Header as={"h4"}>Name</Header>
                                <Input placeholder={"Name der Messung"} onChange={handleName}
                                       type={"text"} fluid/>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as={"h4"}>ThermometerID</Header>
                                <Input placeholder={"ID des Thermometers"} onChange={handleThermometerID}
                                       type={"text"} fluid/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Header as={"h4"}>Minimaltemperatur</Header>
                                <Input placeholder={"Minimaltemperatur der Messung"}
                                       onChange={handleMinTemperature} type={"text"} label={{content: '°C'}}
                                       labelPosition={"right"} fluid/>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as={"h4"}>Maximaltemperatur</Header>
                                <Input placeholder={"Maximaltemperatur der Messung"}
                                       onChange={handleMaxTemperature} type={"text"} label={{content: '°C'}}
                                       labelPosition={"right"} fluid/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Column/>
                        <Grid.Column textAlign={"left"} verticalAlign={"bottom"}>
                            <Button onClick={handleCreateMessung} floated={"right"}
                                    content={'Thermometer hinzufügen'}/>
                        </Grid.Column>
                    </Grid>
                </Segment>
            }
            <Segment>
                <Header as='h3'>
                    <Icon name='list'/>
                    <Header.Content>Alle Messungen</Header.Content>
                </Header>
                {
                    (alleMessungen === undefined || alleMessungen.length === 0) &&
                    <Segment placeholder>
                        <Header icon>
                            <Icon name='search'/>
                            Scheinbar wurden noch keine Messungen angelegt
                        </Header>
                        <Segment.Inline>
                            <Button primary onClick={() => setMessungAddOpen(true)}>Messung anlegen</Button>
                        </Segment.Inline>
                    </Segment>
                }
                <Card.Group>
                    {
                        alleMessungen.map((messung: {
                            name: string,
                            thermometerID: number,
                            minTemperatur: number,
                            maxTemperatur: number,
                            id: number
                        }) => {
                            return (
                                <Card key={messung.id}>
                                    <Card.Content>
                                        <Card.Header content={messung.name}/>
                                        <Card.Meta>
                                            <strong>ID</strong> - {messung.id}
                                        </Card.Meta>
                                        <Card.Description>
                                            <strong>Maximaltemperatur</strong> - {messung.maxTemperatur}°C <br/>
                                            <strong>Minimaltemperatur</strong> - {messung.minTemperatur}°C
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui two buttons'>
                                            <Button color='green' icon={"graph"} as={Link} to={"/messung1"}>
                                                Messen
                                            </Button>
                                            <Button color='red' icon={"trash"}>
                                                Löschen
                                            </Button>
                                        </div>
                                    </Card.Content>
                                </Card>
                            )
                        })
                    }
                </Card.Group>
            </Segment>
            <Segment.Group>
                <Segment style={{minHeight: '5vh'}}>
                    Messungen
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
        </>
    );
}
export default Messungen;