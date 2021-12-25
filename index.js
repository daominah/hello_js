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
    loadArrayToTable(document.getElementById("table0"), [
        {"keyA": "val1", "keyBB": "val1234", "keyCCC": "valCCC1"},
        {"keyA": "val2", "keyCCC": "val4556678"},
    ])
}

// this func assumes all elements in input array are maps with same keys,
// :arg tableElem: example: document.getElementById("table0")
function loadArrayToTable(tableElem, array) {
    if (array.length < 1) {
        console.log("empty data:", array);
        return
    }
    let keys = Object.keys(array[0]);
    let tbody = document.createElement("tbody");
    for (let row = 0; row < keys.length; row++) {
        let key = keys[row];
        let tr = document.createElement("tr");
        let bold = document.createElement("strong");
        bold.appendChild(document.createTextNode(key));
        let tdKey = document.createElement("td");
        tdKey.appendChild(bold);
        tr.appendChild(tdKey);
        for (let col = 0; col < array.length; col++) {
            let td = document.createElement("td");
            let value = array[col][key];
            if (!value) {
                tr.appendChild(td);
                continue
            }
            td.appendChild(document.createTextNode(value));
            tr.appendChild(td)
        }
        tbody.appendChild(tr);
    }
    tableElem.innerHTML = "";
    tableElem.appendChild(tbody);
}

function loadArrayToTable2(tableElem, array) {
	if (array.length < 1) {
		console.log("empty data:", array);
		return
	}
	let keys = Object.keys(array[0]);

	let tbody = document.createElement("tbody");
	let tr = document.createElement("tr");
	for (let col = 0; col < keys.length; col ++) {
		let bold = document.createElement("strong");
		bold.appendChild(document.createTextNode(keys[col]));
		let tdKey = document.createElement("td");
		tdKey.appendChild(bold);
		tr.appendChild(tdKey);
	}
	tbody.appendChild(tr);

	for (let row = 0; row < array.length; row++) {
		let tr = document.createElement("tr");
		for (let col = 0; col < keys.length; col++) {
			let td = document.createElement("td");
			let value = array[row][keys[col]];
			if (!value) {
				tr.appendChild(td);
				continue
			}
			td.appendChild(document.createTextNode(value));
			tr.appendChild(td)
		}
		tbody.appendChild(tr);
	}

	tableElem.innerHTML = "";
	tableElem.appendChild(tbody);
}
