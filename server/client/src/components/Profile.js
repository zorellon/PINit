import React from 'react';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
// for css image grid styling
import './PinList.css';


const Profile = ({  auth,pins, deletePin,fetchPins, history }) => {
        fetchPins();
        //className="pin-list" 
        return pins.reverse().map(pin => {
            if (pin.pinAuthor === auth._id) {
                return(
                    <div key = {pin._id}>
                    <div className="ui card" >
                        <div  className="image">
                            <img 
                                key = {pin._id}
                                src={pin.pinURL}
                                alt="invalid url"
                            />
                        </div>
                        <div className="content">
                            <div className="header">
                                {pin.pinTitle}
                            </div>
                            <div className="description">
                                {pin.pinDescription}
                            </div>
                            <span className="left floated">
                            by: {pin.pinAuthor} 
                            </span>
                        </div>
                        <div className="extra content"> 
                        <div className="left floated content">
                            <button 
                                    //history
                                    onClick={() => deletePin(pin._id,history)}
                                    className="ui button negative"
                                >
                                    Delete 
                            </button>
                        </div>
                            <span className="right floated">
                                Posted: {new Date(pin.dateCreated).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                    <br></br>

                    </div>
                );
            }else{
                return(
                    <div>
                        error
                    </div>
                );
            }
            
        });
        
   
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        //currentUserId: state.auth._id,
        pins: state.pins,
        auth: state.auth
    };
}

export default connect(mapStateToProps, actions) (withRouter(Profile));

// class Profile extends Component {

//     componentDidMount(){
//         this.props.fetchPins();
//         //this.props.fetchUser();
//     }

//     renderDeleteButtons(pin){
//         return(
//             <div className="left floated content">
//             <button 
//                     //history
//                     onClick={() => this.props.deletePin(pin._id)}
//                     className="ui button negative"
//                 >
//                     Delete 
//                 </button>
//             </div>
//         );
//     }

//     renderPins() {
//         //className="pin-list" 
//         return this.props.pins.reverse().map(pin => {
//             if (pin.pinAuthor === this.props.auth._id) {
//                 return(
//                     <div   key = {pin._id}>
//                     <div className="ui card" >
//                         <div  className="image">
//                             <img 
//                                 key = {pin._id}
//                                 src={pin.pinURL}
//                                 alt="invalid url"
//                             />
//                         </div>
//                         <div className="content">
//                             <div className="header">
//                                 {pin.pinTitle}
//                             </div>
//                             <div className="description">
//                                 {pin.pinDescription}
//                             </div>
//                             <span className="left floated">
//                             by: {pin.pinAuthor} 
//                             </span>
//                         </div>
//                         <div className="extra content"> 
//                                 {this.renderDeleteButtons(pin)}
//                             <span className="right floated">
//                                 Posted: {new Date(pin.dateCreated).toLocaleDateString()}
//                             </span>
//                         </div>
//                     </div>
//                     <br></br>

//                     </div>
//                 );
//             }else{
//                 return(
//                     <div>
//                         Hi
//                     </div>
//                 );
//             }
            
//         });
        
//     }

//     render(){
//         return(
//             <div>
//                 <div>{this.renderPins()}</div>
//             </div>
//         );
//     }
// }