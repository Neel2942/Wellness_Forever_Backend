const userModel = require("../models/user.js");

const adminDashboard = async(req,res)=>{
    try{
        const users = await userModel.find({});
        console.log(users);
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
    }catch(e){
        console.error(e);
    }

    

}

module.exports = adminDashboard;