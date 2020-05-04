import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalContext from 'context';
import Button from 'components/Modal/Button/Button';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 35px;
`;

const Header = ({ title }) => {
  const { toggle } = useContext(ModalContext);

  return (
    <StyledHeader>
      <h1>{title}</h1>
      <Button onClick={() => toggle()}>Close</Button>
    </StyledHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
