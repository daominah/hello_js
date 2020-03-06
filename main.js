function main() {
    console.log("main");
    let button0Id = "button0";
    let button0 = document.createElement("button");
    button0.setAttribute("id", button0Id);
    button0.innerHTML = `${button0Id}`;
    button0.addEventListener('click', sayHello);
    document.body.appendChild(button0);
}

function sayHello() {
    console.log("sayHello");
    alert("sayHello");
}