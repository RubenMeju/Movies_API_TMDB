import { Link, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Que ha pasado????.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <Link to='/'>Volver al inicio</Link>
    </div>
  )
}
