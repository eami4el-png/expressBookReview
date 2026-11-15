const travelData = {
  beaches: [
    {
      name: "Bora Bora, French Polynesia",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      description: "Famous for crystal-clear turquoise lagoons, overwater bungalows, and vibrant coral reefs ideal for snorkeling."
    },
    {
      name: "Copacabana Beach, Brazil",
      imageUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
      description: "A lively 4-kilometer crescent of golden sand in Rio de Janeiro surrounded by dramatic granite peaks."
    }
  ],
  temples: [
    {
      name: "Angkor Wat, Cambodia",
      imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
      description: "The largest religious monument in the world, renowned for its intricate Khmer stone carvings and sunrise views."
    },
    {
      name: "Fushimi Inari Shrine, Japan",
      imageUrl: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=800&q=80",
      description: "Iconic Shinto shrine in Kyoto famous for thousands of vermilion torii gates winding up Mount Inari."
    }
  ],
  countries: [
    {
      name: "Tokyo, Japan",
      imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
      description: "A dazzling blend of ultramodern skyscrapers, traditional temples, cherry blossom parks, and world-class cuisine."
    },
    {
      name: "Sydney, Australia",
      imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
      description: "Harbor city celebrated for the Sydney Opera House, Harbour Bridge, and scenic coastal walks."
    }
  ]
};

function searchRecommendations() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const container = document.getElementById("resultsContainer");
  container.innerHTML = "";

  let matches = [];
  if (query.includes("beach")) {
    matches = travelData.beaches;
  } else if (query.includes("temple")) {
    matches = travelData.temples;
  } else if (query.includes("country") || query.includes("countries") || query.includes("japan") || query.includes("australia")) {
    matches = travelData.countries;
  }

  matches.forEach(item => {
    const card = document.createElement("div");
    card.className = "result-card";
    card.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}">
      <div class="result-card-body">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <button class="visit-btn">Visit</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function clearResults() {
  document.getElementById("searchInput").value = "";
  document.getElementById("resultsContainer").innerHTML = "";
}

document.getElementById("btnSearch").addEventListener("click", searchRecommendations);
document.getElementById("btnClear").addEventListener("click", clearResults);