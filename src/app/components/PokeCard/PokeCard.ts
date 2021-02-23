import styled from 'styled-components';
import { MdFavoriteBorder } from 'react-icons/md';
import Button from '../Button';

interface ColorVarient {
  variant: {
    [key: string]: string;
  };
}
interface TypeProps {
  variant?: keyof ColorVarient['variant'];
}

export const Card = styled.div`
  position: relative;
  width: 180px;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  background: #ffffff;
  padding: 14px 9px;
`;

export const Sprite = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardTitle = styled.h3`
  color: black;
  text-transform: capitalize;
`;

export const CardText = styled.span`
  text-transform: uppercase;
`;

export const TypeContainer = styled.div`
  display: flex;
`;

export const Type = styled.div<TypeProps>`
  min-width: 50.53px;
  background: ${({ variant, theme }) =>
    theme.colors[variant as keyof TypeProps['variant']] ||
    theme.colors.primary};
  border-radius: 8px;
  color: ${({ variant }) =>
    variant === 'danger' || variant === 'secundary' ? '#FFFFFF;' : 'black'};
  font-size: 10px;
  text-transform: capitalize;
  text-align: center;
  padding: 3px 10px;
  margin-right: 3px;
  margin-top: 8px;
`;

export const BtnDetails = styled(Button)`
  width: 100%;
  font-size: 12px;
  padding: 5px 0;
  margin-top: 16px;
`;
export const FovoriteIcon = styled(MdFavoriteBorder)`
  right: 10px;
  position: absolute;
  cursor: pointer;
`;
