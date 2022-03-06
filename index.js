let todos = []
let variable = 0
let index = 0
var z = 0
var p = 0
var test = 0
var content = document.getElementById("content");
const render = () => {
  var text = document.getElementById("status_text1");
  var button = document.getElementById("button_clear");

  variable = 0
  todos.forEach(element => {
    if(element["checked"] == false)
    {
        variable = variable + 1;
    }
  });
  
 //clear completed items
  if(variable == todos.length)
  {
    button.style.display = "none";
  } else 
  {
      button.style.display = "inline-block";
      button.classList.add("div_status_text4");

      todos.forEach(element2 => {
        if(element2["checked"] == true)
        {
          list2 = document.getElementById('myUL').querySelectorAll('ul li label.round')
          button.onclick = function() {
            for(var listItem2 of list2)
            {
              todos.forEach(element => { 
              if(listItem2.id == element["id"] && element["checked"] == true)
              {
                var div = listItem2.parentElement;
                div.style.display = "none";
                
                for (var i = 0; i < todos.length; i++) {
                  if (todos[i]["id"] === element["id"]) {
                      todos.splice(i, 1);
                  }
                  var prinipalDiv = document.getElementById("principal");
                  if(todos.length === 0)
                  {
                    prinipalDiv.style.display = "none";
                    index = 0;
                    window.location.reload();
                  }
              }
              render()
              }
            });
            }
           
          }
        }
      });
  
  }


    if(variable == 1)
  text.innerHTML = variable + " item left";
else text.innerHTML = variable + " items left";

}

const main = (todo1) => {
  todos.push(todo1)
  render()
}



/////////////////////////////////////////////////////////////////
 document.addEventListener('keyup', event => {
    if (event.code === 'Enter') 
  {   
      let todo = {
        "id": 0,
        "text": "",
        "checked": false,
        "close": false,
      }   
      
      index = index + 1;
      var li = document.createElement("li");

      var inputValue = document.getElementById("myInput").value;
      var t = document.createTextNode(inputValue);
      todo["text"] = inputValue;
      todo["id"] = index;
     
      var checkbox = document.createElement('input');
                  
      checkbox.type = "checkbox";
      checkbox.name = "name";
      checkbox.value = "value";
      checkbox.id = "id";
        
      li.setAttribute("id", index);
      var label = document.createElement('label');
      label.classList.add("round");
      label.setAttribute("id", index);
      label.appendChild(document.createTextNode(''));
      
      var span3 = document.createElement("SPAN");
      span3.appendChild(t);
      label.appendChild(span3);

      li.appendChild(label);

      if (inputValue === '') {
        
      } else {
        document.getElementById("myUL").appendChild(li);
      }
      document.getElementById("myInput").value = "";

      var div = document.createElement("div");
      div.classList.add("status");
      div.setAttribute("id", "principal");
      var spanDiv = document.createElement("span");
      spanDiv.classList.add("div_status_text1");
      spanDiv.setAttribute("id", "status_text1");

      var buttonDiv = document.createElement("button");
      buttonDiv.classList.add("div_status_text2");
      buttonDiv.classList.add("div_box");
      var textButton = document.createTextNode("All");
      buttonDiv.setAttribute("id", "button_all");
      buttonDiv.appendChild(textButton);

      var buttonDiv2 = document.createElement("button");
      buttonDiv2.classList.add("div_status_text3");
      var textButton2 = document.createTextNode("Active");
      buttonDiv2.setAttribute("id", "button_active");
      buttonDiv2.appendChild(textButton2);

      var buttonDiv3 = document.createElement("button");
      buttonDiv3.classList.add("div_status_text3");
      var textButton3 = document.createTextNode("Completed");
      buttonDiv3.setAttribute("id", "button_completed");
      buttonDiv3.appendChild(textButton3);

      var buttonDiv4 = document.createElement("button");
      buttonDiv4.classList.add("div_status_text4");
      buttonDiv4.style.display = "none";
      var textButton4 = document.createTextNode("Clear completed");
      buttonDiv4.appendChild(textButton4);
      buttonDiv4.setAttribute("id", "button_clear");
      if(index == 1)
      {
        div.appendChild(spanDiv);
        div.appendChild(buttonDiv);
        div.appendChild(buttonDiv2);
        div.appendChild(buttonDiv3);
        div.appendChild(buttonDiv4);
        content.appendChild(div);
      }

      main(todo)

      //span x for every item
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.classList.add("close");
      span.appendChild(txt);
      li.appendChild(span);
      
       $("li").hover(function(){
         $(this).children('span').css("display", "inline-block");
         var close = document.getElementById('myUL').querySelectorAll('ul li span.close')
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
              var div = this.parentElement;
              div.style.display = "none";
              console.log(close)
              for (var i = 0; i < todos.length; i++) {
                console.log(todos[i].id)
                if (todos[i].id == div.id) {
                    todos.splice(i, 1);
                    close[i].remove();
                    render()
                }
                var prinipalDiv = document.getElementById("principal");
                if(todos.length === 0)
                  {
                    prinipalDiv.style.display = "none";
                    index = 0;
                    window.location.reload();
                  }
              }
          }
        }  
        }, function(){
        $(this).children('span').css("display", "none");
      }); 

      if(test == 0)
      document.getElementById("button_all").click();
        else if(test == 1)
      document.getElementById("button_active").click();
        else if(test == 2)
      {
      document.getElementById("button_completed").click();
      }
     
      //checked for every item
        list = document.getElementById('myUL').querySelectorAll('ul li label.round')
        $(document).ready(function(){
          $(list[list.length-1]).click(function(event){
            event.target.classList.toggle('checked');
            z = 0;
              todos.forEach(element => {
                if(event.target.id == element["id"])
                {
                  if(element["checked"] == true)
                    {element["checked"] = false;
                    render();}
                  else
                  {
                    element["checked"] = true;
                    if(test == 1)
                      document.getElementById("button_active").click();
                    render()}
                  }
            });
    
          });
        });
       
        //completed all
          document.getElementById('chevron').onclick = function() {
            z = z + 1;
            for (var listItem of list) {
              todos.forEach(element => { 
                if(z % 2 == 1)
                {
                  if(listItem.id == element["id"])
                  {
                      if(element["checked"] == false) {
                        element["checked"] = true;
                        listItem.classList.toggle('checked');
                        render();  
                      }
                  }
                }
                else if(z % 2 == 0)
                {
                  if(listItem.id == element["id"])
                  {
                    element["checked"] = false;
                    listItem.classList.toggle('checked');
                    if(test == 1)
                      document.getElementById("button_active").click();
                    render();
                }
              }
              });
            }
          } 

        if(test == 0)
          document.getElementById("button_all").click();
        else if(test == 1)
          document.getElementById("button_active").click();
        else if(test == 2)
        {
          document.getElementById("button_completed").click();
        }
   
          var button_active = document.getElementById("button_active");
          var button_completed = document.getElementById("button_completed");
          var button_all = document.getElementById("button_all");
          
          //show completed items
          button_completed.onclick = function() {
              test = 2;
              button_all.classList.remove("div_box")
              button_active.classList.remove("div_box")
              button_completed.classList.add("div_box")
              list2 = document.getElementById('myUL').querySelectorAll('ul li label.round')
              array = document.getElementsByTagName("LI");
              var result = todos.filter(element => element["checked"] === true);
              for(var listItem of list2)
              {
                array[listItem.id -1].style.display = "none";
              }
          
              for(var resultItem of result)
              {
                for(var listItem2 of list2)
                {  
                    if(listItem2.id == resultItem["id"])
                    { 
                      array[listItem2.id - 1].style.display = "flex";
                      render()
                    }
                }
              }
          }
          //show active items
          button_active.onclick = function() {
            test = 1;
            button_all.classList.remove("div_box")
            button_completed.classList.remove("div_box")
            button_active.classList.add("div_box")
            list2 = document.getElementById('myUL').querySelectorAll('ul li label.round')
            array = document.getElementsByTagName("LI");
            var result_active = todos.filter(element => element["checked"] === false);
            for(var listItem of list2)
            {
                array[listItem.id -1].style.display = "none";
            }
          
            for(var resultItem of result_active)
            {
              for(var listItem2 of list2)
              {  
                  if(listItem2.id == resultItem["id"])
                  { 
                    array[listItem2.id - 1].style.display = "flex";
                    render()
                  }
                }
              }
            }
          
          //show all items
          button_all.onclick = function() {
          test = 0;
          button_all.classList.add("div_box")
          button_completed.classList.remove("div_box")
          button_active.classList.remove("div_box")
          list2 = document.getElementById('myUL').querySelectorAll('ul li label.round')
          var array = document.getElementsByTagName("LI");
          console.log(list2)
          for(var listItem2 of list2)
          {
          todos.forEach(element => {
            if(element["id"] == listItem2.id) {
              console.log(array[listItem2.id - 1], "kkkk")
             array[listItem2.id - 1].style.display = "flex";

            }
              render()
          });
          }
          }
}
});


