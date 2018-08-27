import React, { Component } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import Google from './Google';
import { 
    Label,
    Input,
    Form,
    FormGroup,
    Button 
} from 'reactstrap';
import { GetAllUsers } from '../utils/WebapiService';
import Facebook from './Facebook';


class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            userList: [],
            isSignedIn: false
        }

        // uiConfig = {
        //     signInSuccessUrl: 'http://localhost:3000',
        //     signInOptions: [
        //         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //         firebase.auth.FacebookAuthProvider.PROVIDER_ID
        //     ],
        //     callbacks: {
        //         signInSuccess: () => false
        //     }
        // }
        

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    componentDidMount () {

        // firebase.auth().onAuthStateChanged(user =>{
        //     this.setState({isSignedIn:!!user})
        // })

    }

    onSubmit(e) {
        e.preventDefault();

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() { 
        return (
            <div className="teksti">
                <center>
                <br />
                <div className="normalSignup">
                    <h2>Rekisteröidy</h2>
                    <br />
                    <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="exampleEmail">Käyttäjätunnus</Label>
                                <Input
                                    type="text" 
                                    name="username"
                                    required="true"
                                    value={this.state.username}
                                    // error={errors.identifier}
                                    onChange={this.onChange}
                                    id="username" 
                                    placeholder="Syötä käyttäjätunnus" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Salasana</Label>
                                <Input
                                    field="password"
                                    value={this.state.password}
                                    // error={errors.password}
                                    type="password"
                                    name="password"
                                    onChange={this.onChange} 
                                    required="true"
                                    id="password" 
                                    placeholder="Syötä salasana" />
                            </FormGroup>
                            <Button 
                                className="buttonSignup"
                                type="submit"
                            >
                            Rekisteröidy
                            </Button>
                    </Form>
                </div>
                <br />

                    <div className="socialAuth">
                        <br />
                        <Google />
                        <br />
                        <Facebook />
                        <br />
                    </div>
                    <hr style={{ marginBottom: '0', marginTop: '2%' }}></hr>
                    <span className="notReg">Oletko jo käyttäjä? <Link to="/Login">Kirjaudu tästä!</Link></span>
                    <br /><br />
                </center>
            </div>
        );
    }
}

export default Signup;