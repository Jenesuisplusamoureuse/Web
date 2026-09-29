fetch("optionMenu.html")
    .then(response => response.text())
    .then(menu => {
        document.getElementById("menu").innerHTML = menu;

        const openOption = document.getElementById("open-option");
        const closeOption = document.getElementById("close-option");
        const overlay = document.getElementById("overlay");

        openOption.addEventListener("click", () => {
            overlay.showModal();
        });

        closeOption.addEventListener("click", () => {
            overlay.close();
        });
    })
    .catch(error => {
        console.error("Erreur lors du chargement du menu :", error);
    });
