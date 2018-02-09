import React, { Component } from 'react'
import './bottom.css'




class Bottom extends Component {

  render() {
    return(
      <div className={`bottom v-state_${this.props.vState}`}>
        
        <div className="container bottom-content one">
          
          <h1 className="text text-bottom">Звенья патогенеза СД2</h1>
        </div>
        <div className="container bottom-content two">
        
          <h1 className="text text-bottom">Смертельный октет</h1>
        </div>
        <div className="container bottom-content three">
        
          <h1 className="text text-bottom">Звенья патогенеза СД2</h1>
        </div>
          
        </div>
    );
  }
}

export default Bottom