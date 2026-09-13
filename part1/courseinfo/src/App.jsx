const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
      {props.part} {props.exercise}
      </p>
    </>
  )
}

const Content = () => {
  return (
    <>
      <Part part="Fundamentals of React" exercise={10} />
      <Part part="Using props to pass data" exercise={7} />
      <Part part="More React" exercise={14} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises {props.total}
      </p>
    </>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content />
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  )
}

export default App