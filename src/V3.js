import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import overlay from './assets/videos/video_overlay.png';
import video_24 from './assets/videos/25 bored at night pt1.mp4';
import img_24 from './assets/videos/25 bored at night pt1.mp4.png';
import video_25 from './assets/videos/26 bored at night pt2.mp4';
import img_25 from './assets/videos/26 bored at night pt2.mp4.png';
import video_26 from './assets/videos/27 bored at night pt3.mp4';
import img_26 from './assets/videos/27 bored at night pt3.mp4.png';
import video_27 from './assets/videos/28 finally back home.mp4';
import img_27 from './assets/videos/28 finally back home.mp4.png';
import video_28 from './assets/videos/29 shower video version.mp4';
import img_28 from './assets/videos/29 shower video version.mp4.png';
import video_29 from './assets/videos/30 lips.mp4';
import img_29 from './assets/videos/30 lips.mp4.png';
import video_30 from './assets/videos/31 full outfit.mp4';
import img_30 from './assets/videos/31 full outfit.mp4.png';
import video_31 from './assets/videos/32 pale.mp4';
import img_31 from './assets/videos/32 pale.mp4.png';
import video_32 from './assets/videos/33 wonder woman.mp4';
import img_32 from './assets/videos/33 wonder woman.mp4.png';
import video_33 from './assets/videos/34 plug.mp4';
import img_33 from './assets/videos/34 plug.mp4.png';
import video_34 from './assets/videos/35 dress.mp4';
import img_34 from './assets/videos/35 dress.mp4.png';
import video_35 from './assets/videos/36 guess under.mp4';
import img_35 from './assets/videos/36 guess under.mp4.png';

export default class V3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_24,
      image: img_24,
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
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_24 }) }>
                    <img src={ img_24 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_25 }) }>
                    <img src={ img_25 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_26 }) }>
                    <img src={ img_26 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_27 }) }>
                    <img src={ img_27 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_28 }) }>
                    <img src={ img_28 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_29 }) }>
                    <img src={ img_29 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_30 }) }>
                    <img src={ img_30 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_31 }) }>
                    <img src={ img_31 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_32 }) }>
                    <img src={ img_32 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_33 }) }>
                    <img src={ img_33 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_34 }) }>
                    <img src={ img_34 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_35 }) }>
                    <img src={ img_35 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
            </div>
        </div>
    );
  }
}
