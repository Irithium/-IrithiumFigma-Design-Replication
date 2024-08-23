// Select the "All Pages" button
const allPagesBtn = document.getElementById("all-pages-btn");

// Select all page buttons (excluding the "All Pages" button)
const pageBtns = document.querySelectorAll(".checkbox:not(#all-pages-btn)");

// Select elements with a blue border
const blueBorder = document.querySelectorAll(".blue-border");

// Add event listener to the "All Pages" button
allPagesBtn.addEventListener("click", () => {
  // Toggle the "selected" class on the "All Pages" button
  if (allPagesBtn.classList.contains("selected")) {
    allPagesBtn.classList.remove("selected");
    allPagesBtn.classList.add("deselected");
    // Toggle the "selected" class on all page buttons and their parents
    pageBtns.forEach((btn) => {
      btn.classList.remove("selected");
      btn.classList.add("deselected");
    });
    // Toggle the "selected" class on elements with a blue border
    blueBorder.forEach((border) => {
      border.classList.remove("selected");
    });
  } else {
    allPagesBtn.classList.remove("deselected");
    allPagesBtn.classList.add("selected");
    pageBtns.forEach((btn) => {
      btn.classList.remove("deselected");
      btn.classList.add("selected");
    });
    blueBorder.forEach((border) => {
      border.classList.add("selected");
    });
  }
});

// Add event listener to each page button
pageBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Toggle the "selected" class on the individual page button and its parent
    if (btn.classList.contains("selected")) {
      btn.classList.remove("selected");
      btn.classList.add("deselected");
      btn.parentNode.classList.remove("selected");
    } else {
      btn.classList.remove("deselected");
      btn.classList.add("selected");
      btn.parentNode.classList.add("selected");
    }
  });
});
