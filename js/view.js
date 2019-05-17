view = {

    createtable : function() {
        // i cree the list 
       var stringArray = ["ulrich","bryan","hilary","beny"];
    //    i creat a list of li
      // creat my ul tag 
       var newListul = document.getElementsByTagName("ul");
        // returd and  
       var newUL = document.getElementsByTagName("body")[0];
       
       

        for(var i = 0; i < stringArray.length; i++){
            // Create a text node
            var myName = document.createTextNode(stringArray[i]);
    //         // Create a list element
            var newListNameli = document.createElement("li");
            // Append text node and list item
            newListNameli.appendChild(myName); 
            console.log(myName);
            
            
        }
        // newListul.appendChild(myName);
    }
}
view.createtable();