# Data Fetch Exercises

These exercises are broken down into three parts.

Feel free to continue to refactor and improve your code from the data-fetch-01-start,
or when moving onto the other exercises use the provided starting points.

This is the starting point for 02 - Fetch with Loading Indicator

## 01 - Basic Fetch

In the `HackerNewsSearch` component:

- set an initial state property called `results` that is an empty array.
  - **note** it is common to do this.state = .... in the constructor.
  - this is the only time it is ok to directly mutate the state,
  - any other time - use this.setState({})
- implement the `componentDidMount` lifecycle method
- Use fetch to query Hackers News for react,
  - the url will be: [https://hn.algolia.com/api/v1/search?query=react](https://hn.algolia.com/api/v1/search?query=react)
- Once fetch resolves:
  - update the component state with the results
  - Implement the render method to display the list of results, see notes on the API response format below.
- The list should display the title - and be a link to the article.
- When rendering a list of components, you should specify a key attribute.
  You can use objectID as the value for the key. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity: React Docs for more details

```html
<ul>
    <li><a href="https://code.facebook.com/posts/300798627056246">Relicensing React, Jest, Flow, and Immutable.js<a></li>
</ul>
```

## 02 - Fetch with Loading Indicator

It's never fun to stare at a blank page when fetching data. Lets add a loading indicator.

- Add a state value to keep track of if the data is loading
- While the data is loading, displaying a loading place holder text
- Once the data resolves - display the results

## 03 - Fetch with User Supplied Query

- Allow the user to specify what they want to search for
- Have an input field on the screen
- When the value changes, execute the search
  - **note** it may not be desirable to search on every key stroke, consider possibly using onBlur, or having a form with a submit button - up to you.
  - React uses Synthetic events, [Synthetic Event Documentation](https://reactjs.org/docs/events.html)
- The request should be run with the new parameter

## 04 - Fetch Refactoring

- Can we break out the HackerNews component into smaller building blocks?
- Can we improve the styling?
- Can we make generic atoms for a list, and then hacker news specific ones ontop?
- What about error handling?
- Maybe try adding paging
- Or sorting results
- What other features of https://news.ycombinator.com/ could you try to build?

## API Response Notes

The result from the API contains quite a bit of data. The full schema is blow, however, the key values we care about are the hits array, which is the result object.

For this practice, we only care about:

- title
- url
- objectID


```json
{
  "hits": [
    {
      "title": "Relicensing React, Jest, Flow, and Immutable.js",
      "url": "https://code.facebook.com/posts/300798627056246",
      "objectID": "15316175"
    }
  ],
  "nbHits": 143847,
  "page": 0,
  "nbPages": 50,
  "hitsPerPage": 20,
  "processingTimeMS": 3,
  "exhaustiveNbHits": false,
  "query": "react",
  "params": "advancedSyntax=true\u0026analytics=false\u0026query=react"
}
```

## Full API Response
```json 
{
  "hits": [
    {
      "created_at": "2017-09-22T21:51:56.000Z",
      "title": "Relicensing React, Jest, Flow, and Immutable.js",
      "url": "https://code.facebook.com/posts/300798627056246",
      "author": "dwwoelfel",
      "points": 2280,
      "story_text": null,
      "comment_text": null,
      "num_comments": 498,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1506117116,
      "relevancy_score": 7675,
      "_tags": ["story", "author_dwwoelfel", "story_15316175"],
      "objectID": "15316175",
      "_highlightResult": {
        "title": {
          "value": "Relicensing \u003cem\u003eReact\u003c/em\u003e, Jest, Flow, and Immutable.js",
          "matchLevel": "full",
          "fullyHighlighted": false,
          "matchedWords": ["react"]
        },
        "url": {
          "value": "https://code.facebook.com/posts/300798627056246",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "dwwoelfel",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    }
  ],
  "nbHits": 143847,
  "page": 0,
  "nbPages": 50,
  "hitsPerPage": 20,
  "processingTimeMS": 3,
  "exhaustiveNbHits": false,
  "query": "react",
  "params": "advancedSyntax=true\u0026analytics=false\u0026query=react"
}
```