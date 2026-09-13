"Dev Stack"

Project Description

Dev Stack is a responsive React application where developers can explore modern technologies and create their own personalized technology stack.

Users can browse different technologies, view details, and add their favorite technologies to their stack.


Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- Vite
- JSON Data
- React Toastify


Features
1. Technology Explorer
Displays different technologies with:
Name,Category,Rating,Difficulty level,Badge,Description

2. Personal Developer Stack
Add technologies to your stack,Remove individual technologies,Remove all technologies,Prevent duplicate selection

3. Fully Responsive Design
Mobile friendly navbar,Responsive technology cards,Responsive stack section,Responsive footer



React Questions & Answers


1. What is JSX, and why is it used in React?

JSX is a syntax that allows developers write HTML-like code inside JavaScript.


2. What is the difference between props and state?

Props are data passed from a parent component to a child component.

State is data managed inside a component that can change over time and update the UI.


3. What does the useState hook do, and where did you use it?

useState is used to create and manage component state.I used it to store selected technologies in the developer stack.


4. What does useEffect do, and why did you need it?

useEffect handles side effects in React.I used it to load technology data from the JSON .


5. Why does every item in a .map() list need a unique key?

React uses the key to identify each item efficiently and update only the changed elements.

6. What is conditional rendering?

Conditional rendering means showing different UI based on a condition.

7. How do you pass data between components?

A parent component passes data to children using props.A child can send information back by calling a function received through props.