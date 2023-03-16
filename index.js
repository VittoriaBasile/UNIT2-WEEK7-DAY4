const bottone1 = document.getElementById("bottone1");
const bottone2 = document.getElementById("bottone2");
const url1 = "https://api.pexels.com/v1/search?query=dog";

bottone1.addEventListener("click", (event) => {
  const row = document.getElementById("riga");
  row.innerHTML = "";

  fetch(url1, {
    method: "GET",
    headers: {
      Authorization: "txEfgoXhYvWec9LRIuRrhaHw9POzt2J9hKDdUrHHbaR7qQYkzLv0bXRf",
    },
  })
    .then((resp) => resp.json())

    .then((data) => {
      const photos = data.photos;

      for (const photo of photos) {
        const col = document.createElement("div");
        col.className = "col";
        col.innerHTML = ` <div class="card">
        <img src=${photo.src.medium} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div class="btn-group">
                              <button
                                type="button"
                                class="btn btn-sm btn-outline-secondary"
                              >
                                View
                              </button>
                              <button
                                type="button"
                                class="btn btn-sm btn-outline-secondary"
                              >
                                Edit
                              </button>
                            </div>
                            <small class="text-muted">9 mins</small>
                          </div>
        </div>
        </div>`;

        row.appendChild(col);
      }
    });
});
