document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu li');
    const sections = document.querySelectorAll('.tab-content');
    const pathDisplay = document.getElementById('window-path');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // 1. Cambiar botón activo en el menú lateral
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // 2. Cambiar sección visible en la ventana
            const targetId = item.getAttribute('data-target');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(targetId).classList.add('active');

            // 3. Actualizar la "ruta" en la parte superior de la ventana
            const name = item.innerText.trim().toUpperCase();
            pathDisplay.innerText = `SYSTEM://${name}.txt`;
        });
    });
});