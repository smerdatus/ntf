import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import overlay from './assets/videos/video_overlay.png';
import video_36 from './assets/videos/37 jumper.webm';
import img_36 from './assets/videos/37 jumper.webm.png';
import video_37 from './assets/videos/38bfsqueeze.mp4';
import img_37 from './assets/videos/38bfsqueeze.mp4.png';
import video_38 from './assets/videos/39 play.mp4';
import img_38 from './assets/videos/39 play.mp4.png';
import video_39 from './assets/videos/40 ski.mp4';
import img_39 from './assets/videos/40 ski.mp4.png';
import video_40 from './assets/videos/41 christmas.mp4';
import img_40 from './assets/videos/41 christmas.mp4.png';
import video_41 from './assets/videos/AdvancedDimCavy-mobile.mp4';
import img_41 from './assets/videos/AdvancedDimCavy-mobile.mp4.png';
import video_42 from './assets/videos/DentalRectangularBluegill-mobile.mp4';
import img_42 from './assets/videos/DentalRectangularBluegill-mobile.mp4.png';
import video_43 from './assets/videos/FamousFixedCoral-mobile.mp4';
import img_43 from './assets/videos/FamousFixedCoral-mobile.mp4.png';
import video_44 from './assets/videos/GiantNimbleChinchilla-mobile.mp4';
import img_44 from './assets/videos/GiantNimbleChinchilla-mobile.mp4.png';
import video_45 from './assets/videos/RarePessimisticArgentineruddyduck-mobile.mp4';
import img_45 from './assets/videos/RarePessimisticArgentineruddyduck-mobile.mp4.png';
import video_46 from './assets/videos/ThatShimmeringBlacknorwegianelkhound-mobile.mp4';
import img_46 from './assets/videos/ThatShimmeringBlacknorwegianelkhound-mobile.mp4.png';
import video_47 from './assets/videos/ThirstyMiserableGuineapig-mobile.mp4';
import img_47 from './assets/videos/ThirstyMiserableGuineapig-mobile.mp4.png';
import video_48 from './assets/videos/CoarsePoliticalIchidna.webm';
import img_48 from './assets/videos/CoarsePoliticalIchidna.webm.png';
import video_49 from './assets/videos/PastGreedyDaddylonglegs.webm';
import img_49 from './assets/videos/PastGreedyDaddylonglegs.webm.png';

export default class V4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_36,
      image: img_36,
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
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_36 }) }>
                    <img src={ img_36 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_37 }) }>
                    <img src={ img_37 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_38 }) }>
                    <img src={ img_38 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_39 }) }>
                    <img src={ img_39 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_40 }) }>
                    <img src={ img_40 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_41 }) }>
                    <img src={ img_41 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_42 }) }>
                    <img src={ img_42 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_43 }) }>
                    <img src={ img_43 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_44 }) }>
                    <img src={ img_44 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_45 }) }>
                    <img src={ img_45 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_46 }) }>
                    <img src={ img_46 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_47 }) }>
                    <img src={ img_47 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_48 }) }>
                    <img src={ img_48 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_49 }) }>
                    <img src={ img_49 } className={ this.state.picSizeMode } />
                    <img src={ overlay } style={ { height: '2vh' } } />
                </div>
            </div>
        </div>
    );
  }
}
