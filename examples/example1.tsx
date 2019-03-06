import React from 'react';

export function MyThing({input}: {input: Number}) {
    return <div>Hi {input}</div>
}

export function App() {
    return (<MyThing input={1}/>)
}