let todos = []
let variable = 0
let index = 0
let z = 0
let p = 0
let test = 0
let content = document.getElementById("content");

const render = () => {
  let text = document.getElementById("status_text1");
  let button = document.getElementById("button_clear");

  variable = 0;
  todos.forEach(element => {
    if(element["checked"] == false) {
        variable = variable + 1;
    }
  });
  
  //clear completed items
  if(variable == todos.length) {
    button.style.display = "none";
  } else {
    button.style.display = "inline-block";
    button.classList.add("div_status_text4");

    todos.forEach(element2 => {
      if(element2["checked"] == true)
      {
        list2 = document.getElementById('myUL').querySelectorAll('ul li label.round')
        button.onclick = function() {
          for(let listItem2 of list2) {
            todos.forEach(element => { 
              if(listItem2.id == element["id"] && element["checked"] == true) {
                let div = listItem2.parentElement;
                div.style.display = "none";
                  
                for (let i = 0; i < todos.length; i++) {
                  if (todos[i]["id"] === element["id"]) {
                    todos.splice(i, 1);
                  }
                  let prinipalDiv = document.getElementById("principal");
                  if(todos.length === 0) {
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

  if(variable == 1) {
    text.innerHTML = variable + " item left";
  }
  else text.innerHTML = variable + " items left";
}

const main = (todo1) => {
  todos.push(todo1)
  render()
}

/////////////////////////////////////////////////////////////////
document.addEventListener('keyup', event => {
  if (event.code === 'Enter') {   
    let todo = {
      "id": 0,
      "text": "",
      "checked": false,
      "close": false,
    }   
        
    index = index + 1;
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    todo["text"] = inputValue;
    todo["id"] = index;
      
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
        
    li.setAttribute("id", index);
    let label = document.createElement('label');
    label.classList.add("round");
    label.setAttribute("id", index);
    label.appendChild(document.createTextNode(''));
      
    let divText = document.createElement("DIV");
    divText.classList.add("divText");
    divText.appendChild(t);

    li.appendChild(label);
    li.appendChild(divText);

    if (inputValue === '') {
  
    } 
    else {
      document.getElementById("myUL").appendChild(li);
    }
      document.getElementById("myInput").value = "";

    let div = document.createElement("div");
    div.classList.add("status");
    div.setAttribute("id", "principal");
    let spanDiv = document.createElement("span");
    spanDiv.classList.add("div_status_text1");
    spanDiv.setAttribute("id", "status_text1");

    let buttonDiv = document.createElement("button");
    buttonDiv.classList.add("div_status_text2");
    buttonDiv.classList.add("div_box");
    let textButton = document.createTextNode("All");
    buttonDiv.setAttribute("id", "button_all");
    buttonDiv.appendChild(textButton);

    let buttonDiv2 = document.createElement("button");
    buttonDiv2.classList.add("div_status_text3");
    let textButton2 = document.createTextNode("Active");
    buttonDiv2.setAttribute("id", "button_active");
    buttonDiv2.appendChild(textButton2);

    let buttonDiv3 = document.createElement("button");
    buttonDiv3.classList.add("div_status_text3");
    let textButton3 = document.createTextNode("Completed");
    buttonDiv3.setAttribute("id", "button_completed");
    buttonDiv3.appendChild(textButton3);

    let buttonDiv4 = document.createElement("button");
    buttonDiv4.classList.add("div_status_text4");
    buttonDiv4.style.display = "none";
    let textButton4 = document.createTextNode("Clear completed");
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

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.classList.add("close");
    span.appendChild(txt);
    li.appendChild(span);
      
    $("li").hover(function() {
      $(this).children('span').css("display", "inline-block");
      let close = document.getElementById('myUL').querySelectorAll('ul li span.close')
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          let div = this.parentElement;
          div.style.display = "none";
          for (let i = 0; i < todos.length; i++) {
            console.log(todos[i].id)
            if (todos[i].id == div.id) {
              todos.splice(i, 1);
              close[i].remove();
              render()
            }
            let prinipalDiv = document.getElementById("principal");
            if(todos.length === 0) {
              prinipalDiv.style.display = "none";
              index = 0;
              window.location.reload();
            }
          }
        }
      }  
    }, function() {
      $(this).children('span').css("display", "none");
    }); 

    if(test == 0)
      document.getElementById("button_all").click();
    else if(test == 1)
      document.getElementById("button_active").click();
    else if(test == 2)
      document.getElementById("button_completed").click();
      
     
    //checked for every item
    list = document.getElementById('myUL').querySelectorAll('ul li label.round')
    $(document).ready(function(){
      $(list[list.length-1]).click(function(event){
        event.target.classList.toggle('checked');
        ana = document.getElementById('myUL').querySelectorAll('ul li div.divText');
        ana[event.target.id-1].classList.toggle('checked2');
        z = 0;
        todos.forEach(element => {
          if(event.target.id == element["id"]) {
            if(element["checked"] == true) {
              element["checked"] = false;
              render();
            }
            else {
              element["checked"] = true;
              if(test == 1)
                document.getElementById("button_active").click();
              render()
            }
          }
        });
      });
    });
       
    //completed all
    document.getElementById('chevron').onclick = function() {
      z = z + 1;
      for (let listItem of list) {
        todos.forEach(element => { 
          if(z % 2 == 1) {
            if(listItem.id == element["id"]) {
              if(element["checked"] == false) {
                element["checked"] = true;
                listItem.classList.toggle('checked');
                render();  
              }
            }
          }
          else if(z % 2 == 0) {
            if(listItem.id == element["id"]) {
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
      document.getElementById("button_completed").click();
        
    let button_active = document.getElementById("button_active");
    let button_completed = document.getElementById("button_completed");
    let button_all = document.getElementById("button_all");
          
    //show completed items
    button_completed.onclick = function() {
      test = 2;
      button_all.classList.remove("div_box")
      button_active.classList.remove("div_box")
      button_completed.classList.add("div_box")
      list2 = document.getElementById('myUL').querySelectorAll('ul li label.round')
      array = document.getElementsByTagName("LI");
      let result = todos.filter(element => element["checked"] === true);
      for(let listItem of list2) {
        array[listItem.id -1].style.display = "none";
      }
          
      for(let resultItem of result) {
        for(let listItem2 of list2) {  
          if(listItem2.id == resultItem["id"]) { 
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
      let result_active = todos.filter(element => element["checked"] === false);
      for(let listItem of list2) {
        array[listItem.id -1].style.display = "none";
      }
          
      for(let resultItem of result_active) {
        for(let listItem2 of list2) {  
          if(listItem2.id == resultItem["id"]) { 
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
      let array = document.getElementsByTagName("LI");
      for(let listItem2 of list2) {
        todos.forEach(element => {
          if(element["id"] == listItem2.id) {
            array[listItem2.id - 1].style.display = "flex";
          }
          render()
        });
      }
    }
  }
});


