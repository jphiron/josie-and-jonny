import React from "react"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"
import "../scss/page.scss"
import "../scss/details.scss"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import SEO from "../components/seo"

class Details extends React.Component {
  render() {
    const { images } = this.props
    return (
      <div className="main-content-container details">
        <SEO title="The details" />
        <div className="container content">
          <h2 className="title">The details</h2>
        </div>
        <Img
          className="image img-fluid"
          id="barnbougle-castle"
          fluid={images.bbCastle.childImageSharp.fluid}
        />
        <div className="container content body">
          <p className="summary">
            Our reception will take place on the{" "}
            <strong>
              3<sup>rd</sup> September 2022
            </strong>
            <br />
            at <strong>Barnbougle</strong> Castle near{" "}
            <strong>Edinburgh</strong>
          </p>
        </div>
        <Img
          className="image img-fluid"
          id="scottish-library"
          fluid={images.scottishLibrary.childImageSharp.fluid}
        />
        <div className="container content body">
          <p className="summary">
            The reception will commence from <strong>5:00pm</strong> with a
            welcome drink
          </p>
        </div>
        <Img
          className="image img-fluid"
          id="banquet-hall"
          fluid={images.banquetHall.childImageSharp.fluid}
        />
        <div className="container content body">
          <p className="summary">
            Followed by live music and dancing in the <strong>Library</strong>{" "}
            until <strong>midnight</strong>
          </p>
        </div>

        <div
          className="container content info"
          style={{ backgroundColor: "hsl(201, 100%, 95%)", padding: "1.75rem", borderRadius: "5px" }}
        >
          <p className="summary">The dress code is: Black tie optional.</p>
          <p className="summary" style={{marginBottom: 0}}>
            Please be aware that, though we love your little ones, we will not
            be able to invite young children to our wedding. We hope that you
            will still be able to attend. Please contact us if this causes an
            issue, as exceptions may be possible for babies under 12 months.
          </p>
        </div>

        <div className="container content info">
          <p>
            For more information on and more images of Barnbougle Castle, please
            head over to their website:
          </p>
          <a
            href="https://roseberyvenues.co.uk/venue/barnbougle-castle"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Click here
          </a>
        </div>
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        bbCastle: file(relativePath: { eq: "barnbougle-castle.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        scottishLibrary: file(relativePath: { eq: "scottish-library.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        banquetHall: file(relativePath: { eq: "banquet-hall.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Details images={data} />}
  />
)
