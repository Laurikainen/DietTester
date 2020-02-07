import * as React from "react";
import './DailySurvey.css'
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import NavBarLoggedIn from "../navbarloggedin/NavBarLoggedIn";

import { withStyles } from '@material-ui/core/styles';
import { red, yellow, green, orange, lightGreen} from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';


    const RedRadio = withStyles({
        root: {
        color: red[400],
        '&$checked': {
            color: red[600],
        },
        },
        checked: {},
    })(props => <Radio color="default" {...props} />);

    const OrangeRadio = withStyles({
        root: {
        color: orange[400],
        '&$checked': {
            color: orange[600],
        },
        },
        checked: {},
    })(props => <Radio color="default" {...props} />);
  
    const YellowRadio = withStyles({
        root: {
        color: yellow[400],
        '&$checked': {
            color: yellow[600],
        },
        },
        checked: {},
    })(props => <Radio color="default" {...props} />);

    const LightGreenRadio = withStyles({
        root: {
        color: lightGreen[400],
        '&$checked': {
            color: lightGreen[600],
        },
        },
        checked: {},
    })(props => <Radio color="default" {...props} />);


    const GreenRadio = withStyles({
        root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
        },
        checked: {},
    })(props => <Radio color="default" {...props} />);

export class DailySurvey extends React.Component {


    RadioButtons() {
        // const [selectedValue, setSelectedValue] = React.useState('a');
        
        // const handleChange = event => {
        //     setSelectedValue(event.target.value);
        // };
        
        return(
            <div>
                <RedRadio
                    // checked={selectedValue === 'a'}
                    // onChange={handleChange}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                />
                <OrangeRadio
                    // checked={selectedValue === 'b'}
                    // onChange={handleChange}
                    value="b"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'B' }}
                />
                <YellowRadio
                    // checked={selectedValue === 'c'}
                    // onChange={handleChange}
                    value="c"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'C' }}
                />
                <LightGreenRadio
                    // checked={selectedValue === 'd'}
                    // onChange={handleChange}
                    value="d"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'D' }}
                />
                <GreenRadio
                    // checked={selectedValue === 'e'}
                    // onChange={handleChange}
                    value="e"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'E' }}
                />
                </div>
        )
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
                                <p>Horrible </p>{this.RadioButtons()}<p>Great</p>
                            </Form.Row>
                            <hr/>

                            <Form.Row>
                                <h5>How would you rate your physical wellness on the eating plan today?</h5>
                            </Form.Row>
                            <Form.Row>
                                <p>Horrible </p>{this.RadioButtons()}<p>Great</p>
                            </Form.Row>
                            <hr/>

                            <Form.Row>
                                <h5>How would you rate your menu today based on taste and
                                    enjoyment of the meals provided?</h5>
                            </Form.Row>
                            <Form.Row>
                                <p>Horrible </p>{this.RadioButtons()}<p>Great</p>
                            </Form.Row>
                            <hr/>

                            <Form.Row>
                                <h5>How would you rate your menu today based on level of effort
                                    put into cooking the meals?</h5>
                            </Form.Row>
                            <Form.Row>
                                <p>Horrible </p>{this.RadioButtons()}<p>Great</p>
                            </Form.Row>
                            <hr/>

                            <Form.Row>
                                <h5>Additional comments or criticisms (optional):</h5>
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
