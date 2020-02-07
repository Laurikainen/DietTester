import * as React from "react";
import './LoggedInHome.css'
import Button from "react-bootstrap/Button";
import NavBarLoggedIn from "../navbarloggedin/NavBarLoggedIn";
import {Card, CardDeck} from "react-bootstrap";

export class LoggedInHome extends React.Component {

    render() {
        return (
            <div id="logged-in-home-container">
                <NavBarLoggedIn/>
                <div id="diets">
                    <h1>
                        Pick a new diet to try
                    </h1>
                    <CardDeck>
                        <Card>
                            <Card.Body>
                                <Card.Title>Vegan</Card.Title>
                                <hr/>
                                <Card.Text className="text-secondary">
                                    A vegan diet totally eliminates all animal products.
                                    Recent studies found that a plant-based diet can reduce your chances of certain
                                    cancers and of developing type 2 diabetes. A vegan diet can also reduce blood
                                    pressure levels and lower cholesterol!
                                </Card.Text>

                            </Card.Body>
                            <Card.Footer>
                                <Button href="./menu" variant="outline-success" size="lg">Go
                                    vegan</Button>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Vegetarian</Card.Title>
                                <hr/>
                                <Card.Text className="text-secondary">
                                    Vegetarians abstain from the consumption of meat. Unlike vegans, dairy
                                    products and eggs are allowed.
                                    A well-planned vegetarian diet is healthy, nutritionally adequate, and may be
                                    beneficial in the prevention and treatment of certain diseases.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="outline-success" size="lg" disabled>Go vegetarian</Button>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Ketogenic</Card.Title>
                                <hr/>
                                <Card.Text className="text-secondary">
                                    The ketogenic diet aims to minimize the consumption of carbohydrates and instead
                                    prefers foods with a high fat and protein content.
                                    Originally developed for epilepsy treatment, various research has shown it to
                                    also be an
                                    effective way to lose weight and lower risk factors for disease.
                                    Ketogenic diet relies on meats, fish, eggs, nuts and seeds, butter, cream,
                                    healthy oils, avocados and low-carbohydrate vegetables.
                                </Card.Text>

                            </Card.Body>
                            <Card.Footer>
                                <Button variant="outline-success" size="lg" disabled>Go ketogenic</Button>
                            </Card.Footer>
                        </Card>
                    </CardDeck>

                    <hr/>

                    <CardDeck>
                        <Card>
                            <Card.Body>
                                <Card.Title>Macrobiotic</Card.Title>
                                <hr/>
                                <Card.Text className="text-secondary">
                                    The macrobiotic diet is a pescatarian diet.
                                    The ideal breakdown is 60% whole grains, 30% vegetables, and 10% beans,
                                    tofu, or
                                    sea vegetables (seaweed).
                                    The macrobiotic diet has consistently been shown to help lower the risk of
                                    heart
                                    disease, cancer, and diabetes.
                                    The diet has also been shown to reduce levels of circulating estrogen in
                                    women,
                                    which may help lower risk of breast and other cancers.
                                </Card.Text>

                            </Card.Body>
                            <Card.Footer>
                                <Button variant="outline-success" size="lg" disabled>Go macrobiotic</Button>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Low Sugar</Card.Title>
                                <hr/>
                                <Card.Text className="text-secondary">
                                    The low sugar diet involves lowering your sugar intake, both added sugars and
                                    natural.
                                    The primary goal of a low sugar diet is to maintain a healthy level of glucose
                                    in the body:
                                    High blood glucose levels can act negatively in a domino-like effect in the
                                    body, leading to a number of
                                    health complications. A low sugar diet has been known to help with and/or
                                    prevent diabetes, heart disease,
                                    brain health, mood levels, weight loss, inflammation, and even the health of
                                    your skin.
                                </Card.Text>

                            </Card.Body>
                            <Card.Footer>
                                <Button variant="outline-success" size="lg" disabled>Go low sugar</Button>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Paleo</Card.Title>
                                <hr/>
                                <Card.Text className="text-secondary">
                                    A paleo diet is a dietary plan based on foods similar to what might have been
                                    eaten during the Paleolithic era.
                                    A paleo diet typically includes lean meats, fish, fruits, vegetables, nuts and
                                    seeds — foods that in the past could be
                                    obtained by hunting and gathering. Most people experience weight loss and muscle
                                    growth while eating a Paleo diet.
                                    Improved metabolic processes and gut health, better sleep, stress management,
                                    all of these are proved to
                                    become better with paleo.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="outline-success" size="lg" disabled>Go paleo</Button>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        )
    }
}

export default LoggedInHome;
