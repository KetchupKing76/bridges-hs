# Documentation

## File structure

* *_data/assignments.yaml*: Data for each project (see [Project Structure](Project-Structure)).

* *_data/bridges-links.yaml*: Links to BRIDGES Classes, used in the "Documentation" section on project pages.

* *_layouts/default.html*: The top-level layout used by all pages. Includes navigation bar, title bar, and copyright notice.

* *_layouts/assignment-page.html*: This layout extends the default layout and is used by project pages. The "jekyll-datapage-generator" plugin automatically generates these pages using the information in _data/assignments.yaml.

* *.github/workflows/jekyll-deploy-action.yml*: A Github action which updates the gh_pages branch automatically whenever the master branch changes. (The source for this site is in the master branch; the generated HTML is in the gh_pages branch.) [Source](https://github.com/marketplace/actions/jekyll-deploy-action)

* *assets/images/*: Images for this site, including example output images for each project.

* *assets/main.css*: A CSS file which controls the styling of all pages.

## Project Structure

## Running jekyll
