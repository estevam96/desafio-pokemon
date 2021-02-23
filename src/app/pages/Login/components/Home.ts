import styled from 'styled-components';
import Button from '../../../components/Button';
import backgroud from '../../../assets/backgroud.png';

export const Wrapper = styled.div`
  min-height: 100vh;
  background-image: url(${backgroud});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: right bottom;
`;
export const Content = styled.div`
  margin-left: 50px;
  margin-bottom: 10px;
  padding-top: 33px;
`;

export const Form = styled.form`
  width: 380px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const FormButton = styled(Button)`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 33px;
  padding: 15px;
`;

export const Title = styled.h1`
  width: 365px;
  font-weight: bold;
  color: #1e1e1f;
  margin-top: 50px;
`;
