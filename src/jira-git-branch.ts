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

let projectCode = "NOCODE";
if (window.jQuery("#ghx-detail-view").length > 0) {
  projectCode = window.jQuery(`#ghx-detail-view #issuekey-val a`).text();
} else {
  // standalone page
  projectCode = window
    .jQuery(`#issue-content .aui-page-header a.issue-link`)
    .text();
}

const title = window.jQuery("#summary-val").text() || "no title";
const gitBranch = projectCode + slugify("-" + title);
window.prompt("Copy to clipboard", gitBranch);
