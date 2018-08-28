var fs = require('fs');

exports.find = function (req, res){

    // Recuperar parametro req.params.busca
    busca = req.params.param;

    console.log(busca)
    //return res.json({'status' : 'sucesso'}); 

    fs.readFile("./data/equipments.json", "utf-8", function(err, data, result){

        if(err){
            console.log("erro ao ler arquivo!!");
        }

        var jsonData = JSON.parse(data);

        jsonData = Object.keys(jsonData);

        // buscar dentro do jsonData o parametro tal

        return res.json(data);
    })
    /*
    fs.readFile("./data/materials.json", "utf-8", function(err, data){

        if(err){
            console.log("erro ao ler arquivo!!");
        }

        var jsonData = JSON.parse(data);

        jsonData = Object.keys(jsonData);

        console.log('arquivo materials.json: ', jsonData);
            
        //return res.json(jsonData);
    })

    fs.readFile("./data/purchase_orders.json", "utf-8", function(err, data){

        if(err){
            console.log("erro ao ler arquivo!!");
        }

        var jsonData = JSON.parse(data);

        jsonData = Object.keys(jsonData);

        console.log('arquivo purchase_orders.json: ', jsonData);
            
        //return res.json(jsonData);
    })

    fs.readFile("./data/sales_orders.json", "utf-8", function(err, data){

        if(err){
            console.log("erro ao ler arquivo!!");
        }

        var jsonData = JSON.parse(data);

        jsonData = Object.keys(jsonData);

        console.log('arquivo sales_ordes.json: ', jsonData);
            
        //return res.json(jsonData);
    })

    fs.readFile("./data/workforce.json", "utf-8", function(err, data){

        if(err){
            console.log("erro ao ler arquivo!!");
        }

        var jsonData = JSON.parse(data);

        jsonData = Object.keys(jsonData);

        console.log('arquivo workforce.json: ', jsonData);
            
        //return res.json(jsonData);
    })
    */
}
