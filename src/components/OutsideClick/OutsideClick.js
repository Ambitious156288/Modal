import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const useOutsideClick = (ref, fun) => {
  const handleClickOutside = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      fun();
    }
  };

  document.addEventListener('mousedown', handleClickOutside);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
};

const OutsideClick = ({ children, fun }) => {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, fun);

  return <div ref={wrapperRef}>{children}</div>;
};

OutsideClick.propTypes = {
  children: PropTypes.element.isRequired,
  fun: PropTypes.func.isRequired,
};

export default OutsideClick;
