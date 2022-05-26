window.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#rightarrow").addEventListener("click", function () {
        document.querySelector(".first-main-table").style.display = "none";
        document.querySelector(".second-main-table").style.display = "block";
        document.querySelector(".currency-table-date").style.backgroundColor = "#e7f5ff";
    })

    document.querySelector("#leftarrow").addEventListener("click", function () {
        document.querySelector(".second-main-table").style.display = "none";
        document.querySelector(".first-main-table").style.display = "block";
        document.querySelector(".currency-table-date").style.backgroundColor = "#ffe9d5";
    })
});