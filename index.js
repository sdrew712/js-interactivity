let inputField;

let message = document.querySelector("#message");

function addMovie(event){
  event.preventDefault()

  //add movies to list

  inputField = document.querySelector(`input`).value;

  let movie = document.createElement(`li`);

  let movieTitle = document.createElement(`span`);

  movieTitle.textContent = inputField;

  movie.appendChild(movieTitle);

  document.querySelector(`ul`).appendChild(movie);

  //clear input box
  document.querySelector(`input`).value = "";
  
  //remove movies from list

  // //create delete button
  let deleteBtn = document.createElement(`button`);

  deleteBtn.textContent = "X";

  // //put button on movie
  movie.appendChild(deleteBtn);

  //add event listener to button to run deleteMovie when clicked
  deleteBtn.addEventListener(`click`, deleteMovie);

    //add event listener to list item to run crossOffMovie when clicked
  movieTitle.addEventListener(`click`, crossOffMovie);
}

document.querySelector("form").addEventListener('submit', addMovie);

function deleteMovie(event){
  event.target.parentNode.remove();
  message.textContent = `${event.target.parentNode.textContent} deleted!`;
  revealMessage();
}

function crossOffMovie(event){
  event.target.classList.toggle("checked");

  if(event.target.classList.contains("checked")){
    message.textContent = `${event.target.textContent} watched!`;
  }
  else{
    message.textContent = `${event.target.textContent} added back!`;
  }
  revealMessage();
}

function revealMessage(){
  message.classList.remove("hide")
  setTimeout(function(){ message.classList.toggle("hide") }, 1000);
}