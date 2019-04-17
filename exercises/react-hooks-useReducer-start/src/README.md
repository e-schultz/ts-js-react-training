# Robot List - useReducer Instructions

## Implement Reducer Actions

- Implement the ADD_ROBOT action
- Implement the REMOVE_ROBOT action
- Implement the DEACTIVATE_ROBOT action

## App Modifications

- On `RobotCard` - pass down callbacks for the ACTIVATE_ROBOT action
- On `RobotCard` - pass down callbacks for the DEACTIVATE_ROBOT action

- On `RobotForm` - when submitting, it should dispatch the following event:

```js
{
  type: "ADD_ROBOT",
  robot: { /* robot details like name, occupation, etc */}
}
```

### Extra

- Implement the `RobotList` component
- Update `App` to use `RobotList`
- Update `RobotCard` to only show `Activate` if the robot is not active
- Update `RobotCard` to only show `Deactivate` if the robot is active

### Notes on Reducer Update Patterns 

When we want to modify an object in an array, we want to return the same instance of the array, and only create new object for the one that has changes.

A common pattern used is:

```js
let todos = [
  { id: 1, text: "Demonstrate Update Patterns", complete: true },
  { id: 2, text: "Make Coffee", complete: false }
];

let updateStatus = (id, complete, items) => {
  return items.map(item => {
    if (item.id !== id) {
      // return unmodified item
      return item;
    } else {
      // we found the item we want to update
      // create a shallow copy of it, and set the new value that
      // we want
      return { ...item, complete };
    }
  });
};

let updatedTodos = updateStatus(2, true, todos);
```

This can be shortened to:

```js
let updateStatus = (id, complete, items) => items.map(item => {
    return item.id !== id ? item : { ...item, complete}
};
```
