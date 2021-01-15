const arrayMap = require("./arrayMap");

async function loadUsers(userIds, load, done) {
    var users = [];
    userIds.forEach(element => {
        load(element, function(result){
            if(result){users.push(result);}
        });
    });

    done(users);

    
}

module.exports = loadUsers;
