## Files

* *_data/assignments.yaml:* Data for each project (see [Project Structure](Project-Structure)).

* *_data/bridges-links.yaml:* Links to BRIDGES classes, used in the "Documentation" section on project pages.

* *_layouts/default.html:* The top-level layout used by all pages. Includes navigation bar, title bar, and copyright notice.

* *_layouts/assignment-page.html:* This layout extends the default layout and is used by project pages. The "jekyll-datapage-generator" plugin automatically generates these pages using the information in assignments.yaml.

* *.github/workflows/jekyll-deploy-action.yml:* A Github action which updates the gh_pages branch automatically whenever the master branch changes. (The source for this site is in the master branch; the generated HTML is in the gh_pages branch.) Copied from [here](https://github.com/marketplace/actions/jekyll-deploy-action).

* *assets/images/:* Images for this site, including example output images for each project.

* *assets/main.css:* A CSS file which controls the styling of all pages.

## Project Structure

Each entry in assignments.yaml has the following attributes:

* *key:* The name of the project in lowercase, with words separated by hyphens (e.g. 'emoji-builder').

* *title:* The name of the project in title case, with words separated by spaces (e.g. 'Emoji Builder').

* *summary:* A short description which appears in the link on the "projects" page.

* *tags:* A list of tags that appear below the summary.

* *description:* A longer description which appears on the project's individual page.

* *image_caption (optional):* A caption to go under the example output image. If none is given, it defaults to "[title] example output."

* *topics:* A list of programming topics that the project covers.

* *outcomes (optional):* A list of intended learning outcomes. Each entry is an object with a 'verb' field and an 'outcome' field.

* *student_files:* A list of student files, each with a name and a link.

* *scaffold_files:* A list of scaffold files, each with a name and a link.

* *teacher_files (optional)*

* *solution_files (optional)*

* *other_resources (optional):* A list of resource files, each with a name and a link. This could include images, explanatory documents, etc.

* *documentation:* A list of BRIDGES classes used by the project. These classes must have entires in bridges_links.yaml or else the links will not work.
