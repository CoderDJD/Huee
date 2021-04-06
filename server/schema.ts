const { gql } = require("apollo-server-express");

export const typeDefs = gql`
type Hooter {
  _id: ID
  user_name: String!
  display_name: String!
  join_date: String!
  birth_date: String
  bio: String
  profile_picture_uri: String
  profile_banner_uri: String
  location: String
  hoots: Hoot[]
  listeners: Noter[]
}

type Noter {
  _id: ID
  display_name: String
  scketuser_name: String
  profile_picture_uri: String
  listeners_num: Float
}

type Hoot {
  _id?: String
  hooter: Noter
  hoot: String
  created: 
}


  type Query {
    user: User
  }
`;

export const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};
