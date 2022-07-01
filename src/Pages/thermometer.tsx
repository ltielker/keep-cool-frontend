import {Button, Card, Grid, Header, Icon, Input, Segment} from "semantic-ui-react";
import React, {ChangeEvent, useState} from "react";

const Thermometer = () => {
    const [error, setError] = useState<{}>({});
    const [thermometerAddOpen, setThermometerAddOpen] = useState(false);
    const [name, setName] = useState<string>("");
    const [id, setId] = useState<number>(0);
    const [thermometer, setThermometer] = useState<{name: string, id: number}[]>([]);

    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleID = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number.parseInt(e.target.value) > 0) {
            setId(Number.parseInt(e.target.value));
        }
    }

    const handleCreateThermometer = () => {
        fetch("http://localhost:8089/thermometer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": name,
                "seriennummer": id
            })
        })
            .then(res => res.json())
            .then((data: {}) => {
                    setThermometerAddOpen(false);
                    setThermometer([...thermometer, {"name": name, "id": id}]);
                }, (error) => {
                    setError(error);
                    console.log(error);
                    setThermometer([...thermometer, {"name": name, "id": id}]);
                    console.log(thermometer);
                }
            )
    }

    // Notification.requestPermission();
    // const notification = new Notification('Kek', { body: "Du dummer Hurensohn" });


    return (
        <>
            <Segment style={{height: '2vh'}}/>
            <Segment>
                <Header as='h1'>
                    <Icon name='thermometer half'/>
                    <Header.Content>Thermometer</Header.Content>
                </Header>
            </Segment>
            <Segment>
                <Button onClick={() => setThermometerAddOpen(!thermometerAddOpen)} icon={"plus"}
                        content={'Neues Thermometer anlegen'}/>
            </Segment>
            {
                thermometerAddOpen &&
                <Segment>
                    <Grid columns={3}>
                        <Grid.Column width={7}>
                            <Header as={"h4"}>Name</Header>
                            <Input placeholder={"Name"} onChange={handleName} type={"text"} fluid/>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as={"h4"}>ID</Header>
                            <Input placeholder={"ID"} onChange={handleID} type={"text"} fluid/>
                        </Grid.Column>
                        <Grid.Column textAlign={"center"} width={2} verticalAlign={"bottom"}>
                            <Button onClick={handleCreateThermometer} content={'Thermometer hinzufügen'}/>
                        </Grid.Column>
                    </Grid>
                </Segment>
            }
            <Segment style={{height: thermometerAddOpen ? "65vh" : "75vh"}}>
                <Header as='h3'>Am System registrierte Thermometer</Header>
                {
                    thermometer.map(
                        (item: { name: string, id: number }) => {
                            return (
                                <Card.Group>
                                    <Card>
                                        <Card.Content>
                                            <Icon name='thermometer half'/>
                                            <Card.Header>{item.name}</Card.Header>
                                            <Card.Meta>{item.id}</Card.Meta>
                                            <Card.Description>
                                                Seriennummer, Temperatur, Einheit, Datum
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <div className='ui two buttons'>
                                                <Button color='blue' icon='info'/>
                                                <Button color='red' icon='trash'/>
                                            </div>
                                        </Card.Content>
                                    </Card>
                                </Card.Group>
                            )
                        }
                    )
                }
            </Segment>
        </>
    )
}
export default Thermometer