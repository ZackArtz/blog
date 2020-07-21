/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class PostView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/PostController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PostView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    scripts.concat(Promise.resolve()).reduce((loaded, loading) => {
      return loaded.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return loading
      })
    })
  }

  render() {
    const proxies = Controller !== PostView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\blog-cf8ba0.webflow.css);
        ` }} />
        <span className="af-view">
          <a id="w-node-fea94191f5f1-e60f5b40" href="#" className="af-class-post w-inline-block">
            <h6 className="af-class-date">06-12-20</h6>
            <h1 className="af-class-post-title">How to setup a Node.JS app on your own server.</h1>
          </a>
        </span>
      </span>
    )
  }
}

export default PostView

/* eslint-enable */int-enable */