## Files

* **_data/assignments.yaml**: Data for each project (see [Project Structure](Project-Structure)).

* **_data/java_links.yaml**: Links to Java class documentation.

* **_data/python_links.yaml**: Links to Python class documentation.

* **_layouts/default.html**: The top-level layout used by all pages. Includes navigation bar, title bar, and copyright notice.

* **_layouts/assignment-page.html**: This layout extends the default layout and is used by project pages. The `jekyll-datapage-generator` plugin automatically generates these pages using the information in assignments.yaml.

* **.github/workflows/jekyll-deploy-action.yml**: A Github action which updates the `gh_pages` branch automatically whenever the `master` branch changes. (The source for this site is in the `master` branch; the generated HTML is in the `gh_pages` branch.) Copied from [here](https://github.com/marketplace/actions/jekyll-deploy-action).

* **assets/images/**: Images used on this site, including example output images for each project.

* **assets/main.scss**: A [Sass](https://sass-lang.com) file which controls the styling of all pages.

* **assignments/search.js**: A Liquid-generated Javascript program that allows users to search for assignments.

## Project Structure

Each entry in assignments.yaml has the following attributes:

* `key`: The name of the project in lowercase, with words separated by hyphens (e.g. "emoji-builder").

* `title`: The name of the project in title case, with words separated by spaces (e.g. "Emoji Builder").

* `summary`: A short description which appears in the link on the "projects" page.

* `tags`: A list of tags that appear below the summary.

* `description`: A longer description which appears on the project's individual page.

* `image_caption` (optional): A caption to go under the example output image. If none is given, it defaults to "[title] example output."

* `topics`: A list of programming topics that the project covers.

* `outcomes` (optional): A list of intended learning outcomes. Each entry is an object with a `verb` field and an `outcome` field.

* `java` (optional): Files for the Java version of the assignment (code, worksheets, etc).

* `python` (optional): Files for the Python version of the assignment (code, worksheets, etc).

* `documentation`: A list of BRIDGES classes used by the project. These classes must have entries in java_links.yaml and/or python_links.yaml (depending on which languages the project supports). Otherwise, the links on the project page will not work.

`java` and `python` must each contain two sub-attributes: `student_files` and `teacher_files`. `student_files` is a list of files available to students (each with a name and a link), and `teacher_files` is a list of files available only to teachers.

## Running Locally

Install Ruby along with the `bundler` gem. See these pages for more detailed instructions:

* [Quickstart](https://jekyllrb.com/docs/)
* [Installation](https://jekyllrb.com/docs/installation/)

Run `bundle exec jekyll serve` to view this site on a localhost server. The server will automatically update whenever you edit the files. (You may need to run `bundle install` first.)
