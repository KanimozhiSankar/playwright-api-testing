const { assert,expect } = require("chai");

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
}





module.exports={CommonMethods}