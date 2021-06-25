export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper')
    
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener('click', close)

    function open() {
        // colocar a classe active no modal
        modalWrapper.classList.add("active")
    }

    function close() {
        // tirar a classe active no modal
        modalWrapper.classList.remove("active")
    }

    return {
        open,
        close
    }
}