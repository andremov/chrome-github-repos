function editHeader() {
  let a = document.querySelector('[aria-label="Global"]');
  a.append(createElement());
}

function getUsername() {
  let b = document.querySelector('[aria-label="View profile and more"]');
  return b.children[0].alt.slice(1);
}

function createElement() {
  let href = '/'+getUsername()+'?tab=repositories';
  let elem = document.createElement("A");
  elem.id = 'charCount';
  elem.href=href;
  elem.setAttribute('aria-label', 'Your repositories');
  elem.setAttribute('data-hotkey', 'g r');
  elem.setAttribute('data-ga-click', 'Header, click, Nav menu - item:repos context:user');
  elem.setAttribute('data-selected-links', href);
  let classes = [
    'js-selected-navigation-item',
    'Header-link',
    'mr-0',
    'mr-lg-3',
    'py-2',
    'py-lg-0',
    'border-top',
    'border-lg-top-0',
    'border-white-fade-15'
  ];
  for (let i in classes) {
    elem.classList.add(classes[i]);
  }
  elem.appendChild(document.createTextNode('Repositories'));
  return elem;
}

// setTimeout(editHeader, 10);
editHeader();
