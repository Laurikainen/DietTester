import * as React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './ChosenDiet.css'

import NavBarLoggedIn from "../navbarloggedin/NavBarWithShoppingList";

import Breakfast1 from "../resources/breakfast1.png"
import Strog from "../resources/lentil-stroganoff.jpg"
import Breakfast2 from "../resources/breakfast2.png"
import Breakfast3 from "../resources/breakfast3.png"
import Breakfast4 from "../resources/breakfast4.png"
import Breakfast5 from "../resources/breakfast5.png"
import Breakfast6 from "../resources/breakfast6.png"

import Lunch1 from "../resources/lunch1.png"
import Lunch2 from "../resources/lunch2.png"
import Lunch3 from "../resources/lunch3.png"
import Lunch4 from "../resources/lunch4.png"
import Lunch5 from "../resources/lunch5.png"
import Lunch6 from "../resources/lunch6.png"
import Lunch7 from "../resources/lunch7.png"

import Dinner1 from "../resources/cauliflower-wings.jpg"
import Dinner2 from "../resources/dinner2.png"
import Dinner3 from "../resources/dinner3.png"
import Dinner4 from "../resources/dinner4.png"
import Dinner5 from "../resources/dinner5.png"
import Dinner6 from "../resources/dinner6.png"
import Dinner7 from "../resources/dinner7.png"


import Image from "react-bootstrap/Image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export class ChosenDiet extends React.Component {
    render() {
        return (
            <div id="menu-container">
                <NavBarLoggedIn/>
                <div id="menu">
                    <h1>7-Day meal plan</h1>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite={false}
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 3,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        <div >
                            <Card border="success">
                                <Card.Body>
                                    <Card.Title style={{ color: 'ForestGreen' }}>08.02.2020</Card.Title>
                                    <Card.Text>
                                        <Button variant="outline-success">
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Card.Title>Chive waffles with maple & soy mushrooms</Card.Title>
                                                    <Card.Text>
                                                        <h5><Badge variant="success">45 minutes</Badge>{' '}</h5>
                                                    </Card.Text>
                                                </Col>
                                                <Col>
                                                    <Image className="meal-plan-img" src={Breakfast1} roundedCircle />
                                                </Col>
                                            </Row>
                                        </Container>
                                        </Button>
                                        <p>
                                        </p>
                                        <Button variant="outline-success" href="./recipe2">
                                            <Container >
                                                <Row>
                                                    <Col>
                                                        <Card.Title>Homemade Roasted Tomato Basil Soup</Card.Title>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">85 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Image  className="meal-plan-img"  src={Lunch3} roundedCircle />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Button>
                                        <p>
                                        </p>
                                        <Button variant="outline-success" href="./recipe3">
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Card.Title>Buffalo Cauliflower Wings With Cashew Ranch (GF)</Card.Title>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">50 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Image  className="meal-plan-img" src={Dinner1} roundedCircle />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card border="success">
                                <Card.Body>
                                    <Card.Title style={{ color: 'ForestGreen' }}>09.02.2020</Card.Title>
                                    <Card.Text>
                                        <Button variant="outline-success">
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Card.Title>Vegan sabich sandwich</Card.Title>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">45 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Image  className="meal-plan-img"  src={Lunch2} roundedCircle />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Button>
                                        <p>
                                        </p>
                                        <Button variant="outline-success" href="./recipe1">
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Card.Title>Lentil stroganoff (Oil-free, GF)</Card.Title>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">45 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Image  className="meal-plan-img" src={Strog} roundedCircle />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Button>
                                        <p>
                                        </p>
                                        <Button variant="outline-success">
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Card.Title>Chili sin carne</Card.Title>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">15 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Image  className="meal-plan-img" src={Dinner2} roundedCircle />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card border="success">
                                <Card.Body>
                                    <Card.Title style={{ color: 'ForestGreen' }}>10.02.2020</Card.Title>
                                    <Card.Text>
                                        <Button variant="outline-success">
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Card.Title>Healthy chocolate orange scones</Card.Title>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">50 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Image className="meal-plan-img"  src={Breakfast2} roundedCircle />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Button>
                                        <p>
                                        </p>
                                        <Button variant="outline-success">
                                            <Container >
                                                <Row>
                                                    <Col>
                                                        <Card.Title>Vegan Mexican Chopped Salad with Avocado Dressing</Card.Title>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">85 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Image  className="meal-plan-img" src={Lunch1} roundedCircle />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Button>
                                        <p>
                                        </p>
                                        <Button variant="outline-success">
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Card.Title>Hasselback potatoes with creamy spinach and ramps sauce</Card.Title>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">75 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Image  className="meal-plan-img"  src={Dinner3} roundedCircle />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card border="success">
                                <Card.Body>
                                    <Card.Title style={{ color: 'ForestGreen' }}>11.02.2020</Card.Title>
                                    <Card.Text>
                                        <Button variant="outline-success">
                                                <Container>
                                                    <Row>
                                                        <Col>
                                                            <Card.Title>Lentil Banana Protein Pancakes</Card.Title>
                                                            <Card.Text>
                                                                <h5><Badge variant="success">15 minutes</Badge>{' '}</h5>
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image  className="meal-plan-img" src={Breakfast3} roundedCircle />
                                                        </Col>
                                                    </Row>
                                                </Container>
                                        </Button>
                                        <p>
                                        </p>
                                        <Button variant="outline-success">
                                            <Container >
                                                <Row>
                                                    <Col>
                                                        <Card.Title>Vegan Curry-Spiced Sweet Potato & Wild Rice Burgers</Card.Title>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">75 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Image  className="meal-plan-img" src={Lunch4} roundedCircle />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Button>
                                        <p>
                                        </p>
                                        <Button variant="outline-success">
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Card.Title>Coconut curry noodle bowl</Card.Title>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">15 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Image  className="meal-plan-img" src={Dinner4} roundedCircle />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card border="success">
                                <Card.Body>
                                    <Card.Title style={{ color: 'ForestGreen' }}>12.02.2020</Card.Title>
                                    <Card.Text>
                                        <Button variant="outline-success">
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Card.Title>Tofu Breakfast Bowl</Card.Title>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">15 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Image  className="meal-plan-img"  src={Breakfast4} roundedCircle />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Button>
                                        <p>
                                        </p>
                                        <Button variant="outline-success">
                                            <Container >
                                                <Row>
                                                    <Col>
                                                        <Card.Title>Gwyneth Paltrow's Singapore Rice Noodles</Card.Title>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">25 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Image  className="meal-plan-img" src={Lunch5} roundedCircle />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Button>
                                        <p>
                                        </p>
                                        <Button variant="outline-success">
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Card.Title>Ratatouille Casserole</Card.Title>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">30 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Image  className="meal-plan-img" src={Dinner5} roundedCircle />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card border="success">
                                <Card.Body>
                                    <Card.Title style={{ color: 'ForestGreen' }}>13.02.2020</Card.Title>
                                    <Card.Text>
                                        <Button variant="outline-success">
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Card.Title>Green protein power breakfast smoothie</Card.Title>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">10 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Image className="meal-plan-img"  src={Breakfast5} roundedCircle />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Button>
                                        <p>
                                        </p>
                                        <Button variant="outline-success">
                                            <Container >
                                                <Row>
                                                    <Col>
                                                        <Card.Title>Quick Margherita Naan Pizza</Card.Title>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">20 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Image  className="meal-plan-img" src={Lunch6} roundedCircle />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Button>
                                        <p>
                                        </p>
                                        <Button variant="outline-success">
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Card.Title>Sweet onion tarts</Card.Title>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">45 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Image  className="meal-plan-img" src={Dinner6} roundedCircle />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card border="success">
                                <Card.Body>
                                    <Card.Title style={{ color: 'ForestGreen' }}>14.02.2020</Card.Title>
                                    <Card.Text>
                                        <Button variant="outline-success">
                                                <Container>
                                                    <Row>
                                                        <Col>
                                                            <Card.Title>Coconut & banana pancakes</Card.Title>
                                                            <Card.Text>
                                                                <h5><Badge variant="success">25 minutes</Badge>{' '}</h5>
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image className="meal-plan-img"  src={Breakfast6} roundedCircle />
                                                        </Col>
                                                    </Row>
                                                </Container>
                                        </Button>
                                        <p>
                                        </p>
                                        <Button variant="outline-success">
                                            <Container >
                                                <Row>
                                                    <Col>
                                                        <Card.Title>Warm Pasta Salad</Card.Title>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">50 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Image  className="meal-plan-img" src={Lunch7} roundedCircle />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Button>
                                        <p>
                                        </p>
                                        <Button variant="outline-success">
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Card.Title>Vegetarian meatballs)</Card.Title>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">30 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Image  className="meal-plan-img" src={Dinner7} roundedCircle />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel>
                    <p>
                        <Button href="./shopping-list" variant="outline-warning" size="lg" block>Back to shopping list</Button>
                    </p>
                    <p>
                        <Button href="./daily-survey" variant="outline-success" size="lg" block>Take the daily survey</Button>
                    </p>
                </div>
            </div>
        );
    }
}

export default ChosenDiet;