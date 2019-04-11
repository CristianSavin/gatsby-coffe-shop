/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import NavBar from './Global/NavaBar'
import Footer from './Global/Footer'

import './bootstrap.min.css'
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
