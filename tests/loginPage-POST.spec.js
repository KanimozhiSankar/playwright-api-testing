const { test } = require('@playwright/test');
const { CRUDMethods } = require("../CommonFunction/CRUDMethods");
const {expect,assert} = require('chai');
const { CommonMethods } = require('../CommonFunction/CommonMethods');
const { DataHandler } = require('../TestData/Datahandler');
const datahandler = new DataHandler("testdata");
const faker = require('@faker-js/faker');



test('POST METHOD -path Parameters - Posting User name & email data', async ({request}) => {
  const data = {
    
  "name":faker.faker.lorem.sentence(),
  "email": faker.faker.internet.email(),
  "gender":"female",
  "status":"active"
  }

  const repo_userLogin = datahandler.getdata().pathuser+datahandler.getdata().accesstoken+datahandler.getdata().auth.TOKEN
  const crudmethods = new CRUDMethods();
  const commonmethods = new CommonMethods();
  const response = await crudmethods.doPost(request,datahandler.getdata().baseURL + repo_userLogin,data) 
  expect(await response).to.not.empty;
  const respJson =  await commonmethods.get_responsepayload(response)
  await commonmethods.getResponseHeaderValue(response, 'content-type') 
  //expect(await respJson.data).to.deep.include(data)
  expect(await respJson.data.gender).to.be.eq(data.gender)
  expect(await response).to.be.ok
  

});  





 






