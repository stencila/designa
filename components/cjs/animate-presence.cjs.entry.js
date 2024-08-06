'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c157949f.js');
const index$1 = require('./index-6f54a9f2.js');

const hold = (el) => async (cb) => {
  el.dataset.hold = '';
  await cb(el).then((r) => {
    if (r && 'finished' in r) {
      return r.finished;
    }
    return;
  });
  delete el.dataset.hold;
};
const AnimatePresence = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.animatePresenceExitComplete = index.createEvent(this, "animatePresenceExitComplete", 7);
    this.animatePresenceEnter = index.createEvent(this, "animatePresenceEnter", 7);
    this.animatePresenceExit = index.createEvent(this, "animatePresenceExit", 7);
    /** @internal */
    this.__presenceKey = `animate-presence-${ids++}`;
    /** @internal */
    this.descendants = [];
    this.getClosestParent = () => {
      var _a;
      const base = (_a = this.element.parentElement, (_a !== null && _a !== void 0 ? _a : this.element.getRootNode().host));
      return index$1.closest(this.element.tagName, base);
    };
    this.willExit = false;
    this.didExit = false;
    this.willEnter = false;
    this.didEnter = false;
    this.handleMutation = this.handleMutation.bind(this);
  }
  observeChanged() {
    if (this.observe) {
      this.addMO();
      this.mo.observe(this.element, {
        childList: true,
        attributes: true,
        attributeFilter: ['data-key'],
      });
    }
    else {
      this.removeMO();
    }
  }
  async componentWillLoad() {
    var _a, _b;
    index$1.injectGlobalStyle();
    this.ancestor = this.getClosestParent();
    if (typeof this.observe === 'undefined') {
      this.observe = (_b = (_a = this.ancestor) === null || _a === void 0 ? void 0 : _a.observe, (_b !== null && _b !== void 0 ? _b : true));
    }
    Array.from(this.element.children).map((el, i) => {
      index$1.setCustomProperties(el, { i });
      el.style.setProperty('animation-play-state', 'paused');
      el.dataset.enter = '';
    });
  }
  async componentDidLoad() {
    var _a;
    this.observeChanged();
    (_a = this.ancestor) === null || _a === void 0 ? void 0 : _a.registerChild(this.element);
    if (!this.ancestor) {
      this.enter();
    }
  }
  async componentDidUnload() {
    var _a;
    this.removeMO();
    (_a = this.ancestor) === null || _a === void 0 ? void 0 : _a.unregisterChild(this.__presenceKey);
    this.descendants = [];
  }
  async enterNode(el, i = 0) {
    delete el.dataset.exit;
    const event = new CustomEvent('animatePresenceEnter', {
      bubbles: true,
      detail: {
        i,
        hold: hold(el),
      },
    });
    el.dispatchEvent(event);
    el.style.removeProperty('animation-play-state');
    el.dataset.enter = '';
    index$1.setCustomProperties(el, { i });
    await index$1.presence(el, {
      afterSelf: async () => {
        delete el.dataset.initial;
        delete el.dataset.enter;
        el.style.removeProperty('--i');
      },
    });
    return index$1.enterChildren(el);
  }
  async exitNode(el, method = 'remove', i = 0) {
    await index$1.exitChildren(el);
    delete el.dataset.willExit;
    index$1.setCustomProperties(el, { i });
    const event = new CustomEvent('animatePresenceExit', {
      bubbles: true,
      detail: {
        i,
        hold: hold(el),
      },
    });
    el.dispatchEvent(event);
    el.dataset.exit = '';
    await index$1.presence(el, {
      afterSelf: () => {
        if (method === 'remove') {
          el.remove();
        }
        else if (method === 'hide') {
          el.style.setProperty('visibility', 'hidden');
        }
      },
    });
    return Promise.resolve();
  }
  async handleEnter(node, _record, i) {
    if (!index$1.isHTMLElement(node))
      return;
    if (index$1.hasData(node, 'exit'))
      return;
    if (index$1.hasData(node, 'willExit')) {
      return this.exitNode(node, 'remove', i);
    }
    else {
      return this.enterNode(node, i);
    }
  }
  async handleExit(node, record, i) {
    if (!index$1.isHTMLElement(node))
      return;
    if (index$1.hasData(node, 'exit') || index$1.hasData(node, 'willExit')) {
      return;
    }
    node.dataset.willExit = '';
    index$1.setCustomProperties(node, { i });
    if (index$1.isHTMLElement(record.previousSibling)) {
      record.previousSibling.insertAdjacentElement('afterend', node);
    }
    else if (index$1.isHTMLElement(record.target)) {
      record.target.prepend(node);
    }
  }
  handleMutation(records) {
    let i = 0;
    for (const record of records.reverse()) {
      if (record.addedNodes.length === 1) {
        this.handleEnter(record.addedNodes[0], record, records.length - 1 - i);
      }
      if (record.removedNodes.length === 1) {
        this.handleExit(record.removedNodes[0], record, i);
      }
      i++;
    }
  }
  addMO() {
    if (!this.mo) {
      if ('MutationObserver' in window) {
        this.mo = new MutationObserver(this.handleMutation);
        this.observeChanged();
      }
    }
  }
  removeMO() {
    if (this.mo) {
      this.mo.disconnect();
      this.mo = undefined;
    }
  }
  /** @internal Registers a child element across shadow boundaries */
  async registerChild(el) {
    const key = el.__presenceKey;
    // Remove existing elements with same key to handle HMR
    this.descendants = [
      ...this.descendants.filter(element => element.__presenceKey !== key),
      el,
    ];
    return;
  }
  /** @internal */
  async unregisterChild(key) {
    this.descendants = this.descendants.filter(el => el.__presenceKey !== key);
    return;
  }
  animatePresenceExitCompleteHandler(event) {
    event.stopPropagation();
  }
  /**
   * Programmatically triggers an exit.
   *
   * Nested `<animate-presence>` children will be animated out from the bottom up, meaning that children elements trigger a parent's exit after their own exit finishes.
   */
  async exit() {
    if (this.didExit || this.willExit)
      return;
    this.willExit = true;
    await Promise.all(Array.from(this.element.children)
      .reverse()
      .map((el, i) => this.exitNode(el, 'hide', i)));
    this.didExit = true;
    this.willExit = false;
    this.animatePresenceExitComplete.emit();
    return Promise.resolve();
  }
  /**
   * Programmatically triggers an entrance.
   *
   * Nested `<animate-presence>` children will be animated in from the top down, meaning that parent elements trigger a child's entrance after their own entrance finishes.
   */
  async enter() {
    this.didExit = false;
    this.willExit = false;
    if (this.didEnter || this.willEnter)
      return;
    this.willEnter = true;
    await Promise.all(Array.from(this.element.children).map((el, i) => this.enterNode(el, i)));
    await index$1.enterChildren(this.element);
    this.didEnter = true;
    this.willEnter = false;
    return Promise.resolve();
  }
  render() {
    return (index.h(index.Host, { style: { display: 'contents' } }, index.h("slot", null)));
  }
  get element() { return index.getElement(this); }
  static get watchers() { return {
    "observe": ["observeChanged"]
  }; }
};
let ids = 0;

exports.animate_presence = AnimatePresence;

//# sourceMappingURL=animate-presence.cjs.entry.js.map