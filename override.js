
function checkEdit() {

  let tweetEdit = document.querySelector('[aria-label="Tweet text"]');
  if (!tweetEdit) {
    return;
  }
  tweetEdit = getLastChild(tweetEdit);

  let charCount = tweetEdit.textContent.length;

  let charDisplay = document.getElementById('charCount');

  let tweetToolbar = document.querySelector('[data-testid="toolBar"]');
  tweetToolbar = tweetToolbar.children[0];

  if (charDisplay && tweetToolbar.contains(charDisplay)) {
    charDisplay.innerText = ''+ (280-charCount);
  } else {
    tweetToolbar.append(createElement(charCount));
  }
}

function createElement(chars) {
  let elem = document.createElement("DIV");
  elem.id = 'charCount';
  elem.classList.add('css-901oao');
  elem.classList.add('r-111h2gw');
  elem.classList.add('r-n6v787');
  elem.classList.add('r-19jlu03');
  elem.classList.add('r-285fr0');
  elem.classList.add('r-q4m81j');
  let remChars = 280 - chars;
  elem.appendChild(document.createTextNode(''+remChars));
  return elem;
}

function getLastChild(a) {
  let b = a;
  while (b.children.length !== 0) {
    b = b.children[0];
  }
  return b;
}

setInterval(checkEdit, 10);
