export class Company {
  _id: string;
  name: string;
  address: string;
  description: string;
  avatar: string;
  website: string;
  state: string;

  constructor(
    _id: string,
    name: string,
    address: string,
    description: string,
    avatar: string,
    website: string,
    state: string
  ) {
    this._id = _id;
    this.name = name;
    this.address = address;
    this.description = description;
    this.avatar = avatar;
    this.website = website;
    this.state = state;
  }
}
