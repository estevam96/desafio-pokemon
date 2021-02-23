import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../../components/Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const EmpytTitle = styled.h3`
  text-align: center;
  color: #1e1e1f;
`;

export const EmpytText = styled.span`
  text-align: center;
  width: 410px;
  margin-top: 15px;
`;

export const BtnFovorite = styled(Link)`
  width: 233px;
  padding: 10px;
  background-color: transparent;
  border: 1px solid #7d7e80;
  box-sizing: border-box;
  border-radius: 8px;
  margin-top: 39px;
  color: #7d7e80;
  text-align: center;
  text-decoration: none;
`;
