import styled from "styled-components";

export const SubmitButton = styled.button`
  height: 2.5rem;
  width: 8rem;
  border-radius: 2rem;
  border: none;
  color: #fff;
  background: #da2d92;
`;

const Button = () => {
  return <SubmitButton />;
};

export default Button;
