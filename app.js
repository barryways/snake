
document.addEventListener("DOMContentLoaded", function() {
    // Aquí va todo el código que quieres ejecutar después de que el DOM esté completamente cargado
    createElement();
});

function createElement(){
    document.getElementById('game-board').innerHTML = `
        <div class="row">
            <div class="cell" onclick="play(this)">
                <h1>hola</h1>
            </div>
            <div class="cell" onclick="play(this)"></div>
            <div class="cell" onclick="play(this)"></div>
        </div>
        <div class="row">
            <div class="cell" onclick="play(this)"></div>
            <div class="cell" onclick="play(this)"></div>
            <div class="cell" onclick="play(this)"></div>
        </div>
        <div class="row">
            <div class="cell" onclick="play(this)"></div>
            <div class="cell" onclick="play(this)"></div>
            <div class="cell" onclick="play(this)"></div>
        </div>
    `;
}


function play(cell) {
    // Lógica para manejar el clic en las celdas
    console.log("Celda clicada:", cell);
    // Aquí puedes agregar la lógica para tu juego, por ejemplo, cambiar el contenido de la celda, actualizar el puntaje, etc.
}