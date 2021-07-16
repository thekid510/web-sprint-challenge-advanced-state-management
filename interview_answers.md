# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
Context Api helps solve the issue of prop drilling, it helps get data to all levels of your code with out having to share props.
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
In redux the store is what holds all the data hence why its known as the single source of truth, the reducer is what manipulates the data when it receives an action which tells the reducer to change the store data.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
redux-thunk allows us to make action creators that return a outer function and not a action 
This allows us to write conditional dispatches.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
My favorite state management system is redux because its relatively quick/easy to set up and for me was just the easiest to wrap my brain around and after that i wont have to worry about component hiearchy.