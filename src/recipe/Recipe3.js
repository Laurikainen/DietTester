import * as React from "react";
import './Recipe.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavBarLoggedIn from "../navbarloggedin/NavBarLoggedIn";
import Lunch2 from "../resources/lunch2.png"
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
                        Vegan sabich sandwich
                        <h5><Badge variant="success">45 minutes</Badge>{' '}</h5>
                    </h1>

                    <Container>
                        <Row>
                            <Col>
                                <Card border="success">
                                    <Card.Body>
                                        <Card.Title>Ingredients</Card.Title>
                                        {this.renderListElements([
                                            "1 young eggplant",
                                            "pinch sea salt",
                                            "2 medium firm potatoes peeled and boiled",
                                            "1/2 cup canned white beans drained and rinsed well",
                                            "1 tablespoon vegan mayonnaise",
                                            "1/4 teaspoon harissa paste more if your like it hotter",
                                            "3 whole dill pickles 1 per pita",
                                            "4 pita bread pockets",
                                            "1/2 cup hummus",
                                            "1/2 cup tabbouleh salad",
                                            "2 tbsp olive oil"
                                            ])
                                        }
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Image id="right" src={Lunch2} roundedCircle fluid/>
                            </Col>
                        </Row>
                        <br/>

                        <Card border="info">
                            <Card.Body>
                                <Card.Title>Instructions</Card.Title>
                                Chop eggplant in to 1cm cubes.
                                Heat a small fry pan and a good lug of olive oil, around 2 tablespoons.
                                Season the eggplant with sea salt and add it to the pan to cook on low-medium heat until slightly creamy but still holding it's shape - about 8 minutes. Test to make sure they are not still woody. Continue to cook if needed.
                                Remove from the heat and set aside.
                                Slice the boiled potatoes in to 1/2 cm thick slices.
                                In a small mixing bowl combine the white beans, mayonnaise and harissa paste.
                                Slice the dill pickles in to vertical slices around 1/2 cm thick.
                                Lay the pitas out on a board or plate to build the Sabich sandwich.
                                Smear a good amount of hummus on to each bread.
                                Cover half the pita with a layer of sliced potato.
                                Lay sliced pickle over the potato using a whole pickle per sandwich
                                Spoon 2 tablespoons of white bean mix on to the pickle.
                                Add 2-3 tablespoons of cooked eggplant.
                                Add 2 heaped tablespoons of the tabbouleh.
                                Fold the pita in half and serve.
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
