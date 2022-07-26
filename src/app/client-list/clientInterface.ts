import { DatePipe } from '@angular/common';

export interface Client {
  id: string;
  lastVisit: Date;
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
