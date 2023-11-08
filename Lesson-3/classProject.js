let imageCount = 0;

document
  .getElementById("imageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const imageUrl = document.getElementById("imageUrl").value;

    document.getElementById("imageUrl").value = "";

    if (isValidURL(imageUrl)) {
      imageCount++;

      document.getElementById("imageCount").textContent = imageCount;

      const img = document.createElement("img");
      img.src = imageUrl.trim();
      img.style.width = "601px";

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        img.remove();
        deleteButton.remove();

        imageCount--;

        document.getElementById("imageCount").textContent = imageCount;
      });

      const imageContainer = document.getElementById("imageContainer");
      imageContainer.appendChild(img);
      imageContainer.appendChild(deleteButton);
    } else {
      alert("Please enter a valid image URL.");
    }
  });

function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}
