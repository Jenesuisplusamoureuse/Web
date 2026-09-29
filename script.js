const openOption = document.getElementById("open-option");
const menu = document.getElementById("menu");

openOption.addEventListener("click", () => {
    if (menu.innerHTML === "") {
        fetch("optionMenu.html")
            .then(response => response.text())
            .then(menuHTML => {
                menu.innerHTML = menuHTML;

                const sideMenu = document.getElementById("side-menu");
                const closeOption = document.getElementById("close-option");

                closeOption.addEventListener("click", () => {
                    sideMenu.classList.remove("active");

                    setTimeout(() => {
                        menu.innerHTML = "";
                    }, 300);
                });
            })
            .catch(error => {
                console.error("Erreur lors du chargement du menu :", error);
            });
    }
});
