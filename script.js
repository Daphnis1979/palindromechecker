document.addEventListener("DOMContentLoaded", function(){
  const button = document.getElementById("check-btn");
  const input = document.getElementById("text-input");

  button.addEventListener("click", function(){
    const text=input.value.trim();

    if (text === ""){
      alert("Please input a value.")
      return
    }
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/gi, "");
    const reversed = cleaned.split('').reverse().join('')

    const result = document.getElementById("result")
    console.log(`Original: ${text}`);
    console.log(`Cleaned: ${cleaned}`);
    console.log(`Reversed: ${reversed}`);

    if (cleaned === reversed){
      result.textContent = `${text} is a palindrome.`;
    } else {
      result.textContent = `${text} is not a palindrome`
    }
  })
})
