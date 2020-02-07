import * as React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBarLoggedIn from "../navbarloggedin/NavBarLoggedIn";

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

const responsive = {
    desktop: {
        breakpoint: { max: 2000, min: 1024 },
        items: 3,
        slidesToSlide: 1, // optional, default to 1.
    },
};


export class ChosenDiet extends React.Component {
    render() {
        return (
            <div>
                <NavBarLoggedIn/>
                <p>
                </p>
                <h1>7-Day meal plan</h1>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
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
                        <Card border="success" style={{margin: '20px'}}>
                            <Card.Body>
                                <Card.Title style={{textAlign: 'center'}}>08.02.2020</Card.Title>
                                <Card.Text>
                                    <Button variant="outline-success">
                                    <Container>
                                        <Row>
                                            <Col style={{ width: '8rem' }}>
                                                <Card.Title>Chive waffles with maple & soy mushrooms</Card.Title>
                                            </Col>
                                            <Col style={{ width: '8rem' }}>
                                                <Image style={{width: '110px', height: '110px'}} src={Breakfast1} roundedCircle />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Card.Text>
                                                    <h5><Badge variant="success">45 minutes</Badge>{' '}</h5>
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Container>
                                    </Button>
                                    <p>
                                    </p>
                                    <Button variant="outline-success" href="./recipe2">
                                        <Container >
                                            <Row>
                                                <Col style={{ width: '8rem' }}>
                                                    <Card.Title>Homemade Roasted Tomato Basil Soup</Card.Title>
                                                </Col>
                                                <Col style={{ width: '8rem' }}>
                                                    <Image style={{width: '110px', height: '110px'}} src={Lunch3} roundedCircle />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                        <h5><Badge variant="success">20 minutes</Badge>{' '}</h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Button>
                                    <p>
                                    </p>
                                    <Button variant="outline-success" href="./recipe3">
                                        <Container>
                                            <Row>
                                                <Col style={{ width: '8rem' }}>
                                                    <Card.Title>Buffalo Cauliflower Wings With Cashew Ranch (GF)</Card.Title>
                                                </Col>
                                                <Col style={{ width: '8rem' }}>
                                                    <Image style={{width: '110px', height: '110px'}} src={Dinner1} roundedCircle />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                        <h5><Badge variant="success">50 minutes</Badge>{' '}</h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card border="success" style={{margin: '20px'}}>
                            <Card.Body>
                                <Card.Title style={{textAlign: 'center'}}>09.02.2020</Card.Title>
                                <Card.Text>
                                    <Button variant="outline-success">
                                        <Container>
                                            <Row>
                                                <Col style={{ width: '8rem' }}>
                                                    <Card.Title>Vegan sabich sandwich</Card.Title>
                                                </Col>
                                                <Col style={{ width: '8rem' }}>
                                                    <Image style={{width: '110px', height: '110px'}} src={Lunch2} roundedCircle />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                        <h5><Badge variant="success">45 minutes</Badge>{' '}</h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Button>
                                    <p>
                                    </p>
                                    <Button variant="outline-success" href="./recipe1">
                                        <Container>
                                            <Row>
                                                <Col style={{ width: '8rem' }}>
                                                    <Card.Title>Lentil stroganoff (Oil-free, GF)</Card.Title>
                                                </Col>
                                                <Col style={{ width: '8rem' }}>
                                                    <Image style={{width: '110px', height: '110px'}} src={Strog} roundedCircle />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                        <h5><Badge variant="success">45 minutes</Badge>{' '}</h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Button>
                                    <p>
                                    </p>
                                    <Button variant="outline-success">
                                        <Container>
                                            <Row>
                                                <Col style={{ width: '8rem' }}>
                                                    <Card.Title>Chili sin carne</Card.Title>
                                                </Col>
                                                <Col style={{ width: '8rem' }}>
                                                    <Image style={{width: '110px', height: '110px'}} src={Dinner2} roundedCircle />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                        <h5><Badge variant="success">15 minutes</Badge>{' '}</h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card border="success" style={{margin: '20px'}}>
                            <Card.Body>
                                <Card.Title style={{textAlign: 'center'}}>10.02.2020</Card.Title>
                                <Card.Text>
                                    <Button variant="outline-success">
                                        <Container>
                                            <Row>
                                                <Col style={{ width: '8rem' }}>
                                                    <Card.Title>Healthy chocolate orange scones</Card.Title>
                                                </Col>
                                                <Col style={{ width: '8rem' }}>
                                                    <Image style={{width: '110px', height: '110px'}} src={Breakfast2} roundedCircle />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                        <h5><Badge variant="success">50 minutes</Badge>{' '}</h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Button>
                                    <p>
                                    </p>
                                    <Button variant="outline-success">
                                        <Container >
                                            <Row>
                                                <Col style={{ width: '8rem' }}>
                                                    <Card.Title>Vegan Mexican Chopped Salad with Avocado Dressing</Card.Title>
                                                </Col>
                                                <Col style={{ width: '8rem' }}>
                                                    <Image style={{width: '110px', height: '110px'}} src={Lunch1} roundedCircle />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                        <h5><Badge variant="success">85 minutes</Badge>{' '}</h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Button>
                                    <p>
                                    </p>
                                    <Button variant="outline-success">
                                        <Container>
                                            <Row>
                                                <Col style={{ width: '8rem' }}>
                                                    <Card.Title>Hasselback potatoes with creamy spinach and ramps sauce</Card.Title>
                                                </Col>
                                                <Col style={{ width: '8rem' }}>
                                                    <Image style={{width: '110px', height: '110px'}} src={Dinner3} roundedCircle />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                        <h5><Badge variant="success">75 minutes</Badge>{' '}</h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card border="success" style={{margin: '20px'}}>
                            <Card.Body>
                                <Card.Title style={{textAlign: 'center'}}>11.02.2020</Card.Title>
                                <Card.Text>
                                    <Button variant="outline-success">
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title>Lentil Banana Protein Pancakes</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Breakfast3} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">15 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                    </Button>
                                    <p>
                                    </p>
                                    <Button variant="outline-success">
                                        <Container >
                                            <Row>
                                                <Col style={{ width: '8rem' }}>
                                                    <Card.Title>Vegan Curry-Spiced Sweet Potato & Wild Rice Burgers</Card.Title>
                                                </Col>
                                                <Col style={{ width: '8rem' }}>
                                                    <Image style={{width: '110px', height: '110px'}} src={Lunch4} roundedCircle />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                        <h5><Badge variant="success">75 minutes</Badge>{' '}</h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Button>
                                    <p>
                                    </p>
                                    <Button variant="outline-success">
                                        <Container>
                                            <Row>
                                                <Col style={{ width: '8rem' }}>
                                                    <Card.Title>Coconut curry noodle bowl</Card.Title>
                                                </Col>
                                                <Col style={{ width: '8rem' }}>
                                                    <Image style={{width: '110px', height: '110px'}} src={Dinner4} roundedCircle />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                        <h5><Badge variant="success">15 minutes</Badge>{' '}</h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card border="success" style={{margin: '20px'}}>
                            <Card.Body>
                                <Card.Title style={{textAlign: 'center'}}>12.02.2020</Card.Title>
                                <Card.Text>
                                    <Button variant="outline-success">
                                        <Container>
                                            <Row>
                                                <Col style={{ width: '8rem' }}>
                                                    <Card.Title>Tofu Breakfast Bowl</Card.Title>
                                                </Col>
                                                <Col style={{ width: '8rem' }}>
                                                    <Image style={{width: '110px', height: '110px'}} src={Breakfast4} roundedCircle />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                        <h5><Badge variant="success">15 minutes</Badge>{' '}</h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Button>
                                    <p>
                                    </p>
                                    <Button variant="outline-success">
                                        <Container >
                                            <Row>
                                                <Col style={{ width: '8rem' }}>
                                                    <Card.Title>Gwyneth Paltrow's Singapore Rice Noodles</Card.Title>
                                                </Col>
                                                <Col style={{ width: '8rem' }}>
                                                    <Image style={{width: '110px', height: '110px'}} src={Lunch5} roundedCircle />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                        <h5><Badge variant="success">25 minutes</Badge>{' '}</h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Button>
                                    <p>
                                    </p>
                                    <Button variant="outline-success">
                                        <Container>
                                            <Row>
                                                <Col style={{ width: '8rem' }}>
                                                    <Card.Title>Ratatouille Casserole</Card.Title>
                                                </Col>
                                                <Col style={{ width: '8rem' }}>
                                                    <Image style={{width: '110px', height: '110px'}} src={Dinner5} roundedCircle />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                        <h5><Badge variant="success">30 minutes</Badge>{' '}</h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card border="success" style={{margin: '20px'}}>
                            <Card.Body>
                                <Card.Title style={{textAlign: 'center'}}>13.02.2020</Card.Title>
                                <Card.Text>
                                    <Button variant="outline-success">
                                        <Container>
                                            <Row>
                                                <Col style={{ width: '8rem' }}>
                                                    <Card.Title>Green protein power breakfast smoothie</Card.Title>
                                                </Col>
                                                <Col style={{ width: '8rem' }}>
                                                    <Image style={{width: '110px', height: '110px'}} src={Breakfast5} roundedCircle />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                        <h5><Badge variant="success">10 minutes</Badge>{' '}</h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Button>
                                    <p>
                                    </p>
                                    <Button variant="outline-success">
                                        <Container >
                                            <Row>
                                                <Col style={{ width: '8rem' }}>
                                                    <Card.Title>Quick Margherita Naan Pizza</Card.Title>
                                                </Col>
                                                <Col style={{ width: '8rem' }}>
                                                    <Image style={{width: '110px', height: '110px'}} src={Lunch6} roundedCircle />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                        <h5><Badge variant="success">20 minutes</Badge>{' '}</h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Button>
                                    <p>
                                    </p>
                                    <Button variant="outline-success">
                                        <Container>
                                            <Row>
                                                <Col style={{ width: '8rem' }}>
                                                    <Card.Title>Sweet onion tarts</Card.Title>
                                                </Col>
                                                <Col style={{ width: '8rem' }}>
                                                    <Image style={{width: '110px', height: '110px'}} src={Dinner6} roundedCircle />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                        <h5><Badge variant="success">45 minutes</Badge>{' '}</h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card border="success" style={{margin: '20px'}}>
                            <Card.Body>
                                <Card.Title style={{textAlign: 'center'}}>14.02.2020</Card.Title>
                                <Card.Text>
                                    <Button variant="outline-success">
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title>Coconut & banana pancakes</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Breakfast6} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text>
                                                            <h5><Badge variant="success">25 minutes</Badge>{' '}</h5>
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                    </Button>
                                    <p>
                                    </p>
                                    <Button variant="outline-success">
                                        <Container >
                                            <Row>
                                                <Col style={{ width: '8rem' }}>
                                                    <Card.Title>Warm Pasta Salad</Card.Title>
                                                </Col>
                                                <Col style={{ width: '8rem' }}>
                                                    <Image style={{width: '110px', height: '110px'}} src={Lunch7} roundedCircle />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                        <h5><Badge variant="success">50 minutes</Badge>{' '}</h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Button>
                                    <p>
                                    </p>
                                    <Button variant="outline-success">
                                        <Container>
                                            <Row>
                                                <Col style={{ width: '8rem' }}>
                                                    <Card.Title>Vegetarian meatballs)</Card.Title>
                                                </Col>
                                                <Col style={{ width: '8rem' }}>
                                                    <Image style={{width: '110px', height: '110px'}} src={Dinner7} roundedCircle />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                        <h5><Badge variant="success">30 minutes</Badge>{' '}</h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default ChosenDiet;