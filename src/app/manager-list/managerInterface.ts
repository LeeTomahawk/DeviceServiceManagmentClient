export interface Manager {
  id: string;
  employmentDate: string;
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
