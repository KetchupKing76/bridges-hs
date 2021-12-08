function assignmentPage(id) {
  const asst = assignment[id];

  //go to homepage if assignment does not exist
  if(asst === undefined) {
    window.location = '/';
    return;
  }

  //set page title
  document.title = asst.name + ' | BRIDGES High School';

  //make HTML functions
  const { div, p, h1, h3, img, figure, figcaption, ul, li, a, strong, span } = HTML;

  //list item creation functions
  const item = text => li(text);
  const linkItem = data => li(a({ href : data.link }, data.name))

  //title bar
  const titlebar = div({ class : 'titlebar-container' },
    h1({ class : 'title container' }, asst.name)
  );
  document.querySelector('#insert-titlebar').appendChild(titlebar);

  //description
  const description = p(asst.description);
  document.querySelector('#insert-description').appendChild(description);

  //image and caption
  const source = '/images/example-output/' + id + '.png'
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
