let score = 0;
let clickPower = 1;
let skinLevel = 0;
let bgLevel = 0;
let upgradePrice = 30;

const scoreText = document.getElementById("score");
const doge = document.getElementById("doge");
const infoBox = document.getElementById("infoBox");

const skins = [
    "https://pngimg.com/uploads/doge_meme/doge_meme_PNG8.png",
    "https://m.media-amazon.com/images/I/51tlqVzLmvL._AC_UF894,1000_QL80_.jpg",
    "https://ih1.redbubble.net/image.4994245202.0402/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5WP4LyqKySclp_Y-cIEs0bbgDBQVGqBekeYRaPvt0Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMT0T5URvpF5-ImbdM61kZtQpPYFHrnoPWLGm0LrNnVQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzXQ97rgzc-aEQicAS_F6iUDzDiS57efWTtD-uzKrcvw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6hbtLApug53zDL28kA7mYBclBXqlodwIh0MYAc5LGTg&s",
    "https://pngimg.com/uploads/doge_meme/doge_meme_PNG9.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBocUO59F98YDbLqL0ktSmjag5whp2ULAwQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-HSdTFqDfpClDdmFddA_ZKx2PAjpkrgEBf__RYHA5Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtp676iuHxFkY7aWELA4PfUKea2EIU4nQ5w&s",
    "https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyaTlybG5jcDlpdmJ6cjZwczljcXg1bW80Y3FxYjY4M2hiY24weHN0eSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/vS8deMiryn69PFGwJQ/200w_s.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPlC2XgGo3HWxtgie6a-X7kNot2O1PSmq3A&s"
];

const skinPrices = [0, 50, 100, 150, 250, 350, 450, 550, 650, 750, 850, 950, 1150, 1350];
const backgrounds = ["https://images.goway.com/production/styles/article_featured_image_2xl/s3/featured_images/japan_tokyo_akihabara_AdobeStock_295310062_Editorial_Use_Only.jpg.webp?VersionId=QsALmYD2qaEJEwTHHBOtnO3bgPlu56hp&h=43fc81ba&itok=ZRsG7bGh",

    "https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Desktop-1600x900-Wallpapers-Download.jpg",

    "https://fons.grizly.club/uploads/posts/2025-06/04/17490291445631.jpg",

    "https://wallpapers.com/images/hd/street-with-red-sunset-dee8h6e9s4r3ylay.jpg",

    "https://wallpapercave.com/wp/wp3987071.jpg"
];

doge.onclick = function () {
    score += clickPower;
    scoreText.textContent = score;

    if (skinLevel + 1 < skinPrices.length &&
        score >= skinPrices[skinLevel + 1]) {
        alert("🎉 Tu vari nopirkt jaunu skinu!");
    }
};

function buySkin() {
    let price = skinPrices[skinLevel + 1];

    if (!price) {
        alert("Visi skini nopirkti!");
    } else if (score >= price) {
        score -= price;
        skinLevel++;
        doge.src = skins[skinLevel];
        scoreText.textContent = score;
        alert("🐶 Jauns skins nopirkts!");
    } else {
        alert("Vēl vajag " + (price - score) + " klikšķus");
    }
}

function upgradeClicks() {
    if (score >= upgradePrice) {
        score -= upgradePrice;
        clickPower++;
        upgradePrice += 30;
        scoreText.textContent = score;
        alert("⚡ Klikšķa spēks: " + clickPower);
    } else {
        alert("Vajag vēl " + (upgradePrice - score));
    }
}

function changeBackground() {

    bgLevel++;

    if (bgLevel >= backgrounds.length) {
        bgLevel = 0;
    }

    document.body.style.backgroundImage =
        `url('${backgrounds[bgLevel]}')`;
}

function showInfo() {
    let next = skinPrices[skinLevel + 1]
        ? skinPrices[skinLevel + 1] - score
        : "Visi atbloķēti";

    infoBox.style.display = "block";
    infoBox.innerHTML = `
        Klikšķi: ${score}<br>
        Klikšķa spēks: ${clickPower}<br>
        Līdz skinam: ${next}<br>
        Upgrade cena: ${upgradePrice}
    `;
}