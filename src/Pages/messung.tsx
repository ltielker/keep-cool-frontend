import {Button, Grid, Header, Icon, Input, Modal, Segment} from "semantic-ui-react";
import React, {ChangeEvent, useState} from "react";

const Messung = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [log, setLog] = useState<String[]>([]);
    const [messungAddOpen, setMessungAddOpen] = useState(false);

    // const [error, setError] = useState<{}>({});
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
            .then((data: {"id": number}) => {
                    setMessungAddOpen(false);
                    setLog([...log, "Messung angelegt"]);
                    console.log(data.id)
                }, (error) => {
                    console.log(error);
                }
            )
    }

    // const fetchData = () => {
    //     fetch("http://localhost:8089/temperature")
    //         .then(res => res.json())
    //         .then((data) => {
    //                 setThermometerData(data);
    //             }, (error) => {
    //                 setError(error);
    //             }
    //         )
    //     setLog([
    //         `${thermometerData.timestamp}: ${thermometerData.temperature}${thermometerData.unit}`,
    //         ...log
    //     ].slice(0, 20));
    // };

    return (
        <>
            <Segment style={{height: '2vh'}}/>
            <Segment>
                <Header as='h1'>
                    <Icon name='edit'/>
                    <Header.Content>Messung</Header.Content>
                </Header>
            </Segment>
            <Segment>
                <Button onClick={() => setMessungAddOpen(!messungAddOpen)} icon={'plus'}
                        content={'Neue Messung erstellen'}/>
                <Modal basic onClose={() => {
                    setModalOpen(false)
                }} open={modalOpen} size={'large'}>
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
            <Segment.Group>
                <Segment style={{minHeight: '5vh'}}>
                    Messungen
                    <Button
                        compact
                        size='small'
                        floated='right'
                        onClick={clearLog}
                    >
                        Clear
                    </Button>
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
export default Messung;