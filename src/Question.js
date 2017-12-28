// @flow
import React, {Component} from 'react'
import type { TQuestion } from '../types/TQuestion'

type TProps = {
  question: TQuestion,
  attempts: Array<number>,
  handler: Function
}

export class Question extends Component<TProps> {
  render() {
    return (
      <div>
        <h2>{ this.props.question.text }</h2>
        <ul>
          {
            this.props.question.answers.map((answer, index) => {
              const isSelected = this.props.attempts.includes(index)

              return (
                <li key={index}
                    style={{cursor: 'pointer', textDecoration: isSelected ? 'line-through' : 'none'}}
                    onClick={(event) => {
                      event.preventDefault()
                      if (!isSelected) {
                        this.props.handler(index)
                      }
                    }}
                >{ answer }</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}