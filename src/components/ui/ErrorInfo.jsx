import PropTypes from "prop-types";
import { MdInfoOutline } from "react-icons/md";

export default function ErrorInfo({ message }) {
  return (
    <div className="flex items-center p-1 gap-2 bg-red-200 text-red-500 rounded-md w-fit">
        <MdInfoOutline className="text-red-500 "/>
        <p>{message}</p>
    </div>
  );
}
ErrorInfo.propTypes = {
  message: PropTypes.string.isRequired,
};
