import styled from 'styled-components';
import backgroud from '../../../assets/backgroud.png';

const Wrapper = styled.div`
  min-height: 100vh;
  background-image: url(${backgroud});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: right bottom;
`;

export default Wrapper;
