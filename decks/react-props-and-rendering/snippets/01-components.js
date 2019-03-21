export const helloComponent = `() => {
  const HelloWorld = () => <h1>Hello, World!</h1>
  
  return (<HelloWorld />)
}
`

export const helloManyChildren = `() => {
  const HelloWorld = () => 
    <header>
      <h1>Hello, World!</h1>
      <h2>Many child tags are valid.</h2>
    </header>
    
  return (<HelloWorld />)
}`

export const menuList = `() => {
  const MenuList = () => {
    const locations = ['Home', 'About', 'Contact'];

    return (<ul>
      { locations.map((item, i) => <li key={i}>{item}</li>) }
    </ul>)
  }

  return <MenuList />
}`


