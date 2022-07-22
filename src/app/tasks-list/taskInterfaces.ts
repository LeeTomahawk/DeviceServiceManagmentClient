export interface Tasks {
  name: string;
  description: string;
  activities: string;
  startDate: string;
  endDate: string;
  amount: number;
  taskStatus: string;
  client: Client;
}
export interface Client {
  lastVisit: string;
  identiti: Identiti;
}
export interface Identiti {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: Address;
}
export interface Address {
  city: string;
  street: string;
  number: string;
  postCode: string;
}
