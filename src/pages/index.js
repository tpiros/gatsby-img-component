import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "../css/styles.css"

const IndexPage = () => (
  <div className="container">
    <div className="left">
      <h1>Built in Component</h1>
      <StaticImage
        style={{ marginBottom: "5px", border: "1px solid black" }}
        src="../images/sample.jpg"
        alt="Sample"
        width={500}
      />
      <StaticImage
        style={{ marginBottom: "5px", border: "1px solid black" }}
        src="../images/sample2.jpg"
        alt="Sample"
        width={500}
      />
      <StaticImage
        style={{ marginBottom: "5px", border: "1px solid black" }}
        src="../images/sample3.jpg"
        alt="Sample"
        width={500}
      />
    </div>
    <div className="right">
      <h1>Cloudinary</h1>
      <img
        width="500"
        src="https://res.cloudinary.com/tamas-demo/image/upload/w_500,f_webp,q_auto/img-component/sample.jpg"
        alt="Sample"
      />
      <img
        width="500"
        src="https://res.cloudinary.com/tamas-demo/image/upload/w_500,f_webp,q_auto/img-component/sample2.jpg"
        alt="Sample"
      />
      <img
        width="500"
        src="https://res.cloudinary.com/tamas-demo/image/upload/w_500,f_webp,q_auto/img-component/sample3.jpg"
        alt="Sample"
      />
    </div>
  </div>
)

export default IndexPage
