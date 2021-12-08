function navbar() {
  //make HTML functions
  const { nav, div, ul, li, a, img } = HTML;

  //assignment links
  const asstLinks = ul({ class : 'dropdown-menu', 'aria-labelledby' : 'navbar-dropdown' },
    li(a({ class : 'dropdown-item', href : '/ap-cs-a/' }, 'AP Computer Science A')),
    li(a({ class : 'dropdown-item', href : '/adv-topics/' }, 'Advanced Topics'))
  );

  //dropdown properties
  const dropdown =
    { class : 'nav-link dropdown-toggle'
    , href : '#'
    , id : 'navbar-dropdown'
    , role : 'button'
    , 'data-bs-toggle' : 'dropdown'
    , 'aria-expanded' : 'false'
    };

  //navigation links
  const links = ul({ class : 'navbar-nav'},
    li({ class : 'nav-item' },
      a({ class : 'nav-link', href : '/overview/' }, 'Overview')
    ),
    li({ class : 'nav-item dropdown' },
      a(dropdown, 'Assignments'),
      asstLinks
    )
  );

  //navigation bar
  const navbar = nav({ class : 'navbar navbar-expand navbar-custom' },
    div({ class : 'container' },
      a({ class : 'navbar-brand', href : '/' },
        img({ src : '/images/logo.svg', alt : 'BRIDGES Logo' })
      ),
      links
    )
  );
  document.querySelector('#insert-navbar').appendChild(navbar);
}
