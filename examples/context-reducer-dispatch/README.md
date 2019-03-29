# Using context + useReducer

This is a bit of a contrived example, the initial use-case was to have a component like

```jsx
<Number onValueChange={event=>setNumber1(event)}/>
<Number onValueChange={event=>setNumber2(event)}/>
<Sum number1={number1} number2={number2}/>
```

The question came up of:

> What if one of the numbers was deeply nested?

The initial approach would involve prop-drilling to pass the `onValueChange` through the various nested components.

To avoid the prop-drilling, we can use `useReducer` which will give us access to a dispatch,
and make use of the `useContext` to get access to the dispatcher deeply within a tree.

This pattern is documented in the [React Docs on how to avoid passing a callback down](https://reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down)

In this example though - the trade off is we need to know which number fired the dispatch to know if we want to update number 1 or number 2.

By being able to make use of `useContext` to get the Number Dispatcher, it does avoid the problem of having to pass down an `onValueChange` through several layers of components:

```jsx
function Number({ id }) {
  const dispatch = useContext(NumberDispatch);
  return (
    <input
      onChange={event =>
        dispatch({
          type: "setNumber",
          id,
          value: parseFloat(event.target.value)
        })
      }
    />
  );
}

function AnotherWrapper(props) {
  return (
    <div>
      <Number id="number2" />
    </div>
  );
}
function DeepNumber(props) {
  return (
    <div>
      <AnotherWrapper />
    </div>
  );
}
```