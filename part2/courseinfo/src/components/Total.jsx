const Total = ({course}) => {
  const arr = course.parts.map(part => part.exercises)
  const initial = 0
  const total = arr.reduce(
     (accumulator, currentValue) => accumulator + currentValue,
      initial,
  )

  return(
    <b>total of {total} exercises</b>
  )
}

export default Total