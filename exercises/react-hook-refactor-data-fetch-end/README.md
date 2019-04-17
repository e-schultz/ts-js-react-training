# React Hooks - Refactor Exercise - Solution

This exercise is based on one of the previous data-fetch examples.

Modify `src/components/SearchBar.js` to use the `useState` hook instead of being a component that extends from `React.Component`

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