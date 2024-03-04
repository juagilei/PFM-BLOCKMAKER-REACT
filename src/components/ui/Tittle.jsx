import PropTypes from 'prop-types'

export default function Tittle({children}) {
    return (
        <div className="font-bold text-white text-lg mb-2 w-fit"><h3>{ children}</h3></div>
    )
}
Tittle.propsTypes = {
    children: PropTypes.string
}