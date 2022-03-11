const resolvers = {
    Query: {
      // returns an array of Repositories that will be displayed in client
      repositoriesForHome: (_, {loadpage,language,page}, { dataSources }) => {
        return dataSources.repoAPI.getRepositoriesForHome(loadpage,language,page);
      },
  
     
    },
    

  };
  
  module.exports = resolvers;
  