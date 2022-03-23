class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '# 마크다운 미리보기\n## 그냥 만들어봤어요\n`(Back quote)`\n~~~ 코드부분이에요\nconsole.log("Hello World!")\n~~~\n1. - 목록\n2. > 블럭인용문\n3. **굵은글씨**\n![freecodecamp](https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg)\n [freecodecamp](https://www.freecodecamp.org/)' };

    this.scanAndConvert = this.scanAndConvert.bind(this);
  }


  scanAndConvert(event) {
    this.setState({ content: event.target.value });

  }

  render() {
    console.log(marked.parse(this.state.content));
    const markedContent = this.state.content;


    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("fieldset", null, /*#__PURE__*/
      React.createElement("label", null, "Editor:", /*#__PURE__*/
      React.createElement("textarea", { id: "editor", name: "bio", rows: "30", cols: "30", placeholder: "Enter your MarkDown Code!!", onChange: this.scanAndConvert, value: this.state.content }))), /*#__PURE__*/




      React.createElement("fieldset", null, /*#__PURE__*/
      React.createElement("label", null, "Preview:", /*#__PURE__*/
      React.createElement("div", { id: "preview" }, /*#__PURE__*/
      React.createElement(ReactMarkdown, null, markedContent))))));





  }}



ReactDOM.render( /*#__PURE__*/React.createElement(Previewer, null), document.getElementById("main"));