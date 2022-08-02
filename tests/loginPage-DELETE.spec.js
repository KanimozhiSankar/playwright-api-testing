const { test } = require('@playwright/test');
const { CRUDMethods } = require("../CommonFunction/CRUDMethods");
const {expect,assert} = require('chai');
const { CommonMethods } = require('../CommonFunction/CommonMethods');
const { DataHandler } = require('../TestData/Datahandler');
const datahandler = new DataHandler("testdata");
const faker = require('@faker-js/faker');



test('DELETE METHOD -path Parameters - DELETE METHOD - Deleting User', async ({request}) => {
  const data = {
    
    "status":"active"
  }

  const repo_userLogin = datahandler.getdata().pathuser+datahandler.getdata().accesstoken+datahandler.getdata().auth.TOKEN
  const crudmethods = new CRUDMethods();
  const commonmethods = new CommonMethods();
  const response = await crudmethods.doDelete(request,datahandler.getdata().baseURL + repo_userLogin,data) 
  expect(await response).to.not.empty;
  await commonmethods.getResponseHeaderValue(response, 'content-type') 
  const respJson =  await commonmethods.get_responsepayload(response)
  expect(await respJson.data).to.be.null
  expect(await response).to.be.ok
  

});  





 






