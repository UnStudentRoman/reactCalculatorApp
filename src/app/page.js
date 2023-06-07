"use client";

import { useReducer } from 'react'
import styles from './page.module.css'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
}

function reducer(state, {type, payload}) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }
    
    case ACTIONS.CHOOSE_OPERATION:
      if (payload.operation == "*") {
        console.log('Clicked *')
        return {
          ...state,
          currentOperand: `${state.currentOperand || ""}${payload.operation}`
        }
      }
  }
}

function Home() {

  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})
  return (
    <main className={styles.main}>
      <h1>Calculator</h1>
      <div className={styles.calculator_grid}>
        <div className={styles.output}>
          <div className={styles.previous_operand}>{previousOperand} {operation}</div>
          <div className={styles.current_operand}>{currentOperand}</div>
        </div>
        <button className={styles.span_two}>AC</button>
        <button>DEL</button>
        <OperationButton operation="÷" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton operation="*" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <button className={styles.span_two}>=</button>
      </div>
    </main>
  )
}


export default Home