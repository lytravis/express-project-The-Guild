window.addEventListener("load", function() {
  const form = document.querySelector(".new-shelf-form");
  const shelves = document.querySelector(".custom-shelves");
  const formInput = document.querySelector(".new-shelf-input");

  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const newShelf = form.elements["shelfName"].value;
    const token = form.elements["_csrf"].value;

    const data = await fetch(`/${form.action.split('/').slice(3).join('/')}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'CSRF-Token': `${token}`
      },
      body: JSON.stringify({ newShelf })
    })
    const result = await data.json();
    const shelf = document.createElement("div");
    shelf.setAttribute("class", "custom");
    shelf.innerHTML = `
      <h3>
        <a href='/game_shelves/${result.shelf.id}'>
          ${result.shelf.shelfName}
        </a>
      </h3>
        <form class='delete-form' action='/game_shelves/${result.shelf.id}/delete' method='delete'>
          <button class="delete-shelf"><i class="fa fa-trash-o"></i></button>
        </form>
      `;
    shelves.appendChild(shelf);
    formInput.value = '';
  });

  const deleteForms = document.querySelectorAll(".delete-form");

  deleteForms.forEach(form => {
    form.addEventListener("submit", async function(e) {
      e.preventDefault();

      await fetch(`/${form.action.split('/').slice(3).join('/')}`,
      { method: 'DELETE' }
      );
      const shelfToDelete = form.parentNode;
      shelfToDelete.remove();
    })
  });
});
