import PropTypes from 'prop-types'

export default function Tittle({children}) {
    return (
        <div className="font-bold  text-2xl mb-2 w-fit bg-gradient-to-r from-pink-400 to-fuchsia-600 text-transparent bg-clip-text"><h3>{children}</h3></div>
    )
}
Tittle.propTypes = {
  children: PropTypes.string
}