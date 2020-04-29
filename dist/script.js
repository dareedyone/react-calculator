function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Calculator extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",





    event => {
      console.log(this.state.display, typeof this.state.display);
      let value = event.target.innerHTML;
      switch (value) {
        case "AC":
          this.setState({
            display: 0 });

          break;
        case "=":
          let dp = this.state.display;

          if (dp.match(/[+-/*]{2,}\d+$/)) {
            let mc = dp.match(/[+-/*]{2,}\d+$/);
            let mcarith = mc[0].match(/[+-/*]{2,}/);
            let arith = mcarith[0].substr(mcarith[0].length - 1, mcarith[0].length);
            let fs = dp.replace(mc, "");
            let ls = mc[0].replace(mcarith, "");
            if (arith == "-") {
              this.setState({
                display: `${eval(this.state.display)}` });

            } else {
              this.setState({
                display: `${eval(`${fs}${arith}${ls}`)}` });


            }

          } else {
            this.setState({
              display: `${eval(this.state.display)}` });

          }
          console.log(this.state.display);
          break;
        default:
          if (this.state.display == 0) {
            if (value == 0) {
              this.setState({
                display: 0 });

            } else {
              this.setState({
                display: value });

            }

          } else if (this.state.display.match(/[+*/-]$/)) {
            if (value == "+" || value == "/" || value == "*") {
              let dp = this.state.display;
              let rem = dp.substr(0, dp.length - 1);
              this.setState({
                display: `${rem}${value}` });

            } else {
              this.setState({
                display: `${this.state.display}${value}` });

            }

          } else if (this.state.display.match(/\./)) {
            if (value == '.') {
              if (this.state.display.match(/\.\d+[-+*/]\d+/)) {
                this.setState({
                  display: `${this.state.display}${value}` });

              } else {
                this.setState({
                  display: this.state.display });

              }

            } else {
              this.setState({
                display: `${this.state.display}${value}` });

            }


          } else {
            this.setState({
              display: `${this.state.display}${value}` });

          }}



    });_defineProperty(this, "handleKeyPress",

    event => {
      console.log(this.state.display);

    });this.state = { display: "" };}


  render() {
    return (
      React.createElement(React.Fragment, null,
      React.createElement("div", { id: "display", className: "text-right px-2" }, this.state.display),
      React.createElement("div", { onKeyDown: this.handleKeyPress, className: "" },

      React.createElement("button", { onClick: this.handleClick, id: "clear", className: "drum-pad bg-danger" }, "AC"),
      React.createElement("button", { onClick: this.handleClick, id: "divide", className: "drum-pad bg-arith" }, "/"),
      React.createElement("button", { onClick: this.handleClick, id: "multiply", className: "drum-pad bg-arith" }, "*"),
      React.createElement("button", { onClick: this.handleClick, id: "seven", className: "drum-pad bg-custom" }, "7"),
      React.createElement("button", { onClick: this.handleClick, id: "eight", className: "drum-pad bg-custom" }, "8"),
      React.createElement("button", { onClick: this.handleClick, id: "nine", className: "drum-pad bg-custom" }, "9"),
      React.createElement("button", { onClick: this.handleClick, id: "subtract", className: "drum-pad bg-arith" }, "-"),
      React.createElement("button", { onClick: this.handleClick, id: "four", className: "drum-pad bg-custom" }, "4"),
      React.createElement("button", { onClick: this.handleClick, id: "five", className: "drum-pad bg-custom" }, "5"),
      React.createElement("button", { onClick: this.handleClick, id: "six", className: "drum-pad bg-custom" }, "6"),
      React.createElement("button", { onClick: this.handleClick, id: "add", className: "drum-pad bg-arith" }, "+"),
      React.createElement("button", { onClick: this.handleClick, id: "one", className: "drum-pad bg-custom" }, "1"),
      React.createElement("button", { onClick: this.handleClick, id: "two", className: "drum-pad bg-custom" }, "2"),
      React.createElement("button", { onClick: this.handleClick, id: "three", className: "drum-pad bg-custom" }, "3"),
      React.createElement("button", { onClick: this.handleClick, id: "equals", className: "drum-pad" }, "="),
      React.createElement("button", { onClick: this.handleClick, id: "zero", className: "drum-pad bg-custom w-75" }, "0"),
      React.createElement("button", { onClick: this.handleClick, id: "decimal", className: "drum-pad bg-custom" }, "."))));





  }}


ReactDOM.render(React.createElement(Calculator, null), document.getElementById("root"));