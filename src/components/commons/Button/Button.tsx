import { ChildrenProp } from "../../../types/commons";
import { StyledButton } from "./Button.styled";

interface ButtonProps extends ChildrenProp {
  type: "submit" | "button" | "reset";
}
const Button: React.FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
