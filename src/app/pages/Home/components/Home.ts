import styled from 'styled-components';
import Button from '../../../components/Button';

interface FilterProps {
  active: boolean;
}

export const Container = styled.div`
  margin-top: 40px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const FilteNav = styled.div`
  position: relative;
  width: 80%;
  left: 150px;
  display: flex;
  align-items: center;
  align-self: center;
`;

export const BtnFilter = styled(Button)<FilterProps>`
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : 'transparent'};
  width: 145px;
  border: 1px solid #6b6868;
  box-sizing: border-box;
  border-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: 8px;
  font-size: 12px;
  color: ${({ active }) => (active ? '#343232' : '#6B6868;')};
`;

BtnFilter.defaultProps = { active: false };
