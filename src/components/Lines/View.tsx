import React, { Component } from 'react';
import s from './View.module.scss';
import { random, randomColor, randomHsl } from '../../common';
interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  style: any;
}

interface Props {
  interval: number;
  numOfLines: number;
  autoGenerate: boolean;
}

interface State {
  lines: Line[];
}

export default class LinesView extends Component<Props, State> {
  private intervalId?: any;

  static defaultProps = {
    interval: 1000,
    numOfLines: 10,
    autoGenerate: false,
  };

  state = {
    lines: [],
  };

  generateLines = () => {
    const { numOfLines, autoGenerate } = this.props;
    const lines = [];
    for (let i = 0; i < numOfLines; i++) {
      lines.push({
        x1: random(100),
        y1: random(100),
        x2: random(100),
        y2: random(100),
        style: {
          stroke: randomHsl(),
        },
      });
    }
    this.setState({
      lines,
    });
  };

  componentDidMount() {
    const { interval, autoGenerate } = this.props;
    this.generateLines();
    if (autoGenerate) {
      this.intervalId = setInterval(this.generateLines, interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { lines } = this.state;
    return (
      <svg width="200px" height="200px" viewBox="0 0 100 100">
        {/* <line x1="20" y1="20" x2="80" y2="80" className={s.stroke} /> */}
        {lines.map((l, i) => (
          <line key={i} {...l} className={s.stroke} />
        ))}
      </svg>
    );
  }
}
