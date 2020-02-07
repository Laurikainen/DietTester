import * as React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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

import Dinner1 from "../resources/dinner1.png"
import Dinner2 from "../resources/dinner2.png"
import Dinner3 from "../resources/dinner3.png"
import Dinner4 from "../resources/dinner4.png"
import Dinner5 from "../resources/dinner5.png"
import Dinner6 from "../resources/dinner6.png"
import Dinner7 from "../resources/dinner7.png"


import Image from "react-bootstrap/Image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Badge from "react-bootstrap/Badge";

const responsive = {
    desktop: {
        breakpoint: { max: 2000, min: 1024 },
        items: 3,
        slidesToSlide: 1, // optional, default to 1.
    },
};


export class Menu extends React.Component {
    render() {
        return (
            <div >
                <NavBarLoggedIn/>
                <p>
                </p>
                <h1>7-Day meal plan</h1>
                <Card border="success" style={{ width: '1070px', maxWidth: '1070px', margin: 'auto'}}>
                    <Card.Body>
                        <Card.Title>Fact about being a vegan</Card.Title>
                        <Card.Text className="text-secondary">
                            The fact
                        </Card.Text>
                    </Card.Body>
                </Card>
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
                                <Card.Title style={{textAlign: 'center'}}>07.02.2020</Card.Title>
                                <Card.Text>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Chive waffles with maple & soy mushrooms</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Breakfast1} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 45 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                    <p>
                                    </p>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container >
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Vegan Mexican Chopped Salad with Avocado Dressing</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Lunch1} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 20 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                    <p>
                                    </p>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Tasty vegan lasagna</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Dinner1} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 3 h
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card border="success" style={{margin: '20px'}}>
                            <Card.Body>
                                <Card.Title className="text-secondary" style={{textAlign: 'center'}}>08.02.2020</Card.Title>
                                <Card.Text className="text-secondary">
                                    <Card border="success">
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Vegan sabich sandwich</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Lunch2} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 45 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                    <p>
                                    </p>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Lentil stroganoff (Oil-free, GF)</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Strog} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 45 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                    <p>
                                    </p>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Chili sin carne</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Dinner2} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 15 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card border="success" style={{margin: '20px'}}>
                            <Card.Body>
                                <Card.Title className="text-secondary" style={{textAlign: 'center'}}>09.02.2020</Card.Title>
                                <Card.Text>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Healthy chocolate orange scones</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Breakfast2} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 50 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                    <p>
                                    </p>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container >
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Homemade Roasted Tomato Basil Soup</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Lunch3} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 1h 25 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                    <p>
                                    </p>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Hasselback potatoes with creamy spinach and ramps sauce</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Dinner3} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 1 h 15 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card border="success" style={{margin: '20px'}}>
                            <Card.Body>
                                <Card.Title className="text-secondary" style={{textAlign: 'center'}}>10.02.2020</Card.Title>
                                <Card.Text>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Lentil Banana Protein Pancakes</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Breakfast3} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 15 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                    <p>
                                    </p>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container >
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Vegan Curry-Spiced Sweet Potato & Wild Rice Burgers</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Lunch4} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 1h 15 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                    <p>
                                    </p>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Coconut curry noodle bowl</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Dinner4} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 15 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card border="success" style={{margin: '20px'}}>
                            <Card.Body>
                                <Card.Title className="text-secondary" style={{textAlign: 'center'}}>11.02.2020</Card.Title>
                                <Card.Text>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Tofu Breakfast Bowl</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Breakfast4} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 15 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                    <p>
                                    </p>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container >
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Gwyneth Paltrow's Singapore Rice Noodles</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Lunch5} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 25 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                    <p>
                                    </p>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Ratatouille Casserole</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Dinner5} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 30 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card border="success" style={{margin: '20px'}}>
                            <Card.Body>
                                <Card.Title className="text-secondary" style={{textAlign: 'center'}}>12.02.2020</Card.Title>
                                <Card.Text>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Green protein power breakfast smoothie</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Breakfast5} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 10 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                    <p>
                                    </p>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container >
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Quick Margherita Naan Pizza</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Lunch6} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 20 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                    <p>
                                    </p>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Sweet onion tarts</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Dinner6} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 45 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card border="success" style={{margin: '20px'}}>
                            <Card.Body>
                                <Card.Title style={{textAlign: 'center'}}>13.02.2020</Card.Title>
                                <Card.Text>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Coconut & banana pancakes</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Breakfast6} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 25 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                    <p>
                                    </p>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container >
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Warm Pasta Salad</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Lunch7} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 50 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                    <p>
                                    </p>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Card.Title className="text-secondary">Vegetarian meatballs</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Dinner7} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="text-secondary">
                                                            Time to make: 30 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel>


                <p>
                    <h5><Badge variant="success">
                        <Form.Check style={{margin: 'auto'}} type="checkbox" label="Sync my meal plan with calendar"/>
                    </Badge>{' '}</h5>
                </p>
                <p>
                    <Button style={{width: '400px', maxWidth: '400px', margin: 'auto'}} href="./shopping-list" variant="outline-success" size="lg" block>Get my shopping list</Button>
                </p>
                <p>
                    <Button style={{width: '400px', maxWidth: '400px', margin: 'auto'}} href="./logged-in-home" variant="outline-danger" size="lg" block>Cancel</Button>
                </p>
            </div>
        );
    }
}

export default Menu;