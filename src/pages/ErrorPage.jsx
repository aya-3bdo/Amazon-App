import { Link, useRouteError } from "react-router-dom";
import { BiCaretRight } from "react-icons/bi"
import "../styling/error-page.css";

export default function ErrorPage() {
  const error = useRouteError();
  // console.error(error);

  return (
    <div id="error-page" className="d-flex flex-column justify-content-center align-items-center mt-3">
           {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
      <div className="header-img">
        <Link to="/" target="_blank">
        <img src="../src/assets/imgs/Amazon-error-logo.gif" alt="amazon-logo" />
        </Link>
      </div>
      <div className="error-content">
        <h4>Looking for something?</h4>
        <p> We're sorry. The Web address you entered is not a functioning page on our site </p>
        <div><img src="../src/assets/imgs/error-inquiry-logo.gif" alt="question mark symbol" /></div>
        <div className="last-line">
          <h6>
            <span><BiCaretRight/></span>
            Go to amazon.eg's <Link to="/" className="pe-1"  target="_blank">Home</Link>page</h6>
        </div>
        </div>
    </div>
  );
}
