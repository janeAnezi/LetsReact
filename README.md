useEffect Hook is often used to retriev some data.
to be able to do this we will need to set up a mock up api within our project
so we are going to use JSON server fo this "npm i json-server"

in the root directory of our project we are going to create a mock database file. "db.json"
then create a schema

then run our mock api using "json-server --watch db.json --port 3001"


These basically covers 
# React Components
# React Props
# React Hooks (basic)
# Event Handling
# Data fetching (basic)


# UseState is a react hook that "creates state variable" that helps us to track state in components and updates the user interface.


# useEffect Hook is used to create other side effects like ....
**** Fetching data from APIs
**** Setting timers
**** Handling local storage
**** Handling browser events
**** Handling DOM mutations
**** Handling server-side rendering

# useRef Hook is used to create mutable variables, which will not re-render the component. also use for accessing DOM elements

# useMemo Hook returns a memoized value, Its like catching a value so that it doesnt need to be calculated. 
**** useMemo Hook only runs when one of its dependencies gets updated (this can inprove the performance of the application)
**** useCallback also improves the performance of the application also. it is similar to useMemo, the difference is that it returns a memoized function unlike useMemo that returns a memoized value

# useReducer Hook is used to handle complex state changes, it is similar to useState but it is