const task = document.getElementById("task");
const add = document.getElementById("add");
const results = document.getElementById("results");


//Click add button
add.addEventListener("click",function(e){

    if(task.value.length>0){

        //prevent by default submit
        e.preventDefault();
        
        const todolistitem = document.createElement("li"); //create a new li element in the main document
        const addedtask = document.createElement("span"); //Create a span to store added task in the main document
        const doneButton = document.createElement("button"); //Create new done button in the main document
        const deleteButton = document.createElement("button"); //Create new delete button in the main document

        addedtask.classList.add("item");  //Add a class to span item
        addedtask.innerText=task.value;  //Set span tag display value
        doneButton.classList.add("done"); //Add a class to done button
        doneButton.innerText ="Done"; //Set done button display name
        deleteButton.classList.add("del"); //Add a class to delete button
        deleteButton.innerText ="Delete"; //Set delete button display name

        //Append data to fields
        todolistitem.appendChild(addedtask);
        todolistitem.appendChild(doneButton);
        todolistitem.appendChild(deleteButton);
        results.appendChild(todolistitem);


        //Click done button
        doneButton.addEventListener("click", function(){
            const span = todolistitem.querySelector(".item")     //get the span to a variable from todolistitem 
            span.style.color="#8d0801";  //Change the color
            span.style.textDecoration = "line-through";   //Cut the text by a line
        })


        //Click delete button
        deleteButton.addEventListener("click", function(){
            results.removeChild(todolistitem);    //remove todoitem child from the results
        })


        //Empty task field
        task.value="";
        //cursor focuses next task
        task.focus();


    }else{
        e.preventDefault();
    }

})