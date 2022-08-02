const { request } = require("playwright");

class CRUDMethods{

async doGet(request,geturl){

    try{
        console.log("URL -> " + geturl);
            const responsebaseurl =   await request.get(geturl);
            return responsebaseurl ;
    }
    catch(err){
        console.log(err);
    }
}


async doPost(request,geturl,jsondata){
    try{
        console.log("URL -> " + geturl);
            const responsebaseurl =   await request.post(geturl,{data:jsondata});
            return responsebaseurl ;

    }
    catch(err){
        console.log(err);
    }

}

async doPut(request,geturl,jsondata){
    try{
        console.log("URL -> " + geturl);
            const responsebaseurl =   await request.put(geturl,{data:jsondata});
            return responsebaseurl ;

    }
    catch(err){
        console.log(err);
    }

    
}

async doDelete(request,geturl){
    try{
        console.log("URL -> " + geturl);
            const responsebaseurl =   await request.delete(geturl);
            return responsebaseurl ;

    }
    catch(err){
        console.log(err);
    }


}

}


module.exports={CRUDMethods}