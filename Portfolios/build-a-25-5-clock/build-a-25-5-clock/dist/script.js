const BREAK = "break";
const SESSION = "session";
const DELIMITER = "-";

const LABEL = "label";
const LENGTH = "length";
const INCREMENT = "increment";
const DECREMENT = "decrement";

const TimeClock = function (name, length = 5) {
  this.name = name;
  this.length = length;
  this.labelId = name + DELIMITER + LABEL;
  this.lengthId = name + DELIMITER + LENGTH;
  this.incrementId = name + DELIMITER + INCREMENT;
  this.decrementId = name + DELIMITER + DECREMENT;
};

//----------------------
const TIMER = "timer-label";
const TIME_LEFT = "time-left";
const START_STOP = "start_stop";
const RESET = "reset";
const BEEP = "beep";


const incrementLength = name => {
  return {
    type: INCREMENT,
    name: name };

};

const decrementLength = name => {
  return {
    type: DECREMENT,
    name: name };

};

const resetLength = () => {
  return {
    type: RESET };

};

const playOrPause = () => {
  return {
    type: START_STOP };

};



const controlReducer = (state = { breakLength: 5,
  sessionLength: 25, play: false }, action) => {

  switch (action.type) {
    case INCREMENT:
      state[action.name + 'Length'] <= 59 ? state[action.name + 'Length']++ : '';
      return state;
    case DECREMENT:
      state[action.name + 'Length'] > 1 ? state[action.name + 'Length']-- : '';
      return state;
    case RESET:
      return { breakLength: 5,
        sessionLength: 25 };
    case START_STOP:
      state.play = !state.play;
      return state;
    default:
      return state;}


};

const store = Redux.createStore(controlReducer);

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      break: new TimeClock(BREAK, 5),
      session: new TimeClock(SESSION, 25),
      MMLeft: 25,
      breakMM: 5,
      SSLeft: 0,
      play: null,
      label: SESSION };

    this.increaseLength = this.increaseLength.bind(this);
    this.decreaseLength = this.decreaseLength.bind(this);
    this.resetLength = this.resetLength.bind(this);
    this.playOrPause = this.playOrPause.bind(this);
    this.countdown = this.countdown.bind(this);
  }

  increaseLength(event) {
    const name = event.target.id.split(DELIMITER).shift();
    this.props.increaseLength(name);
    this.setState({
      MMLeft: this.props.control.sessionLength,
      breakMM: this.props.control.breakLength });

  }

  decreaseLength(event) {
    const name = event.target.id.split(DELIMITER).shift();
    this.props.decrementLength(name);
    this.setState({
      MMLeft: this.props.control.sessionLength,
      breakMM: this.props.control.breakLength });

  }


  resetLength() {
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    this.props.resetLength();
    this.setState({
      MMLeft: 25,
      SSLeft: 0,
      breakMM: 5,
      label: SESSION });

  }

  countdown() {

    if (this.props.control.play) {
      this.state.play = setTimeout(() => {
        const mm = this.state.SSLeft > 0 ? this.state.MMLeft : this.state.MMLeft - 1;
        const ss = this.state.SSLeft > 0 ? this.state.SSLeft - 1 : 59;
        if (mm === 0 && ss === 0) {
          document.getElementById("beep").play();
        }


        if (mm >= 0) {
          this.setState({
            MMLeft: mm,
            SSLeft: ss });

          this.state.play = setTimeout(this.countdown, 1000);
        } else if (mm < 0 && this.state.breakMM > 0) {
          this.setState({
            MMLeft: this.state.breakMM,
            SSLeft: 0,
            label: BREAK });

          this.state.breakMM = 0;
          this.state.play = setTimeout(this.countdown, 1000);
        } else if (mm < 0 && this.state.breakMM <= 0) {
          this.props.decrementLength(SESSION);
          this.setState({
            MMLeft: this.props.control.sessionLength,
            SSLeft: 0,
            label: SESSION });

          this.state.play = setTimeout(this.countdown, 1000);
        }

      }, 1000);
    }
  }


  playOrPause() {

    this.props.playOrPause();
    this.countdown();

  }




  render() {

    const break_label = /*#__PURE__*/React.createElement("label", { id: this.state.break.labelId }, /*#__PURE__*/
    React.createElement("h2", null, this.state.break.labelId.toUpperCase()), /*#__PURE__*/
    React.createElement("button", { id: this.state.break.incrementId, onClick: this.increaseLength }, "\uC99D\uAC00"), /*#__PURE__*/
    React.createElement("h3", { id: this.state.break.lengthId }, this.props.control.breakLength), /*#__PURE__*/
    React.createElement("button", { id: this.state.break.decrementId, onClick: this.decreaseLength }, "\uAC10\uC18C"));


    const session_label = /*#__PURE__*/React.createElement("label", { id: this.state.session.labelId }, /*#__PURE__*/
    React.createElement("h2", null, this.state.session.labelId.toUpperCase()), /*#__PURE__*/
    React.createElement("button", { id: this.state.session.incrementId, onClick: this.increaseLength }, "\uC99D\uAC00"), /*#__PURE__*/
    React.createElement("h3", { id: this.state.session.lengthId }, this.props.control.sessionLength), /*#__PURE__*/
    React.createElement("button", { id: this.state.session.decrementId, onClick: this.decreaseLength }, "\uAC10\uC18C"));


    const timer_label = /*#__PURE__*/React.createElement("label", { id: TIMER }, /*#__PURE__*/
    React.createElement("h3", null, this.state.label));


    const timer_left = /*#__PURE__*/React.createElement("h2", { id: TIME_LEFT }, " ", `${this.state.MMLeft.toString().padStart(2, 0)}:${this.state.SSLeft.toString().padStart(2, 0)}`);


    const time_control = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
    React.createElement("button", { id: START_STOP, onClick: this.playOrPause }, "\uC7AC\uC0DD \uBC0F \uC77C\uC2DC\uC911\uC9C0"), /*#__PURE__*/
    React.createElement("button", { id: RESET, onClick: this.resetLength }, "\uB9AC\uC14B"));

    const beep = /*#__PURE__*/React.createElement("audio", {
      id: "beep",
      preload: "auto", src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" });


    return /*#__PURE__*/React.createElement("div", null,
    break_label,
    session_label,
    timer_label,
    timer_left,
    time_control,
    beep);


  }}



const mapStateToProps = state => {

  return { control: state };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseLength: name => {
      dispatch(incrementLength(name));
    },
    decrementLength: name => {
      dispatch(decrementLength(name));
    },
    resetLength: () => {
      dispatch(resetLength());
    },
    playOrPause: () => {
      dispatch(playOrPause());
    } };


};



const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

const Container = connect(mapStateToProps, mapDispatchToProps)(Clock);


ReactDOM.render( /*#__PURE__*/
React.createElement(Provider, { store: store }, /*#__PURE__*/
React.createElement(Container, null)),
document.getElementById("root"));