import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  margin: 10px;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.button};
  cursor: pointer;
`;

export default Button;
