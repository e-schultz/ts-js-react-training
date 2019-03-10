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


export const articleLayoutOne = `
const ArticleLayout = ({title, copy}) =>
  <section>
    <ArticleHeader />
    <AuthorInfo />
    
    <h2>{title}</h2>
    <p>{copy}</p>
  </section>`


export const articleLayoutComposed = `
const ArticleLayout = ({title}) =>
  <section>
    <ArticleHeader />
    <AuthorInfo />
    
    <h2>{title}</h2>
    {children}
  </section>

<ArticleLayout title="My First Article">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <p>Nullam est risus, tempus id arcu nec, aliquet varius diam.</p>
</ArticleLayout>
`
