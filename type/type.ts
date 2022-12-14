export interface Itemplate_email {
  from_name: string;
  email: string;
  object: string;
  describe: string;
}

export interface Iemail {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: Itemplate_email;
}

export interface IemailTable {
  name: string;
  Email: string;
  Object: string;
  Describe: string;
}

export interface ITablePreventive {
  Email_send: string;
  Object: string;
  Service: string;
  Budget: number;
  DeadLine: FormData;
  Describe: string;
  Priority: string;
  Name: string;
}

export interface IemailPreventive {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: ITablePreventive;
}

export interface TokenEer20form {
  Name: string;
  Pausable: boolean;
  Recipient: string;
  RecipientIsConnect: boolean;
  Supply: number;
  Ticker: string;
  TypeSupply: string;
}


export interface TokenEer721form {
  Name: string;
  Pausable: boolean;
  Recipient: string;
  RecipientIsConnect: boolean;
  Ticker: string;
 
}
