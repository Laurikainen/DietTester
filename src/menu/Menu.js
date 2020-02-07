import * as React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import NavBarLoggedIn from "../navbarloggedin/NavBarLoggedIn";
import './Menu.css'

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

export class Menu extends React.Component {
    render() {
        return (
            <div id="menu-container">
                <NavBarLoggedIn/>
                <div id="menu">
                    <h1 className="menu-title">
                        7-Day meal plan preview
                    </h1>
                    <Card border="success">
                        <Card.Body>
                            <Card.Title style={{ color: 'ForestGreen' }}>Fact about veganism</Card.Title>
                            <Card.Text style={{ color: 'ForestGreen' }}>
                                Switching to a diet centered around plants can yield significant performance advantages,
                                providing optimal fuel, increasing blood flow, making muscles more efficient,
                                and speeding recovery by lowering inflammation.
                            </Card.Text>
                        </Card.Body>
                    </Card>
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
                        <div>
                            <Card border="success">
                                <Card.Body>
                                    <Card.Title style={{ color: 'ForestGreen' }}>08.02.2020</Card.Title>
                                    <Card.Text>
                                        <Card border="success">
                                            <Card.Body>

                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Chive waffles with maple & soy mushrooms</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 45 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Breakfast1} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                        <p>
                                        </p>
                                        <Card border="success">
                                            <Card.Body>

                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Homemade Roasted Tomato Basil Soup</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 85 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Lunch3} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                        <p>
                                        </p>
                                        <Card border="success">
                                            <Card.Body>

                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Buffalo Cauliflower Wings With Cashew Ranch (GF)</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 50 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Dinner1} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card border="success">
                                <Card.Body>
                                    <Card.Title style={{ color: 'ForestGreen' }}>09.02.2020</Card.Title>
                                    <Card.Text style={{ color: 'ForestGreen' }}>
                                        <Card border="success">
                                            <Card.Body>

                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Vegan sabich sandwich</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 45 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Lunch2} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                        <p>
                                        </p>
                                        <Card border="success">
                                            <Card.Body>
                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Lentil stroganoff (Oil-free, GF)</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 45 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Strog} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                        <p>
                                        </p>
                                        <Card border="success">
                                            <Card.Body>
                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Chili sin carne</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 15 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Dinner2} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card border="success">
                                <Card.Body>
                                    <Card.Title style={{ color: 'ForestGreen' }}>10.02.2020</Card.Title>
                                    <Card.Text>
                                        <Card border="success">
                                            <Card.Body>

                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Healthy chocolate orange scones</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 50 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Breakfast2} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                        <p>
                                        </p>
                                        <Card border="success">
                                            <Card.Body>

                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Vegan Mexican Chopped Salad with Avocado Dressing</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 85 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Lunch1} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                        <p>
                                        </p>
                                        <Card border="success">
                                            <Card.Body>
                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Hasselback potatoes with creamy spinach and ramps sauce</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 75 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Dinner3} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card border="success">
                                <Card.Body>
                                    <Card.Title style={{ color: 'ForestGreen' }}>11.02.2020</Card.Title>
                                    <Card.Text>
                                        <Card border="success">
                                            <Card.Body>
                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Lentil Banana Protein Pancakes</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 15 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Breakfast3} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                        <p>
                                        </p>
                                        <Card border="success">
                                            <Card.Body>
                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Vegan Curry-Spiced Sweet Potato & Wild Rice Burgers</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 75 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Lunch4} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                        <p>
                                        </p>
                                        <Card border="success">
                                            <Card.Body>
                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Coconut curry noodle bowl</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 15 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Dinner4} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card border="success">
                                <Card.Body>
                                    <Card.Title style={{ color: 'ForestGreen' }}>12.02.2020</Card.Title>
                                    <Card.Text>
                                        <Card border="success">
                                            <Card.Body>
                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Tofu Breakfast Bowl</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 15 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Breakfast4} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                        <p>
                                        </p>
                                        <Card border="success">
                                            <Card.Body>
                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Gwyneth Paltrow's Singapore Rice Noodles</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 25 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Lunch5} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                        <p>
                                        </p>
                                        <Card border="success">
                                            <Card.Body>
                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Ratatouille Casserole</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 30 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Dinner5} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card border="success">
                                <Card.Body>
                                    <Card.Title style={{ color: 'ForestGreen' }}>13.02.2020</Card.Title>
                                    <Card.Text>
                                        <Card border="success">
                                            <Card.Body>
                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Green protein power breakfast smoothie</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 10 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Breakfast5} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                        <p>
                                        </p>
                                        <Card border="success">
                                            <Card.Body>
                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Quick Margherita Naan Pizza</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 20 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Lunch6} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                        <p>
                                        </p>
                                        <Card border="success">
                                            <Card.Body>
                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Sweet onion tarts</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 45 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Dinner6} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card border="success">
                                <Card.Body>
                                    <Card.Title style={{ color: 'ForestGreen' }}>14.02.2020</Card.Title>
                                    <Card.Text>
                                        <Card border="success">
                                            <Card.Body>
                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Coconut & banana pancakes</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 25 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Breakfast6} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                        <p>
                                        </p>
                                        <Card border="success">
                                            <Card.Body>
                                                    <Row>
                                                        <Col>
                                                            <Card.Title style={{ color: 'ForestGreen' }}>Warm Pasta Salad</Card.Title>
                                                            <Card.Text style={{ color: 'ForestGreen' }}>
                                                                Time to make: 50 min
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Image src={Lunch7} roundedCircle />
                                                        </Col>
                                                    </Row>
                                            </Card.Body>
                                        </Card>
                                        <p>
                                        </p>
                                        <Card border="success">
                                            <Card.Body>
                                                <Row>
                                                    <Col>
                                                        <Card.Title style={{ color: 'ForestGreen' }}>Vegetarian meatballs</Card.Title>
                                                        <Card.Text style={{ color: 'ForestGreen' }}>
                                                            Time to make: 30 min
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Image src={Dinner7} roundedCircle />
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel>

                    <p>
                        <Button href="#calendaSynced" variant="outline-warning" size="lg" block>Sync my meal plan with calendar</Button>
                    </p>
                    <p>
                        <Button href="./shopping-list" variant="outline-success" size="lg" block>Get my shopping list</Button>
                    </p>
                    <p>
                        <Button href="./logged-in-home" variant="outline-danger" size="lg" block>Choose another plan</Button>
                    </p>
                </div>
            </div>
        );
    }
}

export default Menu;