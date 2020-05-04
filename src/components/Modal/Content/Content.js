import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContent = styled.div`
  margin: 30px 0;
`;

const Content = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

Content.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Content;
