import { ChildrenProp } from "../../../../types/commons";
import { StyledCard } from "./Card.styled";

const Card: React.FC<ChildrenProp> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
