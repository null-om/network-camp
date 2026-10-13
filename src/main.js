(function () {
  var grid = document.getElementById("session-grid");
  var sessions = window.CAMP_SESSIONS || [];

  // Only accept relative paths (no scheme, no leading slash).
  function isRelativePath(h) {
    return typeof h === "string" && h.trim() !== "" &&
      !/^([a-z][a-z0-9+.-]*:|\/|\\)/i.test(h.trim());
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  var open = 0;
  sessions.forEach(function (s, i) {
    var available = isRelativePath(s.href);
    if (available) open++;
    var card = available ? el("a", "card is-available") : el("article", "card is-upcoming");
    if (available) card.href = s.href.trim();
    card.style.setProperty("--i", i);

    var top = el("div", "card-top");
    top.appendChild(el("span", "card-num", s.id));
    var status = el("span", "status", available ? "Available" : "Coming soon");
    status.prepend(el("i", "dot"));
    top.appendChild(status);

    card.append(top, el("h3", "card-title", s.title), el("p", "card-desc", s.description));

    var label = "Session " + s.id + ": " + s.title;
    if (available) {
      card.setAttribute("aria-label", label + " — open presentation");
      card.appendChild(el("span", "card-open", "Open session \u2192"));
    } else {
      card.setAttribute("aria-label", label + " — coming soon");
    }
    var li = el("li", "grid-item");
    li.appendChild(card);
    grid.appendChild(li);
  });

  var count = document.getElementById("count");
  if (count) count.textContent = open + " / " + sessions.length + " available";
})();
