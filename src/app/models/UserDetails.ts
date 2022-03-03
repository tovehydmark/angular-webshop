export class UserDetails {
  fName: string;
  lName: string;
  email: string;
  streetAddress: string;
  city: string;
  postcode: string;
  country: string;
  constructor(
    fName: string,
    lName: string,
    email: string,
    streetAddress: string,
    city: string,
    postcode: string,
    country: string
  ) {
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.streetAddress = streetAddress;
    this.city = city;
    this.postcode = postcode;
    this.country = country;
  }
}
