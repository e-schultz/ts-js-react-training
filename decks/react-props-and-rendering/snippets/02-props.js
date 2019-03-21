export const props1 = `() => {
  const Greeting = props => <h1>Hello, {props.name}!</h1>

  return (<Greeting name="Evan" />)
}`

export const manyNames = `() => {
  const names = ['Evan', 'Renee', 'Stranger'];
  
  const ManyGreetings = ({names}) =>
  (<div>
     { names.map((name, key) =>
        <h1>Hello, {name}!</h1>
     )}
  </div>)
  
  return <ManyGreetings names={names} />
}`

export const exercise = `() => {
  // Part 1:
  // Write a component that takes two
  // numbers as props and shows their 
  // sum, plus the equation
  
  // Hint: Remember you may get unexpected results if your numbers are actually strings...
  
  // Part 2:
  // Use JSX HTML tags to edit the component you made 
  // so that the equation is visually different from the result
  
  
  return null;
}`


export const solvedExercise = `() => {
  const SumComponent = ({num1, num2}) =>
    <div>
      <h3><em>{num1} + {num2} =</em></h3>
      <h1>{num1 + num2}</h1>
    </div>
  
  return <SumComponent num1={5} num2={10} />
}`
