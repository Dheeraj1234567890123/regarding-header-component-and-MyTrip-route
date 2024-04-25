import './index.css'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img
        src="https://res-console.cloudinary.com/dkjkncj4l/thumbnails/v1/image/upload/v1713522492/R3JvdXBfNzUyMF9ib3hiaHA=/drilldown"
        alt="not found"
        className="notFound-image"
      />
      <h1 className="notFound-heading">Page Not Found.</h1>
      <p className="notFound-paragraph">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  )
}

export default NotFound
