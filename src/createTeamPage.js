// iterating over team array & generating cards & pushing them into a container
function createCards(team) {
  let cards = [];
  team.forEach((emp) => {
    switch (emp.getRole()) {
      case "Engineer":
        cards += `
        <div class="col-6 mb-4">
          <div class="card c-shadow">
              <div class="card-body">
                  <h5 class="card-title">${emp.getName()}</h5>
                  <h5>${emp.getRole()}</h5>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">Employee ID: ${emp.getID()}</li>
                  <li class="list-group-item">GitHub: <a href="https://www.github.com/${emp.getGit()}" class="card-link">${emp.getGit()}</a></li>
                  <li class="list-group-item">Email: <a href="mailto:${emp.getEmail()}" class="card-link">${emp.getEmail()}</a></li>
              </ul>
          </div>
        </div>
    `;
        break;
      case "Intern":
        cards += `
        <div class="col-6 mb-4">
          <div class="card c-shadow">
              <div class="card-body">
                  <h5 class="card-title">${emp.getName()}</h5>
                  <h5>${emp.getRole()}</h5>
              </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Employee ID: ${emp.getID()}</li>
              <li class="list-group-item">School: ${emp.getSchool()}</li>
              <li class="list-group-item">Email: <a href="mailto:${emp.getEmail()}" class="card-link">${emp.getEmail()}</a></li>
            </ul>
          </div>
        </div>
      `;
        break;
      case "Manager":
        cards += `
          <div class="col-6 mb-4">
            <div class="card c-shadow">
                  <div class="card-body">
                      <h5 class="card-title">${emp.getName()}</h5>
                      <h5>${emp.getRole()}</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">Employee ID: ${emp.getID()}</li>
                      <li class="list-group-item">Office #: ${emp.getOffice()}</li>
                      <li class="list-group-item">Email: <a href="mailto:${emp.getEmail()}" class="card-link">${emp.getEmail()}</a></li>
                  </ul>
            </div>
          </div>
        `;
        break;
      default:
        console.log("Error! No Team Members Detected.");
    }
  });
  return cards;
}

function createPage(cards) {
  return `
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>
<body>
    <div class="container text-center">
        <div class="team-header m-5">
            <h2>Team Manager</h2>
        </div>
        <div class="container">
            <div class="row">
                ${cards}
            </div>
        </div>
      </div>
</body>
</html>
    `;
}

module.exports = { createCards, createPage };
