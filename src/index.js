import { AppContainer } from 'react-hot-loader';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Quiz } from './Quiz'

const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  )

render(Quiz)
if (module.hot) {
  module.hot.accept('./Quiz', () => render(Quiz))
}
