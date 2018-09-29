import React from 'react';
import Back from './Images/back.gif';
import {Animated} from 'react-animated-css';
import {Link} from 'react-router-dom';

class Sub extends React.Component{
    render(){
        return(
            <div style={{marginLeft:"516px" ,marginTop:"150px"}}>
                <img src={Back} style={{width:'200px',height:"200px",marginLeft:"42px"}} alt="ima"></img>
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <h4>Your Form Submitted Sucessfully</h4>
                </Animated>
               <Link to ="/"> <p>Click here to go home</p></Link>
            </div>
        );
    }
}

export default Sub;