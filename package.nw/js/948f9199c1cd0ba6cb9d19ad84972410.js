'use strict';!function(require,directRequire){var a=Number.MAX_SAFE_INTEGER;const b=require('./4102b43ad51182743111f5d5e1fc5b46.js');var c=new class{constructor(){this.__storeName='noticecenter',this.__end=!1,this.__next=a,this.__openInstance=0}async open(){0==this.__openInstance&&(await b.open()),this.__openInstance++}async close(){this.__openInstance--,0>=this.__openInstance&&(await b.close(),this.__openInstance=0)}async insert(a){await b.insert(this.__storeName,a)}async removeAll(){await b.removeAll(this.__storeName)}async getFirstPage(){return this.__next=a,this.__end=!1,await this.next()}async next(){if(this.__end)return[];let a=await b.getByPageReverse(this.__storeName,this.__next);return this.__end=!!a.end,this.__next=a.result[a.result.length-1].id,a.result}};module.exports=c}(require('lazyload'),require);