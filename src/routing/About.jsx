import React from 'react'

function About() {
  return (
    <div className='About'>
      <h1> ABOUT </h1>
      <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. Let us create a simple application to React to understand how the React Router works. The application will contain three components the home component, about component, and contact component. We will use React Router to navigate between these components.

        BrowserRouter: BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState, and the popstate event) to keep your UI in sync with the URL. It is the parent component that is used to store all of the other components.
        Routes: Its a new component introduced in the v6 and an upgrade of the component. The main advantages of Routes over Switch are:
        Relative s and s
        Routes are chosen based on the best match instead of being traversed in order.
        Route: Route is the conditionally shown component that renders some UI when its path matches the current URL.z
      </p>
    </div>
  )
}

export default About