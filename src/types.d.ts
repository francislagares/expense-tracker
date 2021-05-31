interface IExpense {
  id?: string;
  title: string;
  amount: number;
  date: Date;
}

interface IDataPoints {
  label: string;
  value: number;
}

interface IUser {
  userName: string | undefined;
  age: string | undefined;
  id?: string;
}

interface IError {
  title: string;
  message: string;
}

type ChangeInput = React.ChangeEvent<HTMLInputElement>;
type ChangeSelect = React.ChangeEvent<HTMLSelectElement>;
type ChangeHandler = React.ChangeEventHandler<HTMLInputElement>;
type Submit = React.FormEvent<HTMLFormElement>;
type SubmitHandler = React.FormEventHandler<HTMLFormElement>;
