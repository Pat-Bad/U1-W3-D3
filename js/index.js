const listForm = document.getElementById('to-do-list')

listForm.addEventListener('submit', function (e) {
  e.preventDefault()

  const stringInput = document.getElementById('whatToDo')
  const stringValue = stringInput.value

  const itemI = document.createElement('li')
  itemI.classList.add('listItem')

  const newThing = document.createElement('p')
  newThing.innerText = stringValue
  newThing.setAttribute = 'nuovo'

  itemI.appendChild(newThing)

  addedItem.appendChild(itemI)

  listForm.reset()
})

const paragraphs = document.forEach('nuovo')
paragraphs.addEventListener('click', function () {
  paragraphs.classList.add('barrato')
})
