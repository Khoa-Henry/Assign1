document.addEventListener("DOMContentLoaded", function () {
  const elem = document.getElementById("dob");
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: "MM-dd",
  });

  // uncheck all boxes by default (Firefox)
  document
    .querySelectorAll(".form-check-input")
    .forEach((c) => (c.checked = false));

  // Array of attention-seeking animations from Animate.css
  const attentionSeekers = [
    "animate__bounce",
    "animate__flash",
    "animate__pulse",
    "animate__rubberBand",
    "animate__shakeX",
    "animate__shakeY",
    "animate__headShake",
    "animate__swing",
    "animate__tada",
    "animate__wobble",
    "animate__jello",
    "animate__heartBeat",
  ];

  // Select a random animation from the array
  const randomAnimation =
    attentionSeekers[Math.floor(Math.random() * attentionSeekers.length)];

  // find the greeting elem
  const greetingElement = document.querySelector("h1.greeting");

  // Remove any existing animation class to avoid conflicts
  attentionSeekers.forEach((item) => greetingElement.classList.remove(item));

  // Add the animation classes
  greetingElement.classList.add("animate__animated", randomAnimation);

  // event listener for check/uncheck
  document
    .getElementById("checkbox-card")
    .addEventListener("change", function (e) {
      if (e.target.classList.contains("form-check-input")) {
        const balloonImage = document.getElementById(e.target.id + "Img");

        if (balloonImage) {
          balloonImage.style.visibility = "visible";
          balloonImage.classList.remove(
            "animate__animated",
            "animate__bounceInDown",
            "animate__bounceOutUp"
          );
          e.target.checked
            ? balloonImage.classList.add(
                "animate__animated",
                "animate__bounceInDown"
              )
            : balloonImage.classList.add(
                "animate__animated",
                "animate__bounceOutUp"
              );
        }
      }
    });

  // Select All checkbox logic
  const selectAllCheckbox = document.getElementById("selectAll");
  selectAllCheckbox.addEventListener("change", function () {
    const allCheckboxes = document.querySelectorAll(
      "#checkbox-card .form-check-input"
    );

    allCheckboxes.forEach((checkbox) => {
      checkbox.checked = selectAllCheckbox.checked;
      const balloonImage = document.getElementById(checkbox.id + "Img");
      if (balloonImage) {
        // Toggle the balloon visibility and animation
        if (selectAllCheckbox.checked) {
          balloonImage.style.visibility = "visible";
          balloonImage.classList.add(
            "animate__animated",
            "animate__bounceInDown"
          );
          balloonImage.classList.remove("animate__bounceOutUp");
        } else {
          balloonImage.classList.add(
            "animate__animated",
            "animate__bounceOutUp"
          );
          balloonImage.classList.remove("animate__bounceInDown");
        }
      }
    });
  });

  // Submit button logic
  document.getElementById("submit").addEventListener("click", function () {
    // Check if any checkbox is checked
    const balloonsSelected = [
      ...document.querySelectorAll(".form-check-input"),
    ].some((checkbox) => checkbox.checked);

    // Get the toast element
    const toastElement = document.getElementById("balloonToast");

    if (!balloonsSelected) {
      // Show the toast if no balloons are selected
      toastElement.style.visibility = "visible";
      const toast = new bootstrap.Toast(toastElement);
      toast.show();
    } else {
      // Hide the toast if balloons are selected (optional)
      toastElement.style.visibility = "hidden";
    }
  });

  // Change color of h1 on hover
  document
    .querySelectorAll("#checkbox-card .form-check-label")
    .forEach((label) => {
      label.addEventListener("mouseover", function () {
        const balloonId = this.getAttribute("for");
        const balloonColor = {
          pink: "pink",
          white: "Silver",
          blue: "blue",
        }[balloonId.replace("Img", "")];

        greetingElement.style.color = balloonColor;
      });

      label.addEventListener("mouseout", function () {
        // Reset color to original
        greetingElement.style.color = "black";
      });
    });
});
