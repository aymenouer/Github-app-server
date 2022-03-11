const { RESTDataSource } = require('apollo-datasource-rest');

class RepoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.github.com/search/';
  }

  getRepositoriesForHome(loadpage,language,page) {
    const now = new Date();

    const date_last_week= new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const yyyy = date_last_week.getFullYear();
    let mm = date_last_week.getMonth() + 1; // Months start at 0!
    let dd = date_last_week.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const lang = language === "" ? "" : "+language:"+language;
    const p = page === 1 ? "" :"&page="+page;
   
    return this.get(`repositories?q=created:>${yyyy+"-"+mm+"-"+dd+lang}&sort=stars&order=desc&per_page=${loadpage+p}`).then(data=>data.items);
  }

  
}

module.exports = RepoAPI;
