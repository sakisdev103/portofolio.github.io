const userName = document.getElementById("username");
const passWord = document.getElementById("password");

let users = [
    { 
         name : 'user1',
         password: '123',
         id: Math.floor(Math.random() * 100 + 1),
     },
     { 
         name : 'user2',
         password: '123',
         id: Math.floor(Math.random() * 100 + 1)
     }
 ]


function signUp(){
    // if (users.find(e => e.name === userName.value)) {
    //     console.log("exists");
    // } else{
    //     let newUser = {
    //         name: userName.value,
    //         password: passWord.value,
    //         id: Math.floor(Math.random() * 100 + 1)
    //        };
    //        users.push(newUser);
    //        for(let i = 0 ;users.length;i++){
    //         console.log(users[i]);

    //        }
    // }

   
    function addItem(item) {
        var index = users.findIndex(x => x.name === userName.value)
        if (index === -1) {
          users.push(item);
        }else {
          console.log("object already exists")
        }
      }
      
      let item = {
        name: userName.value,
        password: passWord.value,
        id: Math.floor(Math.random() * 100 + 1)
    };
      addItem(item);
}


