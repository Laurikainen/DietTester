import * as React from "react";
import Media from "react-bootstrap/Media";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBarLoggedIn from "../navbarloggedin/NavBarLoggedIn";
import Button from "react-bootstrap/Button";

export class ShoppingList extends React.Component {
    render() {
        return (
            <div>
                <NavBarLoggedIn/>
                <br/>
                <Media>
                    <Media.Body>
                        <h2 style={{textAlign: "center"}}>Shopping list</h2>
                    </Media.Body>
                </Media>
                <br/>
                <Container>
                    <hr/>
                    <Row>
                        <Col sm>
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                        Vegetables
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Tomatoes"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">3 Medium Tomatoes</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Tomatoes"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm"> 1 tin of Plum tomatoes (400g)</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Tomatoes"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">200g Cherry tomatoes</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Soybeans"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">170g of Tomato paste</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Potatoes"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">4 Potatoes</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Several Carrots</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">2 Cucumbers</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Soybeans"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">2 Bell peppers</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Soybeans"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">1 small Cauliflower floret</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Soybeans"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">1 small Eggplant</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Soybeans"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Fresh squash</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Soybeans"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Zucchini</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Onioons</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Chives (snipped)</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Rapeseed oil</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Olive oil</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Tumeric"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Turmeric (ground)</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Ground cumin</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Spinach</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Baby Spinach"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Baby spinach</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Paprika</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Peppers</InputGroup.Text>
                                            </InputGroup>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                        <Col sm={2}/>
                        <Col sm>
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                        Cereals & seeds & other interesting goods
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Pumpkin seeds"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Pumpkin seeds</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="hulled hemp seeds"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Hulled hemp seeds</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Tartar</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Baking soda</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Mushrooms</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Vegan puff pastry</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Balsamic glaze</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Maple syrup</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Malt syrup</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Garlic</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Garlic powder</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Rice (brown)</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Lavash</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Soybeans"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Fresh thyem</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Soybeans"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Fresh sage</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Cliantro</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Rice milk</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Polenta</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Plain flour</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Soybeans"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Oat flour</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Pita bread</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Baking powder</InputGroup.Text>
                                            </InputGroup>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col sm>
                            <Accordion defaultActiveKey="1">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                                        Fruits
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Apples"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Apples</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Pears"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Pears</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Bananas"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Bananas</InputGroup.Text>
                                            </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Checkbox aria-label="Soybeans"/>
                                            </InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Lime</InputGroup.Text>
                                        </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mango"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Mango</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Lemon juice</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Dates</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Avocado</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Avocado oil</InputGroup.Text>
                                            </InputGroup>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>

                        <Col sm={2}></Col>

                        <Col sm>
                            <Accordion defaultActiveKey="1">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                                        Beans & Nuts
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Soybeans"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Soy beans</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Soybeans"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Cashews</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Light soy sauce</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Chickpeas</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Kidney beans</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Pistachios"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Pistachios</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Almond milk"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Almond milk</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Soybeans"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Almond meal</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Coconut milk</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Coconut oil</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Tofu"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Tofu</InputGroup.Text>
                                            </InputGroup>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                    <hr/>
                    <br/>
                    <Row>
                        <Col/>
                        <Col>
                            <Button style={{width: '50vh'}} variant="outline-info" size="lg" variant="outline-success"
                                    block>Send to Phone</Button>
                        </Col>
                        <Col>
                            <Button style={{width: '50vh'}} href="./my-diet" variant="outline-info" size="lg"
                                    block>DONE</Button>
                        </Col>
                    </Row>
                    <Row></Row>
                    <br/>
                    <br/>
                    <br/>
                </Container>
            </div>

        );
    }
}

export default ShoppingList;