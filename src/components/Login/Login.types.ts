

export interface ILoginInput { }

export interface ILoginEvent {
  // onSubmit: (data: LoginData) => void;
}

export interface LoginData {
  username: string,
  password: string
}

export type LoginProps = ILoginInput & ILoginEvent