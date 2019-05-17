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
}};

octopus.registration();