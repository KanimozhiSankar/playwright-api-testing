const { test } = require('@playwright/test');
const { CRUDMethods } = require("../CommonFunction/CRUDMethods");
const {expect,assert} = require('chai');
const { CommonMethods } = require('../CommonFunction/CommonMethods');
const { DataHandler } = require('../TestData/Datahandler');
const datahandler = new DataHandler("testdata");



test('POST METHOD -path Parameters - Posting User name & email data', async ({request}) => {

  for (let id = 1; id <= 10; id++) {
  const repo_userLogin = datahandler.getdata().accesstoken+datahandler.getdata().auth.TOKEN
  const crudmethods = new CRUDMethods();
  const commonmethods = new CommonMethods();
  const testData = await commonmethods.generatetestdata(true);
  console.log(testData);
  const response = await crudmethods.doPost(request,datahandler.getdata().baseURL + repo_userLogin,testData) 
  expect(await response).to.not.empty;
  const respJson =  await commonmethods.get_responsepayload(response)
  await commonmethods.getResponseHeaderValue(response, 'content-type') 
 // expect(await respJson.data).to.deep.include(data)
  //expect(await respJson.data.gender).to.be.eq(data.gender)
  expect(await response).to.be.ok
  console.log(respJson)
  }
    
});  




 






