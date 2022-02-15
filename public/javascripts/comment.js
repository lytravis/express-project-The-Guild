window.addEventListener("load", (event) => {
  let modalBtn = document.getElementById("update-comment")
  let modal = document.querySelector(".modal")

  function toggleModal() {
    modal.classList.toggle("show-modal");
  }

  function windowOnClick(event) {
    if (event.target === modal) toggleModal();
  }

  modalBtn.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);

});
