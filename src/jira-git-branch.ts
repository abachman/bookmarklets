export {};

declare global {
  interface Window {
    jQuery: any;
  }
}

function slugify(str: string) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
}

const projectCode: string =
  window
    .jQuery(
      'div[role="dialog"] [aria-label="Breadcrumbs"] a:contains("KOREGRAPH-")'
    )
    .text() || "no id";
const title =
  window
    .jQuery(
      '[data-test-id="issue.views.issue-base.foundation.summary.heading"]'
    )
    .text() || "no title";
const gitBranch = "feature/" + projectCode + slugify("-" + title);
window.prompt("Copy to clipboard", gitBranch);
