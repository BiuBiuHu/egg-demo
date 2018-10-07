const Service = require('egg').Service;
const cheerio = require('cheerio');
class NewsService extends Service {
  async list(page = 1) {
    // read config
    const { serverUrl, timeout, replaceText} = this.config.blog;

    // use build-in http client to GET hacker-news api
    const { data: idList } = await this.ctx.curl(`${serverUrl}`, {
      timeout: `${timeout}`,
      gzip: true,
    });

    const $ = cheerio.load(idList);
    let data = $('.article-item-box h4 a');
    let data2 = $('.article-item-box div p span.read-num');
    let askRate = $('.grade-box dl dd[title]');
    let rank = $('.grade-box dl[title]');
    //console.log(rank);
    //console.log(askRate['0'].children[0].parent.attribs.title, askRate['1'].children[0].parent.attribs.title);

    //let rankValue = rank['0'].attribs.title;
    //console.log(rankValue)
    let arr = [];
    let key2 = 0;
    let blogInfo = {};

    blogInfo.askRate = askRate['0'].children[0].parent.attribs.title;
    blogInfo.rankValue = rank['0'].attribs.title;

    for(let i = 0; i < data.length ;i++){
      let key = '' + i;
      let index = key2 + '';
      let obj = {
        'url': data[key].attribs.href,
        'title': data[key].children[2].data.trim(),
        'count': data2[index].children[0].data.replace(replaceText, ''),
      }
      arr.push(obj);
      key2 = key2 + 2;
    }


    console.log(blogInfo)
    //console.log(arr);Value
    return {arr, blogInfo};
  }
}

module.exports = NewsService;