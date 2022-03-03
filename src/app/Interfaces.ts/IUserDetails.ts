export interface IUserDetails {
  fName: string;
  lName: string;
  email: string;
  address: [
    streetAddress: string,
    city: string,
    postcode: string,
    country: string
  ];
}
