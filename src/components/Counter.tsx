import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="Counter">
      <button onClick={() => setCount((count) => count + 1)}>Up</button>
      <button onClick={() => setCount((count) => count - 1)}>Down</button>
      <span>{`Result : ${count}`}</span>
    </div>
  )
}

export default Counter;