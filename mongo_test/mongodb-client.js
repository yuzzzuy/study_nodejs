const mongodb = require("mongodb").MongoClient;
const url = "mongodb://localhost";

const ADD = 1;
const UPDATE = 2;
const QUERY = 3;
const DELETE = 4;

async function dbOperateOnTeacher(operator = 0) {
    let conn=null;
    let docs=null;
    try {
        conn = await mongodb.connect(url, { useUnifiedTopology: true });
        const tchCol = await conn.db("test").collection("teacher");
        switch (operator) {
            case ADD:
                await tchCol.insertOne({ name: "KK", age: 42, subject: "Chinese" });
                docs=await tchCol.find().toArray();
                console.log(docs);
                break;
            case UPDATE:
                await tchCol.updateOne({ name: "KK" }, { $set: { age: 36 } });
                docs=await tchCol.find().toArray();
                console.log(docs);
                break;
            case QUERY:
                docs=await tchCol.find().toArray();
                console.log(docs);
                break;
            case DELETE:
                await tchCol.deleteOne({ name: "KK" });
                docs=await tchCol.find().toArray();
                console.log(docs);
                break;
            default:
                console.log("不知道你想干嘛");
                break;
        }
    } catch (error) {
        console.log(error);
    } finally{
        conn.close();
    }
}

(async function autoCRUD(){
    console.log("ADD");
    await dbOperateOnTeacher(ADD);
    console.log("QUERY");
    await dbOperateOnTeacher(QUERY);
    console.log("UPDATE");
    await dbOperateOnTeacher(UPDATE);
    console.log("QUERY");
    await dbOperateOnTeacher(QUERY);
    console.log("DELETE");
    await dbOperateOnTeacher(DELETE);
})()


