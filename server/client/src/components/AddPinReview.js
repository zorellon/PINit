import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';

const AddPinReview = ({ onCancel, formValues, createPin, history }) => {

    return (
        <div>
            <h1>Please confirm your entries:</h1>
            <div>
                <div>
                    <label>Title:</label>
                    <div>{formValues.pinTitle}</div>
                </div>
                <div>
                    <label>Descreption:</label>
                    <div>{formValues.pinDescription}</div>
                </div>
                <div>
                    <label>Image from Url:</label>
                    <div> 
                    <img
                        src= {formValues.pinURL}
                        style={{ maxWidth: '100%' }}
                        alt= "Go back and try new image URL"
                    />
                    </div>  
                </div>
            </div>
            <button
                className="ui button negative"
                onClick={onCancel}
            >
                Back
            </button>
            <button
            //, this.props.history
                onClick={() => createPin(formValues, history)}
                className="ui button primary"
            >
                Create Pin
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    //console.log(state);
    return { 
        formValues: state.form.pinForm.values 
    };
}

export default connect(mapStateToProps, actions)(withRouter(AddPinReview));