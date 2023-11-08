document
  .getElementById("imageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const imageUrl = document.getElementById("imageUrl").value;

    document.getElementById("imageUrl").value = "";

    const img = document.createElement("img");
    img.src = imageUrl.trim();
    img.style.width = "600px";

    const imageContainer = document.getElementById("imageContainer");
    imageContainer.appendChild(img);
  });
