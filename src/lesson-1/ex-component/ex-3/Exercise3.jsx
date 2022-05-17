import React, {Component} from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import Header from './Header';
import ListFeatures from './ListFeatures';

class Exercise3 extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Carousel/>
                <ListFeatures/>
                <Footer/>
            </div>
        )
    }
}
export default Exercise3;