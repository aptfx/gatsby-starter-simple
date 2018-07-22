import React from "react"
import Link from "gatsby-link"

const L = ({ to, children }) => (
  <Link className="UnstyledLink" to={to}>
    {children}
  </Link>
)

const PostEntry = ({ title, excerpt, slug, date }) => (
  <article className="col-group col-12 col-dt-5 col-dt-offset-1">
    <aside className="col-3 col-offset-1 col-dt-offset-0 col-dt-10">
      <div className="PostEntry-date">{date}</div>
    </aside>
    <L to={slug}>
      <h2 className="col-8 col-dt-11">{title}&nbsp;>></h2>
    </L>
    <p className="col-8 col-dt-11 col-offset-4 col-dt-offset-0">
      {excerpt} <L to={slug}>[...]</L>
    </p>
  </article>
)

export default PostEntry
