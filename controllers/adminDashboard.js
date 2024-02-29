const userModel = require("../models/user.js");

const adminDashboard = async(req,res)=>{
    try{
        const user = await userModel.findOne({
            _id: loggedIn
        });
        if(user!=null){
            const users = await userModel.find({});
            let allUsers = [];
            for(i=0;i<users.length;i++ ){
                const userObject={
                    fullName: users[i].firstName + ' ' + users[i].lastName,
                    userType: users[i].userType,
                    specialization: users[i].specialization 
                }
                allUsers.push(userObject);
            }
            
            res.json(allUsers);
        }else{
            res.json("notLoggedIn");
        }
    }catch(e){
        console.error(e);
    }
}

module.exports = adminDashboard;