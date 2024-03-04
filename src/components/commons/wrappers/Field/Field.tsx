import { ChildrenProp, Styles } from "../../../../types/commons";
import { StyledField, ErrorMsg } from "./Field.styled";

interface FieldProps extends ChildrenProp, Styles {
  label: string;
  errorMsg?: string;
  hasError?: boolean | undefined;
}

const Field: React.FC<FieldProps> = ({
  children,
  label,
  $styles,
  hasError = false,
  errorMsg,
}) => {
  return (
    <StyledField $styles={$styles} $hasError={hasError}>
      <label htmlFor={label}>{label}</label>
      {children}
      {hasError && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </StyledField>
  );
};

export default Field;
