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
                    <Row>
                        <Button variant="outline-warning" size="lg" block>Send to Phone</Button>
                    </Row>
                </Container>
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
                                                <InputGroup.Text id="inputGroup-sizing-sm">1 Fresh squash</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Soybeans"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">1 Zucchini</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">3 Onioons</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">small bunch of Chives (snipped)</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">2 tbsp of Rapeseed oil</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">half a bottle of Olive oil</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Tumeric"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">1.5 tbsp of Turmeric (ground)</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">1 tbsp of Ground cumin</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">2 handful of Spinach</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Baby Spinach"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">1-2 handful of Baby spinach</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">small pack of Paprika</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">just Peppers</InputGroup.Text>
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
                                                <InputGroup.Text id="inputGroup-sizing-sm">60 ml of Pumpkin seeds</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="hulled hemp seeds"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">2 tbsp of Hulled hemp seeds</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">1/2 teaspoon cream of Tartar</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm"> 1/4 teaspoon of Baking soda</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">300g of Mushrooms</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">1 sheet of Vegan puff pastry</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">a few drops of Balsamic glaze</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Little bit of Maple syrup</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">7g of barely Malt syrup</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">2 Garlics</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">1/2 teaspoon of Garlic powder</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">100g of Rice noodles</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">2 sheets of Lavash</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Soybeans"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">A bunch of Fresh thyem</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Soybeans"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">3g of Fresh sage</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">2 Coriander leaves</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">80ml of Rice milk</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">25g of Polenta</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">20g of Plain flour</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Soybeans"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">70g of Oat flour</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">a loaf of Pita bread</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">1/2 tsp of Baking powder</InputGroup.Text>
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
                                                <InputGroup.Text id="inputGroup-sizing-sm">1 Apple</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Bananas"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">2 Bananas</InputGroup.Text>
                                            </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Checkbox aria-label="Soybeans"/>
                                            </InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">1 Lime</InputGroup.Text>
                                        </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mango"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">1 Mango and dried mango</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">1 tsp of Lemon juice</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">1-2 Dates</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">2 Avocados</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">1 tablespoon of Avocado oil</InputGroup.Text>
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
                                                <InputGroup.Text id="inputGroup-sizing-sm">2 cups of Cashews milk</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">2 tsp of Light soy sauce</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">3dl of Chickpeas</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">100g of Kidney beans</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Almond milk"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">300ml of Almond milk</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Soybeans"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">tiny bit of Almond meal</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">can of Coconut milk</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Lemon"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">2 tabelspoons ofCoconut oil</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Tofu"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">200g of Tofu</InputGroup.Text>
                                            </InputGroup>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                    <hr/>
                    <br/>

                    <p>
                        <Button  href="./my-diet" variant="outline-success" size="lg" block>Confirm my 7-day meal plan</Button>
                    </p>
                    <br/>
                    <br/>
                    <br/>
                </Container>
            </div>

        );
    }
}

export default ShoppingList;