interface IExpense {
  id?: string;
  title: string;
  amount: string;
  date: Date;
}

type ChangeInput = React.ChangeEvent<HTMLInputElement>;
type ChangeSelect = React.ChangeEvent<HTMLSelectElement>;
type ChangeHandler = React.ChangeEventHandler<HTMLInputElement>;
type Submit = React.FormEvent<HTMLFormElement>;
type SubmitHandler = React.FormEventHandler<HTMLFormElement>;
