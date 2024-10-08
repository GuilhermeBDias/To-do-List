function addTarefa(){
    let inputText = document.querySelector("input").value

    let li = document.createElement("li")
    li.innerHTML = inputText + '<span onclick="delTarefa(this)">❌</span>'

    document.querySelector("ul").appendChild(li)

    document.querySelector("input").value = ""
}

function delTarefa(li){
    li.parentElement.remove()

}