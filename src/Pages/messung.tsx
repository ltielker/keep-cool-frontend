import {Button, Label, Icon, Header, Modal, Segment} from "semantic-ui-react";
import React, {useEffect, useState} from "react";

const Messung = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [log, setLog] = useState<String[]>([]);
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
    }, [new Date().toLocaleTimeString()]);

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
                <Button onClick={fetchData} content={'Log new Data'}/>
                <Modal basic onClose={() => {setModalOpen(false)}} open={modalOpen} size={'large'}>
                    <Header icon>
                            <Icon name='thermometer full'/>
                        Hohe Temperatur erkannt
                    </Header>
                    <Modal.Actions>
                        <Button color='green' inverted onClick={() => setModalOpen(false)}>
                            <Icon name='checkmark' /> OK
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Segment>
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