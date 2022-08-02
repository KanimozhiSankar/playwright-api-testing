const { test } = require('@playwright/test');
const { CRUDMethods } = require("../CommonFunction/CRUDMethods");
const {expect,assert} = require('chai');
const { CommonMethods } = require('../CommonFunction/CommonMethods');
const { DataHandler } = require('../TestData/Datahandler');
const datahandler = new DataHandler("testdata");

test('GET METHOD - Path Parameters -User Login with Token', async ({request}) => {


  const repo_userLogin = datahandler.getdata().accesstoken+datahandler.getdata().auth.TOKEN
  const crudmethods = new CRUDMethods();
  const response = await crudmethods.doGet(request,datahandler.getdata().baseURL + repo_userLogin)
  expect(await response).to.not.empty;
  expect(await response).to.be.ok
  //console.log(await response.json());
 
});

test.only('GET METHOD - Path Parameters -Getting User data from List', async ({request}) => {


  const repo_userLogin = datahandler.getdata().accesstoken+datahandler.getdata().auth.TOKEN
  const crudmethods = new CRUDMethods();
  const response = await crudmethods.doGet(request,datahandler.getdata().getUserListURL)
  expect(await response).to.not.empty;
  expect(await response).to.be.ok
  console.log(await response.json());

});

test('GET METHOD -path Parameters - Get User by using ID', async ({request}) => {

  const repo_userLogin = datahandler.getdata().pathuser+datahandler.getdata().accesstoken+datahandler.getdata().auth.TOKEN
  const crudmethods = new CRUDMethods();
  const commonmethods = new CommonMethods();
  const response = await crudmethods.doGet(request,datahandler.getdata().baseURL + repo_userLogin) 
  expect(await response).to.not.empty;
  console.log(await response.json());

  const ID = await commonmethods.extract_ID(await response.json());
  expect(ID.toString()).to.be.equals(datahandler.getdata().pathuser); 
  expect(await response).to.be.ok

});  





 






