import React from 'react'
import Product from './Product'
import Title from '../Global/Title'
import {StaticQuery, graphql} from 'gatsby'

export default function Products() {
  return (
    <StaticQuery query={getProducts} render={data => {
      return (
        <section className="py-5">
          <div className="container">
            <Title title="our products" />
            <div className="row">
              {data.products.edges.map(({node:product}) => {
                return <Product key={product.id} product={product} />
              })}
            </div>
          </div>
        </section>
      )
    }} />
  )
}

const getProducts = graphql`{
  products: allContentfulCoffeeProducts {
    edges {
      node {
        id
        title
        price
        image {
          fluid(maxWidth: 426) {
            src
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
`