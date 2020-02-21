1. What problem does the context API help solve?

Helps pass our items down to our different componenents.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: they said payloads of information to our store, which is where we can get our props
reducers:determines change in an applications state
store: Redux is state container for JavaScript. it is able to store whole state of the app. We can also create a new store.

Knownas single source of truth because the state of the entire application is in an object tree in one store. holds all info together.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application State: The "global" state that all components in the componenet can acess. in Redux we can pass components to each other. useful to use if you have a big application and helps pass components alot more effectively.

Component State: This is a single component that cannot be accessed by anywhere else in the componenet. stored locally in the componenet and cannot be accessed unless you pass prop to it. Beter to use when dealing with a smaller app. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that allows you to call action creators that return a function instead of an action object. 

action-creators return functions instead of actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

It depends on what I am using, but Redux seems super helpful if creating a much larger app and context seems easier to handle if using a smaller application.  
