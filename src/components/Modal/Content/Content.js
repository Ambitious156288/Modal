import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContent = styled.div`
  background-color: ${({ theme }) => theme.white};
`;

const Content = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

Content.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Content;
