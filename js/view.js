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
    },
    linktopage2:function(){
        document.getElementById('signInForm').addEventListener('submit', function() {
    
            var name=document.getElementsByName("name");
            var secondDate=document.getElementsByName("password");
            var queryString = "?para1=" + firstDate + "¶2=" + secondDate;
            window.location.href = "SecondPage.html" + queryString;
            document.getElementById("contactForm").method = "LINK";
            document.getElementById("contactForm").action = "page2.html";
    
        });
    }
}
view.createtable();