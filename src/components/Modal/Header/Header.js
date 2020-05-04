import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalContext from 'context';

const StyledHeader = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.white};
`;

const Header = ({ title }) => {
  const { toggle } = useContext(ModalContext);

  return (
    <StyledHeader>
      <h1>{title}</h1>
      <button onClick={() => toggle()}>Close</button>
    </StyledHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
