import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  margin: 40px auto;
  border: 10px solid #ccc;
  border-top: 10px solid DimGray;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spin} 0.8s linear infinite;
`;

export default Spinner;
