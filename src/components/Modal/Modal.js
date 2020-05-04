import React, { Component } from 'react';
import styled from 'styled-components';
import Header from 'components/Modal/Header/Header';
import Content from 'components/Modal/Content/Content';
import Footer from 'components/Modal/Footer/Footer';
import ModalContext from 'context';

const { Provider } = ModalContext;

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 50vh;
  background-color: ${({ theme }) => theme.gray};
`;

class Modal extends Component {
  state = {
    isOpen: true,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log(this.state.isOpen);
  };

  render() {
    const { isOpen } = this.state;

    return (
      <Provider value={{ toggle: this.toggle }}>
        {isOpen && <StyledModal>{this.props.children}</StyledModal>}
      </Provider>
    );
  }
}

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;

export default Modal;
