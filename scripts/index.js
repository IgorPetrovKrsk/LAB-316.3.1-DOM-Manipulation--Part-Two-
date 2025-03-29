// Menu data structure
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
//   ];
var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
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

//Part 4

let topMenuLinks = topMenuEl.querySelectorAll(`a`);

topMenuEl.onclick = topMenuElClickListener;
subMenuEl.onclick = subMenuElClickListener;

function buildSubmenu(subLinks) {
    subMenuEl.innerHTML = ``; //clear the submenu
    let aArray = [];
    subLinks.forEach((it) => {
        let newA = document.createElement('a');
        newA.href = it.href;
        newA.textContent = it.text;
        aArray.push(newA);
    });
    // just for the sake of experiment lets appent all a at once
    subMenuEl.append(...aArray);
}

function topMenuElClickListener(ev) {
    ev.preventDefault();
    if (ev.target.nodeName != `A`) {
        return;
    }
    ev.target.classList.toggle(`active`);
    for (it of topMenuLinks) { //only `a` elements here
        if (it === ev.target) {
            continue;
        }
        it.classList.remove(`active`);
    }
    let subLinks = menuLinks.find(it => it.text == ev.target.textContent).subLinks;
    if (subLinks && ev.target.classList.contains(`active`)) {
        subMenuEl.style.top = `100%`;
    } else {
        subMenuEl.style.top = 0;
    }
    if (subLinks) {
        buildSubmenu(subLinks);
    }
    if (ev.target.textContent.toLowerCase() == 'about' && ev.target.classList.contains(`active`)) {
        mainEl.innerHTML = `<h1>${ev.target.textContent}</h1>`;
        mainEl.style.textTransform = `uppercase`; //for consistency with the menu
    }
    if (ev.target.textContent.toLowerCase() == 'about' && !ev.target.classList.contains(`active`)) {
        mainEl.innerHTML = `<h1 style="text-decoration: line-through">${ev.target.textContent}</h1>`; //just for the fun of it
    }

}

function subMenuElClickListener(ev) {
    ev.preventDefault();
    if (ev.target.nodeName != `A`) {
        return;
    }
    //console.log (ev.target.textContent); //testing done
    subMenuEl.style.top = 0;
    topMenuLinks.forEach(it =>{
        it.classList.remove(`active`);
    });
    mainEl.innerHTML = `<h1>${ev.target.textContent}</h1>`;
    mainEl.style.textTransform = `uppercase`; //for consistency with the menu
}
