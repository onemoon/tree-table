export interface UserInfo {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  children?: Array<UserInfo>;
  open?: boolean;
}

export interface RowSelectedEvent {
  id: number;
  open: boolean;
}
