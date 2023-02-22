var socket = io();

let btn = document.getElementById("btn");

btn.onclick = function execute() {
  socket.emit("from client");
};

socket.on("from_server", () => {
  const div = document.createElement("div");
  div.innerText = "This is working message. An event from server.";
  document.body.appendChild(div);
});
