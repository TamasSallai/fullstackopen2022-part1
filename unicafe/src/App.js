import { useState } from "react"

const Button = ({ handleClick, name }) => (
  <button onClick={handleClick}>{name}</button>
)
const StatisticLine = ({ name, value }) => (
  <tr>
    <td>{name}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        <StatisticLine name="good" value={good} />
        <StatisticLine name="neutral" value={neutral} />
        <StatisticLine name="bad" value={bad} />
        <StatisticLine name="all" value={all} />
        <StatisticLine name="average" value={average} />
        <StatisticLine name="positive" value={positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = () => good + neutral + bad

  const average = () => (good - bad) / all()

  const positive = () => (good / all()) * 100 + " %"

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} name="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} name="neutral" />
        <Button handleClick={() => setBad(bad + 1)} name="bad" />
      </div>
      <div>
        <h1>Statistics</h1>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all()}
          average={average()}
          positive={positive()}
        />
      </div>
    </div>
  )
}

export default App
