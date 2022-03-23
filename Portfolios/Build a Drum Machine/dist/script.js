const BUTTONS = {
  'Q': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  'W': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  'E': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  'A': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  'S': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', 'D': 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  'Z': 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  'X': 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  'C': 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' };


const PLAY = 'PLAY';
const PAUSE = 'PAUSE';

const playTheButton = button => {
  return {
    type: PLAY,
    button: button };

};

const buttonReducer = (state = PAUSE, action) => {

  switch (action.type) {
    case PLAY:
      document.getElementById(action.button).play();
      break;
    default:
      return state;}

};


const store = Redux.createStore(buttonReducer);


class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.keys = Object.keys(BUTTONS);
    this.handlePlay = this.handlePlay.bind(this);
    this.reactKeyboard = this.reactKeyboard.bind(this);
    this.state = {
      button: PAUSE };

  }

  componentDidMount() {
    document.addEventListener('keydown', this.reactKeyboard);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.reactKeyboard);
  }

  reactKeyboard(event) {
    const char = String.fromCharCode(event.keyCode);

    if (BUTTONS.hasOwnProperty(char)) {
      this.props.playAButton(char);
      this.setState({
        button: char });

    }

  }


  handlePlay(event) {
    this.props.playAButton(this.keys[event.target.id]);
    this.setState({
      button: this.keys[event.target.id] });


  }




  render() {

    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("h1", null, this.state.button), /*#__PURE__*/
      React.createElement("div", { class: "display" },

      this.keys.map((key, index) => {
        return /*#__PURE__*/(

          React.createElement("button", { id: index, class: "drum-pad", onClick: this.handlePlay },
          key, /*#__PURE__*/
          React.createElement("audio", { id: key, class: "clip", src: BUTTONS[key] })));

      }))));






  }}
;


const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

const mapStateToProps = action => {
  return { state: action };
};

const mapDispatchToProps = dispatch => {
  return {
    playAButton: button => {
      dispatch(playTheButton(button));
    } };

};

const Container = connect(mapStateToProps, mapDispatchToProps)(Buttons);

ReactDOM.render( /*#__PURE__*/
React.createElement(Provider, { store: store }, /*#__PURE__*/
React.createElement(Container, null)),

document.getElementById("display"));