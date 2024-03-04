import styled from "styled-components";
import { Styles } from "../../../../types/commons";

export const StyledField = styled.div<Styles & { $hasError: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${({ $styles }) => $styles}

  label {
    text-transform: capitalize;
    font-size: 0.85rem;
  }

  input,
  select,
  textarea {
    background-color: #f1f2f4;
    border: solid 1px ${({ $hasError }) => ($hasError ? "red" : "#dddedf")};
    display: flex;
    flex-direction: column;
    min-height: 1.5rem;
    border-radius: 0.75rem;
    font-size: 0.75rem;
    font-family: "Inter", sans-serif;
    &:focus {
      //outline: solid 1px #9b9b9b;
      outline: none;
    }
    padding: 0.5rem;
  }

  select:disabled {
    color: black;
  }

  select:invalid {
    color: #757777;
  }

  & input[type="checkbox"] {
    outline: none;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  font-size: 0.75rem;
`;
