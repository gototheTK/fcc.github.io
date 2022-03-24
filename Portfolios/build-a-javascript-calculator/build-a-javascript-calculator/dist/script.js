const EQUALS = "equals";
const NUMBERS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const OPERATORS = { "add": "+", "subtract": "-", "multiply": "*", "divide": "/" };
const DECIMAL = "decimal";
const CLEAR = "clear";
const DISPLAY = "display";

class Calcaulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0',
      last: '',
      process: [] };

    this.clickClear = this.clickClear.bind(this);
    this.clickNumber = this.clickNumber.bind(this);
    this.clickOperator = this.clickOperator.bind(this);
    this.clickDot = this.clickDot.bind(this);
  }

  clickClear() {
    this.setState({
      input: '0',
      last: 'CLEAR',
      process: [] });

  }

  clickNumber(event) {
    this.setState({
      input: this.state.input === '0' ? event.target.value :
      this.state.input + event.target.value,
      last: 'NUMBERS' });

  }

  clickDot(event) {

    const number = this.state.input.includes('.') ? this.state.input : this.state.input + '.';

    this.setState({
      input: number,
      last: 'DECIMAL' });

  }

  clickOperator(event) {


    const op = event.target.value;


    if (op === '-' && this.state.input === '0') {
      this.setState({
        input: op,
        last: 'OPERATOR' });

    } else if (op === EQUALS) {
      let operand = 0;
      let result = 0;

      this.state.process.push(this.state.input);
      this.state.process.reduce((previous, current, index) => {

        if (index === 0) {
          result = Number(current);
        }

        switch (previous) {
          case '+':
            result += Number(current);
            break;
          case '-':
            result -= Number(current);
            break;
          case '*':
            result *= Number(current);
            break;
          case '/':
            result /= Number(current);
            break;
          default:
            return current;}

      }, result);
      this.setState({
        input: result,
        last: EQUALS,
        process: [] });

    } else {

      this.state.last === 'OPERATOR' ? this.state.process.pop() : this.state.process.push(this.state.input);
      this.state.process.push(op);
      this.state.input = '0';
      this.state.last = 'OPERATOR';

      console.log(this.state.process);

    }


  }


  render() {

    const display = /*#__PURE__*/React.createElement("div", { id: DISPLAY, class: "well" },
    this.state.input);


    const numbers = NUMBERS.map((number, index) => {
      return /*#__PURE__*/React.createElement("button", { id: number, class: "btn btn-primary col-xs-4", value: index, onClick: this.clickNumber }, index);
    });
    numbers.push(numbers.shift());

    const equal = /*#__PURE__*/React.createElement("button", { id: EQUALS, class: "btn btn-danger col-xs-8", onClick: this.clickOperator, value: EQUALS }, "=");

    const operators = Object.keys(OPERATORS).map((operator, index) => {
      return /*#__PURE__*/React.createElement("button", { id: operator, class: "btn btn-warning col-xs-4", onClick: this.clickOperator, value: OPERATORS[operator] }, OPERATORS[operator]);
    });

    const decimal = /*#__PURE__*/React.createElement("button", { id: DECIMAL, class: "btn btn-default col-xs-4", onClick: this.clickDot }, ".");

    const clear = /*#__PURE__*/React.createElement("button", { id: CLEAR, class: "btn btn-default col-xs-4", onClick: this.clickClear }, "AC");

    return /*#__PURE__*/(
      React.createElement("div", { class: "container-fluid" },
      display,
      numbers,
      decimal,
      clear,
      operators,
      equal));


  }}



ReactDOM.render( /*#__PURE__*/React.createElement(Calcaulator, null), document.getElementById('root'));