---
---

const searchData = {
  {% for asst in site.data.assignments %}
  "{{ asst.key }}" : `
    {{ asst.title }} {{ asst.summary }} {{ asst.description }}
    {% if asst.java %} java {% endif %}
    {% if asst.python %} python {% endif %}
    {% for tag in asst.tags %} {{ tag }} {% endfor %}
    {% for topic in asst.topics %} {{ topic }} {% endfor %}
    {% for class in asst.documentation %} {{ class }} {% endfor %}
  `,
  {% endfor %}
}

function normalise(str) {
  return str.trim().replace(/\s+/g, " ").toLowerCase()
}

for(const key in searchData) {
  searchData[key] = normalise(searchData[key])
}

document.getElementById("search").oninput = function() {
  const terms = normalise(this.value)
  for(const key in searchData) {
    document.getElementById(key).style.display =
      searchData[key].includes(terms)
      ? '' : 'none'
  }
}
