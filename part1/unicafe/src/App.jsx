const Button = (props) => { 
  return (
      <button onClick={props.onClick}>
        {props.text}
      </button>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      <td>{props.text} </td>
      <td>{props.value}</td>
    </>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <tr><StatisticLine text="good" value = {props.good} /></tr>
          <tr><StatisticLine text="neutral" value = {props.neutral} /></tr>
          <tr><StatisticLine text="bad" value = {props.bad} /></tr>
          <tr><StatisticLine text="all" value = {props.all} /></tr>
          <tr><StatisticLine text="average" value = {props.average} /></tr>
          <tr><StatisticLine text="positive" value = {props.positive} /></tr>
        </tbody>
      </table>  
    </div>
  )
}

import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedbackGood = 1
  const feedbackNeutral = 0 
  const feedbackBad = -1

  const all = good + neutral + bad

  const average = (good*feedbackGood + neutral*feedbackNeutral + bad*feedbackBad) / all 

  const positive = (good / all) * 100

  
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text = "good" />
      <Button onClick={() => setNeutral(neutral + 1)} text = "neutral" />
      <Button onClick={() => setBad(bad + 1)} text = "bad" />

      <h1>statistics</h1>
      <Statistics good = {good}
                  neutral = {neutral}
                  bad = {bad} 
                  all = {all}
                  average = {average}
                  positive = {positive} 
                  />
    </div>
  )
}


export default App