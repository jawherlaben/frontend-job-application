export interface UserUpdateDTO {
    _id?: string;
    firstname?: string;
    lastname?: string;
    phoneNumber?: string;
    email?: string;
    password?: string;
    dateBirth?: string;
    appliedJobs?: string[];
    gender?: string;
    address?: string;
    profileImage?: string;
    role?: string;
    date_added?: Date;
    description?: string;
    dateTime_added?: string;
  }