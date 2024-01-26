export class Company {
  id: string;
  name: string;
  address: string;
  description: string;
  avatar: string;
  website: string;
  state: string;

  constructor(
    id: string,
    name: string,
    address: string,
    description: string,
    avatar: string,
    website: string,
    state: string
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.description = description;
    this.avatar = avatar;
    this.website = website;
    this.state = state;
  }
}
