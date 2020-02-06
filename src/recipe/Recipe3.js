import * as React from "react";
import './Recipe.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavBarLoggedIn from "../navbarloggedin/NavBarLoggedIn";
import Caul from "../resources/cauliflower-wings.jpg"
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
                        Buffalo Cauliflower Wings With Cashew Ranch (GF)
                        <h5><Badge variant="success">50 minutes</Badge>{' '}</h5>
                    </h1>

                    <Container>
                        <Row>
                            <Col>
                                <Card border="success">
                                    <Card.Body>
                                        <Card.Title>Ingredients</Card.Title>
                                        <h5 className="grey">To Make the Wings</h5>
                                        {this.renderListElements(["1 medium head cauliflower, chopped into bite-size florets",
                                            "½ cup almond flour", "½ cup water", "2 Tablespoons avocado oil",
                                            "1 teaspoon garlic powder", "¾ cup vegan gluten-free buffalo style wing sauce",
                                            "Celery, chopped for serving"])
                                        }
                                        <h5 className="grey">Cashew Ranch Dressing</h5>
                                        {this.renderListElements(["½ cup raw cashews (soaked 3-4 hours or overnight)",
                                            "½ cup water", "2 teaspoons dried dill", "1 teaspoon garlic powder",
                                            "1 teaspoon onion powder", "½ teaspoon sea salt",
                                            "Pinch of black pepper"])
                                        }
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Image id="right" src={Caul} roundedCircle fluid/>
                            </Col>
                        </Row>
                        <br/>

                        <Card border="info">
                            <Card.Body>
                                <Card.Title>Instructions</Card.Title>
                                Pre-heat oven to 230°C.
                                <br/><br/>
                                Add almond flour, water, oil, and garlic powder into a large bowl. Stir to combine. Add
                                cauliflower florets and toss to coat.
                                <br/><br/>
                                Spread coating cauliflower onto a baking sheet lined with parchment or sprayed with
                                cooking spray. Don't skip this step or the cauliflower will stick.
                                <br/><br/>
                                Bake for 30 minutes, tossing once at the 15-minute mark.
                                <br/><br/>
                                Remove pan from oven, pour wing sauce over the cauliflower and toss to coat. Set oven to
                                broil and broil cauliflower for 5-7 minutes.
                                <br/><br/>
                                While cauliflower is roasting, add soaked and drained cashews into a high powered
                                blender or food processor with ½ cup water, dill, garlic powder, onion powder, salt,
                                and pepper. Blend until smooth.
                                <br/><br/>
                                Serve cauliflower wings with cashew dressing and celery.
                            </Card.Body>
                        </Card>
                        <br/>
                        <Button href="/menu" variant="outline-success" size="lg" block>Back to diet plan</Button>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Recipe1;
