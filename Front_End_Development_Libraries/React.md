# React

### Use React to Render Nested Components

    - Component composition is one of React's powerful features. You break down your UI into its basic building blocks, and those pieces become the components. This helps to separate the code responsible for the UI from the code responsible for handling your application logic. It can greatly simplify the development and maintenance of complex projects.

### Render a Class Component to the DOM

    - Here's a refresher on the syntax: ReactDOM.render(componentToRender, targetNode). The first argument is the React component that you want to render. The second argument is the DOM node that you want to render that component within. React components are passed into ReactDOM.render() a little differently than JSX elements. For JSX elements, you pass in the name of the element that you want to render. However, for React components, you need to use the same syntax as if you were rendering a nested component, for example ReactDOM.render(<ComponentToRender />, targetNode). You use this syntax for both ES6 class components and functional components.

### Pass Props to a Stateless Functional Component

    - React: props. In React, you can pass props, or properties, to child components. Say you have an App component which renders a child component called Welcome which is a stateless functional component. You use custom HTML attributes created by you and supported by React to be passed to the component.To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces. To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.

### Use Default Props

    - React also has an option to set default props. You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. This allows you to specify what a prop value should be if no value is explicitly provided.

        Component.defaultProps = { property: value}

    Remember that the syntax to add a prop to a component looks similar to how you add HTML attributes. However, since the value for quantity is an integer, it won't go in quotes but it should be wrapped in curly braces. For example, {100}. This syntax tells JSX to interpret the value within the braces directly as JavaScript.


### Use PropTypes to Define the Props You Expect

    - React provides useful type-checking features to verify that components receive props of the correct type. It's considered a best practice to set propTypes when you know the type of a prop ahead of time. You can define a propTypes property for a component in the same way you defined defaultProps. Doing this will check that props of a given key are present with a given type.

    ex) MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }

    Note: As of React v15.5.0, PropTypes is imported independently from React, like this: import PropTypes from 'prop-types';


### Access Props Using this.props

    - The ES6 class component uses a slightly different convention to access props. Anytime you refer to a class component within itself, you use the this keyword. To access props within a class component, you preface the code that you use to access it with this. For example, if an ES6 class component has a prop called data, you write {this.props.data} in JSX.


### Create a Stateful Component

    - You create state in a React component by declaring a state property on the component class in its constructor. This initializes the component with state when it is created. The state property must be set to a JavaScript object.You have access to the state object throughout the life of your component. You can update it, render it in your UI, and pass it as props to child components. The state object can be as complex or as simple as you need it to be. Note that you must create a class component by extending React.Component in order to create state like this. Once you define a component's initial state, you can display any part of it in the UI that is rendered. If a component is stateful, it will always have access to the data in state in its render() method. You can access the data with this.state. Once you define a component's initial state, you can display any part of it in the UI that is rendered. If a component is stateful, it will always have access to the data in state in its render() method. You can access the data with this.state. If you want to access a state value within the return of the render method, you have to enclose the value in curly braces. 

    React uses what is called a virtual DOM, to keep track of changes behind the scenes. When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop. React updates the actual DOM, but only where necessary. This means you don't have to worry about changing the DOM. You simply declare what the UI should look like.

    Note that if you make a component stateful, no other components are aware of its state. Its state is completely encapsulated, or local to that component, unless you pass state data to a child component as props. This notion of encapsulated state is very important because it allows you to write certain logic, then have that logic contained and isolated in one place in your code.


### Set State with this.setState

    - The previous challenges covered component state and how to initialize state in the constructor. There is also a way to change the component's state. React provides a method for updating component state called setState. You call the setState method within your component class like so: this.setState(), passing in an object with key-value pairs. The keys are your state properties and the values are the updated state data.

    - React expects you to never modify state directly, instead always use this.setState() when state changes occur. Also, you should note that React may batch multiple state updates in order to improve performance. What this means is that state updates through the setState method can be asynchronous. There is an alternative syntax for the setState method which provides a way around this problem. This is rarely needed but it's good to keep it in mind! 



### Bind 'this' to a Class Method

    - In addition to setting and updating state, you can also define methods for your component class. A class method typically needs to use the this keyword so it can access properties on the class (such as state and props) inside the scope of the method. There are a few ways to allow your class methods to access this.

    One common way is to explicitly bind this in the constructor so this becomes bound to the class methods when the component is initialized. You may have noticed the last challenge used this.handleClick = this.handleClick.bind(this) for its handleClick method in the constructor. Then, when you call a function like this.setState() within your class method, this refers to the class and will not be undefined.

    Note: The this keyword is one of the most confusing aspects of JavaScript but it plays an important role in React. Although its behavior here is totally normal, these lessons aren't the place for an in-depth review of this so please refer to other lessons if the above is confusing!

    The code editor has a component with a state that keeps track of the text. It also has a method which allows you to set the text to You clicked!. However, the method doesn't work because it's using the this keyword that is undefined. 


### Use State to Toggle an Element

    - Sometimes you might need to know the previous state when updating the state. However, state updates may be asynchronous - this means React may batch multiple setState() calls into a single update. This means you can't rely on the previous value of this.state or this.props when calculating the next value.
    Instead, you should pass setState a function that allows you to access state and props. Using a function with setState guarantees you are working with the most current values of state and props. This means that the above should be rewritten as:
    
        this.setState((state, props) => ({
            counter: state.counter + props.increment
            }));

    You can also use a form without props if you need only the state:

        this.setState(state => ({
        counter: state.counter + 1
        }));

    Note that you have to wrap the object literal in parentheses, otherwise JavaScript thinks it's a block of code.