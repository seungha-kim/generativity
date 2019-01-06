import React, { Component } from 'react';
import { Label, Slider, RangeSlider } from '@blueprintjs/core';
import WavingPolygonAnimation from './Animation';

const SPEED_BASE = 1.2;

interface State {
  numOfVertices: number;
  speedExponent: number;
  minRadius: number;
  maxRadius: number;
}
export default class WavingPolygonConsole extends Component<{}, State> {
  state = {
    numOfVertices: 20,
    speedExponent: 5,
    minRadius: 35,
    maxRadius: 45,
  };
  render() {
    const { numOfVertices, speedExponent, minRadius, maxRadius } = this.state;
    return (
      <div>
        <Label>
          Number of vertices
          <Slider
            min={0}
            max={100}
            labelStepSize={10}
            value={numOfVertices}
            onChange={value => this.setState({ numOfVertices: value })}
          />
        </Label>
        <Label>
          Speed exponent
          <Slider
            min={-20}
            max={20}
            labelStepSize={5}
            value={speedExponent}
            onChange={value => this.setState({ speedExponent: value })}
          />
        </Label>
        <Label>
          Radius range
          <RangeSlider
            min={0}
            max={50}
            labelStepSize={5}
            value={[minRadius, maxRadius]}
            onChange={([minRadius, maxRadius]) =>
              this.setState({ minRadius, maxRadius })
            }
          />
        </Label>
        <WavingPolygonAnimation
          key={numOfVertices}
          {...this.state}
          speedBase={SPEED_BASE}
        />
      </div>
    );
  }
}
