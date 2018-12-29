import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
// import overlay from './assets/videos/video_overlay.png';
import video_0 from './assets/videos/01 jump out of bikini.mp4';
import img_0 from './assets/videos/01 jump out of bikini.mp4.png';
import video_1 from './assets/videos/02 pigtail.mp4';
import img_1 from './assets/videos/02 pigtail.mp4.png';

export default class V1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_0,
      image: img_0,
      oldY: 0,
      picSizeMode: 'narrow'
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.video !== prevState.video || (prevState.mode !== 'video' && this.state.mode === 'video')) {
      this.setState({ oldY: document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop });
      this.refs.player.load();
      window.scrollTo(0, 0);
      this.refs.player.play();
      
    } else if (this.state.image !== prevState.image) {
        this.setState({ oldY: document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop });
        window.scrollTo(0, 0);
    }
  }

  scrollBackDown = () => {
    window.scrollTo(0, this.state.oldY);
  }

  renderImageOrVideoContainer = () => {
    if (this.state.mode === 'video') {
      return (
          <Player ref="player" loop fluid={ false } width={ 350 }>
              <source src={ this.state.video } />
          </Player>
      )
    } else if (this.state.mode === 'image') {
      return (<img className="gallery" src={ this.state.image } />)
    }
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
                    {this.renderImageOrVideoContainer()}
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
            {/* <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 } }>
                <a href="https://instagram.com/celestebrightt" target="_blank">celestebrightt</a>
            </div> */}
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_0, mode: 'video' }) } >
                    <img src={ img_0 } className={ this.state.picSizeMode } />
                    {/* <img src={ overlay } style={ { height: '2vh' } }/> */}
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ video: video_1, mode: 'video' }) } >
                    <img src={ img_1 } className={ this.state.picSizeMode } />
                    {/* <img src={ overlay } style={ { height: '2vh' } }/> */}
                </div>
                {/* <div style={ { padding: '1vh' } } onClick={ () => this.setState({ image: img_3, mode: 'image' }) } >
                    <img src={ some_actual_image } className={ this.state.picSizeMode } />
                </div> */}
            </div>
        </div>
    );
  }
}
