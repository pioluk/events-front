// @flow

import React, { Component } from 'react'

export function withScroll (WrappedComponent: Component<any, any, any>) {
  return class ScrolledComponent extends Component {
    previousDelta = 0
    previousScreenY = null
    deltaY = 0

    state = {
      offsetY: 0
    }

    isFirefox() {
      return navigator.userAgent.toLowerCase().indexOf('firefox') >= 0
    }

    componentWillMount() {
      if (this.isFirefox()) {
        // TODO
        // window.addEventListener('DOMMouseScroll', this.handleFirefoxScroll)
      } else {
        window.addEventListener('mousewheel', this.handleScroll)
      }
    }

    componentWillUnmount() {
      if (this.isFirefox()) {
        // TODO
        // window.removeEventListener('DOMMouseScroll', this.handleFirefoxScroll)
      } else {
        window.removeEventListener('mousewheel', this.handleScroll)
      }
    }

    handleFirefoxScroll = e => {
      const direction = e.detail < 0 ? 1 : -1
      if (this.previousScreenY !== e.screenY) {
        this.previousDelta = this.deltaY
        this.deltaY = this.previousDelta + direction * e.screenY
      }
      this.previousScreenY = e.screenY
      window.requestAnimationFrame(() => {
        console.log('deltaY', this.deltaY)
        console.log('previousScreenY', this.previousScreenY)
      })
    }

    handleScroll = (e) => {
      window.requestAnimationFrame(() => {
        this.setState(state => ({ offsetY: Math.min(0, state.offsetY + e.wheelDeltaY) }))
      })
    }

    render() {
      return <WrappedComponent {...this.props} scroll={this.state.offsetY} />
    }
  }
}
