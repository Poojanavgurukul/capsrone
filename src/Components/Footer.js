import React from 'react';
import './Footer.css';

class Footer extends React.Component{
    render(){
        return(
            <div style={{background:"#c4c4c4"}}>
                <hr></hr>
                <div className="footer">
                <div>
                    <div><h4>Links</h4></div>
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <div><h4>Others</h4></div>
                    <p>Privacy Policy</p>
                    <p>Terms & Condition</p>
                    <p>FAQ</p>
                    <p>Support</p>
                </div>
                <div>
                    <div><h4>Catch on Social</h4></div>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Google+</p>
                </div>
                </div>
            </div>
        );
    }
}

export default Footer;