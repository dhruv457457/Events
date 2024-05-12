document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.right ul');

    burger.addEventListener('click', function () {
        if (navList.classList.contains('show')) {
            navList.classList.remove('show');
        } else {
            navList.classList.add('show');
        }
    });
});
