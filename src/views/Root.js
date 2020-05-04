import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import Modal from 'components/Modal/Modal';

const StyledFlex = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Root = () => (
  <StyledFlex>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Modal>
        <Modal.Header title="Tytuł modala" />
        <Modal.Content>
          <h1>to powinno tak działać</h1>
        </Modal.Content>
        <Modal.Footer callToActionLabel="Udało się" />
      </Modal>
    </ThemeProvider>
  </StyledFlex>
);

export default Root;
