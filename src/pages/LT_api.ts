const jsonfile = require('jsonfile');
const _ = require('lodash');
var fs = require('file-system');
var jsondata= null;

export class LT_api {

    jsonReadWrite(file,path,keyValue){
        jsonfile.readFile(file, function (err) {
            if (err) throw err;
            jsondata = require("../." + file);
            _.set(jsondata, path, keyValue);
            fs.writeFile(file, JSON.stringify(jsondata, null, 2), "utf8", function (err) {
                if (err) throw err;
                console.log("File updated..!");
            });
        });
    }

}
