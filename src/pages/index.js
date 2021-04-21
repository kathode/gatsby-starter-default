import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"


const IndexPage = () => (
  <Layout>
    
    <h1>Traffic Lights</h1>
    
    <div style="text-align:center">
      <h1>Round Dots / Circles</h1>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
