document.getElementById('colorButton').addEventListener('click', () => {
    const colors = ['#f0f4f8', '#e8f8e4', '#f8e4e4', '#e4f8f8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});