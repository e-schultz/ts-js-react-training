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
