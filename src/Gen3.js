import React, { Component } from 'react';
import img_0 from './assets/gen3/1.jpg';
import img_1 from './assets/gen3/2.jpg';
import img_2 from './assets/gen3/3.jpg';
import img_3 from './assets/gen3/4.jpg';
import img_4 from './assets/gen3/5.jpg';
import img_5 from './assets/gen3/6.jpg';
import img_6 from './assets/gen3/7.jpg';
import img_7 from './assets/gen3/8.jpg';
import img_8 from './assets/gen3/9.jpg';
import img_9 from './assets/gen3/10.jpg';
import img_10 from './assets/gen3/11.jpg';
import img_11 from './assets/gen3/13.jpg';
import img_12 from './assets/gen3/14.jpg';
import img_13 from './assets/gen3/15.jpg';
import img_14 from './assets/gen3/16.jpg';
import img_15 from './assets/gen3/17.jpg';
import img_16 from './assets/gen3/18.jpg';
import './App.css';

export default class Gen3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: img_0,
      oldY: 0,
      picSizeMode: 'narrow'
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.image !== prevState.image) {
        this.setState({ oldY: document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop });
        window.scrollTo(0, 0);
    }
  }

  scrollBackDown = () => {
    window.scrollTo(0, this.state.oldY);
  }

  toggleImageSize = () => {
    if (this.state.picSizeMode === 'narrow') {
        this.setState({ picSizeMode: 'wider' })
    } else {
      this.setState({ picSizeMode: 'narrow' })
    }
  }  

  render() {
    return (
        <div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column' } }>
                <div style={ { padding: '1vh' } }>
                    <img className="gallery" src={ this.state.image } />
                </div>
                {this.state.oldY === 0 ? '' : (
                    <div padding={ { padding: '2vh' } } onClick={ () => this.scrollBackDown() } >
                        <button className="pure-button pure-button-primary">Return to previous position</button>
                    </div>
        )}
            </div>
            <div onClick={ () => this.toggleImageSize() } style={ { position: 'fixed', width: 50, height: 30, bottom: 40, right: 40  } }>
                <button className="pure-button pure-button-secondary">X</button>
            </div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_0 }) } >
                    <img src={ img_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_1 }) } >
                    <img src={ img_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_2 }) } >
                    <img src={ img_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_3 }) } >
                    <img src={ img_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_4 }) } >
                    <img src={ img_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_5 }) } >
                    <img src={ img_5 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_6 }) } >
                    <img src={ img_6 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_7 }) } >
                    <img src={ img_7 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_8 }) } >
                    <img src={ img_8 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_9 }) } >
                    <img src={ img_9 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_10 }) } >
                    <img src={ img_10 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_11 }) } >
                    <img src={ img_11 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_12 }) } >
                    <img src={ img_12 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_13 }) } >
                    <img src={ img_13 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_14 }) } >
                    <img src={ img_14 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_15 }) } >
                    <img src={ img_15 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_16 }) } >
                    <img src={ img_16 } className={ this.state.picSizeMode } />
                </div>
            </div>
        </div>
    );
  }
}
