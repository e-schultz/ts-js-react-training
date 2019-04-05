import React from "react"
import Exercise from "../../../exercises/arrays/filter-map-exercise"
import { graphql } from "gatsby"

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = numbers

/*
* assign the final answer to the result variable
---- DO NOT EDIT BELOW THIS LINE ----
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.

---- DO NOT EDIT BELOW THIS LINE ----
Just ensure that your final answer is assigned to the `result` variable declared above
*/
const SecondPage = (props) => {
   
  /* Do Not Edit */
  return (<Exercise
    result={result}
    {...props}
    nextPage={{
      url: "/exercises/arrays/filter-map-solution",
      title: "solution",
    }}
  />)
  }

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`
export const frontmatter = {
  title: "Filter Map Exercise",
  category: "arrays",
}

export default SecondPage
