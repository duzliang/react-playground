import React from 'react';

export default function logProps(WrappedComponent) {
  return class LogProps extends React.Component {
    componentDidMount(prevProps) {
      console.log('log=>did mount');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
