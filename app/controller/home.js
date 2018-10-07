'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    //this.ctx.body = 'hi, egg  123';
    const data = 'Hi ali!';
    await this.ctx.render('xtpl/hello.xtpl',{data:data})
  }
}

module.exports = HomeController;
