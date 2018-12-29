import React, { Component } from 'react';
import V1 from './V1';
import Gen1 from './Gen1';
import Gen2 from './Gen2';
import Bath from './Bath';
import Jumper from './Jumper';
import Shower from './Shower';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: 'hide'
    };
  }

  renderButtons = () => {
    return (
        <div style={ { display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: 20 } }>
            <div onClick={ () => this.setState({ person: 'hide' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">Hide</button>
            </div>
            <div onClick={ () => this.setState({ person: 'v1' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">V1</button>
            </div>
            <div onClick={ () => this.setState({ person: 'gen1' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">Gen1</button>
            </div>
            <div onClick={ () => this.setState({ person: 'gen2' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">Gen2</button>
            </div>
            <div onClick={ () => this.setState({ person: 'bath' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">bath</button>
            </div>
            <div onClick={ () => this.setState({ person: 'jumper' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">jumper</button>
            </div>
            <div onClick={ () => this.setState({ person: 'shower' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">Shower</button>
            </div>
        </div>
      );
  }

  render() {
    if (this.state.person === 'hide') {
      return (
          <div>
              {this.renderButtons()}
          </div>
      )
    } else if (this.state.person === 'v1') {
      return (
          <div>
              {this.renderButtons()}
              <V1 />
          </div>
        );
    } else if (this.state.person === 'gen1') {
        return (
            <div>
                {this.renderButtons()}
                <Gen1 />
            </div>
          );
    } else if (this.state.person === 'gen2') {
        return (
            <div>
                {this.renderButtons()}
                <Gen2 />
            </div>
          );
    } else if (this.state.person === 'bath') {
        return (
            <div>
                {this.renderButtons()}
                <Bath />
            </div>
          );
    } else if (this.state.person === 'jumper') {
        return (
            <div>
                {this.renderButtons()}
                <Jumper />
            </div>
          );
    } else if (this.state.person === 'shower') {
        return (
            <div>
                {this.renderButtons()}
                <Shower />
            </div>
          );
    } else {
      return (
          <div>Error</div>
      )
    }
  }
}
