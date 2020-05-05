import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import Modal from 'components/Modal/Modal';

const Root = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Modal>
        <Modal.Header title="Tytuł modala" />
        <Modal.Content>
          <h1>to powinno tak działać</h1>
        </Modal.Content>
        <Modal.Footer callToActionLabel="Udało się" />
      </Modal>
    </ThemeProvider>
  </>
);

export default Root;
