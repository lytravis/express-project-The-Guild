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
    shelf.setAttribute("class", `custom ${result.shelf.id}`);
    shelf.innerHTML = `
      <h3>
        <a href='/game_shelves/${result.shelf.id}'>
          ${result.shelf.shelfName}
        </a>
      </h3>
      <button class="delete-shelf"><i class="fa fa-trash-o"></i></button>
      `;
    shelves.appendChild(shelf);
    formInput.value = '';
  });

  const deleteButtons = document.querySelectorAll(".delete-shelf");

  deleteButtons.forEach(button => {
    button.addEventListener("click", async function(e) {
      e.preventDefault();

      const shelfId = button.parentNode;

      await fetch(`/game_shelves/${shelfId.classList[1]}/delete`,
      { method: 'DELETE' }
      );
      const shelfToDelete = button.parentNode;
      shelfToDelete.remove();
    })
  });
});
