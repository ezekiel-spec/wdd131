// Temple array
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    }
    // Add more temple objects here...
  ];
  
  // Function to create temple cards
  function createTempleCard(temple) {
    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");
  
    const templeInfo = document.createElement("div");
    templeInfo.innerHTML = `<h2>${temple.templeName}</h2> <p>Location: ${temple.location}</p> <p>Dedicated: ${temple.dedicated}</p> <p>Area: ${temple.area} sq ft</p>`;
  
    const templeImage = document.createElement("img");
    templeImage.src = temple.imageUrl;
    templeImage.alt = temple.templeName;
    templeImage.loading = "lazy";
  
    templeCard.appendChild(templeInfo);
    templeCard.appendChild(templeImage);
  
    return templeCard;
  }
  
  // Function to display temple cards
  function displayTempleCards(temples) {
    const templeCardsContainer = document.getElementById("temple-cards-container");
    templeCardsContainer.innerHTML = "";
  
    temples.forEach((temple) => {
      const templeCard = createTempleCard(temple);
      templeCardsContainer.appendChild(templeCard);
    });
  }
  
  // Display temple cards
  displayTempleCards(temples);