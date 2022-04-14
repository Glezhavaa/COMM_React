const add = document.querySelector("#add");
const convert = document.querySelector("#convert");
const container = document.querySelector("#input-container");
const destination = document.querySelector("#destination");
const getElement = document.getElementsByTagName("input");

function createNewElement() {
    const newElement = document.createElement('input');
    newElement.setAttribute("type", "text");
    container.appendChild(newElement);
}


function convertElements() {
    let valueData = [];
    
    for(let i = 0; i < getElement.length; i++) {
        if(getElement[i].type == 'text') {
            valueData.push(getElement[i].value);
        }
    }

    const newDiv = document.createElement("div");
    destination.appendChild(newDiv);

    return newDiv.innerHTML = JSON.stringify(valueData);
}

add.addEventListener("click", createNewElement);
convert.addEventListener("click", convertElements)

