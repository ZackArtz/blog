import App from 'next/app'
import "../public/css/normalize.css";
import "../public/css/webflow.css";
import "../public/css/blog.css";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp