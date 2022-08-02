const { TestDataHelper } = require("../Helpers/TestDataHelperclass");

var logindata={};

class DataHandler{ 
    constructor(moduletype){
    let testdatahelper=new TestDataHelper();
    const dataset=testdatahelper.jsonreader(moduletype);
    if(Object.keys(dataset).length > 0)
    {    
    let array=Object.keys(dataset);
    for (let index = 0; index < array.length; index++) {
        let fieldname=array[index];
        let value=dataset[fieldname];
        logindata[fieldname]=value;
    }
    }
    else{
        console.log("Data files are not present for this " +moduletype+ " module");
    }
    }

getdata(){
    return logindata;
}
}

module.exports={DataHandler}

