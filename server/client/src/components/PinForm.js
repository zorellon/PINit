import React from 'react';
import {Field,reduxForm} from 'redux-form';
//import validateURL from '../utils/validateURL';

class PinForm extends React.Component {

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

    // renderImage = (formValues) => {
    //     return (
    //          <img 
    //             src={this.props.url}
    //             alt={this.props.title}
    //         />
    //     );
    // }

    onSubmit = (formValues) => {
        //console.log(formValues);
        // calls on submit passed down from 
        this.props.onSubmit(formValues);
    }

    render(){
        //console.log(this.props);
        return(
            <div>
            <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)} 
                className="ui form error">
                <Field 
                    type="text"
                    name="title" 
                    component={this.renderInput} 
                    label="Enter Pin Title:"
                />
                <Field 
                    type="text"
                    name="description" 
                    component={this.renderInput} 
                    label="Enter Pin Description:"
                />
                <Field 
                    type="text"
                    name="url" 
                    component={this.renderInput} 
                    label="Enter Image URL:"
                />
            <button className="ui button primary" type="submit">Create Pin</button>
            </form>
            </div>
        ); 
    }
    
}


const validate = (formValues) => {
    const errors = {};

    //errors.url = validateURL(formValues.url || '');


    if (!formValues.title){
        errors.title = "You must enter a title!";
    }
    if (!formValues.description){
        errors.description = "You must enter a description!";
    }
    if (!formValues.url){
        errors.url = "You must enter a valid URL!";
    }
    return errors;
};

export default reduxForm({
    form: 'pinForm',
    validate: validate
})(PinForm);