const Header = (prop) => {
  console.log(prop.name)

  return(
    <div>
      <h1>{prop.name}</h1>
    </div>

  )

}

const Content = (prop) => {

  return(
    <div>
      <p>
        {prop.part} {prop.exercises}
      </p>
    </div>
  )

}

const  Total = (prop) => {

  return(
    <div>
      <p>Number of exercises {prop.part1 + prop.part2 + prop.part3}</p>
    </div>
  )


}




const App = () => {
  //Constant is an unchangable variable like final in Java its an actual object instance
  const course = 'Half Stack application development' // Why is this an object and not a string? becuase its in single quotes not double?
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name = {course}/>
      <Content part = {part1} exercises = {exercises1} />
      <Content part = {part2} exercises = {exercises2} />
      <Content part = {part3} exercises = {exercises3} />
      
      <Total part1 = {exercises1} part2 = {exercises2} part3 = {exercises3}/>
    </div>
  )
}

export default App