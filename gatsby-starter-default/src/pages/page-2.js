import React from "react"
import Exercise from "../exercises/arrays/filter-map-exercise"

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
const SecondPage = () => (
  /* Do Not Edit */
  <Exercise
    result={result}
    nextPage={{
      url: "/page-2-solution",
      title: "solution",
    }}
  />
)

export default SecondPage
