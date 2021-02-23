import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import Input from '../../../components/Input';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 29px;
  flex-direction: column;
`;

export const FormSearch = styled.form`
  position: relative;
  width: 60%;
`;
export const SearchInput = styled(Input)`
  width: 90%;
  height: 54px;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  ::placeholder {
    color: black;
  }
`;

export const SearchIcon = styled(MdSearch)`
  position: relative;
  left: -60px;
  top: 10px;
  cursor: pointer;
`;

export const EmpytMensage = styled.h3`
  text-align: center;
`;
