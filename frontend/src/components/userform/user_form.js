import React from 'react';
import SignupForm from './signup_form';
import FormPersonalContainer from './form_personal_container';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            step: 1,
            name: "",
            email: "",
            password: "",
            password2: "",
            height: "",
            weight: "",
            age: ""
        }
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    render() {
        const { step } = this.state;
        const { name, email, password, password2, height, weight, age } = this.state;
        const values = { name, email, password, password2, height, weight, age }; 


        switch(step) {
            case 1:
                return (
                    <SignupForm
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalContainer
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
        }
    }
}

export default UserForm;