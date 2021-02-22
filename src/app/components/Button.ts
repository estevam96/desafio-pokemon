import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  height: 54px;
  border: none;
  border-radius: 8px;

  font-size: 16px;
  font-family: Poppins;
  font-weight: 500;
`;

export default Button;
