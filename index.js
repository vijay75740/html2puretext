var cheerio = require('cheerio');
var decode = require('he').decode;
var plumb = require('plumb');

function _escapeHtml(input) {
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function _list(str, isOrdered) {
  if (!str) return str;
  var $ = cheerio.load(str);
  var listEl = isOrdered ? 'ol' : 'ul';

  $(listEl).each(function (i, el) {
    var $out = cheerio.load('<p></p>');
    $(el).find('li').each(function (j, li) {
      var tick = isOrdered ? String(j + 1) + '.' : '-';
      $out('p').append(tick + ' ' + _escapeHtml($(li).text()) + '<br />');
    });
    $out('br').last().remove();
    $(el).replaceWith($out.html());
  });

  return $.html();
}

function stripStylesAndScripts(str) {
  var $ = cheerio.load(str);
  $('script, style').remove();
  return $.html();
}

function stringify(x) {
  return x === null || x === undefined ? '' : String(x);
}

function collapseWhitespace(val) {
  return val.replace(/\s+/g, ' ');
}

function linebreaks(str) {
  return str.replace(/<\s?(p|br)[^<]*>/gi, function (x, tag) {
    return tag.toLowerCase() === 'p' ? '\n\n' : '\n';
  });
}

function listOrdered(str) {
  return _list(str, true);
}

function listUnordered(str) {
  return _list(str, false);
}

function stripCssConditionalComment(str) {
  return str.replace(/<!--\[if.*?<!\[endif\]-->/g, '');
}

function stripTags(str) {
  return str.replace(/<[^<]+>/g, '');
}

function trim(str) {
  return str.trim();
}

module.exports = plumb(
  stringify,
  stripStylesAndScripts,
  listOrdered,
  listUnordered,
  collapseWhitespace,
  linebreaks,
  stripCssConditionalComment,
  stripTags,
  decode,
  trim
);