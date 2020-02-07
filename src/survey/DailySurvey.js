import * as React from "react";
import './DailySurvey.css'
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import NavBarLoggedIn from "../navbarloggedin/NavBarLoggedIn";

export class DailySurvey extends React.Component {

    renderRadioButtons1() {
        return (
            <div key="inline-radio" className="mb-3 margin-left-2vh">
                <Form.Check inline type="radio" name="ratingOption" id="1"/>
                <Form.Check inline type="radio" name="ratingOption" id="2"/>
                <Form.Check inline type="radio" name="ratingOption" id="3"/>
                <Form.Check inline type="radio" name="ratingOption" id="4"/>
                <Form.Check inline type="radio" name="ratingOption" id="5"/>
                <Form.Check inline type="radio" name="ratingOption" id="6"/>
                <Form.Check inline type="radio" name="ratingOption" id="7"/>
                <Form.Check inline type="radio" name="ratingOption" id="8"/>
                <Form.Check inline type="radio" name="ratingOption" id="9"/>
                <Form.Check inline type="radio" name="ratingOption" id="10"/>
            </div>
        );
    }

    renderRadioButtons2() {
        return (
            <div key="inline-radio" className="mb-3 margin-left-2vh">
                <Form.Check inline type="radio" name="ratingOption2" id="1"/>
                <Form.Check inline type="radio" name="ratingOption2" id="2"/>
                <Form.Check inline type="radio" name="ratingOption2" id="3"/>
                <Form.Check inline type="radio" name="ratingOption2" id="4"/>
                <Form.Check inline type="radio" name="ratingOption2" id="5"/>
                <Form.Check inline type="radio" name="ratingOption2" id="6"/>
                <Form.Check inline type="radio" name="ratingOption2" id="7"/>
                <Form.Check inline type="radio" name="ratingOption2" id="8"/>
                <Form.Check inline type="radio" name="ratingOption2" id="9"/>
                <Form.Check inline type="radio" name="ratingOption2" id="10"/>
            </div>
        );
    }

    renderRadioButtons3() {
        return (
            <div key="inline-radio" className="mb-3 margin-left-2vh">
                <Form.Check inline type="radio" name="ratingOption3" id="1"/>
                <Form.Check inline type="radio" name="ratingOption3" id="2"/>
                <Form.Check inline type="radio" name="ratingOption3" id="3"/>
                <Form.Check inline type="radio" name="ratingOption3" id="4"/>
                <Form.Check inline type="radio" name="ratingOption3" id="5"/>
                <Form.Check inline type="radio" name="ratingOption3" id="6"/>
                <Form.Check inline type="radio" name="ratingOption3" id="7"/>
                <Form.Check inline type="radio" name="ratingOption3" id="8"/>
                <Form.Check inline type="radio" name="ratingOption3" id="9"/>
                <Form.Check inline type="radio" name="ratingOption3" id="10"/>
            </div>
        );
    }

    renderRadioButtons4() {
        return (
            <div key="inline-radio" className="mb-3 margin-left-2vh">
                <Form.Check inline type="radio" name="ratingOption4" id="1"/>
                <Form.Check inline type="radio" name="ratingOption4" id="2"/>
                <Form.Check inline type="radio" name="ratingOption4" id="3"/>
                <Form.Check inline type="radio" name="ratingOption4" id="4"/>
                <Form.Check inline type="radio" name="ratingOption4" id="5"/>
                <Form.Check inline type="radio" name="ratingOption4" id="6"/>
                <Form.Check inline type="radio" name="ratingOption4" id="7"/>
                <Form.Check inline type="radio" name="ratingOption4" id="8"/>
                <Form.Check inline type="radio" name="ratingOption4" id="9"/>
                <Form.Check inline type="radio" name="ratingOption4" id="10"/>
            </div>
        );
    }

    render() {
        return (
            <div id="daily-survey-container">
                <NavBarLoggedIn/>
                <div id="survey">
                    <h2>
                        Daily Wellness Survey
                    </h2>
                    <div className="margin-6vh">
                        <Form>
                            <Form.Row>
                                <h5>How would you rate your mental wellness on the eating plan today?</h5>
                            </Form.Row>
                            <Form.Row>
                                <p>Horrible </p>{this.renderRadioButtons1()}<p>Great</p>
                            </Form.Row>
                            <hr/>

                            <Form.Row>
                                <h5>How would you rate your physical wellness on the eating plan today?</h5>
                            </Form.Row>
                            <Form.Row>
                                <p>Horrible </p>{this.renderRadioButtons2()}<p>Great</p>
                            </Form.Row>
                            <hr/>

                            <Form.Row>
                                <h5>How would you rate your menu today based on taste and
                                    enjoyment of the meals provided?</h5>
                            </Form.Row>
                            <Form.Row>
                                <p>Horrible </p>{this.renderRadioButtons3()}<p>Great</p>
                            </Form.Row>
                            <hr/>

                            <Form.Row>
                                <h5>How would you rate your menu today based on level of effort
                                    put into cooking the meals?</h5>
                            </Form.Row>
                            <Form.Row>
                                <p>Horrible </p>{this.renderRadioButtons4()}<p>Great</p>
                            </Form.Row>
                            <hr/>

                            <Form.Row>
                                <h5>Additional comments or criticisms:</h5>
                            </Form.Row>
                            <Form.Row>
                                <Form.Control size="lg" type="text" placeholder=""/>
                            </Form.Row>
                        </Form>
                        <Button href="/my-diet" variant="outline-success" size="lg" className="margin-top-5vh"
                                block>Submit
                            answers</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DailySurvey;
