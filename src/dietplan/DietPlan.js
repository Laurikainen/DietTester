import * as React from "react";
import './DietPlan.css'
import {Alert} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import NavBarLoggedIn from "../navbarloggedin/NavBarLoggedIn";

export class DietPlan extends React.Component {

    render() {
        return (
            <div id="diet-plan-container">
                <NavBarLoggedIn/>
                <div id="diets">
                    <h1>
                        Vegan
                    </h1>
                    <Alert variant="success">
                        Diet plan goes here
                    </Alert>
                    <Button href="/logged-in-home" variant="outline-success" size="lg" block>Back</Button>
                </div>
            </div>
        )
    }
}

export default DietPlan;
