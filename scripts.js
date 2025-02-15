const USD = 5.70;
const EUR = 5.98;
const GBP = 7.17;
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");



amount.addEventListener("input", () => {
    hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, "");
})

form.onsubmit = (e) =>{
    e.preventDefault();
    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$");
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
    }
};
