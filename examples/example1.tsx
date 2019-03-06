import React from 'react';
import {  MyThingTwo } from "./example-import";
export function MyThing({input}: {input: Number}) {
    return <div>Hi {input}</div>
}

export default function App() {
    return (<><MyThing input={1}/>
        <MyThingTwo input={2}/>
        </>
        )
}