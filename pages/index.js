import useSwr from 'swr'
import Link from 'next/link'
import Post from "../components/Post";
import PostController from "../components/PostController";


const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
    return (
        <span>
        <span className="af-view">
          <div className="af-class-body">
            <div data-collapse="medium" data-animation="default" data-duration={400} role="banner" className="af-class-nav w-nav">
              <div className="w-container">
                <a href="#" className="w-nav-brand">
                  <div className="af-class-text-block-2">Zachary Myers</div>
                </a>
                <nav role="navigation" className="w-nav-menu"><a href="#" className="af-class-link w-nav-link">Home</a><a href="#" className="af-class-link w-nav-link">About</a><a href="#" className="af-class-link w-nav-link">Contact</a></nav>
                <div className="w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div className="af-class-hero-header">
              <div className="af-class-hero-container w-container">
                <div className="af-class-abv-title">Welcome to</div>
                <h1 className="af-class-title">Zack's Blog.</h1>
              </div>
            </div>
            <div className="w-container">
              <div className="w-layout-grid af-class-grid">
                <PostController />
              </div>
            </div>
            <div className="af-class-footer">
              <div className="af-class-ftr-text">Built by Zack</div>
            </div>
              {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
}
