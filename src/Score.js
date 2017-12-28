// @flow
import React, {Component} from 'react'

type TProps = {
  score: number
}

export class Score extends Component<TProps> {
  render() {
    return (
        <div>
          Vaše skóre: <strong>{ this.props.score }</strong>
        </div>
      )
  }
}
