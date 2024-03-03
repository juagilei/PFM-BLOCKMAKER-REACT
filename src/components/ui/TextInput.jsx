import PropTypes from 'prop-types'

export default function TextInput({ type }) {
    return (
       <input type={type} />
    )
}
TextInput.propTypes = {
    type:PropTypes.oneOf(['text', 'password', 'email', 'number'])
}