const resolvers = {
    Query: {
      // returns an array of Repositories that will be displayed in client
      repositoriesForHome: (_, __, { dataSources }) => {
        return dataSources.repoAPI.getRepositoriesForHome();
      },
  
     
    },
    

  };
  
  module.exports = resolvers;
  