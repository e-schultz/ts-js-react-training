import React from "react"
import { Link } from "gatsby"
import ReactJson from "react-json-view"
import Layout from "../../components/layout"
import CodeBlock from "../../components/code-block"

/*
---- DO NOT EDIT BELOW THIS LINE ----
Just ensure that your final answer is assigned to the `result` variable declared above
*/
const FilterMapExercise = ({ result, nextPage, prevPage, solution }) => (
  /* Do Not Edit */
  <Layout>
    <h1>Exercise</h1>
    <ol>
      <li>Filter the numbers array to only contain even numbers</li>
      <li>Double the value of each number</li>
    </ol>
    <ReactJson src={result} />
    <hr />
    {solution && (
      <>
        <h2>Solution</h2>
        <CodeBlock exampleCode={solution} />
      </>
    )}
    {prevPage && <Link to={prevPage.url}>{prevPage.title}</Link>}
    {nextPage && <Link to={nextPage.url}>{nextPage.title}</Link>}
  </Layout>
)

export default FilterMapExercise
