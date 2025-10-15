const factText = document.getElementById('fact');
const newFactBtn = document.getElementById('newFactBtn');

async function getCatFact() {
  factText.textContent = "Fetching...";
  const response = await fetch('https://catfact.ninja/fact');
  const data = await response.json();
  factText.textContent = data.fact;
}

newFactBtn.addEventListener('click', getCatFact);

// Load one fact on page load
getCatFact();
