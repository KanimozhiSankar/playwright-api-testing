const { assert,expect } = require("chai");

const fs = require('fs');
const faker = require('@faker-js/faker');


class CommonMethods{

async extract_ID(response){

    try{
       
        if(response != null ){
            const id =  response.data.id
            console.log("method id ---> "+id);
            return id;
      }   
    }
    catch(err){
        console.log(err);
    }
}


async get_responsepayload(response){

    try{

        let responsejson = await response.json();
        return responsejson;

    } catch(err){
        console.log(err);
    }

}


async getResponseHeaderValue(response,headerName){
    
    try{

        let allHeaders = await response.headers();
        let headerValue = allHeaders[headerName];
        console.log("Header Name : " + headerName + " Header Value : " + headerValue );
        return headerValue;
    } catch(err){
        console.log(err);
    }



}

async check_responsebody(response){

    try{

        let responsebody = await response.text();
       console.log("responsebody ->" + responsebody );
        return responsebody;
    } catch(err){
        console.log(err);
    }



}
async check_responsetime(response){
    let timing = context.response.timing.total;
    let size = context.response.meta.downloadSize;

    if (timing > 5000) {
        assert(size > 10000, "Download size vs speed issue");
}
}

async generatetestdata(generateInvalidData){

    let data = {
        "name": faker.faker.lorem.sentence(),
        "email": generateInvalidData ? faker.faker.helpers.arrayElement(['x@.com', 'abc@xyz','abc.com','','abc@']) : faker.faker.internet.email(),
        "gender": faker.faker.helpers.arrayElement(['Female', 'Male']),
        "status":faker.faker.helpers.arrayElement(['active', 'inactive'])    
    }
    return data;
}


}





module.exports={CommonMethods}