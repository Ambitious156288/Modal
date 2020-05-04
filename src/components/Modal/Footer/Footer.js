import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalContext from 'context';

const StyledFooter = styled.div`
  background-color: ${({ theme }) => theme.white};
`;

const Footer = ({ callToActionLabel }) => {
  const { toggle } = useContext(ModalContext);

  return (
    <StyledFooter>
      <button onClick={() => toggle()}>Cancel</button>
      <button
        onClick={() => {
          alert('OK');
          toggle();
        }}
      >
        {callToActionLabel}
      </button>
    </StyledFooter>
  );
};

Footer.propTypes = {
  callToActionLabel: PropTypes.string.isRequired,
};

export default Footer;
