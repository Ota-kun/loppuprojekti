import React, { Component } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { 
    Label,
    Input,
    Form,
    FormGroup,
    Button } from 'reactstrap';

class Signup extends Component {
    render() { 
        return (
            <div className="teksti">
                <br />
                <center>
                    <h2>Rekisteröidy</h2>
                    <br /><br />
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Käyttäjätunnus</Label>
                            <Input type="text" name="username" required="true" id="username" placeholder="Syötä käyttäjätunnus" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Salasana</Label>
                            <Input type="password" name="password" required="true" id="password" placeholder="Syötä salasana" />
                        </FormGroup>
                        <Button className="buttonSignup" onClick="">Rekisteröidy</Button>
                    </Form>
                    <br />
                    Oletko jo käyttäjä? <Link to="/Login">Kirjaudu tästä!</Link>
                </center>
            </div>
        );
    }
}

export default Signup;