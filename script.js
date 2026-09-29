const openOption = document.getElementById("open-option");
const menu = document.getElementById("menu");

openOption.addEventListener("click", () => {
    fetch("optionMenu.html")
        .then(response => response.text())
        .then(menuHTML => {
            menu.innerHTML = menuHTML;

            const closeOption = document.getElementById("close-option");

            closeOption.addEventListener("click", () => {
                menu.innerHTML = "";
            });
        })
        .catch(error => {
            console.error("Erreur lors du chargement du menu :", error);
        });
});
