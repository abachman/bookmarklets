(()=>{function t(e){e=e.replace(/^\s+|\s+$/g,""),e=e.toLowerCase();for(var i="\xE0\xE1\xE4\xE2\xE8\xE9\xEB\xEA\xEC\xED\xEF\xEE\xF2\xF3\xF6\xF4\xF9\xFA\xFC\xFB\xF1\xE7\xB7/_,:;",r="aaaaeeeeiiiioooouuuunc------",a=0,n=i.length;a<n;a++)e=e.replace(new RegExp(i.charAt(a),"g"),r.charAt(a));return e=e.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-"),e}var o="NOCODE";window.jQuery('div[role="dialog"]').length>0?o=window.jQuery('div[role="dialog"] [aria-label="Breadcrumbs"] a:contains("KOREGRAPH-")').text():o=window.jQuery('#jira-issue-header a:contains("KOREGRAPH-")').text();var l=window.jQuery('[data-test-id="issue.views.issue-base.foundation.summary.heading"]').text()||"no title",c="feature/"+o+t("-"+l);window.prompt("Copy to clipboard",c);})();
