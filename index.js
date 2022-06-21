document.addEventListener("DOMContentLoaded", print_details)

function print_details() {
    details = {
        name: "Onyenso Uchenna J.",
        height: "5 feet, 10 inches",
        country: "Canada IJN"
    }

    ul = document.querySelector("ul")

    for (let detail in details) {
        li = document.createElement("li")
        li.innerHTML = `${detail.toUpperCase()}: ${details[detail]}`
        ul.append(li)
    }

    // document.querySelector("main").append(ul) 
}

