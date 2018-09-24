import React from 'react';
import { Carousel } from 'antd';
import './Slider.css'
import back from './Images/back1.jpg';
import back2 from './Images/back2.jpg';
import back3 from './Images/back3.jpg';
import back4 from './Images/back4.png';


class Slider extends  React.Component{
    render(){
        return(
            <div style={{'marginTop':'30px'}}>
                 <Carousel autoplay>
                    <img src={back} alt="img" className="imag"></img>
                    <img src={back2} alt="img" className="imag"></img>
                    <img src={back3} alt="img" className="imag"></img>
                    <img src={back4} alt="img" className="imag"></img>
                 </Carousel>   
            </div>
        );
    }
}

export default Slider;