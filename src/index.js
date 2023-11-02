document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // document.getElementsByClass()
  // element.addEventListener("click", )

  // need to record input field when "create new task" is clicked. 
    // get form
    
    const callForm = document.getElementById("create-task-form")
    const newList = document.getElementById("tasks")
    // add event listener, submit 
    callForm.addEventListener("submit", function addItem(e) {
      e.preventDefault()
      const input = document.getElementById("new-task-description").value
      const li = document.createElement("li")
      li.textContent = input
      newList.appendChild(li)
      console.log("Hi")
  })

    // create new list item in unordered list
});