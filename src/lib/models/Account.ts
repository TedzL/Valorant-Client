import { ResponseInfo } from './Response';

export interface AccountResponse {
  account: Account;
  request: ResponseInfo;
}

export interface Account {
  status: number;
  data: AccountData;
}

export interface AccountData {
  puuid: string;
  region: string;
  account_level: number;
  name: string;
  tag: string;
  card: AccountCard;
  last_update: string;
  last_update_raw: number;
}

export interface AccountCard {
  small: string;
  large: string;
  wide: string;
  id: string;
}
