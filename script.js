

let url = "https://kontests.net/api/v1/all";

let response = fetch(url);
response
  .then((v) => {
    return v.json();
  })
  .then((content) => {
    ihtml = "";
    for (item in content) {
      console.log(content[item]);

      ihtml += `
        <div class="card" style="width: 18rem; margin: 2vw; justify-content: center; align-items: center;">
                <img src="https://th.bing.com/th/id/R.059e2ce4c2e862a990d4ee354b7f966c?rik=qi2OQC0dqCWK2Q&pid=ImgRaw&r=0" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${content[item].name}</h5>
                  <p style="width: 100%">Start time: ${content[item].start_time}</p>
                  <br>
                  <p style="width: 100%">End time: ${content[item].end_time}</p>
                  <a href="${content[item].url}" class="btn btn-primary">visit here</a>
                </div>
              </div>
        `;
    }
    cardContainer.innerHTML = ihtml;
    console.log(v);
  });



