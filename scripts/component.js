function navbar() {
  //make HTML functions
  const { nav, div, ul, li, a, img } = HTML;

  //assignment links
  const asstLinks = ul({ class : 'dropdown-menu', 'aria-labelledby' : 'navbar-dropdown' },
    li(a({ class : 'dropdown-item', href : '../ap-cs-a/' }, 'AP Computer Science A')),
    li(a({ class : 'dropdown-item', href : '../adv-topics/' }, 'Advanced Topics'))
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
      a({ class : 'nav-link', href : '../overview/' }, 'Overview')
    ),
    li({ class : 'nav-item dropdown' },
      a(dropdown, 'Assignments'),
      asstLinks
    )
  );

  //navigation bar
  const navbar = nav({ class : 'navbar navbar-expand navbar-custom' },
    div({ class : 'container' },
      a({ class : 'navbar-brand', href : '../' },
        img({ src : '../images/logo.svg', alt : 'BRIDGES Logo' })
      ),
      links
    )
  );
  document.querySelector('#insert-navbar').appendChild(navbar);
}

function titlebar(text) {
  //make HTML functions
  const { div, h1 } = HTML;

  //title bar
  const titlebar = div({ class : 'titlebar-container' },
    h1({ class : 'title container' }, text)
  );
  document.querySelector('#insert-titlebar').appendChild(titlebar);
}

function copyright() {
  //make HTML functions
  const { footer, div, hr, p } = HTML;

  //copyright footer
  const copyright = footer(
    div({ class : 'container' },
      hr(),
      p('All rights reserved, Copyright @2018,2019,2020. The University of North Carolina at Charlotte.')
    )
  );
  document.querySelector('#insert-copyright').appendChild(copyright);
}

function assignmentPage(id) {
  const asst = assignment[id];

  //make HTML functions
  const { div, p, h1, h3, img, figure, figcaption, ul, li, a, strong, span } = HTML;

  //list item creation functions
  const item = text => li(text);
  const linkItem = data => li(a({ href : data.link }, data.name))

  //description
  const description = p(asst.description);
  document.querySelector('#insert-description').appendChild(description);

  //image and caption
  const source = '../images/example-output/' + id + '.png'
  const caption = asst.imageCaption ?? asst.name + ' example output'
  const image = figure(
    img({ src : source, alt : 'Example Output' }),
    figcaption(caption)
  );
  document.querySelector('#insert-image').appendChild(image);

  //additional html
  document.querySelector('#insert-description-html').appendChild(asst.descriptionHtml ?? span())
  document.querySelector('#insert-student-html').appendChild(asst.studentHtml ?? span())

  //topics
  const topics = ul(asst.topics.map(x => li(x)))
  document.querySelector('#insert-topics').appendChild(topics);

  //intended learning outcomes
  if(asst.outcomes !== undefined) {
    const makeOutcome = data => li(
      strong(data.verb + ': '),
      data.outcome
    )
    const outcomes = ul(asst.outcomes.map(makeOutcome));
    document.querySelector('#insert-outcomes').appendChild(outcomes);
  }
  else {
    const message = p('This section is not yet complete.');
    document.querySelector('#insert-outcomes').appendChild(message);
  }

  //student files
  const studentFiles = ul(asst.studentFiles.map(linkItem));
  document.querySelector('#insert-student-files').appendChild(studentFiles);

  //teacher files
  if(asst.teacherFiles !== undefined) {
    const teacherFiles = ul(asst.teacherFiles.map(item));
    document.querySelector('#insert-teacher-files').appendChild(teacherFiles);
  }
  else {
    const message = p('This assignment has no teacher files.');
    document.querySelector('#insert-teacher-files').appendChild(message);
  }

  //resource files
  const scaffoldFiles =
    li('Scaffold Files', ul(asst.scaffoldFiles.map(linkItem)));
  const solutionFiles = asst.solutionFiles !== undefined
    ? li('Solution Files', ul(asst.solutionFiles.map(item)))
    : span();
  const otherResources = asst.otherResources !== undefined
    ? asst.otherResources.map(linkItem)
    : span();
  const resourceFiles = ul(
    otherResources,
    scaffoldFiles,
    solutionFiles
  );
  document.querySelector('#insert-resource-files').appendChild(resourceFiles);

  //documentation
  const docLink = name => linkItem({ link : bridgesClass[name], name });
  const documentation = ul(asst.documentation.map(docLink));
  document.querySelector('#insert-documentation').appendChild(documentation);
}

function coursePage(ids) {
  //make HTML functions
  const { div, p, h4, img } = HTML;

  ids.forEach(id => {
    const asst = assignment[id];
    if(asst === undefined) return;

    //assignment card
    const card = div({ class : 'card assignment-card link' },
      div({ class : 'card-thumbnail' },
        img({ src : '../images/example-output/' + id + '.png', alt : asst.name + ' Example Output' })
      ),
      div({ class : 'card-body' },
        h4({ class : 'card-title' }, asst.name),
        p({ class : 'card-text' }, asst.summary)
      )
    );

    //link to assignment page
    card.onclick = () => {
      window.location = '../assignment?name=' + id;
    };
    document.querySelector('#insert-cards').appendChild(card);
  });
}
