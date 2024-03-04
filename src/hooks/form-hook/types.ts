export type ValidatorFn = (value: string) => boolean;
export type OnChangeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

export type OnClickEvent = React.MouseEvent<HTMLElement>;

export interface ITicket {
  id?: string;
  title: string;
  priority: string;
  description?: string;
  resolved?: string;
}

export interface FormState {
  [key: string]: {
    key: string;
    value?: string;
    isValid?: boolean;
    validators: ValidatorFn[];
    isTouched?: boolean;
    hasError?: boolean;
  };
}

export interface Action {
  key?: string;
  type: "value-changed" | "input-blur" | "reset-all" | "touch-all";
  value?: string;
}
