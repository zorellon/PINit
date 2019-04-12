import React, { Component } from 'react';
//import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';
//import axios from 'axios';
import { reduxForm } from 'redux-form';
import AddPinForm from './AddPinForm';
import AddPinReview from './AddPinReview';

class AddPin extends Component {

    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
          return (
            <AddPinReview
              onCancel={() => this.setState({ showFormReview: false })}
            />
          );
        }
    
        return (
          <AddPinForm
            onPinSubmit={() => this.setState({ showFormReview: true })}
          />
        );
      }


    render(){
        return(
            <div style = {{marginTop:20}}>
                {this.renderContent()}
            </div>
        );
    }
}


export default reduxForm({
    form: 'pinForm'
  })(AddPin);