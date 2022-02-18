window.addEventListener("load", (event) => {

  function getModal(event) {
    const index = event.target.classList[1];
    const modal = document.querySelectorAll(`.${index}`)[1];
    if (modal) modal.classList.toggle("show-modal");
  }

  document.addEventListener("click", getModal);

  const form = document.querySelector('.update-comment-form');
  const index = form.parentNode.parentNode.parentNode.parentNode.classList[1];
  const modal = document.querySelectorAll(`.${index}`)[1];
  const comment = document.getElementById("content");

  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const content = form.elements['content'].value;
    const rating = +form.elements['rating'].value;
    const token = form.elements['_csrf'].value;

    const res = await fetch(`/${form.action.split('/').slice(3).join('/')}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'CSRF-Token': `${token}`
      },
      body: JSON.stringify({
        rating,
        content
      })
    });
    comment.innerHTML = content;
    modal.classList.toggle("show-modal");
  })

});
