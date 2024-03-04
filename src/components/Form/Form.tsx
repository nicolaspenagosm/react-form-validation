import { FieldSet, StyledForm, P } from "./Form.styled";
import Card from "../commons/wrappers/Card/Card";
import Field from "../commons/wrappers/Field";
import Button from "../commons/Button";
import { useFormHook } from "../../hooks/form-hook/useFormHook";
import {
  isANumber,
  isNotEmpty,
  maxLength,
  minLength,
} from "../../utils/validators";
import { FormState } from "../../hooks/form-hook/types";
import { crudClient } from "../../services/crudClient";

const form: FormState = {
  title: {
    key: "title",
    validators: [maxLength.bind(null, 18), minLength.bind(null, 6)],
  },
  priority: {
    key: "priority",
    validators: [isNotEmpty, isANumber],
  },
  description: {
    key: "description",
    validators: [maxLength.bind(null, 30)],
  },
  resolved: {
    key: "resolved",
    validators: [],
  },
};

const Form: React.FC<{ updatesTickets: () => void }> = ({ updatesTickets }) => {
  const {
    state,
    blurHandler,
    valueChangeHandler,
    resetForm,
    clickHandler,
    touchAll,
    isFormValid,
  } = useFormHook(form);

  const { title, priority, description, resolved } = state;

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    touchAll();

    if (isFormValid) {
      const ticket = {
        title: state.title.value!,
        priority: state.priority.value!,
        description: state.description.value,
        resolved: state.resolved.value,
      };
      await crudClient.postTicket(ticket);
      updatesTickets();
      resetForm();
    }
  };

  return (
    <Card>
      <StyledForm onSubmit={onSubmitHandler} noValidate={true}>
        <FieldSet>
          <legend>Add a ticket</legend>
          <P>Fields marked with * are required</P>
          <Field
            label={title.key}
            errorMsg="・Title must be between 6 and 18 characters long"
            hasError={title.hasError}
          >
            <input
              id={form.title.key}
              placeholder="* Add the ticket title"
              onChange={(e) => valueChangeHandler(title.key, e)}
              onBlur={() => blurHandler(title.key)}
              value={title.value || ""}
            />
          </Field>
          <Field
            label={priority.key}
            errorMsg="・This field is required"
            hasError={priority.hasError}
          >
            <select
              id={priority.key}
              onChange={(e) => valueChangeHandler(priority.key, e)}
              onBlur={() => blurHandler(priority.key)}
              value={priority.value || ""}
              required
            >
              <option value="">* Select a priority</option>
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </select>
          </Field>
          <Field
            label={description.key}
            errorMsg="・Description must be shorter than 30 characters long"
            hasError={description.hasError}
          >
            <textarea
              id={description.key}
              placeholder="Add the ticket description"
              onChange={(e) => valueChangeHandler(description.key, e)}
              onBlur={() => blurHandler(description.key)}
              value={description.value || ""}
            />
          </Field>
          <Field
            label={form.resolved.key}
            $styles={{ alignItems: "flex-start" }}
          >
            <input
              type="checkbox"
              id={resolved.key}
              onClick={(e) => clickHandler(resolved.key, e)}
              checked={resolved.value === "true"}
              readOnly={true}
            />
          </Field>
          <Button type="submit">Submit</Button>
        </FieldSet>
      </StyledForm>
    </Card>
  );
};
export default Form;
