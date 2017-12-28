// @flow
import React, {Component} from 'react'
import { Question } from './Question'
import { Score } from './Score'
import { data } from '../data/questions'
import type { TQuestion } from '../types/TQuestion'

type TProps = {}

type TState = {
  score: number,
  currentQuestion: number,
  attempts: Array<number>,
  questions: Array<TQuestion>
}

export class Quiz extends Component<TProps, TState> {
  state = {
    score: 0,
    currentQuestion: 0,
    attempts: [],
    questions: []
  }

  componentDidMount() {
    this.setState({
      questions: data
    })
  }

  handleClickAnswer(selectedAnswer:number) {
    const {
      score,
      currentQuestion,
      attempts
    } = this.state
    const question = this.state.questions[currentQuestion]
    const newState = {}

    if (question.correctAnswer === selectedAnswer) {
      newState.attempts = []
      newState.score = score + (1 - attempts.length)
      newState.currentQuestion = currentQuestion + 1
    } else {
      newState.attempts = [...attempts, selectedAnswer]
    }

    this.setState(newState)
  }

  render() {
    let content

    if (this.state.currentQuestion > this.state.questions.length - 1) {
      content = <Score score={this.state.score}/>
    } else if (this.state.questions.length) {
      const index = this.state.currentQuestion
      const question = this.state.questions[index]
      const attempts = this.state.attempts
      content = <Question question={question} attempts={attempts} handler={this.handleClickAnswer.bind(this)}/>
    }

    return (
      <div>
        <h1>Kvíz</h1>
        { content }
      </div>
    )
  }
}
