import React, { Component } from 'react';
import LinesView from './View';
import {
  Label,
  Checkbox,
  Slider,
  Button,
  ButtonGroup,
} from '@blueprintjs/core';

interface State {
  interval: number;
  numOfLines: number;
  autoGenerate: boolean;
  generateCount: number;
}

export default class LinesConsole extends Component<{}, State> {
  state = {
    interval: 500,
    autoGenerate: true,
    numOfLines: 20,
    generateCount: 0,
  };

  render() {
    const { interval, autoGenerate, numOfLines } = this.state;
    return (
      <div>
        <Checkbox
          checked={autoGenerate}
          onChange={() =>
            this.setState(p => ({ autoGenerate: !p.autoGenerate }))
          }
          label="Auto generate"
        />

        <Label>
          Generation interval (ms)
          <Slider
            labelStepSize={1000}
            disabled={!autoGenerate}
            min={0}
            max={5000}
            value={interval}
            onChange={value => this.setState({ interval: value })}
          />
        </Label>

        <Label>
          Number of lines
          <Slider
            labelStepSize={100}
            min={0}
            max={500}
            value={numOfLines}
            onChange={value => this.setState({ numOfLines: value })}
          />
        </Label>
        <div>
          <Button
            text="Generate!"
            onClick={() =>
              this.setState(p => ({ generateCount: p.generateCount + 1 }))
            }
            disabled={autoGenerate}
          />
        </div>

        <LinesView
          numOfLines={numOfLines}
          autoGenerate={autoGenerate}
          interval={interval}
          key={JSON.stringify(this.state)}
        />
      </div>
    );
  }
}
