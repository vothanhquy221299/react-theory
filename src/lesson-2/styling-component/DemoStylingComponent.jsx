import React, { Component } from 'react'

//External Style
import './ExternalStyle.css'

//Styling with module
import classes from './StylingWithModule.module.css';

export default class DemoStylingComponent extends Component {
    render() {
        const headingStyles ={ backgroundColor: 'red', color: 'white'};
        return (
            <div>
                {/* Inline style */}
                <h1 style={headingStyles}>Demo Inline Style</h1>

                {/* External style */}
                <h1 className="heading">Demo External Style</h1>

                {/* Styling with module */}
                <h1 className={classes.blueBackground}>Demo External Style</h1>
            </div>
        )
    }
}
