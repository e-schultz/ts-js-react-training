import React from "react"
import { Link } from "gatsby"
import ReactJson from "react-json-view"
import Layout from "../components/layout"
import CodeBlock from "../components/code-block"

/*
---- DO NOT EDIT BELOW THIS LINE ----
Just ensure that your final answer is assigned to the `result` variable declared above
*/
const SecondPage = ({ result, exampleCode }) => (
  /* Do Not Edit */
  <Layout>
    <h1>Exercise</h1>
    <ol>
      <li>Filter the numbers array to only contain even numbers</li>
      <li>Double the value of each number</li>
    </ol>
    <ReactJson src={result} />
    <hr />
    <details>
      <summary>Solution</summary>
      <CodeBlock exampleCode={exampleCode} />
    </details>
    <Link to="/">Go back to the homepage</Link>|
    <Link to="/page-2-solution">solution</Link>
  </Layout>
)

export default SecondPage
