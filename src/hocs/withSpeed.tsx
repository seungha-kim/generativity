import React, { Component } from 'react';
import { ReactComponentLike } from 'prop-types';

interface Props {
  speedBase: number;
  speedExponent: number;
}

interface State {
  time: number;
  phase: number;
}

export function withSpeed<P>(Wrapped: ReactComponentLike) {
  return class WithSpeed extends Component<Omit<P, 'phase'> & Props, State> {
    requestId: any;
    state = {
      time: Date.now(),
      phase: 0,
    };

    handleAnimationFrame = () => {
      const { speedBase, speedExponent } = this.props;
      this.setState(p => {
        const time = Date.now();
        const phaseInc =
          ((time - p.time) / 1000) * Math.pow(speedBase, speedExponent);
        return {
          time,
          phase: p.phase + phaseInc,
        };
      });
      this.requestId = requestAnimationFrame(this.handleAnimationFrame);
    };

    componentDidMount() {
      this.handleAnimationFrame();
    }

    componentWillUnmount() {
      cancelAnimationFrame(this.requestId);
    }

    render() {
      return <Wrapped {...this.props} phase={this.state.phase} />;
    }
  };
}
