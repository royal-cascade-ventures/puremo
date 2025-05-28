document.getElementById('colorButton').addEventListener('click', () => {
    const colors = ['rgb(240, 244, 248)', 'rgb(232, 248, 228)', 'rgb(248, 228, 228)', 'rgb(228, 248, 248)'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});