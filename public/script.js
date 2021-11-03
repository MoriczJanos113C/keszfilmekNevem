feltolt();

async function feltolt(){
    const valasz = await fetch("/filmek");
    const jsonelemek = await valasz.json();

    let html = "";
    for(elem of jsonelemek){
        html += `<table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Cím</th>
            <th scope="col">Hossz</th>
            <th scope="col">Megjelenés</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">${elem.id}</th>
            <td>${elem.cim}</td>
            <td>${elem.hossz}</td>
            <td>${elem.megjelenes}</td>
          </tr>
        </tbody>
      </table>`;
        
    }

    document.getElementById("filmek").innerHTML = html;
}


/*
{
        "id":"100" 
        "cim":"Alexandria barlangja",
        "hossz":"120",
        "megjelenes":"2000-10-10"
    },
*/ 