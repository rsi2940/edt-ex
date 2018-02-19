const apiUrl = 'https://us.api.battle.net/wow';
const apiKey = 'yj7c2cwu5hvnhz3zt7tfhx53bjcsa8tu';

const overlay = document.querySelector('.wrapper-overlay');
const searchBtn = document.getElementById('search-btn');
const closeBtn = document.getElementById('close-btn');

const itemsList = document.getElementsByClassName('items-list');

const currentCharImage = document.querySelector('.current-character-img');

const captureTagArr = []; //array to capture items for click event

//name realm health level of character
const characterName = document.getElementById('character-name');
const characterRealm = document.getElementById('character-realm');
const characterLevel = document.getElementById('character-level');
const characterHealth = document.getElementById('character-health');

//attributes
const strength = document.getElementsByClassName('strength-value');
const agility = document.getElementsByClassName('agility-value');
const intillect = document.getElementsByClassName('intillect-value');
const stamina = document.getElementsByClassName('stamina-value');

//defence
const armor = document.getElementsByClassName('armor-value');
const dodge = document.getElementsByClassName('dodge-value');
const parry = document.getElementsByClassName('parry-value');
const block = document.getElementsByClassName('block-value');

//attack
const damage = document.getElementsByClassName('damage-value');
const speed = document.getElementsByClassName('speed-value');

//spell
const mana = document.getElementsByClassName('mana-value');

//enhancements
const crit = document.getElementsByClassName('crit-value');
const haste = document.getElementsByClassName('haste-value');
const mastery = document.getElementsByClassName('mastery-value');
const leech = document.getElementsByClassName('leech-value');
const versatility = document.getElementsByClassName('versatility-value');

//round off function to 2 decimal point
const getRoundedOffValue = value => {
  return Math.round(value * 100) / 100;
};

//function to append item name, item level, item buy and sell price
async function apendProperty(item, id, name, level) {
  const priceApi = `${apiUrl}/item/${id}?locale=en_US&apikey=${apiKey}`;
  const priceResults = await fetch(priceApi).then(response => response.json());

  const buyPrice = priceResults.buyPrice;
  const sellPrice = priceResults.sellPrice;

  const childNode = `<div class="item ${item}" title="Click to Toggle Buy and Sell Price">
                      <div class="property">${item}</div>
                      <div class="item-name">${name}</div>
                      <div class="value-wrap">
                      <span class="item-value" title="Item Level">${level}</span>
                      <img class = "goldcoin" src="images/item-set/goldicon.png" alt="coin">
                      </div>
                      <div class= "hidden">
                      <div class = "price">
                      <span class="item-buy-value" title = "Buy Price">Buy Price: ${buyPrice}</span>
                      <img class = "goldcoin" src="images/item-set/goldicon.png" alt="coin">
                      <span class="item-sell-value" title = "Sell Price">Sell Price: ${sellPrice}</span>
                      <img class = "goldcoin" src="images/item-set/goldicon.png" alt="coin">
                      </div>
                    </div>`;

  itemsList[0].innerHTML += childNode;

  await captureTagArr.push(document.getElementsByClassName(`${item}`));
}

//function to catch item field from API;
//after catching items API,
//apendProperty() to append items level, buy/sell price
async function callItemsApi(character, realm) {
  const itemsApi = `${apiUrl}/character/${realm}/${character}?fields=items&locale=en_US&apikey=${apiKey}`;
  const itemsResults = await fetch(itemsApi).then(response => response.json());

  if (itemsResults) {
    const itemsFromApi = itemsResults.items;

    if (itemsFromApi.back) {
      const name = itemsFromApi.back.name;
      const id = itemsFromApi.back.id;
      const level = itemsFromApi.back.itemLevel;
      await apendProperty('Back', id, name, level);
    }

    if (itemsFromApi.helm) {
      const name = itemsFromApi.helm.name;
      const id = itemsFromApi.helm.id;
      const level = itemsFromApi.helm.itemLevel;
      await apendProperty('Helm', id, name, level);
    }

    if (itemsFromApi.chest) {
      const name = itemsFromApi.chest.name;
      const id = itemsFromApi.chest.id;
      const level = itemsFromApi.chest.itemLevel;
      await apendProperty('Chest', id, name, level);
    }

    if (itemsFromApi.feet) {
      const name = itemsFromApi.feet.name;
      const id = itemsFromApi.feet.id;
      const level = itemsFromApi.feet.itemLevel;
      await apendProperty('Feet', id, name, level);
    }

    if (itemsFromApi.finger1) {
      const name = itemsFromApi.finger1.name;
      const id = itemsFromApi.finger1.id;
      const level = itemsFromApi.finger1.itemLevel;
      await apendProperty('Finger 1', id, name, level);
    }

    if (itemsFromApi.finger2) {
      const name = itemsFromApi.finger2.name;
      const id = itemsFromApi.finger2.id;
      const level = itemsFromApi.finger2.itemLevel;
      await apendProperty('Finger 2', id, name, level);
    }

    if (itemsFromApi.hands) {
      const name = itemsFromApi.hands.name;
      const id = itemsFromApi.hands.id;
      const level = itemsFromApi.hands.itemLevel;
      await apendProperty('Hands', id, name, level);
    }

    if (itemsFromApi.head) {
      const name = itemsFromApi.head.name;
      const id = itemsFromApi.head.id;
      const level = itemsFromApi.head.itemLevel;
      await apendProperty('Head', id, name, level);
    }

    if (itemsFromApi.legs) {
      const name = itemsFromApi.legs.name;
      const id = itemsFromApi.legs.id;
      const level = itemsFromApi.legs.itemLevel;
      await apendProperty('Legs', id, name, level);
    }

    if (itemsFromApi.mainHand) {
      const name = itemsFromApi.mainHand.name;
      const id = itemsFromApi.mainHand.id;
      const level = itemsFromApi.mainHand.itemLevel;
      await apendProperty('Main Hand', id, name, level);
    }

    if (itemsFromApi.neck) {
      const name = itemsFromApi.neck.name;
      const id = itemsFromApi.neck.id;
      const level = itemsFromApi.neck.itemLevel;
      await apendProperty('Neck', id, name, level);
    }

    if (itemsFromApi.shirt) {
      const name = itemsFromApi.shirt.name;
      const id = itemsFromApi.shirt.id;
      const level = itemsFromApi.shirt.itemLevel;
      await apendProperty('Shirt', id, name, level);
    }

    if (itemsFromApi.shoulder) {
      const name = itemsFromApi.shoulder.name;
      const id = itemsFromApi.shoulder.id;
      const level = itemsFromApi.shoulder.itemLevel;
      await apendProperty('Shoulder', id, name, level);
    }

    if (itemsFromApi.trinket1) {
      const name = itemsFromApi.trinket1.name;
      const id = itemsFromApi.trinket1.id;
      const level = itemsFromApi.trinket1.itemLevel;
      await apendProperty('Trinket 1', id, name, level);
    }

    if (itemsFromApi.trinket2) {
      const name = itemsFromApi.trinket2.name;
      const id = itemsFromApi.trinket2.id;
      const level = itemsFromApi.trinket2.itemLevel;
      await apendProperty('Trinket 2', id, name, level);
    }

    if (itemsFromApi.waist) {
      const name = itemsFromApi.waist.name;
      const id = itemsFromApi.waist.id;
      const level = itemsFromApi.waist.itemLevel;
      await apendProperty('Waist', id, name, level);
    }

    if (itemsFromApi.wrist) {
      const name = itemsFromApi.wrist.name;
      const id = itemsFromApi.wrist.id;
      const level = itemsFromApi.wrist.itemLevel;
      await apendProperty('Wrist', id, name, level);
    }

    //event binding for show/hide buy/sell prices

    captureTagArr.forEach(tag => {
      tag[0].addEventListener('click', event => {
        const hiddenElement = event.target.parentNode.lastElementChild;
        if (hiddenElement.classList == 'hidden') {
          hiddenElement.classList.remove('hidden');
        } else {
          hiddenElement.classList.add('hidden');
        }
      });
    });
  } else {
    alert('No items were found for: ' + characterName);
  }
}

// function to call stats field from API,
//get different properties and append to the respective stats
async function callStatsApi(character, realm) {
  const statsApi = `${apiUrl}/character/${realm}/${character}?fields=stats&locale=en_US&apikey=${apiKey}`;
  const statsResults = await fetch(statsApi).then(response => response.json());

  if (statsResults.stats) {
    resetEverything(); //call function to reset API data
    characterName.innerHTML += statsResults.name;
    characterRealm.innerHTML += statsResults.realm;
    characterLevel.innerHTML += statsResults.level;
  }

  if (statsResults.stats) {
    characterThumbnail = statsResults.thumbnail;
    characterHealth.innerHTML += statsResults.stats.health;
    strength[0].innerHTML = statsResults.stats.str;
    agility[0].innerHTML = statsResults.stats.agi;
    intillect[0].innerHTML = statsResults.stats.int;
    stamina[0].innerHTML = statsResults.stats.sta;
    armor[0].innerHTML = statsResults.stats.armor;
    dodge[0].innerHTML =
      getRoundedOffValue(statsResults.stats.dodgeRating) + '%';
    parry[0].innerHTML =
      getRoundedOffValue(statsResults.stats.parryRating) + '%';
    block[0].innerHTML =
      getRoundedOffValue(statsResults.stats.blockRating) + '%';
    damage[0].innerHTML =
      statsResults.stats.mainHandDmgMin +
      '-' +
      statsResults.stats.mainHandDmgMax;
    speed[0].innerHTML =
      getRoundedOffValue(statsResults.stats.offHandSpeed) +
      '-' +
      getRoundedOffValue(statsResults.stats.mainHandSpeed);
    if (statsResults.stats.powerType === 'mana') {
      mana[0].innerHTML = statsResults.stats.mana5;
    }
    crit[0].innerHTML = getRoundedOffValue(statsResults.stats.critRating) + '%';
    haste[0].innerHTML =
      getRoundedOffValue(statsResults.stats.hasteRating) + '%';
    mastery[0].innerHTML =
      getRoundedOffValue(statsResults.stats.masteryRating) + '%';
    leech[0].innerHTML =
      getRoundedOffValue(statsResults.stats.leechRating) + '%';
    versatility[0].innerHTML =
      getRoundedOffValue(statsResults.stats.versatility) + '%';
    leech[1].innerHTML =
      getRoundedOffValue(statsResults.stats.leechRating) + '%';

    //get current character image url from API
    currentCharImage.innerHTML = `<img src = "http://render-us.worldofwarcraft.com/character/${characterThumbnail}" alt = "picture of ${character}" title="${character}">`;

    if (itemsList[0].innerHTML.length <= 0) {
      callItemsApi(character, realm);
    }

    //show overlay
    overlay.classList.remove('hidden');
  } else {
    //display alert if error
    alert('Error While Processing API: ' + statsResults.reason);
  }
}

//function to reset API data
function resetEverything() {
  itemsList[0].innerHTML = '';
  captureTagArr.length = 0;
  characterName.innerHTML = 'Character Name: ';
  characterRealm.innerHTML = 'Realm Name: ';
  characterLevel.innerHTML = 'Level: ';
  characterHealth.innerHTML = 'Health: ';
}

//call API passing value of character and realm
searchBtn.addEventListener('click', async () => {
  const characterName = document.getElementById('character').value;
  const realmName = document.getElementById('realm').value;

  //call stats API
  await callStatsApi(characterName, realmName);

  //reset input field
  document.getElementById('character').value = '';
  document.getElementById('realm').value = '';
});

//reset API data and hide overlay and ready for new API call
closeBtn.addEventListener('click', () => {
  resetEverything(); //call function to reset API data
  overlay.classList.add('hidden');
});
