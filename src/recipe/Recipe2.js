import * as React from "react";
import './Recipe.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavBarLoggedIn from "../navbarloggedin/NavBarLoggedIn";
import Toma from "../resources/tomatosoup.jpg"
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
                        Homemade Roasted Tomato Soup
                        <h5><Badge variant="success">1 hour 25 minutes</Badge>{' '}</h5>
                    </h1>

                    <Container>
                        <Row>
                            <Col>
                                <Card border="success">
                                    <Card.Body>
                                        <Card.Title>Ingredients</Card.Title>
                                        <h5 className="grey">For the roasted tomatoes</h5>
                                        {this.renderListElements(["3 pounds roma or plum tomatoes, cut in half",
                                            "8 cloves garlic, peeled",
                                            "3 tablespoons olive oil",
                                            "Freshly ground salt and pepper"])
                                        }
                                        <h5 className="grey">For the caramelized onions</h5>
                                        {this.renderListElements(["½ tablespoon olive oil",
                                            "2 yellow onions, thinly sliced"])
                                        }
                                        <h5 className="grey">Additions to the soup</h5>
                                        {this.renderListElements(["½ cup packed basil leaves", "½ teaspoon dried oregano",
                                            "1-2 cups water or vegan broth, depending on how thick you want the soup",
                                            "Freshly ground salt and pepper, to taste"])
                                        }
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Image id="right" src={Toma} roundedCircle fluid/>
                            </Col>
                        </Row>
                        <br/>

                        <Card border="info">
                            <Card.Body>
                                <Card.Title>Instructions</Card.Title>
                                Preheat oven to 200°C. Line a large baking sheet with parchment paper. Place
                                halved tomatoes and garlic cloves on the baking sheet and drizzle with 3 tablespoons
                                of
                                olive oil. Generously season with salt and pepper. Roast in the oven for 40-45
                                minutes.
                                <br/>
                                <br/>

                                While the tomatoes are roasting, you can make the caramelized onions: Add ½
                                tablespoon
                                olive oil to a large pot and place over medium heat. Add the onion slices and stir
                                to
                                coat the onions with olive oil. Cook, stirring occasionally. Check onions every 5-10
                                minutes until they have completely caramelized and turned golden in color. This
                                usually takes 20 minutes.
                                <br/>
                                <br/>

                                Once tomatoes and garlic are done roasting, allow them to cool for 10 minutes, then
                                add
                                them to a food processor or high powered blender and blend until smooth. Next add
                                basil
                                and caramelized onions and blend again. Alternatively you can add the tomatoes to
                                the
                                large pot and use an immersion blender. It's really just about what you have
                                available
                                to you.
                                <br/>
                                <br/>

                                After blending, transfer back to pot, turn to medium low heat and add in oregano,
                                vegetarian broth and salt and pepper to taste. From there you can add in any
                                additional
                                add-ons you want. Allow tomato soup to simmer 10
                                minutes
                                before serving. Serves 4.
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
