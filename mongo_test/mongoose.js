const mongoose = require("mongoose");
const url = "mongodb://localhost";
const Schema = mongoose.Schema;

async function connect() {
    //连接数据库
    try {
        await mongoose.connect(url,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("数据库已连接！");
   } catch (error) {
        console.log("连接失败！");
       throw error;
    }
}

async function createCatModel() {
    //定义Schema    
    const cat = new Schema({
        name: String,
        kind: {type: String, required: true},
        age: Number,
        food: [Number],
        birth: Date,


    });

    const Cat = mongoose.model("Cat",cat);
    const LiHua = new Cat({name:"LiHua",extra:"1"});
    console.log(LiHua);
}


