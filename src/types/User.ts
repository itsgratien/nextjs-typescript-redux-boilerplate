export interface User {
  username: string;
  email: string;
}

export interface AuthContextState {
  isauthenticated?: boolean;
}

export interface UserInitialState {
  readonly getUsersSuccess?: User[];
  readonly getUsersLoading?: boolean;
  readonly getUsersError?: any;
}
