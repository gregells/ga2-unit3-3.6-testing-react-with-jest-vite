import { useState } from "react"

export default function Counter() {
  const [ count, setCount ] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}