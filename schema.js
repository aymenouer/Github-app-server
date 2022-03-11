const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get repositories array for the homepage"
    repositoriesForHome(loadpage: Int!,language:String,page:Int): [Repository!]!
  }
  "A Repository "
  type Repository {
    id: ID!
    "The repo's name"
    name: String!
    "The repo's main Owner"
    owner: Owner!
    "The repo's github Link"
    html_url: String
    "The repo's complete description"
    description: String
    "The repo's language"
    language: String
    "The number of stars of repo "
    stargazers_count: Int
  }

  "Owner of a Repository"
  type Owner {
    id: ID!
    "Owner's name"
    login: String!
    "Owner's avatar"
    avatar_url: String
  }

`;

module.exports = typeDefs;
