const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let i = 1
let itemCount= 0
let UnCheckItemCount = 0

function count_items(){
  // Item count
  UnCheckItemCount = itemCount
  itemCountSpan.replaceChildren(itemCount)
  uncheckedCountSpan.replaceChildren(UnCheckItemCount)
}
function newTodo() {

  itemCount++
  // todo task name
  var todo_name = 'First Item' + i++
  let todo_name_field = document.createElement('input')
  todo_name_field.setAttribute('type', 'text')
  todo_name_field.setAttribute('class', classNames.TODO_TEXT)
  todo_name_field.setAttribute('value', todo_name)
  todo_name_field.setAttribute('id', todo_name)

  // todo checkbox
  let todo_check = document.createElement('input')
  todo_check.setAttribute('type', 'checkbox')
  todo_check.setAttribute('class', classNames.TODO_CHECKBOX)
  todo_check.setAttribute('id', 'yes')
  todo_check.setAttribute('onClick', "check_click()")


  var todo_delete = document.createElement('input')
  todo_delete.setAttribute('type', 'button')
  todo_delete.setAttribute('value', 'Delete Item')
  todo_delete.setAttribute('class', classNames.TODO_DELETE)
  todo_delete.setAttribute('onClick', "delete_item('" + todo_name + "')")
  console.log(todo_name)


  // todo item
  let todo_item_box = document.createElement('p')
  todo_item_box.setAttribute('class', classNames.TODO_ITEM)

  // todo append in html
  todo_item_box.appendChild(todo_name_field)
  todo_item_box.appendChild(todo_check)
  todo_item_box.appendChild(todo_delete)
  todo_item_box.setAttribute('id', todo_name)
  list.appendChild(todo_item_box)
  count_items()
}

function deleteTodo() {
  location.reload()
}

function delete_item(todo_name) {
  let item = document.getElementById(todo_name)
  console.log(item)
  item.remove()
  itemCount--
  count_items()
  check_click()
}

function check_click() {
  if(document.querySelector('#yes').checked){
    UnCheckItemCount--
    uncheckedCountSpan.replaceChildren(UnCheckItemCount)
  }
}
