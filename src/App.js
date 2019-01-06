import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import CircleDotsConsole from './components/CircleDots/Console';

import s from './App.module.scss';
import LinesConsole from './components/Lines/Console';
import WavingPolygonConsole from './components/WavingPolygon/Console';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={s.wrap}>
          <h1>SVG Practices</h1>
          <div className={s.menu}>
            <Link to="/circledots">CircleDots</Link>
            <Link to="/lines">Lines</Link>
            <Link to="/wavingpolygon">WavingPolygon</Link>
          </div>
          <div className={s.main}>
            <Route path="/circledots" component={CircleDotsConsole} />
            <Route path="/lines" component={LinesConsole} />
            <Route path="/wavingpolygon" component={WavingPolygonConsole} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
