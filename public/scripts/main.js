import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Pegar os botões
const checkButtons = document.querySelectorAll('.actions a.check')
const deleteButtons = document.querySelectorAll('.actions a.delete')

//Check buttons
checkButtons.forEach(button => {
    // Adicionar o Event listener
    button.addEventListener("click", handleClick)
})

//Delete buttons
deleteButtons.forEach(button => {

    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault()

    const roomID = document.querySelector('#room-id').dataset.id
    const slug = check ? "check" : "delete"
    const questionId = event.target.dataset.id

    const form = document.querySelector('.modal form')
    form.setAttribute('action', `question/${roomID}/${questionId}/${slug}`)

    const text =  check ? 'Marcar como lida' : 'Excluir'
    // ? true | : false
    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que você deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
    //Abrir o modal
    modal.open()
}
