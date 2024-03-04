import styled from "styled-components";

export const StyledForm = styled.form`
  width: 25rem;

  padding: 0.75 0 0.75rem 0;
`;

export const FieldSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  legend {
    font-weight: 600;
    font-size: 1.125rem;
  }
`;

export const P = styled.p`
  font-size: 0.75rem;
  font-style: italic;
  color: gray;
`;
