const listForm = document.getElementById('to-do-list')

listForm.addEventListener('submit', function (e) {
  e.preventDefault()

  const stringInput = document.getElementById('whatToDo')
  const stringValue = stringInput.value

  const itemI = document.createElement('li')
  itemI.classList.add('listItem')

  const newThing = document.createElement('p')
  newThing.innerText = stringValue

  itemI.appendChild(newThing)

  addedItem.appendChild(itemI)

  listForm.reset()

  newThing.addEventListener(
    'click',
    (e) => (newThing.style.textDecoration = 'line-through')
  )
})
