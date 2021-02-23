import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 8px;

  font-size: 16px;
  font-family: Poppins;
  cursor: pointer;
  font-weight: 500;
  &:focus {
    outline: none;
  }
`;

export default Button;
