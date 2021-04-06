export interface Hooter {
  _id?: string;
  // Start up data.
  user_name: string;
  display_name: string;
  birth_date: string;
  join_date: String;
  bio: string;
  profile_picture_uri: string;
  profile_banner_uri: string;
  location: string;
  // In app data.
  hoots: Hoot[];
  listeners: Noter[];
}

export interface Noter {
  _id?: string;
  display_name: string;
  scketuser_name: string;
  profile_picture_uri: string;
  listeners_num: number;
}

export interface Hoot {
  _id?: string;
  hooter: Noter;
  hoot: string;
  created: any;
}
