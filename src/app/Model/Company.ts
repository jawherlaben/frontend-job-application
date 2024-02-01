export class Company {
  id: string;
  name: string;
  country: string;
  description: string;
  avatar: string;
  website: string;
  state: string;

  constructor(
    id: string,
    name: string,
    country: string,
    description: string,
    avatar: string,
    website: string,
    state: string
  ) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.description = description;
    this.avatar = avatar;
    this.website = website;
    this.state = state;
  }
}
