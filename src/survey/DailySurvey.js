import * as React from "react";
import './DailySurvey.css'
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import NavBarLoggedIn from "../navbarloggedin/NavBarLoggedIn";

export class DailySurvey extends React.Component {

    renderRadioButtons() {
        return (
            <div key="inline-radio" className="mb-3 margin-left-2vh">
                <Form.Check inline type="radio" id={`inline-radio-1`}/>
                <Form.Check inline type="radio" id={`inline-radio-1`}/>
                <Form.Check inline type="radio" id={`inline-radio-1`}/>
                <Form.Check inline type="radio" id={`inline-radio-1`}/>
                <Form.Check inline type="radio" id={`inline-radio-1`}/>
                <Form.Check inline type="radio" id={`inline-radio-1`}/>
                <Form.Check inline type="radio" id={`inline-radio-1`}/>
                <Form.Check inline type="radio" id={`inline-radio-1`}/>
                <Form.Check inline type="radio" id={`inline-radio-1`}/>
                <Form.Check inline type="radio" id={`inline-radio-1`}/>
            </div>
        );
    }

    render() {
        return (
            <div id="daily-survey-container">
                <NavBarLoggedIn/>
                <div id="survey">
                    <h2>
                        Daily wellness survey
                    </h2>
                    <div className="margin-6vh">
                        <Form>
                            <Form.Row>
                                <h5>How would you rate your mental wellness on the eating plan today?</h5>
                            </Form.Row>
                            <Form.Row>
                                <p>Horrible </p>{this.renderRadioButtons()}<p>Great</p>
                            </Form.Row>
                            <hr/>

                            <Form.Row>
                                <h5>How would you rate your physical wellness on the eating plan today?</h5>
                            </Form.Row>
                            <Form.Row>
                                <p>Horrible </p>{this.renderRadioButtons()}<p>Great</p>
                            </Form.Row>
                            <hr/>

                            <Form.Row>
                                <h5>How would you rate your menu today based on taste and
                                    enjoyment of the meals provided?</h5>
                            </Form.Row>
                            <Form.Row>
                                <p>Horrible </p>{this.renderRadioButtons()}<p>Great</p>
                            </Form.Row>
                            <hr/>

                            <Form.Row>
                                <h5>How would you rate your menu today based on level of effort
                                    put into cooking the meals?</h5>
                            </Form.Row>
                            <Form.Row>
                                <p>Horrible </p>{this.renderRadioButtons()}<p>Great</p>
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
