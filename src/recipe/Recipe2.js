import * as React from "react";
import './Recipe.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavBarLoggedIn from "../navbarloggedin/NavBarLoggedIn";
import Dinner1 from "../resources/dinner1.png"
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
                        Tasty vegan lasagna
                        <h5><Badge variant="success">3 hours</Badge>{' '}</h5>
                    </h1>

                    <Container>
                        <Row>
                            <Col>
                                <Card border="success">
                                    <Card.Body>
                                        <Card.Title>Ingredients</Card.Title>
                                        {this.renderListElements([
                                            "2 red onions",
                                            "2 cloves of garlic",
                                            "2 carrots",
                                            "2 sticks of celery",
                                            "2 sprigs of fresh rosemary",
                                            "olive oil",
                                            "1 teaspoon dried chilli flakes",
                                            "100 ml vegan Chianti wine",
                                            "1 x 400g tin of green lentils",
                                            "2 x 400g tins of quality plum tomatoes",
                                            "1 kg mixed wild mushrooms",
                                            "4 heaped tablespoons plain flour",
                                            "800 ml almond milk",
                                            "70 g vegan Cheddar cheese",
                                            "300 g dried vegan lasagne sheets",
                                            "½ a bunch of fresh sage (15g)"
                                        ])
                                        }
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Image id="right" src={Dinner1} roundedCircle fluid/>
                            </Col>
                        </Row>
                        <br/>

                        <Card border="info">
                            <Card.Body>
                                <Card.Title>Instructions</Card.Title>
                                Peel the onions, garlic and carrots, trim the celery and pick the rosemary leaves, then finely chop. Scrape into a large pan on a medium heat with 2 tablespoons of oil and the chilli flakes, and cook for 20 minutes, or until lightly golden. Pour in the wine and let it bubble and cook away, then tip in the lentils (juices and all). Scrunch in the tomatoes, add 1 tin’s worth of water, then simmer over a low heat for 1 hour. Season to perfection with sea salt and black pepper.
                                Meanwhile, working in batches, tear the mushrooms into a large non-stick frying pan on a medium heat and dry-fry for 5 minutes (this will bring out the nutty flavour), then transfer to a plate. Quickly wipe the pan, then pour in 4 tablespoons of oil and stir in the flour. Gradually whisk in the almond milk, simmer for 5 minutes to thicken, then pour into a blender. Add a third of the mushrooms and 50g of the cheese, season with salt and pepper, then blitz until smooth. Preheat the oven to 180ºC.
                                Spoon a layer of tomato sauce into the bottom of a 25cm x 35cm baking dish, scatter over a few mushrooms, then cover with lasagne sheets and 5 tablespoons of creamy sauce. Repeat these layers three more times, finishing with all the remaining creamy sauce and mushrooms. Grate over the remaining cheese. Pick the sage, toss in a little oil, then push into the top layer. Bake at the bottom of the oven for 50 minutes, or until golden and bubbling. Leave to stand for 15 minutes before serving. Delicious served with a simple seasonal salad.

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
