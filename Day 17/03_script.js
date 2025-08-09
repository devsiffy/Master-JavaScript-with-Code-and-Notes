/*
    Ajax ():-
    It's not a specific function or library — it's a technique for updating
    parts of a web page without reloading the whole thing.

    AJAX can use:
    -> XMLHttpRequest (the classic way - older than fetch)
    -> Even libraries like jQuery ($.ajax())
    -> fetch() API (modern way)

    Today, we are discussing about "XMLHttpRequest" below..!
*/

/*
    XMLHttpRequest (often shortened to XHR):-
    Its a built-in JavaScript object that lets your code talk to a server without reloading the whole web page. It’s the older way to make network requests in JavaScript (before fetch came along), but it still works in all browsers.

    You can use it to:
    -> Send data to a server (e.g., form info).
    -> Get data from a server (e.g., new content).

    States (readyState values):
    -> (UNSENT) – Created, but .open() hasn’t been called yet.
    -> (OPENED) – .open() called, ready to send a request.
    -> (HEADERS_RECEIVED) – Server responded, headers are available.
    -> (LOADING) – Response is being downloaded (partial data).
    -> (DONE) – Request finished and response is ready.

    Important Methods:
    -> open(method, url) – Set the request type (GET/POST) and destination.
    -> send([body]) – Send the request (optionally with data).
    -> setRequestHeader(name, value) – Add extra information for the request.
    -> abort() – Cancel the request.

    Example:- To send GET request and handle response (code below)
*/

const requestURL = "https://api.github.com/users/devsiffy";
const xhr = new XMLHttpRequest();

xhr.open("GET", requestURL);

xhr.onreadystatechange = function () {
  console.log("Ready State: ", xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log("Response Data: ", data);
    printData(data);
  }
};

xhr.send();

// function to manipulate DOM based on API response

function printData(data) {
  const div = document.createElement("div");
  const title = document.createElement("h2");
  const username = document.createElement("p");
  const fullName = document.createElement("p");
  const publicRepos = document.createElement("p");
  const avatar = document.createElement("img");

  title.innerText = "GitHub Details:";
  username.innerHTML = "<span>Username:</span> " + data.login;
  fullName.innerHTML = "<span>Full Name:</span> " + data.name;
  publicRepos.innerHTML = "<span>Public Repos:</span> " + data.public_repos;
  avatar.setAttribute("src", `${data.avatar_url}`);
  avatar.setAttribute("alt", "image");

  div.append(title);
  div.append(username);
  div.append(fullName);
  div.append(publicRepos);
  div.append(avatar);

  document.body.append(div);
}
