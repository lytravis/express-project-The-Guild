window.addEventListener("load", function() {
  const form = document.querySelector(".new-shelf-form");
  const shelves = document.querySelector(".custom-shelves");

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
  });
})
