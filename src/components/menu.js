import React, { Component } from "react"
import { Link } from "gatsby"

export class Menu extends Component {
  state = {
    open: false,
  }

  onClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    let { className, children } = this.props
    return (
      <nav className={className}>
        <button onClick={this.onClick}>Menu</button>
        <ul className={this.state.open ? "open" : ""}>{children}</ul>
      </nav>
    )
  }
}

export const MenuItem = ({ to, children }) => (
  <li>
    <Link to={to}>{children}</Link>
  </li>
)
