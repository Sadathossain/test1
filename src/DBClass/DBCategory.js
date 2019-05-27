
import config from "./config";

export default class DBCategory {
    category_id = 1;
    category_name = "";
    parent = 0;

    constructor(_id) 
    {
        this.category_id=_id;
        this.category_name="category_name";
        this.parent=0;
    };

    showCategoryInfo()
    {
        console.log("id "+this.category_id);
        console.log("category_name "+this.category_name);
        console.log("parent "+this.parent);
    }
}

DBCategory.allDBCategory=[];

DBCategory.loadAllDBCategory=function()
{
    console.log("DBCategory.loadAllDBCategory----1 ");
    console.log("url "+config.url);
    console.log("myDB "+config.myDB);
    console.log("db_categories "+config.db_categories);
    if(DBCategory.allDBCategory.length==0)
    {
        console.log("DBCategory.loadAllDBCategory----2 ");
        var MongoClient = require('mongodb').MongoClient;
        
        var categoryList =[];

        MongoClient.connect(config.url, function(err, db) {
            console.log("DBCategory.loadAllDBCategory----3 ");
            if (err) throw err;
            var dbo = db.db(config.myDB);
            dbo.collection(config.db_categories).find({}).toArray(function(err, result) {
                console.log("DBCategory.loadAllDBCategory----4 ");
                if (err) throw err;
                categoryList = result;
                console.log("categoryList: "+categoryList.length);
                console.log("category_id: "+categoryList[0].category_id);
                console.log("category_name: "+categoryList[0].category_name);
                console.log("parent: "+categoryList[0].parent);
                db.close();

                //callback("Data loading completed from MongoDB <br />");
            });
        });
    }
}

DBCategory.getDBCategory=function(_categoryid)
{
    DBCategory.loadAllDBCategory();

    console.log("DBCategory.allDBCategory "+DBCategory.allDBCategory.length);
    for (var i=0; i<DBCategory.allDBCategory.length; i++)
    {
        var categoryInfo=DBCategory.allDBCategory[i];
        categoryInfo.showCategoryInfo();
        // if(artifactInfo.artifact_id==_artifact_id)
        // {
        //     return Object.create(artifactInfo);
        // }
    }

}