import React, { Component } from 'react';
import { unitSin } from '../../common';

export interface Props {
  numOfVertices: number;
  minRadius: number;
  maxRadius: number;
  phase: number;
}

interface Vertex {
  angle: number;
  initialPhase: number;
}

export default class WavingPolygonView extends Component<Props> {
  static defaultProps = {
    numOfVertices: 6,
    minRadius: 10,
    maxRadius: 40,
    phase: 0,
  };

  private vertices: Vertex[] = randomVertices(this.props.numOfVertices);

  render() {
    return (
      <svg width="200px" height="200px" viewBox="0 0 100 100">
        <polygon points={this.points} transform="translate(50 50)" />
      </svg>
    );
  }

  get points() {
    const { minRadius, maxRadius, phase } = this.props;
    return this.vertices
      .map(v => {
        const radiusPhase = v.initialPhase + phase;
        const radius =
          minRadius + (maxRadius - minRadius) * unitSin(radiusPhase);
        const x = radius * Math.cos(v.angle);
        const y = radius * Math.sin(v.angle);
        return `${x},${y}`;
      })
      .join(' ');
  }
}

function randomVertices(num: number): Vertex[] {
  const vertices: Vertex[] = [];
  for (let i = 0; i < num; i++) {
    vertices.push({
      angle: Math.random() * Math.PI * 2,
      initialPhase: Math.random() * Math.PI * 2,
    });
  }
  vertices.sort((v1, v2) => v1.angle - v2.angle);
  return vertices;
}
