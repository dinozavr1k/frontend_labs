const tanks = document.querySelectorAll('.tank');

tanks.forEach(tank => {
    tank.addEventListener('click', () => {
        const targetPage = tank.getAttribute('data-target');
        
        window.location.href = targetPage;
    })
})