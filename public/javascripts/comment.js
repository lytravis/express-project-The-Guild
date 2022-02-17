window.addEventListener("load", (event) => {
  let modalBtn;
  let modal;

  function windowOnClick(event) {
    if (event.currentTarget === modal) toggleModal()
  }

  function toggleModal() {
    modal.classList.toggle("show-modal");
  }

  function getModal(event) {
    let index = event.target.classList[1];
    modalBtn = event.target;
    modal = document.querySelectorAll(`.${index}`)[1];
    return toggleModal();
  }

  console.log(modal)

  document.addEventListener("click", getModal)

  // modalBtn.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);

});
