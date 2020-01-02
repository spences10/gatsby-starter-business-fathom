import React, { Component } from 'react'
import Helmet from 'react-helmet'
import config from '../../../config'
import '../../assets/sass/styles.sass'
import { AnalyticsProvider } from '../../contexts/event-tracking'
import Footer from '../Footer'
import NavBar from '../NavBar'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = { isActive: false }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    return (
      <AnalyticsProvider>
        <div id="layout-wrapper">
          <Helmet>
            <title>{config.siteTitle}</title>
            <meta
              name="description"
              content={config.siteDescription}
            />
          </Helmet>
          <NavBar
            isActive={this.state.isActive}
            toggleNavbar={() => this.toggleNavbar()}
          />
          <div id="content-wrapper">{this.props.children}</div>
          <Footer />
        </div>
      </AnalyticsProvider>
    )
  }
}

export default Layout
