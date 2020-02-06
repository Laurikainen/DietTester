import * as React from "react";
import './Recipe.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavBarLoggedIn from "../navbarloggedin/NavBarLoggedIn";
import Strog from "../resources/lentil-stroganoff.jpg"
import {Col, Container, Image} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";

export class Recipe1 extends React.Component {

    renderListElements(elements) {
        const listElements = elements.map((el) => <li>{el}</li>);
        return (
            <ul>
                {listElements}
            </ul>
        );

    }

    render() {
        return (
            <div id="recipe-container">
                <NavBarLoggedIn/>
                <div id="recipe">
                    <h1 className="recipe-title">
                        Lentil Stroganoff (Oil-free, GF)
                        <h5><Badge variant="success">41 minutes</Badge>{' '}</h5>
                    </h1>

                    <Container>
                        <Row>
                            <Col>
                                <Card border="success">
                                    <Card.Body>
                                        <Card.Title>Ingredients</Card.Title>
                                        {this.renderListElements(["1 cup / 250 g green or brown lentils (uncooked)",
                                            "3 cups / 800 ml water", "1 onion", "2 dill pickles", "1 tsp salt", "5 Tbsp tomato sauce",
                                            "¼ tsp ground nutmeg", "1 Tbsp paprika powder", "1 Tbsp soy sauce or tamari",
                                            "2 Tbsp vegan cooking cream"])
                                        }
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Image id="right" src={Strog} roundedCircle fluid/>
                            </Col>
                        </Row>
                        <br/>

                        <Card border="info">
                            <Card.Body>
                                <Card.Title>Instructions</Card.Title>
                                Cover the lentils with water and add chopped onion. Bring to a boil. Let it boil for
                                30
                                - 40
                                minutes on a medium heat, until the lentils are soft. Add chopped pickles, salt,
                                tomato
                                sauce, nutmeg, paprika powder and if you want, some soy sauce and vegan cooking
                                cream.
                                Stir
                                and boil for a couple of minutes. Remove the heat and serve.
                            </Card.Body>
                        </Card>
                        <br/>
                        <Button href="/my-diet" variant="outline-success" size="lg" block>Back to diet plan</Button>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Recipe1;
