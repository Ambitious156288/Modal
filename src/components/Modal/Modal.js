import React, { Component } from 'react';
import styled from 'styled-components';
import Header from 'components/Modal/Header/Header';
import Content from 'components/Modal/Content/Content';
import Footer from 'components/Modal/Footer/Footer';
import ModalContext from 'context';
import Button from 'components/Modal/Button/Button';
import OutsideClick from 'components/OutsideClick/OutsideClick';

const { Provider } = ModalContext;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  height: 70vh;
  border: 2px solid black;
  padding: 50px;
  z-index: 1000;
  background-color: ${({ theme }) => theme.white};
`;

const StyledBackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.gray};
`;

class Modal extends Component {
  static Header = Header;
  static Content = Content;
  static Footer = Footer;

  state = {
    isOpen: true,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <Provider value={{ toggle: this.toggle }}>
        {isOpen && <StyledBackDrop />}

        <Button onClick={this.toggle}>Modal</Button>
        {isOpen && (
          <OutsideClick fun={() => this.setState({ isOpen: false })}>
            <StyledModal>{this.props.children}</StyledModal>{' '}
          </OutsideClick>
        )}
      </Provider>
    );
  }
}

export default Modal;
