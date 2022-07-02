import {Button, Label, Icon, Header, Modal, Segment, Grid, Input} from "semantic-ui-react";
import React, {useEffect, useState} from "react";

const Messung = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [log, setLog] = useState<String[]>([]);
    const [messungAddOpen, setMessungAddOpen] = useState(false);
    const [thermometerData, setThermometerData] = useState<{ timestamp: any, temperature: number, unit: string }>({
        timestamp: 0,
        temperature: 0,
        unit: "°C"
    });
    const [error, setError] = useState<{}>({});

    useEffect(() => {
        fetch("http://localhost:8089/temperature")
            .then(res => res.json())
            .then((data) => {
                    console.log(data);
                    if (data.temperature > 10) {
                        setModalOpen(true);
                    }
                    setThermometerData(data);
                }, (error) => {
                    setError(error);
                }
            )
    }, []);

    const clearLog = () => {
        setLog([])
    };

    const fetchData = () => {
        fetch("http://localhost:8089/temperature")
            .then(res => res.json())
            .then((data) => {
                    setThermometerData(data);
                }, (error) => {
                    setError(error);
                }
            )
        setLog([
            `${thermometerData.timestamp}: ${thermometerData.temperature}${thermometerData.unit}`,
            ...log
        ].slice(0, 20));
    };

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
                <Button onClick={() => setMessungAddOpen(!messungAddOpen)} content={'Neue Messung erstellen'}/>
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
                                <Input placeholder={"Name"} onChange={() => console.log("Hallo")} type={"text"} fluid/>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as={"h4"}>ThermometerID</Header>
                                <Input placeholder={"ID"} onChange={() => console.log("Hallo")} type={"text"} fluid/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Header as={"h4"}>Maximale Temperatur</Header>
                                <Input placeholder={"Name"} onChange={() => console.log("Hallo")} type={"text"} fluid/>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as={"h4"}>Minimalste Temperatur</Header>
                                <Input placeholder={"ID"} onChange={() => console.log("Hallo")} type={"text"} fluid/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Column textAlign={"left"} width={3} verticalAlign={"bottom"}>
                            <Button onClick={() => console.log("Hallo")} content={'Thermometer hinzufügen'}/>
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