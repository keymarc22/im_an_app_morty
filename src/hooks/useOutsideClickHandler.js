import React, { useRef, useEffect } from "react";
// import PropTypes from "prop-types";

function useOutsideClickHandler(ref, handleClick) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClick(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function WrapperComponent(props) {
  const wrapperRef = useRef(null);
  useOutsideClickHandler(wrapperRef, props.handleClick);

  return (
    <div className="wrapper-component" ref={wrapperRef}>
      {props.children}
    </div>
  );
}

// WrapperComponent.propTypes = {
//   children: PropTypes.element.isRequired,
// };

export default WrapperComponent;
