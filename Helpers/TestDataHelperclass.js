const { testConfiguration } = require("../testData/Config");
const fs=require("fs")
const path=require("path")
var Testdatapath="./TestData/"

class TestDataHelper{
loadobject(filepath){
    try{
        if(fs.existsSync(path.join(process.cwd(),filepath))){
        let defaultrawdata = fs.readFileSync(path.join(process.cwd(),filepath),'utf-8');
        const defaultobject=JSON.parse(defaultrawdata);   
        return defaultobject; 
        }
        else
        {
            let def={};
            console.log("Data File not Present for this module in the specified path :" +filepath);
            return def;
        }    
    }
    catch(err){
        console.log(err);
    }
}

jsonreader(module){
    try {   

        let Envobject={};
        let Langobject={};
        let defaultobject={};
        var filepath= Testdatapath + module +"/"+module+".json"; 
        defaultobject=this.loadobject(filepath);
        if(testConfiguration.Env!=""){
            var Envfilepath= Testdatapath + module +"/"+module+"."+testConfiguration.Env+".json";
            Envobject=this.loadobject(Envfilepath);            
        }
        if(testConfiguration.Language!=""){
            var Langfilepath= Testdatapath + module +"/"+module+"."+testConfiguration.Language+".json";
            Langobject=this.loadobject(Langfilepath);            
        }
        const Finalobject=this.combine(defaultobject,Envobject);
        const Finalobject1=this.combine(Finalobject,Langobject);

        return Finalobject1;
         }
    catch(err){
        console.log(err);
    }   
}

combine(object1,object2){
    try{
    if(Object.keys(object2).length>0){
    let array=Object.keys(object2);
    for (let index = 0; index < array.length; index++) {
        let fieldname=array[index];
        let value=object2[fieldname];
        object1[fieldname]=value;
    }
    return object1;
    }
    else{
    return object1;
    }
}
catch(err){
    console.log(err);
}
}
}
module.exports={TestDataHelper}