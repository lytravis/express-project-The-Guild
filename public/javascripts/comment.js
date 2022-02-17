window.addEventListener("load", (event) => {

  function getModal(event) {
    let index = event.target.classList[1];
    let modal = document.querySelectorAll(`.${index}`)[1];
    if (modal) modal.classList.toggle("show-modal");
  }

  document.addEventListener("click", getModal);

});
