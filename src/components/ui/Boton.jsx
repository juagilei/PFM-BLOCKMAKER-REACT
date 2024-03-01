import PropTypes from "prop-types";
import LoadingSpinner from "./LoadingSpinner";

export default function Button({type, children, disabled, onClick, isLoading }) {
  return (
    <button
    type={type}
    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded disabled:opacity-50 disabled:cursor-not-allowed"
    disabled={disabled}
    onClick={onClick}>
      <span className=" flex gap-3 items-center px-3 ">
        {isLoading && <LoadingSpinner />}
        {children}
      </span>
      
    </button>
  );
}
Button.propTypes = {
  type: PropTypes.oneOf(['button','submit','reset']),
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  
};
