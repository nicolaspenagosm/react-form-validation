import { useReducer } from "react";
import {
  Action,
  FormState,
  OnChangeEvent,
  OnClickEvent,
  ValidatorFn,
} from "./types";

export const useFormHook = (initialState: FormState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const isFormValid = formIsValid(state);

  const blurHandler = (key: string) => {
    dispatch({ key, type: "input-blur" });
  };

  const valueChangeHandler = (key: string, e: OnChangeEvent) => {
    dispatch({ key, type: "value-changed", value: e.target.value });
  };

  const clickHandler = (key: string, e: OnClickEvent) => {
    const input = e.target as HTMLInputElement;
    dispatch({
      key,
      type: "value-changed",
      value: input.checked.toString(),
    });
  };

  const resetForm = () => {
    dispatch({ type: "reset-all" });
  };

  const touchAll = () => {
    console.log("hol");
    dispatch({ type: "touch-all" });
  };

  return {
    state,
    isFormValid,
    blurHandler,
    valueChangeHandler,
    resetForm,
    clickHandler,
    touchAll,
  };
};

function reducer(state: FormState, action: Action) {
  const { key, type } = action;

  if (type === "touch-all") {
    for (const key in state) {
      const field = state[key];
      field.isTouched = true;
      field.hasError = !validateValue(field.value || "", state[key].validators);
    }

    return { ...state };
  }

  if (type === "reset-all") {
    for (const key in state) {
      const field = state[key];
      field.hasError = false;
      field.isTouched = false;
      field.isValid = true;
      field.value = "";
    }
    return { ...state };
  }

  // eslint-disable-next-line prefer-const
  let { value, isValid, isTouched, validators, hasError } = state[key!];

  if (type === "value-changed") {
    value = action.value!;
    isValid = validateValue(value, validators);
  }

  if (type === "input-blur") {
    isValid = validateValue(value ? value : "", validators);
    isTouched = true;
  }

  hasError = isTouched && !isValid;

  state[key!] = {
    key: key!,
    value,
    isValid,
    validators,
    isTouched,
    hasError,
  };

  return { ...state };
}

function validateValue(value: string, validators: ValidatorFn[]) {
  for (const validator of validators) {
    if (!validator(value)) return false;
  }
  return true;
}

function formIsValid(state: FormState) {
  for (const key in state) {
    if (!validateValue(state[key].value || "", state[key].validators))
      return false;
  }
  return true;
}
