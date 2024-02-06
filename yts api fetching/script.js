const fetchApi = async () => {
  try {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");

    if (!response.ok) {
      throw new Error(`Error response: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const makeApiDataAvailable = async () => {
  try {
    const data = await fetchApi();

    if (!data || !data.status) {
      console.log("Error in data");
    } else {
      passImage(data);
      console.log(data.status_message, data);
    }
  } catch (error) {
    console.error("Error in API call:", error);
  }
};

makeApiDataAvailable();

function passImage(data) {
  const cardContainer = document.querySelector(".card-container");

  data.data.movies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = movie.large_cover_image;
    image.alt = movie.title;

    const textContainer = document.createElement("div");
    textContainer.classList.add("text-overlay");

    card.appendChild(image);
    card.appendChild(textContainer);
    cardContainer.appendChild(card);
  });
}
