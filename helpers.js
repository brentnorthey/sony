/**
 * querySelector wrapper
 *
 * @param {string} selector Selector to query
 * @param {Element} [scope] Optional scope element for the selector
 */

export function qs(selector, scope) {
  return (scope || document).querySelector(selector);
}

/**
 * addEventListener wrapper
 *
 * @param {Element|Window} target Target Element
 * @param {string} type Event name to bind to
 * @param {Function} callback Event callback
 * @param {boolean} [capture] Capture the event
 */
export function $on(target, type, callback, capture) {
  target.addEventListener(type, callback, !!capture);
}

/**
 * Attach a handler to an event for all elements matching a selector.
 *
 * @param {Element} target Element which the event must bubble to
 * @param {string} selector Selector to match
 * @param {string} type Event name
 * @param {Function} handler Function called when the event bubbles to target
 *                           from an element matching selector
 * @param {boolean} [capture] Capture the event
 */
export function $delegate(target, selector, type, handler, capture) {
  const dispatchEvent = event => {
    const targetElement = event.target;
    const potentialElements = target.querySelectorAll(selector);
    let i = potentialElements.length;

    while (i--) {
      if (potentialElements[i] === targetElement) {
        handler.call(targetElement, event);
        break;
      }
    }
  };

  $on(target, type, dispatchEvent, !!capture);
}

/**
 * Encode less-than and ampersand characters with entity codes to make user-
 * provided text safe to parse as HTML.
 *
 * @param {string} s String to escape
 *
 * @returns {string} String with unsafe characters escaped with entity codes
 */
export const escapeForHTML = s => s.replace(/[&<]/g, c => c === '&' ? '&amp;' : '&lt;');


/* Utilities */
let request_url = 'https://api.twitch.tv/kraken/search/streams?q=starcraft';

export const fetchJSONP = (unique => url =>
    new Promise(rs => {
      const script = document.createElement('script');
      const name = `_jsonp_${unique++}`;

      if (url.match(/\?/)) {
        url += `&callback=${name}`;
      } else {
        url += `?callback=${name}`;
      }

      script.src = url;
      window[name] = json => {
        rs(new Response(JSON.stringify(json)));
        script.remove();
        delete window[name];
      };

      document.body.appendChild(script);
    })
)(0);