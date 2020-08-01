import React, { Profiler } from 'react';

export default class Index extends React.Component {
  handleRender = (id, phrase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    console.log('log=>onRender:', id, phrase, actualDuration, baseDuration, startTime, commitTime, interactions);
  };

  render() {
    return (
      <Profiler id="Modal" onRender={this.handleRender}>
        <Modal />
      </Profiler>
    );
  }
}

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <div>
        {this.state.visible && (
          <div>
            <h1>Modal Title</h1>

            <div className="body">
              {Object.key(Object).map(prop => <p>{prop}</p>)}
            </div>
          </div>
        )}
      </div>
    );
  }
}
