import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalContext from 'context';
import Button from 'components/Modal/Button/Button';

const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15vh;
`;

const Footer = ({ callToActionLabel }) => {
  const { toggle } = useContext(ModalContext);

  return (
    <StyledFooter>
      <Button onClick={() => toggle()}>Cancel</Button>
      <Button
        onClick={() => {
          alert('OK');
          toggle();
        }}
      >
        {callToActionLabel}
      </Button>
    </StyledFooter>
  );
};

Footer.propTypes = {
  callToActionLabel: PropTypes.string.isRequired,
};

export default Footer;
