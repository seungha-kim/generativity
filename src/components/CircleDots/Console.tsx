import React, { Component } from 'react';
import CircleDotsAnimation from './Animation';
import { Slider, Label } from '@blueprintjs/core';

const SPEED_BASE = 1.2;

export default class CircleDotsConsole extends Component {
  state = {
    numOfDots: 10,
    speedExponent: 0,
  };

  render() {
    const { numOfDots, speedExponent } = this.state;
    return (
      <div>
        <div>
          <Label>
            Number of dots
            <Slider
              max={100}
              min={0}
              labelStepSize={10}
              value={numOfDots}
              onChange={value => this.setState({ numOfDots: value })}
            />
          </Label>
        </div>

        <div>
          <Label>
            Speed exponent
            <Slider
              max={20}
              min={-20}
              labelStepSize={5}
              value={speedExponent}
              onChange={value => this.setState({ speedExponent: value })}
            />
          </Label>
        </div>

        <CircleDotsAnimation
          speedBase={SPEED_BASE}
          numOfDots={numOfDots}
          speedExponent={speedExponent}
        />
      </div>
    );
  }
}
