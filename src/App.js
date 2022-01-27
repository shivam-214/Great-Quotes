import { lazy, Suspense } from "react";
import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";
import { Navigate, Link, useRoutes, useLocation } from "react-router-dom";
import LoadingSpinner from "./components/UI/LoadingSpinner";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

const NewQuote = lazy(() => import("./pages/NewQuote"));
const AllQuotes = lazy(() => import("./pages/AllQuotes"));
const QuoteDetail = lazy(() => import("./pages/QuoteDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const location = useLocation();
  console.log(location);

  let routes = useRoutes([
    { path: "/", element: <Navigate replace to="quotes" /> },
    { path: "quotes", element: <AllQuotes /> },
    {
      path: "quotes/:quoteId/*",
      element: <QuoteDetail />,
      children: [
        {
          path: "",
          element: (
            <div className="centered">
              <Link className="btn--flat" to="comments">
                Load Comments
              </Link>
            </div>
          ),
        },
        {
          path: "comments",
          element: <Comments />,
        },
      ],
    },
    { path: "new-quote", element: <NewQuote /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        {/* <TransitionGroup>
          <CSSTransition key={location.key} classNames="next" timeout={300}> */}
            {routes}
          {/* </CSSTransition>
        </TransitionGroup> */}
      </Suspense>
    </Layout>
  );
}

export default App;
