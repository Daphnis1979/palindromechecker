function init() {
  const button = document.getElementById("check-btn");
  const input = document.getElementById("text-input");
  const result = document.getElementById("result");

  if (!button || !input || !result) {
    console.error("Required DOM elements not found: check-btn, text-input, result");
    return;
  }

  button.addEventListener("click", function () {
    const text = input.value.trim();

    if (text === "") {
      alert("Please input a value.");
      return;
    }

    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/gi, "");
    const reversed = cleaned.split("").reverse().join("");

    console.log(`Original: ${text}`);
    console.log(`Cleaned: ${cleaned}`);
    console.log(`Reversed: ${reversed}`);

    if (cleaned === reversed) {
      result.textContent = `${text} is a palindrome.`;
    } else {
      result.textContent = `${text} is not a palindrome.`;
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM already loaded
  init();
}
