import React from 'react'

function Blog() {
  return (
    <div className='bg-gray-100 p-10 grid grid-cols-2 gap-5'>
        <div className='border p-5  bg-white'>
            <h1>When should you use context API?</h1>
            <hr className='py-4' />
            <p>The Context API in React is a mechanism for sharing data between components in a 
                React application without having to pass the data through props manually at every level 
                of the component tree. Context is often used when data needs to be accessed by multiple 
                components at different levels of the component tree,
                 and prop drilling would result in verbose and inefficient code.</p>
        </div>
        <div className='border p-5 bg-white'>
        <h1>What is a custom hook?</h1>
        <hr className='py-4' />
            <p>In React, a custom hook is a reusable function that encapsulates state logic and/or side effects,
                 allowing you to share that logic across different components. Custom hooks are a way to abstract 
                 complex logic or behavior into a separate function that can be used across multiple components in a React application,
                 promoting code reusability and maintainability.</p>
        </div>
        <div className='border p-5  bg-white'>
        <h1>What is useRef?</h1>
        <hr className='py-4' />
            <p>In React, useRef is a built-in hook that provides a way to create a mutable reference to a 
                DOM element or any other value that persists across renders. The useRef hook allows you to access and manipulate the DOM directly,
                 bypassing React's usual rendering mechanism. It is commonly used for accessing DOM elements,
                 managing focus, or storing mutable values that don't trigger a re-render when updated.</p>

        </div>
        <div className='border p-5  bg-white'>
        <h1>What is useMemo?</h1>
        <hr className='py-4' />
            <p>In React, useMemo is a built-in hook that allows you to memoize the result of a computation and cache it, 
                so that the computation is only re-evaluated when the dependencies change. 
                This can help optimize performance in certain scenarios where a computation is expensive and doesn't need to be re-computed on every render.</p>
        </div>
    </div>
  )
}

export default Blog;