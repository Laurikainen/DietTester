import * as React from "react";
import {Button, Container} from 'react-bootstrap';
import {Heading} from 'rebass'
import NavBar from "../navbar/NavBar";
import "./Home.css";

export class Home extends React.Component {
    state = {showSideNav: false};

    handleSideNavToggle = () => {
        this.setState((currentState) => {
            return {showSideNav: !currentState.showSideNav}
        })
    };

    renderDietList(elements) {
        const diets = elements.map((el) =>
            <li className="horizontal">
                <h5>{el}</h5>
            </li>);
        return (
            <ul className="center">
                {diets}
            </ul>
        );
    }

    render() {
        const diets = ["Vegan", "Vegetarian", "Paleo", "Macrobiotic", "Ketogenic", "Low Sugar"];

        return (
            <div id="home-container">
                <NavBar/>
                <section id="main">
                    <br/> <br/><br/>
                    <div className="main-text">
                        Testing new diets <span>simplified</span>
                    </div>
                    <div className="sub-main-text">
                        Find your diet plan<br/>
                        Discover healthy recipes<br/>
                        Complete 7-day meal plans<br/>
                        Find which diet suits you the best<br/><br/>
                        Ready to give it a shot?
                    </div>
                    <br/> <br/>
                    <div className="call-to-action">
                        <Button href='./logged-in-home' size='lg' variant="success">GET STARTED WITH YOUR FREE
                            7-DAY PLAN</Button>
                    </div>
                    <br/><br/>
                    <div className="call-to-action-text">
                        JOIN Dietster & experience the good aspects of many different diets! SIGN up to START!
                    </div>
                </section>
                <br/><br/>
                <Heading textAlign="center">Available meal plan experiences:</Heading>
                <br/>
                <Container>
                    {this.renderDietList(diets)}
                </Container>
            </div>
        )
    }
}

export default Home;
