octopus={
        registration: function(){
        window.onload = function() {

            // Check for LocalStorage support.
            if (localStorage) {
        
                // Add an event listener for form submissions
            document.getElementById('contactForm').addEventListener('submit', function() {
                //   Get the value of the name field.
                var name = document.getElementById('name').value;
                var password = document.getElementById('password').value;
                try{
                    var accounts =JSON.parse(window.localStorage.getItem('Accounts')); 
                    accounts.push({"name":name, "password":password});
                    localStorage.setItem("Accounts", JSON.stringify(accounts));
                }catch{
                    localStorage.clear();
                    var accounts =[];
                    accounts.push({"name":name, "password":password});
                    localStorage.setItem("Accounts", JSON.stringify(accounts));
                }
                
                //   Save the name in localStorage.
                //  localStorage.setItem('name', name);
            });
        
            }
        
        }
        return true;
    },
    getUserNameAndStatut: function(){
        var locate = window.location
        document.joe.burns.value = locate
        
        var text = document.joe.burns.value

        theleft = text.indexOf("=") + 1;
        theright = text.lastIndexOf("&");
        point = text.lastIndexOf("=");
        // return(str.substring(theleft, theright));
        return([str.substring(theleft, theright),text.substring(point+1,str.length)]);
    },
    dashboardDisplay: function(statut, listeUSer){

        if (statut = 'admin'){
            // lance la function d'ajout des li
        }
        else if(statut= 'user'){

        }
        else{
            
        }
    },
    getUSersData: function(){
        var accounts = JSON.parse(window.localStorage.getItem('Accounts'));
        var accountNumb = accounts.length
        nameList=[]
        for(var i;accountNumb > i;i++){
            nameList.push(accounts[i][name]);
        }
        return nameList;
    }
};

octopus.registration();