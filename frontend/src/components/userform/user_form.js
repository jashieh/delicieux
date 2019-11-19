import React from 'react';
import FormPersonalDetails from './form_personal_details';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1
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
        this.setState({[input]: e.target.value})
    }


    render() {

        const { step } = this.state;
        const { firstName, lastName, email } = this.state;
        const values = { firstName, lastName, email };

        switch(step) {
            case 1:
                return (
                    <SignupFormContainer
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
        }
    }
}

export default UserForm;