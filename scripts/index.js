// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

//part 1
let mainEl = document.querySelector(`main`);
mainEl.style.backgroundColor = `var(--main-bg)`;
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;
mainEl.classList.add(`flex-ctr`);

//part 2
let topMenuEl = document.getElementById(`top-menu`);
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
topMenuEl.style.height = `100%`;
topMenuEl.classList.add(`flex-around`);

//part 3
menuLinks.forEach((it) => {
    let newA = document.createElement('a');
    newA.href = it.href;
    newA.textContent = it.text;
    topMenuEl.append(newA);
})

//LAB 316.3.1 DOM Manipulation Part Two
//Part 3
let subMenuEl = document.getElementById(`sub-menu`);
subMenuEl.style.height = `100%`;
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;
subMenuEl.classList.add(`flex-around`);
