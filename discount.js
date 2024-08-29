document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("discount-row")
    .addEventListener("click", function (e) {
      if (e.target.classList.contains("discount")) {
        e.preventDefault();
        document.getElementById("product").innerHTML =
          e.target.dataset["product"];
        document.getElementById("discount").innerHTML =
          e.target.dataset["discount"];
        bootstrap.Toast.getOrCreateInstance(
          document.getElementById("liveToast")
        ).show();
      }
    });
});

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === "Escape") {
    // Check if 'Esc' key is pressed
    var toastElement = document.getElementById("liveToast");
    var toast = bootstrap.Toast.getOrCreateInstance(toastElement); // Get the toast instance

    if (toast) {
      // If the toast instance exists
      toast.hide(); // Hide the toast
    }
  }
});
