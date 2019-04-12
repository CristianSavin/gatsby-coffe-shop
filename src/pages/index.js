import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Global/BackgroundSection"
import Info from '../components/Home/Info'
import Menu from '../components/Home/Menu'
import Products from '../components/Home/Products'
import Contact from '../components/Home/Contact'



const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="regular joe's"
      styleClass="default-background"
    />
    <Info />
    <Menu items={[...data.coffee.edges, ...data.juice.edges, ...data.tea.edges]} />
    <Products />
    <Contact />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "default-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  },
  coffee: allContentfulCoffeeItemExample {
    edges {
      node {
        id
        title
        image {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
        price
        description {
          description
        }
        category
      }
    }
  },
  juice: allContentfulJuceItemExample {
    edges {
      node {
        id
        title
        image {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
        price
        description {
          description
        }
        category
      }
    }
  },
  tea: allContentfulTeaItemExample {
    edges {
      node {
        id
        title
        image {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
        price
        description {
          description
        }
        category
      }
    }
  }
}
`;

export default IndexPage
