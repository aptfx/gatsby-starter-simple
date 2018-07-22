import React from "react"
import { Menu, MenuItem } from "./menu"
import { Link } from "gatsby"

const Header = ({ siteTitle, author }) => (
  <header className="col-group">
    <h1 className="col-4 col-dt-3 col-mb-12">
      <Link to="/">{siteTitle}</Link>
    </h1>
    <Menu className="col-8 col-dt-9 col-mb-12">
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/about/">About</MenuItem>
    </Menu>
  </header>
)

export default Header
