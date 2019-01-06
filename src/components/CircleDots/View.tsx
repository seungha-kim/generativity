import React, { Component } from 'react';
import { unitSin } from '../../common';

export interface Props {
  numOfDots: number;
  phase: number;
}

export default class CircleDotsView extends Component<Props> {
  static defaultProps = {
    numOfDots: 10,
    phase: 0,
  };

  *dots() {
    const { numOfDots, phase } = this.props;
    const spring = unitSin(phase);
    for (let i = 0; i <= numOfDots; i++) {
      const angle = ((2 * Math.PI) / numOfDots) * i * spring;
      const cx = 40 * Math.cos(angle);
      const cy = 40 * Math.sin(angle);
      yield <circle key={i} cx={cx} cy={cy} r={3} />;
    }
  }

  render() {
    return (
      <svg width="200" viewBox="0 0 100 100">
        <title>Cat</title>
        <desc>Stick Figure of a Cat</desc>
        <g transform="translate(50 50)">{Array.from(this.dots())}</g>
      </svg>
    );
  }
}
