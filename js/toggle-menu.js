document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".header__burger-icon");
    const sidebar = document.querySelector(".sidebar");
    const close = document.querySelector(".sidebar__content-btn");

    burger.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
    close.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    })
});

$(document).ready(function () {
    // Загружаем подменю
    $("#submenu-container").load("submenu.html", function () {
        // После загрузки инициализируем обработчики
        initSubmenuHandlers();
        if (window.innerWidth > 610) {
            $("#submenu-container").hide();
        }
    });

    $(window).on('resize', handleResize);
});

function handleResize() {
    if (window.innerWidth > 610) {
        $("#submenu-container").hide();
    }
}


function initSubmenuHandlers() {

    $(".navigation__item-active").click(function (e) {

        if (window.innerWidth > 610) {
            e.preventDefault();
            return; // Не делаем ничего на больших экранах
        }

        $("#submenu-container").slideToggle('slow');

        $(this).find("img").toggleClass("rotated");
    });

}