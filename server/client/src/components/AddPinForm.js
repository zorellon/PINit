import React, {Component} from 'react';
import {Field,reduxForm} from 'redux-form';
//import { format } from 'util';
//import validateURL from '../utils/validateURL';
import {Link} from 'react-router-dom';

class AddPinForm extends Component {

    renderError({error, touched}){
        if (touched && error){
            return (
                <div className = "ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className= `field ${meta.error && meta.touched ? 'error' : ''}`;
        // console.log(meta)
        return (
            <div className={className}>
                <label> {label} </label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>        
        );
    }

    renderFields() {
        return(
            <div>
            <Field 
                type="text"
                name="pinTitle" 
                component={this.renderInput} 
                label="Enter Pin Title:"
            />
            <Field 
                type="text"
                name="pinDescription" 
                component={this.renderInput} 
                label="Enter Pin Description:"
            />
            <Field 
                type="text"
                name="pinURL" 
                component={this.renderInput} 
                label="Enter Image URL:"
            />
            </div>
        );
    }

    render(){
        //console.log(this.props);
        return(
            <div>
                <h1>Add a Pin:</h1>
            <form 
                onSubmit={this.props.handleSubmit(this.props.onPinSubmit)} 
                className="ui form error"
            >
                {this.renderFields()}
                <br/>
                <Link to="/" className="ui button negative">
                    Cancel
                </Link>
                <button className="ui button primary" type="submit">
                    Review Pin
                </button>
            </form>
            </div>
        ); 
    }
    
}

const validate = (formValues) => {
    const errors = {};

    //errors.pinURL = validateURL(formValues.pinURL || '');

    if (!formValues.pinTitle){
        errors.pinTitle = "You must enter a title!";
    }
    if (!formValues.pinDescription){
        errors.pinDescription = "You must enter a description!";
    }
    if (!formValues.pinURL){
        errors.pinURL = "You must enter a valid URL!";
    }
    return errors;
};


export default reduxForm({
    form: 'pinForm',
    validate: validate,
    // so that you can go back and edit
    destroyOnUnmount: false
})(AddPinForm);