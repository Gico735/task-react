import React, { Component } from 'react'
import './Range.css'
import noUiSlider  from 'nouislider'


class Range extends Component {

  componentDidMount() {
    let range = document.querySelector('.range');
      noUiSlider.create(range, {
        connect: [true,false],
        start: 2,
        range: {
            'min': 0,
            'max': 2
        }
      });

      range.noUiSlider.on('change', (values, event) => {
        let newValue = Math.round(values)
        range.noUiSlider.set(newValue);
        this.props.setVState(Math.round(newValue));
    })
  }

  
    render() {
      return (
        <div className="range"></div>
      )
    }
  }

  export default Range