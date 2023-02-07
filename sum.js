const fs = require("fs");

const quote = "live more , worry less";

for (i=1;i<=10;i++){
    fs.writeFile(`".text-${i}.html"`,quote,(err) =>{
        console.log("completed writing");
    })
}