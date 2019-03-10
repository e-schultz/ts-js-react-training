export const childrenOne = `() => {
  const PageHeader = ({children}) =>
    (<header>
      <h1>Welcome!</h1>
      <div style={{ border: '5px solid black' }}>
        {children}
      </div>
    </header>)
  
  return (
    <PageHeader>
      <h2>Whatever we want goes here.</h2>
      <h3>And we can use multiple tags!</h3>
    </PageHeader>
  )
}`
