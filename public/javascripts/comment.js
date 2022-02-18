window.addEventListener("load", (event) => {
  document.addEventListener("click", function (e) {
    const index = e.target.classList[1];
    const modal = document.querySelector(`.modal.${index}`);
    if (modal) modal.classList.toggle("show-modal");

    const form = document.querySelector(`.update-comment-form.${index}`);
    const comment = document.querySelector(`#content.${index}`);
    const gameRating = document.querySelector(`#rating.${index}`);

    if (form) {
      form.addEventListener("submit", async function (e) {
        e.preventDefault();
        const content = form.elements['content'].value;
        const rating = +form.elements['rating'].value;
        const token = form.elements['_csrf'].value;

        await fetch(`/${form.action.split('/').slice(3).join('/')}`, {
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
        gameRating.innerHTML = `Rating: ${rating}`;
        modal.classList.toggle("show-modal");
      })
    }

    const deleteButton = document.querySelector(`.delete-comment-button.${index}`);
    const review = document.querySelector(`#review.${index}`);

    deleteButton.addEventListener("click", async function(e) {
      e.preventDefault();

      await fetch(`/${form.action.split('/').slice(3).join('/')}`,
        { method: 'DELETE' }
      );
      review.remove();
      modal.classList.toggle("show-modal");
    })
  });


});
