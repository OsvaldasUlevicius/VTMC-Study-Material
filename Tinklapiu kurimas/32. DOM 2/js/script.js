// I dalis

// 1. pasiimti MAIN elementą, jam priskirti klasę body
const main = document.querySelector("main");
main.setAttribute("class", "body");
// 2. pasiimti H1 elementą, jam priskirti klasę heading
const h1 = document.querySelector("h1");
h1.setAttribute("class", "heading");
// 3. pasiimti FORM elementą, jam priskirti klasę form
const form = document.querySelector("form");
form.setAttribute("class", "form");
// 4. sukurti ir į UL elementą įterpti BENT vieną li elementą su klase list-item.
const ul = document.querySelector("ul");
const li = document.createElement("li");
ul.appendChild(li);
li.setAttribute("class", "list-item");

// II dalis

// 1. įgyvendinti sąrašo funkcionalumą: paspaudus ant li elemento, jam pridedama (jei nėra) klasė .done, ir nuimama jei yra

li.onclick = function() {
	if (li.classList.contains("done")){
		li.classList.remove("done");
	} else {
		li.classList.add("done");
	}
};
// III dalis

// panaudoti iki šiol parašytą kodą ir pabaigti programą:
// 1. vartotojui įvedus tekstą input laukelyje, tekstas pridedamas į sąrašą (kartojame veiksmus: elementas sukuriamas, jam priskiriamas input tekstas, klasė list-item, naujas elementas įtraukiamas į ul)
// 2. pridėjus tekstą į sąrašą input laukas išvalomas
let liTag = document.querySelectorAll("li");
const button = document.querySelector("#button");
button.onclick = function() {
	const input = document.querySelector("#input");
	const inputText = input.value;
	const liWithText = document.createElement("li");
	ul.appendChild(liWithText);
    liWithText.setAttribute("class", "list-item");
    liWithText.innerHTML = inputText;
    input.value = "";
    liTag = document.querySelectorAll("li");
    for (var i = 0; i < liTag.length; i++) {
        liTag[i].ondblclick = function() {
            removeListItem(this);
        }
    }
};
// 3. du kartus paspaudus list elementą jis pašalinamas

function removeListItem(li) {
    li.remove();
}

for (var i = 0; i < liTag.length; i++) {
    liTag[i].ondblclick = function() {
        removeListItem(this);
    }
}
