import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
//import axios from 'axios';

import PinForm from './PinForm';
import {createPin} from '../actions';
//import {fetchPins} from '../actions';




class AddPin extends React.Component {

    // <input type="file" onChange= {this.fileSelectedHandler}/>
    // <button onClick={this.fileUploadHandler} > Upload</button>

    // passed down as prop
    onSubmit = (formValues) => {
        //console.log(formValues);
        this.props.createPin(formValues);
    }

    render(){
        return(
            <div style = {{marginTop:20}}>
                <h2>AddPin</h2>
                <PinForm onSubmit={this.onSubmit}/> 
            </div>
        );
    }
}

// function mapStateToProps(state){
//     return{
//         formValues: state.form.pinForm.values
//     };
// }


export default connect(
    //mapStateToProps,
    null,
    {createPin}
)(AddPin);