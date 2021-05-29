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

type ChangeInput = React.ChangeEvent<HTMLInputElement>;
type ChangeSelect = React.ChangeEvent<HTMLSelectElement>;
type ChangeHandler = React.ChangeEventHandler<HTMLInputElement>;
type Submit = React.FormEvent<HTMLFormElement>;
type SubmitHandler = React.FormEventHandler<HTMLFormElement>;
