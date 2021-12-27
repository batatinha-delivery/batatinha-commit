const input = document.getElementById("bla");

const value = require(input.value);

console.log(value);
const opa = "essa variavel nao sera utilizada";

const SELF_TOKEN = ":self";
const SELF_TOKEN_REGEX = new RegExp(`\s*${SELF_TOKEN}\s*,?`, "g"); // LGTM error
