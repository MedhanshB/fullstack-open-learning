import { useState } from 'react'


const Button = (props) => { 
  return (
      <button onClick={props.onClick}>
        {props.text}
      </button>
  )
}

const Display = (props) => {
  return (
    <div>
      {props.selected}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const randomValue = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random)
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    // console.log(copy)
  }

  const maxVote = () => {
    let maxIndex = 0
    for (let i = 1; i < votes.length; i++) {
      if (votes[i] > votes[maxIndex]) {
        maxIndex = i
      }
    }
    // console.log(maxIndex)
    // console.log(anecdotes[maxIndex])
    return maxIndex
  }

  const mostVoted = maxVote()

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Display selected={anecdotes[selected]} />
      <div>has {votes[selected]} votes</div>
      <Button onClick={vote} text="vote" />
      <Button onClick={randomValue} text="next anecdote" />
      <h2>Anecdote with the most votes</h2>
      <Display selected={anecdotes[mostVoted]} />
      <div>has {votes[mostVoted]} votes</div>
    </div>
  )
}

export default App