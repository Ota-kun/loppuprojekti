import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { 
    Label,
    Input,
    Form,
    FormGroup,
    Button 
} from 'reactstrap'; 


class Login extends Component {
    render() { 
        return (
            <div className="teksti">
                <br />
                <center>
                    <h2>Kirjaudu</h2>
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
                        <Button className="buttonLogin" onClick="">Kirjaudu</Button>
                    </Form>
                    <br />
                
                    Et vielä käyttäjä? <Link to="/Signup">Rekisteröidy tästä!</Link>
                </center>
            </div>

        );
    }
}

export default Login;