import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import * as actions from '../actions';


class Pin extends Component{

    //{this.renderShareButtons(pin)}
    // renderShareButtons(pin){
    //     return(
    //         <div className="left floated content">
    //         <button 
    //                 //history
    //                 onClick={() => this.props.sharePin(pin._id)}
    //                 className="ui button"
    //             >
    //                 Share
    //             </button>
    //         </div>
    //     );
    // }

    onDeleteClick(pin_id,history) {
        this.props.deletePin(pin_id,history);
    }

    render(){
        const user_id  = this.props.auth_id;
        const {_id, pinURL, pinTitle, pinDescription, pinAuthor, dateCreated} = this.props.pin;
        const showDelete = this.props.showDelete;
        return(
            <div>
                 <div className="ui card" >
                     <div  className="image">
                         <img 
                             key = {_id}
                             src={pinURL}
                             alt="invalid url"
                         />
                     </div>
                     <div className="content">
                         <div className="header">
                         <Link to={`/Pin/${_id}`}> {pinTitle}</Link>
                         </div>
                         <div className="description">
                             {pinDescription}
                         </div>
                         {/* <div>
                         link: https://calm-reef-94881.herokuapp.com/Pin/{_id}
                         </div> */}
                        
                     </div>
                     <div className="extra content"> 

                        {showDelete === "true" ? (
                            <button
                                onClick={this.onDeleteClick.bind(this, _id,this.props.history)}
                                type="button"
                            >
                                Delete
                            </button>
                        ) : null}
                            
                            <button type="button" >
                                <Link to={`/Profile/${pinAuthor}`}> by: {pinAuthor}</Link>                           
                            </button>
                        

                         <span className="right floated">
                             Posted: {new Date(dateCreated).toLocaleDateString()}
                         </span>
                     </div>
                 </div>
                 <br></br>
             </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps, actions)(withRouter(Pin));
