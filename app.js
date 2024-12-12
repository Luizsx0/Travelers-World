Array.from(document.getElementsByTagName('input')).forEach((e, i) => {
    e.addEventListener('keyup', (el) => {
        if (e.value.length > 0) {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.color = "yellow";
        } else {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(0deg)"; 
        }
    });
});

let menu_btn = document.getElementsByClassName("bi bi-three-dots")[0];
let menu_bx = document.getElementById("menu_bx");

menu_btn.addEventListener("click", ()=>{
    menu_bx.classList.toggle("url_active");
    
}
)

// script.js

// Datos de ejemplo de vuelos
const flightsData = [
    { airline: "Aerolínea A", price: "$100", services: "Comida, Equipaje", date: "2024-10-05", origin: "Madrid", destination: "Barcelona" },
    { airline: "Aerolínea B", price: "$150", services: "Comida, Equipaje, Asiento", date: "2024-10-06", origin: "Madrid", destination: "Sevilla" },
    { airline: "Aerolínea C", price: "$200", services: "Comida, Equipaje", date: "2024-10-05", origin: "Madrid", destination: "Valencia" },
    { airline: "Aerolínea D", price: "$250", services: "Comida, Equipaje, WiFi", date: "2024-10-07", origin: "Barcelona", destination: "Madrid" },
    // Agrega más vuelos según sea necesario
];

function searchFlights() {
    const origin = document.getElementById("origin").value.toLowerCase();
    const destination = document.getElementById("destination").value.toLowerCase();
    const departureDate = document.getElementById("departure-date").value;
    
    const resultsContainer = document.getElementById("flight-results");
    resultsContainer.innerHTML = ""; // Limpiar resultados previos

    // Filtrar vuelos según la búsqueda
    const results = flightsData.filter(flight => 
        flight.origin.toLowerCase() === origin && 
        flight.destination.toLowerCase() === destination && 
        flight.date === departureDate
    );

    // Mostrar resultados
    if (results.length > 0) {
        results.forEach(flight => {
            const flightDiv = document.createElement("div");
            flightDiv.classList.add("flight-result");
            flightDiv.innerHTML = `
                <h5>${flight.airline}</h5>
                <p>Precio: ${flight.price}</p>
                <p>Servicios: ${flight.services}</p>
                <p>Fecha: ${flight.date}</p>
                <p>Origen: ${flight.origin}</p>
                <p>Destino: ${flight.destination}</p>
            `;
            resultsContainer.appendChild(flightDiv);
        });
    } else {
        resultsContainer.innerHTML = "<p>No se encontraron vuelos.</p>";
    }
}
