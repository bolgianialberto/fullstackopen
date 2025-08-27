import StatisticLine from './StatisticLine'

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad

  const computeTotal = () => good + neutral + bad

  const computeAverage = () => {
    const numerator = good*1 + neutral*0 + bad*(-1)
    if(total > 0){
      return numerator/total
    }
    return 0
  }

  const computePositive = () => {
    if(total>0){
      return good/total 
    }
    return 0
  }

  return(
    <div>
      <h1>Statistics</h1>
      {total > 0 ? (
        <table>
          <tbody>
            <StatisticLine counter={good} text={'good'}/>
            <StatisticLine counter={neutral} text={'neutral'}/>
            <StatisticLine counter={bad} text={'bad'}/>
            <StatisticLine counter={computeTotal()} text={'total'}/>
            <StatisticLine counter={computeAverage()} text={'average'} />
            <StatisticLine counter={computePositive()} text={'positive'} symbol={'%'}/>
          </tbody>
        </table>
      ) : (
        <p>No Feedback given</p>
      )
      }
      
    </div>
  )
}

export default Statistics