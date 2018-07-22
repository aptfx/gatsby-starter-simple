import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <h1>About This Blog</h1>
    <p>Welcome to my weblog!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
