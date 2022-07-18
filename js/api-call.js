// defining API URL

const api_url = "https://jsonplaceholder.typicode.com/users";

// defining Delete card

function deleteCard(id){
    document.getElementById(id).remove();
    usersLeft();
};

// Remaining users
function usersLeft(){
  var count = document.querySelectorAll('#card').length;
  document.querySelector('#count').innerHTML = `Showing ${count} Records`;
}

// bulding fetch function

fetch(api_url).then((data) => {
    if (data.ok) {
        console.log ('HTTP request succesful');
      } else {
        alert ('Cannot resolve the API call!');
      }
    // console.log(data) 
      return data.json();
    }).then((jsondata) => {

        const names = jsondata.map((values)=> {
           return `<div id="${values.id}" class="col col-lg-4 col-md-4 col-sm-auto gx-4 gy-2">
                        <div id="card" class="card p-2">
                            <h2 id="user">${values.name}</h2>
                                <div class="card-body">
                                  <p><strong>Street:</strong> ${values.address.street}</p>
                                  <p><strong>Suite:</strong> ${values.address.suite}</p>
                                  <p><strong>City:</strong> ${values.address.city}</p>
                                  <p><strong>Zip Code:</strong> ${values.address.zipcode}</p>
                                  <button onclick="deleteCard(${values.id}); alert('User ${values.name} has been removed!')" class="btn btn-primary float-end"><span><i class="fa-solid fa-trash-can"></i> </span>Delete</button>
                                </div>
                        </div>
                    </div>
              `
        });
        
        document.querySelector('.row').innerHTML = names.join("");
        usersLeft();
        
});
    