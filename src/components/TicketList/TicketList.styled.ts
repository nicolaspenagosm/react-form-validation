import styled from "styled-components";

export const StyledTicketList = styled.section`
  display: flex;
  flex-direction: column;
  h2{
    text-align: center;
    margin-bottom: 1rem;
  }
  ul{
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

`;

export const ListItem = styled.li`
  list-style: none;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Ticket = styled.article`
  width: 25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.85rem;
  div{
    background-color: gray;
    color: white;
    display: flex;
    width: fit-content;
    font-weight: 600;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    border-radius: 1rem;
  }
`;
