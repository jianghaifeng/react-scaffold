import React from "react";
import ReactDOM from "react-dom";
class HelloMessage extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById("example")
);
