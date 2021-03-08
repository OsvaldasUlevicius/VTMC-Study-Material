const users = [
    {
        img: "img/17.jpg",
        name: "Sammy M Stoll",
        address: "Wellsville, New York(NY), 14895",
        about: "Social media junkie. Avid food nerd. Professional travel fan. Tv fanatic. Bacon geek. Web fanatic."
    },
    {
        img: "img/46.jpg",
        name: "James C Young",
        address: "2597 Meadowbrook Mall Road",
        about: "Certified food specialist. Pop culture geek. Typical travel evangelist. Award-winning analyst. Zombie lover."
    },
    {
        img: "img/16.jpg",
        name: "Deanna I Martin",
        address: "Worthington, Ohio(OH), 43085",
        about: "Zombie ninja. Wannabe internet buff. Proud introvert. Bacon expert. Social media trailblazer."
    },
    {
        img: "img/55.jpg",
        name: "Bruce K Collins",
        address: "Westhampton Beach, New York(NY), 11978",
        about: "Wannabe social media aficionado. Thinker. Unapologetic beer guru. Internet lover. Avid food buff."
    },
    {
        img: "img/34.jpg",
        name: "Claudette G Hann",
        address: "Philadelphia, Pennsylvania(PA), 19108",
        about: "Twitter practitioner. Devoted thinker. Hipster-friendly problem solver. Social media expert."
    },
    {
        img: "img/51.jpg",
        name: "Robert Langdon",
        address: "15 Eagle Way. AL10 8RD",
        about: "Typical gamer. Friendly coffee practitioner. Alcohol buff. Extreme pop cultureaholic."
    },
    {
        img: "img/21.jpg",
        name: "Amber C Pantoja",
        address: "Nashville, Tennessee(TN), 37209",
        about: "Wannabe pop culture expert. Alcohol fanatic. Unapologetic introvert. Subtly charming communicator."
    },
    {
        img: "img/23.jpg",
        name: "Adriana E Hubert",
        address: "Burlington, North Carolina(NC), 27215",
        about: "Pop culture fanatic. Hardcore analyst. Infuriatingly humble reader. Incurable troublemaker. Unapologetic social media buff. Beer fanatic."
    },
]

const body = document.querySelector("body");
const section = document.createElement("section");
const titleContainer = document.createElement("div");
const title = document.createElement("h1");
const subTitle = document.createElement("p");

body.appendChild(section);
section.appendChild(titleContainer);
titleContainer.setAttribute("class", "title-container");
titleContainer.appendChild(title);
title.setAttribute("class", "title");
title.textContent = "Find. Connect. Enjoy."
titleContainer.appendChild(subTitle);
subTitle.setAttribute("class", "sub-title");
subTitle.textContent = "new way to meet people";

const flexContainer = document.createElement("div");
section.appendChild(flexContainer);
flexContainer.setAttribute("class", "flex-container");

for (let user of users) {

    const box = document.createElement("div");
    const imageContainer = document.createElement("div");
    const profileImage = document.createElement("img");
    const boxName = document.createElement("p");
    const boxAddress = document.createElement("p");
    const mapMarker = document.createElement("i");
    const boxAbout = document.createElement("p");
    const boxConnect = document.createElement("a");
    const boxSocial = document.createElement("div");
    const facebookContainer = document.createElement("a");
    const facebook = document.createElement("i");
    const twitterContainer = document.createElement("a");
    const twitter = document.createElement("i");
    const googleContainer = document.createElement("a");
    const google = document.createElement("i");
    const instagramContainer = document.createElement("a");
    const instagram = document.createElement("i");


    let addressText = document.createTextNode(user["address"]);

    flexContainer.appendChild(box);
    box.setAttribute("class", "box");
    box.appendChild(imageContainer);
    imageContainer.setAttribute("class", "image-container");
    imageContainer.appendChild(profileImage);
    profileImage.setAttribute("src", user["img"]);
    profileImage.setAttribute("alt", "Profile Image");
    box.appendChild(boxName);
    boxName.setAttribute("class", "box-name");
    boxName.textContent = user["name"];
    box.appendChild(boxAddress);
    boxAddress.setAttribute("class", "box-address");
    boxAddress.appendChild(mapMarker);
    mapMarker.setAttribute("class", "fas fa-map-marker-alt");
    boxAddress.appendChild(addressText);
    box.appendChild(boxAbout);
    boxAbout.setAttribute("class", "box-about");
    boxAbout.textContent = user["about"];
    box.appendChild(boxConnect);
    boxConnect.setAttribute("class", "box-connect");
    boxConnect.textContent = "Get Connected";
    box.appendChild(boxSocial);
    boxSocial.setAttribute("class", "box-social");
    boxSocial.appendChild(facebookContainer);
    facebookContainer.appendChild(facebook);
    facebook.setAttribute("class", "fab fa-facebook-f");
    boxSocial.appendChild(twitterContainer);
    twitterContainer.appendChild(twitter);
    twitter.setAttribute("class", "fab fa-twitter");
    boxSocial.appendChild(googleContainer);
    googleContainer.appendChild(google);
    google.setAttribute("class", "fab fa-google");
    boxSocial.appendChild(instagramContainer);
    instagramContainer.appendChild(instagram);
    instagram.setAttribute("class", "fab fa-instagram");
}
