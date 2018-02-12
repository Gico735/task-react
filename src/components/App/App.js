import React, { Component } from 'react'
import './App.css'
import Bottom from '../bottom/bottom'
import Hammer from 'hammerjs'
import Range from '../Range/Range'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideState: 0,
      vState: 2
    };
  }
  
  componentDidMount() {
    let hammertime = new Hammer(document.querySelector('.App'));
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    hammertime.on('swipe', (ev) => {
      let slideStateNew = this.state.slideState;
      if (ev.direction===8 && slideStateNew!==2) {
        slideStateNew += 1;
      } else if(slideStateNew!==0) {
        slideStateNew -= 1;
      }
      this.setState({slideState: slideStateNew});
    })
  }

  setVState = (num) => {
    this.setState({vState:num})
  }

  render() {
    const slideState = this.state.slideState
    return (
      <div className="App">

        <div className={`wrapper state_${slideState}`} >

          <div className="container one">
            <h1 className="text text-top">Всегда ли Цели терапии СД2 <br/> на поверхности?</h1>
            <div className="parallax-dotes">
              <div className="parallax-dote parallax-dote_1"></div>
              <div className="parallax-dote parallax-dote_2"></div>
              <div className="parallax-dote parallax-dote_3"></div>
              <div className="parallax-dote parallax-dote_4"></div>
              <div className="parallax-dote parallax-dote_5"></div>
              <div className="parallax-dote parallax-dote_6"></div>
              <div className="parallax-dote parallax-dote_7"></div>
              <div className="parallax-dote parallax-dote_8"></div>
              <div className="parallax-dote parallax-dote_9"></div>
              <div className="parallax-dote parallax-dote_10"></div>
              <div className="parallax-dote parallax-dote_11"></div>
              <div className="parallax-dote parallax-dote_12"></div>
              <div className="parallax-dote parallax-dote_13"></div>
              <div className="parallax-dote parallax-dote_14"></div>
              <div className="parallax-dote parallax-dote_15"></div>
              <div className="parallax-dote parallax-dote_16"></div>
            </div>
          </div>

          <div className="next" >
            <p>Листайте вниз</p>
            <div className="arrow arrow--down"></div>
            <img className="next-img" src="style/img/Rectangle%205.png" alt=""></img>
          </div>

          <div className="container parallax-twoSlide">
            <h1 className="text text-middle">Основа терапии — <br/> патогенез СД2 </h1>
            <div className="parralax paralax-ice"></div>
          </div>

          <div className="container tree">
            <Bottom vState={this.state.vState} setVState={this.setVState} slideState={slideState}/>
            <Range setVState={this.setVState} />
          </div>
        </div>

          <div className={`pagination state_${slideState}`}>
            <div className="pagination-circle"></div>
            <div className="pagination-circle"></div>
            <div className="pagination-circle"></div>
          </div>
      </div>
    )
  }
}
export default  App