'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function getDefaultData() {
    return {
        displayRunner: true,
        useGrammar: false,
        language: 'en, ru, uk'
    };
}
var OrthographySettings = /** @class */ (function () {
    function OrthographySettings(plugin, emitter) {
        this.plugin = plugin;
        this.data = getDefaultData();
        this.emitter = emitter;
    }
    Object.defineProperty(OrthographySettings.prototype, "displayRunner", {
        get: function () {
            var data = this.data;
            return data.displayRunner;
        },
        set: function (value) {
            var data = this.data;
            data.displayRunner = value;
            this.emitter.trigger('onUpdateSettings', this.data);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrthographySettings.prototype, "useGrammar", {
        get: function () {
            var data = this.data;
            return data.useGrammar;
        },
        set: function (value) {
            var data = this.data;
            data.useGrammar = value;
            this.emitter.trigger('onUpdateSettings', this.data);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrthographySettings.prototype, "language", {
        get: function () {
            var data = this.data;
            return data.language;
        },
        set: function (value) {
            var data = this.data;
            data.language = value;
            this.emitter.trigger('onUpdateSettings', this.data);
        },
        enumerable: false,
        configurable: true
    });
    OrthographySettings.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var plugin, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        plugin = this.plugin;
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [getDefaultData()];
                        return [4 /*yield*/, plugin.loadData()];
                    case 1:
                        _a.data = _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    OrthographySettings.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, plugin, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, plugin = _a.plugin, data = _a.data;
                        if (!(plugin && data)) return [3 /*break*/, 2];
                        return [4 /*yield*/, plugin.saveData(data)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return OrthographySettings;
}());

/** @class */ ((function (_super) {
    __extends(OrthographySettingTab, _super);
    function OrthographySettingTab(app, settings, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.settings = settings;
        return _this;
    }
    OrthographySettingTab.prototype.display = function () {
        var _a = this, containerEl = _a.containerEl, settings = _a.settings;
        containerEl.empty();
        OrthographySettingTab.setDisplayRunner(containerEl, settings);
        OrthographySettingTab.setGrammar(containerEl, settings);
        OrthographySettingTab.setLanguage(containerEl, settings);
    };
    OrthographySettingTab.setDisplayRunner = function (containerEl, settings) {
        new obsidian.Setting(containerEl)
            .setName('Show button')
            .setDesc('Button for orthography checking')
            .addToggle(function (toggle) {
            return toggle.setValue(settings.displayRunner).onChange(function (value) {
                settings.displayRunner = value;
                settings.saveSettings();
            });
        });
    };
    OrthographySettingTab.setGrammar = function (containerEl, settings) {
        new obsidian.Setting(containerEl)
            .setName('Grammarly')
            .setDesc('Use grammarly to find and correct errors.')
            .addToggle(function (toggle) {
            return toggle.setValue(settings.useGrammar).onChange(function (value) {
                settings.useGrammar = value;
                settings.saveSettings();
            });
        });
    };
    OrthographySettingTab.setLanguage = function (containerEl, settings) {
        var _this = this;
        new obsidian.Setting(containerEl)
            .setName('Language setting')
            .setDesc('Select language')
            .addDropdown(function (dropdown) {
            return dropdown
                .addOption('en', 'English')
                .addOption('ru', 'Russian')
                .addOption('uk', 'Ukraine')
                .addOption('en, ru, uk', 'All')
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            settings.language = value;
                            return [4 /*yield*/, settings.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    return OrthographySettingTab;
})(obsidian.PluginSettingTab));

// Grammer popup
var O_POPUP = 'obsidian-orthography-popup';
var O_POPUP_DISABLED = 'obsidian-orthography-popup--disabled';
var O_POPUP_CONTROLS = 'obsidian-orthography-popup-controls';
var O_POPUP_ITEM = 'obsidian-orthography-popup-item';
var O_POPUP_RESIZED = 'obsidian-orthography-popup--resized';
var O_POPUP_ITEM_OPENED = 'obsidian-orthography-popup-item--opened';
var O_POPUP_WORD_TO_REPLACE = 'obsidian-orthography-word-to-replace';
// Runner
var O_RUNNER = 'obsidian-orthography-runner';
var O_RUNNER_HIDDEN = 'obsidian-orthography-runner--hidden';
var O_RUNNER_LOADING = 'obsidian-orthography-runner--loading';
// Highlight
var O_HIGHLIGHT = 'obsidian-orthography-highlight';
var O_HIGHLIGHT_FOCUSED = 'obsidian-orthography-highlight--focused';

var UIControls = function (hasData) {
    return "\n      <div class=\"obsidian-orthography-popup-controls\">\n        ".concat(hasData
        ? '<button id="reloader" class="obsidian-orthography-popup-reload" title="Restart the orthography checker">Reload</button>'
        : '', "\n        <div id=\"closer\" class=\"obsidian-orthography-popup-close\" title=\"Close popup\">\u2715</div>\n      </div>\n    ");
};

var renderHints = function (card, index) {
    var replacements = card.replacements, text = card.text, begin = card.begin, highlightText = card.highlightText;
    if (card.category === 'Determiners') {
        return replacements
            .map(function (item) {
            return "\n          <span\n            data-toreplace=\"".concat(item, "\"\n            data-index=\"").concat(index, "\"\n            data-begin=\"").concat(begin, "\"\n            data-text=\"").concat(text, "\"\n            class=\"obsidian-orthography-word-to-replace obsidian-orthography-popup-replacement\"\n            title=\"Click to correct your spelling\">\n              <b>").concat(item, "</b>&nbsp").concat(highlightText, "\n          </span>");
        })
            .join('or');
    }
    // ----------- FOR REMOVE HINTS ----------- //
    if (card.category === 'Formatting' ||
        card.category === 'BasicPunct' ||
        card.category === 'Wordiness' ||
        card.category === 'Conjunctions') {
        return "\n      <span\n        data-begin=\"".concat(begin, "\"\n        data-text=\"").concat(text, "\"\n        data-toreplace=\"").concat(replacements[0], "\"\n        class=\"obsidian-orthography-word-to-replace obsidian-orthography-popup-hightligh--red\">").concat(highlightText || '', "\n      </span>\n    ");
    }
    if (card.category === 'Prepositions') {
        return replacements
            .map(function (item) {
            return "\n        <span\n          data-toreplace=\"".concat(item, "\"\n          data-index=\"").concat(index, "\"\n          data-begin=\"").concat(begin, "\"\n          data-text=\"").concat(highlightText, "\"\n          class=\"obsidian-orthography-word-to-replace obsidian-orthography-popup-replacement\"\n          title=\"Click to correct your spelling\"\n        >\n          <b>").concat(item, "</b>&nbsp").concat(highlightText, "\n        </span>");
        })
            .join('or');
    }
    return replacements
        .map(function (item) {
        return "\n        <span class=\"obsidian-orthography-popup-card--line-through\">".concat(highlightText, "</span>\n        <span\n          data-toreplace=\"").concat(item, "\"\n          data-index=\"").concat(index, "\"\n          data-begin=\"").concat(begin, "\"\n          data-text=\"").concat(text, "\"\n          class=\"obsidian-orthography-word-to-replace obsidian-orthography-popup-replacement\"\n          title=\"Click to correct your spelling\"\n        >\n          ").concat(item, "\n        </span>");
    })
        .join('or');
};
var UIHints = function (alerts) {
    if (!alerts || !alerts.length)
        return '';
    return alerts
        .map(function (card, index) {
        var impact = card.impact, highlightText = card.highlightText, minicardTitle = card.minicardTitle, explanation = card.explanation, cardLayout = card.cardLayout, begin = card.begin;
        return "\n          <div data-begin=\"".concat(begin, "\" id=\"obsidian-orthography-popup-item-").concat(index, "\" class=\"obsidian-orthography-popup-item ").concat(impact, "\">\n            <div class=\"obsidian-orthography-popup-minicard\">\n              <div>").concat(highlightText || '', "</div>\n              ").concat(minicardTitle
            ? "<div class=\"obsidian-orthography-popup-item-sugg\">".concat(minicardTitle, "</div>")
            : '', "\n              <div class=\"obsidian-orthography-popup-arrows\">\n                <svg width=\"10\" viewBox=\"0 0 10 10\"><path d=\"M5 4.3L.85.14c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7L5 5.7 9.85.87c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0L5 4.28z\" stroke=\"none\" transform=\"translate(0 3) rotate(0)\"></path></svg>\n                <svg width=\"10\" viewBox=\"0 0 10 10\"><path d=\"M5 4.3L.85.14c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7L5 5.7 9.85.87c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0L5 4.28z\" stroke=\"none\" transform=\"translate(0 3) rotate(0)\"></path></svg>\n              </div>\n            </div>\n            <div class=\"obsidian-orthography-popup-card\">\n              <div>").concat(cardLayout.group || '', "</div>\n              <div>\n                ").concat(renderHints(card, index), "\n              </div>\n              <div>").concat(explanation || '', "</div>\n            </div>\n          </div>\n        ");
    })
        .join('');
};

var UIHintsFallback = function () {
    var hintsFallback = "\n    <div class=\"obsidian-orthography-hints-fallback\">\n      <button id=\"runner\">\n        Run orthography check\n      </button>\n      <p>Alpha version</p>\n    </div>\n  ";
    return hintsFallback;
};

var UILoader = function () {
    var loader = "\n    <div class=\"obsidian-orthography-loader\">\n      Checking...\n    </div>\n  ";
    return loader;
};

var UIBar = function (data, loading) {
    var hasData = data && data.alerts && data.alerts.length;
    var controls = UIControls(!!hasData);
    var fallback = loading ? UILoader() : UIHintsFallback();
    var cards = hasData ? UIHints(data.alerts) : fallback;
    return "".concat(controls).concat(cards);
};

var self$3;
var OrthographyPopup = /** @class */ (function () {
    function OrthographyPopup(app, settings, emitter) {
        this.popupOffset = [0, 0];
        this.moverSelected = false;
        this.created = false;
        this.app = app;
        this.settings = settings;
        this.emitter = emitter;
    }
    OrthographyPopup.prototype.init = function () {
        self$3 = this;
    };
    OrthographyPopup.prototype.create = function () {
        self$3.created = true;
        self$3.popup = document.createElement('div');
        self$3.popup.classList.add(O_POPUP);
        self$3.popup.id = O_POPUP;
        var bar = UIBar(null, false);
        self$3.popup.innerHTML = bar;
        document.body.appendChild(self$3.popup);
        self$3.setListeners();
    };
    OrthographyPopup.prototype.destroy = function () {
        self$3.created = false;
        self$3.removeListeners();
        var popup = document.getElementById(O_POPUP);
        if (popup)
            popup.remove();
    };
    OrthographyPopup.prototype.update = function (data, loading) {
        self$3.removeListeners();
        var bar = UIBar(data, loading);
        self$3.popup.innerHTML = bar;
        self$3.setListeners();
    };
    OrthographyPopup.prototype.setLoader = function () {
        this.update(null, true);
    };
    OrthographyPopup.prototype.removeLoader = function () {
        this.update(null, false);
    };
    OrthographyPopup.prototype.disable = function () {
        var hints = document.querySelector("#".concat(O_POPUP));
        if (hints) {
            hints.classList.add(O_POPUP_DISABLED);
        }
    };
    OrthographyPopup.prototype.enable = function () {
        var hints = document.querySelector("#".concat(O_POPUP));
        if (hints) {
            hints.classList.remove(O_POPUP_DISABLED);
        }
    };
    OrthographyPopup.prototype.setListeners = function () {
        var minicards = document.querySelectorAll(".".concat(O_POPUP_ITEM));
        minicards.forEach(function (mc) { return mc.addEventListener('click', self$3.onClickByHint); });
        minicards.forEach(function (mc) {
            return mc.addEventListener('mouseover', self$3.onFocusWord);
        });
        minicards.forEach(function (mc) {
            return mc.addEventListener('mouseout', self$3.onRemoveFocusWord);
        });
        var replacements = document.querySelectorAll(".".concat(O_POPUP_WORD_TO_REPLACE));
        replacements.forEach(function (rp) {
            return rp.addEventListener('click', self$3.onReplaceWord);
        });
        self$3.reloader = document.getElementById('reloader');
        if (self$3.reloader) {
            self$3.reloader.addEventListener('click', self$3.onRun);
        }
        self$3.runner = document.getElementById('runner');
        if (self$3.runner) {
            self$3.runner.addEventListener('click', self$3.onRun);
        }
        self$3.sizer = document.getElementById('sizer');
        if (self$3.sizer) {
            self$3.sizer.addEventListener('click', self$3.onResize);
        }
        self$3.closer = document.getElementById('closer');
        if (self$3.closer) {
            self$3.closer.addEventListener('click', self$3.onClose);
        }
        self$3.mover = document.querySelector(".".concat(O_POPUP_CONTROLS));
        self$3.mover.addEventListener('mousedown', self$3.moverIsDown);
        document.addEventListener('mouseup', self$3.onMouseUp);
        document.addEventListener('mousemove', self$3.onMouseMove);
    };
    OrthographyPopup.prototype.removeListeners = function () {
        var minicards = document.querySelectorAll(".".concat(O_POPUP_ITEM));
        minicards.forEach(function (mc) {
            return mc.removeEventListener('click', self$3.onClickByHint);
        });
        minicards.forEach(function (mc) {
            return mc.removeEventListener('mouseover', self$3.onFocusWord);
        });
        minicards.forEach(function (mc) {
            return mc.removeEventListener('mouseout', self$3.onRemoveFocusWord);
        });
        var replacements = document.querySelectorAll(".".concat(O_POPUP_WORD_TO_REPLACE));
        replacements.forEach(function (rp) {
            return rp.removeEventListener('click', self$3.onReplaceWord);
        });
        if (self$3.reloader)
            self$3.reloader.removeEventListener('click', self$3.onRun);
        if (self$3.runner)
            self$3.runner.removeEventListener('click', self$3.onRun);
        if (self$3.sizer)
            self$3.sizer.removeEventListener('click', self$3.onResize);
        if (self$3.closer)
            self$3.closer.removeEventListener('click', self$3.onClose);
        if (self$3.mover)
            self$3.mover.removeEventListener('mousedown', self$3.moverIsDown);
        document.removeEventListener('mouseup', self$3.onMouseUp);
        document.removeEventListener('mousemove', self$3.onMouseMove);
    };
    OrthographyPopup.prototype.onClickByHint = function (e) {
        var opened = document.querySelectorAll(".".concat(O_POPUP_ITEM_OPENED));
        opened.forEach(function (o) { return o.classList.remove(O_POPUP_ITEM_OPENED); });
        if (e.currentTarget.classList.contains(O_POPUP_ITEM_OPENED)) {
            e.currentTarget.classList.remove(O_POPUP_ITEM_OPENED);
        }
        else {
            e.currentTarget.classList.add(O_POPUP_ITEM_OPENED);
        }
        var begin = e.currentTarget.dataset.begin;
        if (begin) {
            self$3.scrollToWord(begin);
        }
    };
    OrthographyPopup.prototype.moverIsDown = function (e) {
        self$3.moverSelected = true;
        self$3.popupOffset = [
            self$3.popup.offsetLeft - e.clientX,
            self$3.popup.offsetTop - e.clientY
        ];
    };
    OrthographyPopup.prototype.onMouseUp = function () {
        self$3.moverSelected = false;
    };
    OrthographyPopup.prototype.onMouseMove = function (e) {
        e.preventDefault();
        if (self$3.moverSelected) {
            var mousePosition = {
                x: e.clientX,
                y: e.clientY
            };
            self$3.popup.style.left = "".concat(mousePosition.x + self$3.popupOffset[0], "px");
            self$3.popup.style.top = "".concat(mousePosition.y + self$3.popupOffset[1], "px");
        }
    };
    OrthographyPopup.prototype.onResize = function () {
        if (self$3.popup.className.contains(O_POPUP_RESIZED)) {
            self$3.popup.classList.remove(O_POPUP_RESIZED);
        }
        else {
            self$3.popup.classList.add(O_POPUP_RESIZED);
        }
    };
    OrthographyPopup.prototype.onClose = function () {
        self$3.emitter.trigger('orthography:close');
    };
    OrthographyPopup.prototype.onFocusWord = function (e) {
        var begin = e.currentTarget.dataset.begin;
        var word = document.querySelector("[begin=\"".concat(begin, "\"]"));
        if (word) {
            word.classList.add(O_HIGHLIGHT_FOCUSED);
        }
    };
    OrthographyPopup.prototype.onRemoveFocusWord = function () {
        var words = document.querySelectorAll(".".concat(O_HIGHLIGHT_FOCUSED));
        words.forEach(function (w) { return w.classList.remove(O_HIGHLIGHT_FOCUSED); });
    };
    OrthographyPopup.prototype.onRun = function () {
        self$3.emitter.trigger('orthography:run');
    };
    OrthographyPopup.prototype.onReplaceWord = function (event) {
        self$3.emitter.trigger('orthography:replace', event);
        var index = event.currentTarget.dataset.index;
        var selectedItem = document.getElementById("".concat(O_POPUP_ITEM, "-").concat(index));
        if (selectedItem)
            selectedItem.remove();
        if (!document.querySelectorAll(".".concat(O_POPUP_ITEM)).length) {
            self$3.removeLoader();
        }
    };
    OrthographyPopup.prototype.onOpenCard = function (event) {
        var begin = event.currentTarget.attributes.begin.value;
        var popup = document.querySelector(".".concat(O_POPUP));
        var opened = document.querySelectorAll(".".concat(O_POPUP_ITEM_OPENED));
        opened.forEach(function (o) { return o.classList.remove(O_POPUP_ITEM_OPENED); });
        var selected = document.querySelector("[data-begin=\"".concat(begin, "\"]"));
        selected.classList.add(O_POPUP_ITEM_OPENED);
        popup.scrollTop = selected.offsetTop;
    };
    OrthographyPopup.prototype.scrollToWord = function (begin) {
        var activeEditor = self$3.getEditor();
        var scroller = activeEditor.getScrollerElement();
        scroller.scrollTop = +begin - 300;
    };
    OrthographyPopup.prototype.getEditor = function () {
        var activeLeaf = this.app.workspace.activeLeaf;
        return activeLeaf.view.sourceMode.cmEditor;
    };
    return OrthographyPopup;
}());

var O_RUNNER_ICON = '⌘';
var O_RUNNER_ICON_CLEAR = '✕';

var self$2;
var OrthographyToggler = /** @class */ (function () {
    function OrthographyToggler(app, settings, emitter) {
        this.app = app;
        this.settings = settings;
        this.emitter = emitter;
    }
    OrthographyToggler.prototype.init = function () {
        self$2 = this;
        this.createButton(O_RUNNER_ICON);
    };
    OrthographyToggler.prototype.destroy = function () {
        this.removeLoading();
        this.toggler.removeEventListener('click', this.toggle);
        this.removeButton();
    };
    OrthographyToggler.prototype.toggle = function () {
        if (self$2.getEditor()) {
            self$2.showed = !self$2.showed;
            if (self$2.showed) {
                self$2.updateButtonText(O_RUNNER_ICON_CLEAR);
                self$2.emitter.trigger('orthography:open');
            }
            else {
                self$2.updateButtonText(O_RUNNER_ICON);
                self$2.removeLoading();
                self$2.emitter.trigger('orthography:close');
            }
        }
        else {
            new obsidian.Notice('Please open a file first.');
        }
    };
    OrthographyToggler.prototype.hide = function () {
        var runner = document.querySelector('.' + O_RUNNER);
        runner.classList.add(O_RUNNER_HIDDEN);
    };
    OrthographyToggler.prototype.setLoading = function () {
        this.toggler.classList.add(O_RUNNER_LOADING);
    };
    OrthographyToggler.prototype.removeLoading = function () {
        this.toggler.classList.remove(O_RUNNER_LOADING);
    };
    OrthographyToggler.prototype.reset = function () {
        this.showed = false;
        this.removeLoading();
        this.updateButtonText(O_RUNNER_ICON);
    };
    OrthographyToggler.prototype.createButton = function (text) {
        this.toggler = document.createElement('button');
        var icon = document.createElement('span');
        icon.innerText = text;
        this.toggler.classList.add(O_RUNNER);
        this.toggler.appendChild(icon);
        document.body.appendChild(this.toggler);
        this.toggler.addEventListener('click', this.toggle);
    };
    OrthographyToggler.prototype.updateButtonText = function (text) {
        var toggler = document.querySelector(".".concat(O_RUNNER, " span"));
        if (toggler)
            toggler.innerText = text;
    };
    OrthographyToggler.prototype.removeButton = function () {
        var toggler = document.querySelector(".".concat(O_RUNNER));
        if (toggler)
            toggler.remove();
    };
    OrthographyToggler.prototype.getEditor = function () {
        var activeLeaf = this.app.workspace.activeLeaf;
        return !!activeLeaf.view.sourceMode;
    };
    return OrthographyToggler;
}());

var self$1;
var OrthographyEditor = /** @class */ (function () {
    function OrthographyEditor(app, settings) {
        this.app = app;
        this.settings = settings;
    }
    OrthographyEditor.prototype.init = function () {
        self$1 = this;
    };
    OrthographyEditor.prototype.destroy = function () {
        self$1.clearHighlightWords();
    };
    OrthographyEditor.prototype.highlightWords = function (editor, alerts) {
        var _this = this;
        this.clearHighlightWords();
        alerts.forEach(function (alert) {
            var textLength = alert.text.length || alert.highlightText.length;
            var originalWord = {
                begin: alert.begin,
                end: alert.end,
                len: textLength
            };
            _this.highlightWord(editor, originalWord);
        });
    };
    OrthographyEditor.prototype.highlightWord = function (editor, originalWord) {
        var colRow = this.getColRow(editor, originalWord);
        if (!colRow)
            return;
        var col = colRow.col, row = colRow.row;
        this.highlightedWords = editor.markText({ line: row, ch: col }, { line: row, ch: col + originalWord.len }, {
            className: O_HIGHLIGHT,
            attributes: {
                begin: originalWord.begin,
                end: originalWord.end,
                len: originalWord.len
            }
        });
    };
    OrthographyEditor.prototype.replaceWord = function (editor, originalWord, newWord) {
        if (!originalWord)
            return;
        var colRow = this.getColRow(editor, originalWord);
        if (!colRow)
            return;
        var col = colRow.col, row = colRow.row;
        var doc = editor.getDoc();
        var from = {
            line: row,
            ch: col
        };
        var to = {
            line: row,
            ch: col + originalWord.len
        };
        doc.replaceRange(newWord, from, to);
    };
    OrthographyEditor.prototype.getColRow = function (editor, originalWord) {
        var ttl = 0;
        var row = 0;
        var result = null;
        var begin = originalWord.begin;
        editor.eachLine(function (l) {
            var s = ttl === 0 ? ttl : ttl + 1;
            var lineTextLength = l.text.length;
            ttl += lineTextLength;
            if (row > 0) {
                ttl++;
            }
            if (begin >= s && begin <= ttl) {
                var diff = ttl - lineTextLength;
                var col = begin - diff;
                result = { col: col, row: row };
                return;
            }
            row++;
        });
        return result;
    };
    OrthographyEditor.prototype.clearHighlightWords = function () {
        if (typeof self$1.highlightedWords === 'object') {
            self$1.highlightedWords.clear();
        }
        var highlightWords = document.querySelectorAll(".".concat(O_HIGHLIGHT));
        highlightWords.forEach(function (span) {
            span.removeAttribute('class');
        });
    };
    return OrthographyEditor;
}());

var _this = undefined;
var debounce = function (func, timeout) {
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
            func.apply(_this, args);
        }, timeout);
    };
};

var sortAlerts = function (alerts) {
    return alerts.sort(function (a, b) { return a.begin - b.begin; });
};
var formatAlerts = function (alerts) {
    var withoutHidden = alerts.filter(function (alert) { return alert.hidden !== true; });
    var withoutDuplicate = withoutHidden.reduce(function (acc, current) {
        var x = acc.find(function (item) { return item.explanation === current.explanation; });
        if (!x) {
            return acc.concat([current]);
        }
        else {
            return acc;
        }
    }, []);
    return withoutDuplicate;
};

var API_URL_GRAMMAR = 'https://obsidian-orthography-api-mz8l64tz3-denisoed.vercel.app/check';

// Use self in events callbacks
var self;
var OrthographyPlugin = /** @class */ (function (_super) {
    __extends(OrthographyPlugin, _super);
    function OrthographyPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.debounceGetDataFunc = debounce(_this.onChangeText.bind(_this), 500);
        _this.getDataFunc = debounce(_this.onRunFromPopup.bind(_this), 0);
        return _this;
    }
    OrthographyPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var settings;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // ------ Init -------- //
                        self = this;
                        this.emitter = new obsidian.Events();
                        settings = new OrthographySettings(this, this.emitter);
                        return [4 /*yield*/, settings.loadSettings()];
                    case 1:
                        _a.sent();
                        this.settings = settings;
                        // this.addSettingTab(new OrthographySettingTab(this.app, settings, this));
                        this.initOrthographyToggler();
                        this.initOrthographyPopup();
                        this.initOrthographyEditor();
                        // ------- Events -------- //
                        this.emitter.on('orthography:open', this.onPopupOpen);
                        this.emitter.on('orthography:close', this.onPopupClose);
                        this.emitter.on('orthography:run', this.getDataFunc);
                        this.emitter.on('orthography:replace', this.onReplaceWord);
                        // NOTE: find a better way to do this
                        // Listen to changes in the editor
                        this.registerDomEvent(document, 'click', function () {
                            if (_this.activeEditor)
                                _this.activeEditor.off('change', _this.debounceGetDataFunc);
                            _this.activeEditor = _this.getEditor();
                            _this.activeEditor.on('change', _this.debounceGetDataFunc);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    OrthographyPlugin.prototype.onunload = function () {
        this.emitter.off('orthography:open', this.onPopupOpen);
        this.emitter.off('orthography:close', this.onPopupClose);
        this.emitter.off('orthography:run', this.onRunFromPopup);
        this.emitter.off('orthography:replace', this.onReplaceWord);
        if (this.activeEditor)
            this.activeEditor.off('change', this.debounceGetDataFunc);
        this.toggler.destroy();
        this.popup.destroy();
        this.editor.destroy();
        this.hints = null;
        this.activeEditor = null;
    };
    OrthographyPlugin.prototype.initOrthographyToggler = function () {
        var _a = this, app = _a.app, settings = _a.settings, emitter = _a.emitter;
        this.toggler = new OrthographyToggler(app, settings, emitter);
        this.toggler.init();
    };
    OrthographyPlugin.prototype.initOrthographyPopup = function () {
        var _a = this, app = _a.app, settings = _a.settings, emitter = _a.emitter;
        this.popup = new OrthographyPopup(app, settings, emitter);
        this.popup.init();
    };
    OrthographyPlugin.prototype.initOrthographyEditor = function () {
        var _a = this, app = _a.app, settings = _a.settings;
        this.editor = new OrthographyEditor(app, settings);
        this.editor.init();
    };
    OrthographyPlugin.prototype.getEditor = function () {
        var activeLeaf = this.app.workspace.activeLeaf;
        return activeLeaf.view.sourceMode.cmEditor;
    };
    OrthographyPlugin.prototype.onChangeText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.popup.created)
                    return [2 /*return*/];
                this.runChecker();
                return [2 /*return*/];
            });
        });
    };
    OrthographyPlugin.prototype.onRunFromPopup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.popup.created)
                    return [2 /*return*/];
                this.editor.destroy();
                this.popup.setLoader();
                this.activeEditor = this.getEditor();
                this.runChecker();
                return [2 /*return*/];
            });
        });
    };
    OrthographyPlugin.prototype.runChecker = function () {
        return __awaiter(this, void 0, void 0, function () {
            var text, _a, alerts;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.toggler.setLoading();
                        text = this.activeEditor.getValue();
                        _a = this;
                        return [4 /*yield*/, this.fetchData(text)];
                    case 1:
                        _a.hints = _b.sent();
                        if (this.hints instanceof TypeError) {
                            this.popup.removeLoader();
                            this.toggler.removeLoading();
                            new obsidian.Notice('The server is not responding. Please check your Internet connection.');
                            return [2 /*return*/];
                        }
                        if (this.hints && this.hints.alerts && this.hints.alerts.length) {
                            alerts = formatAlerts(this.hints.alerts);
                            this.editor.highlightWords(this.activeEditor, alerts);
                            this.popup.update({
                                alerts: sortAlerts(alerts)
                            });
                        }
                        else {
                            new obsidian.Notice('Spelling errors not found!');
                            this.popup.removeLoader();
                        }
                        this.toggler.removeLoading();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrthographyPlugin.prototype.onPopupOpen = function () {
        self.popup.create();
    };
    OrthographyPlugin.prototype.onPopupClose = function () {
        self.editor.destroy();
        if (self.activeEditor)
            self.activeEditor.doc.getAllMarks().forEach(function (m) { return m.clear(); });
        self.popup.destroy();
        self.toggler.reset();
        if (self.aborter) {
            self.aborter.abort();
            self.aborter = null;
        }
    };
    OrthographyPlugin.prototype.onReplaceWord = function (event) {
        var origWordLen = event.currentTarget.dataset.text.length;
        var newWord = event.currentTarget.dataset.toreplace;
        var begin = event.currentTarget.dataset.begin;
        var end = begin + origWordLen;
        self.editor.replaceWord(self.activeEditor, {
            begin: +begin,
            end: +end,
            len: +origWordLen
        }, newWord);
    };
    OrthographyPlugin.prototype.fetchData = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var signal, url, params, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (self.aborter)
                            self.aborter.abort();
                        self.popup.disable();
                        self.aborter = new AbortController();
                        signal = self.aborter.signal;
                        url = new URL(API_URL_GRAMMAR);
                        params = { text: text };
                        Object.keys(params).forEach(function (key) {
                            return url.searchParams.append(key, params[key]);
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, fetch(url, {
                                method: 'GET',
                                signal: signal
                            })];
                    case 2:
                        response = _a.sent();
                        self.aborter = null;
                        return [4 /*yield*/, response.json()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        error_1 = _a.sent();
                        return [2 /*return*/, error_1];
                    case 5:
                        self.popup.enable();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return OrthographyPlugin;
}(obsidian.Plugin));

module.exports = OrthographyPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9zZXR0aW5ncy9vcnRob2dyYXBoeVNldHRpbmdzLnRzIiwic3JjL3NldHRpbmdzL29ydGhvZ3JhcGh5U2V0dGluZ1RhYi50cyIsInNyYy9jc3NDbGFzc2VzLnRzIiwic3JjL29ydGhvZ3JhcGh5L1VJRWxlbWVudHMvVUlDb250cm9scy50cyIsInNyYy9vcnRob2dyYXBoeS9VSUVsZW1lbnRzL1VJSGludHMudHMiLCJzcmMvb3J0aG9ncmFwaHkvVUlFbGVtZW50cy9VSUhpbnRzRmFsbGJhY2sudHMiLCJzcmMvb3J0aG9ncmFwaHkvVUlFbGVtZW50cy9VSUxvYWRlci50cyIsInNyYy9vcnRob2dyYXBoeS9VSUVsZW1lbnRzL1VJQmFyLnRzIiwic3JjL29ydGhvZ3JhcGh5L29ydGhvZ3JhcGh5UG9wdXAudHMiLCJzcmMvY29uc3RhbnRzLnRzIiwic3JjL29ydGhvZ3JhcGh5L29ydGhvZ3JhcGh5VG9nZ2xlci50cyIsInNyYy9vcnRob2dyYXBoeS9vcnRob2dyYXBoeUVkaXRvci50cyIsInNyYy9vcnRob2dyYXBoeS9oZWxwZXJzL2RlYm91bmNlLnRzIiwic3JjL29ydGhvZ3JhcGh5L2hlbHBlcnMvZm9ybWF0dGVycy50cyIsInNyYy9jb25maWcudHMiLCJzcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgRXZlbnRzIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHR5cGUgT3J0aG9ncmFwaHlQbHVnaW4gZnJvbSAnLi4vbWFpbic7XG5cbmludGVyZmFjZSBTZXR0aW5nc0RhdGEge1xuICBkaXNwbGF5UnVubmVyOiBib29sZWFuO1xuICB1c2VHcmFtbWFyOiBib29sZWFuO1xuICBsYW5ndWFnZTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0RGF0YSgpOiBTZXR0aW5nc0RhdGEge1xuICByZXR1cm4ge1xuICAgIGRpc3BsYXlSdW5uZXI6IHRydWUsXG4gICAgdXNlR3JhbW1hcjogZmFsc2UsXG4gICAgbGFuZ3VhZ2U6ICdlbiwgcnUsIHVrJ1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgT3J0aG9ncmFwaHlTZXR0aW5ncyB7XG4gIHByaXZhdGUgZGF0YTogU2V0dGluZ3NEYXRhO1xuICBwcml2YXRlIGVtaXR0ZXI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsdWdpbjogT3J0aG9ncmFwaHlQbHVnaW4sIGVtaXR0ZXI6IEV2ZW50cykge1xuICAgIHRoaXMuZGF0YSA9IGdldERlZmF1bHREYXRhKCk7XG4gICAgdGhpcy5lbWl0dGVyID0gZW1pdHRlcjtcbiAgfVxuXG4gIGdldCBkaXNwbGF5UnVubmVyKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcztcbiAgICByZXR1cm4gZGF0YS5kaXNwbGF5UnVubmVyO1xuICB9XG5cbiAgc2V0IGRpc3BsYXlSdW5uZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXM7XG4gICAgZGF0YS5kaXNwbGF5UnVubmVyID0gdmFsdWU7XG4gICAgdGhpcy5lbWl0dGVyLnRyaWdnZXIoJ29uVXBkYXRlU2V0dGluZ3MnLCB0aGlzLmRhdGEpO1xuICB9XG5cbiAgZ2V0IHVzZUdyYW1tYXIoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzO1xuICAgIHJldHVybiBkYXRhLnVzZUdyYW1tYXI7XG4gIH1cblxuICBzZXQgdXNlR3JhbW1hcih2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcztcbiAgICBkYXRhLnVzZUdyYW1tYXIgPSB2YWx1ZTtcbiAgICB0aGlzLmVtaXR0ZXIudHJpZ2dlcignb25VcGRhdGVTZXR0aW5ncycsIHRoaXMuZGF0YSk7XG4gIH1cblxuICBnZXQgbGFuZ3VhZ2UoKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXM7XG4gICAgcmV0dXJuIGRhdGEubGFuZ3VhZ2U7XG4gIH1cblxuICBzZXQgbGFuZ3VhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcztcbiAgICBkYXRhLmxhbmd1YWdlID0gdmFsdWU7XG4gICAgdGhpcy5lbWl0dGVyLnRyaWdnZXIoJ29uVXBkYXRlU2V0dGluZ3MnLCB0aGlzLmRhdGEpO1xuICB9XG5cbiAgYXN5bmMgbG9hZFNldHRpbmdzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgcGx1Z2luIH0gPSB0aGlzO1xuICAgIHRoaXMuZGF0YSA9IE9iamVjdC5hc3NpZ24oZ2V0RGVmYXVsdERhdGEoKSwgYXdhaXQgcGx1Z2luLmxvYWREYXRhKCkpO1xuICB9XG5cbiAgYXN5bmMgc2F2ZVNldHRpbmdzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgcGx1Z2luLCBkYXRhIH0gPSB0aGlzO1xuICAgIGlmIChwbHVnaW4gJiYgZGF0YSkge1xuICAgICAgYXdhaXQgcGx1Z2luLnNhdmVEYXRhKGRhdGEpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQXBwLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHsgT3J0aG9ncmFwaHlTZXR0aW5ncyB9IGZyb20gJ3NyYy9zZXR0aW5ncyc7XG5pbXBvcnQgdHlwZSBPcnRob2dyYXBoeVBsdWdpbiBmcm9tICcuLi9tYWluJztcblxuZXhwb3J0IGNsYXNzIE9ydGhvZ3JhcGh5U2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBhcHA6IEFwcCxcbiAgICBwcml2YXRlIHNldHRpbmdzOiBPcnRob2dyYXBoeVNldHRpbmdzLFxuICAgIHBsdWdpbjogT3J0aG9ncmFwaHlQbHVnaW5cbiAgKSB7XG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xuICB9XG5cbiAgZGlzcGxheSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lckVsLCBzZXR0aW5ncyB9ID0gdGhpcztcblxuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG4gICAgT3J0aG9ncmFwaHlTZXR0aW5nVGFiLnNldERpc3BsYXlSdW5uZXIoY29udGFpbmVyRWwsIHNldHRpbmdzKTtcbiAgICBPcnRob2dyYXBoeVNldHRpbmdUYWIuc2V0R3JhbW1hcihjb250YWluZXJFbCwgc2V0dGluZ3MpO1xuICAgIE9ydGhvZ3JhcGh5U2V0dGluZ1RhYi5zZXRMYW5ndWFnZShjb250YWluZXJFbCwgc2V0dGluZ3MpO1xuICB9XG5cbiAgc3RhdGljIHNldERpc3BsYXlSdW5uZXIoXG4gICAgY29udGFpbmVyRWw6IEhUTUxFbGVtZW50LFxuICAgIHNldHRpbmdzOiBPcnRob2dyYXBoeVNldHRpbmdzXG4gICk6IHZvaWQge1xuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ1Nob3cgYnV0dG9uJylcbiAgICAgIC5zZXREZXNjKCdCdXR0b24gZm9yIG9ydGhvZ3JhcGh5IGNoZWNraW5nJylcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHNldHRpbmdzLmRpc3BsYXlSdW5uZXIpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHNldHRpbmdzLmRpc3BsYXlSdW5uZXIgPSB2YWx1ZTtcbiAgICAgICAgICBzZXR0aW5ncy5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBzdGF0aWMgc2V0R3JhbW1hcihcbiAgICBjb250YWluZXJFbDogSFRNTEVsZW1lbnQsXG4gICAgc2V0dGluZ3M6IE9ydGhvZ3JhcGh5U2V0dGluZ3NcbiAgKTogdm9pZCB7XG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnR3JhbW1hcmx5JylcbiAgICAgIC5zZXREZXNjKCdVc2UgZ3JhbW1hcmx5IHRvIGZpbmQgYW5kIGNvcnJlY3QgZXJyb3JzLicpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZShzZXR0aW5ncy51c2VHcmFtbWFyKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICBzZXR0aW5ncy51c2VHcmFtbWFyID0gdmFsdWU7XG4gICAgICAgICAgc2V0dGluZ3Muc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgc3RhdGljIHNldExhbmd1YWdlKFxuICAgIGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCxcbiAgICBzZXR0aW5nczogT3J0aG9ncmFwaHlTZXR0aW5nc1xuICApOiB2b2lkIHtcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdMYW5ndWFnZSBzZXR0aW5nJylcbiAgICAgIC5zZXREZXNjKCdTZWxlY3QgbGFuZ3VhZ2UnKVxuICAgICAgLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT5cbiAgICAgICAgZHJvcGRvd25cbiAgICAgICAgICAuYWRkT3B0aW9uKCdlbicsICdFbmdsaXNoJylcbiAgICAgICAgICAuYWRkT3B0aW9uKCdydScsICdSdXNzaWFuJylcbiAgICAgICAgICAuYWRkT3B0aW9uKCd1aycsICdVa3JhaW5lJylcbiAgICAgICAgICAuYWRkT3B0aW9uKCdlbiwgcnUsIHVrJywgJ0FsbCcpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgc2V0dGluZ3MubGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHNldHRpbmdzLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG59XG4iLCIvLyBHcmFtbWVyIHBvcHVwXG5leHBvcnQgY29uc3QgT19QT1BVUCA9ICdvYnNpZGlhbi1vcnRob2dyYXBoeS1wb3B1cCc7XG5leHBvcnQgY29uc3QgT19QT1BVUF9ESVNBQkxFRCA9ICdvYnNpZGlhbi1vcnRob2dyYXBoeS1wb3B1cC0tZGlzYWJsZWQnO1xuZXhwb3J0IGNvbnN0IE9fUE9QVVBfQ09OVFJPTFMgPSAnb2JzaWRpYW4tb3J0aG9ncmFwaHktcG9wdXAtY29udHJvbHMnO1xuZXhwb3J0IGNvbnN0IE9fUE9QVVBfSVRFTSA9ICdvYnNpZGlhbi1vcnRob2dyYXBoeS1wb3B1cC1pdGVtJztcbmV4cG9ydCBjb25zdCBPX1BPUFVQX1JFU0laRUQgPSAnb2JzaWRpYW4tb3J0aG9ncmFwaHktcG9wdXAtLXJlc2l6ZWQnO1xuZXhwb3J0IGNvbnN0IE9fUE9QVVBfSVRFTV9PUEVORUQgPSAnb2JzaWRpYW4tb3J0aG9ncmFwaHktcG9wdXAtaXRlbS0tb3BlbmVkJztcbmV4cG9ydCBjb25zdCBPX1BPUFVQX1dPUkRfVE9fUkVQTEFDRSA9ICdvYnNpZGlhbi1vcnRob2dyYXBoeS13b3JkLXRvLXJlcGxhY2UnO1xuXG4vLyBSdW5uZXJcbmV4cG9ydCBjb25zdCBPX1JVTk5FUiA9ICdvYnNpZGlhbi1vcnRob2dyYXBoeS1ydW5uZXInO1xuZXhwb3J0IGNvbnN0IE9fUlVOTkVSX0FDVElWRSA9ICdvYnNpZGlhbi1vcnRob2dyYXBoeS1ydW5uZXItLWFjdGl2ZSc7XG5leHBvcnQgY29uc3QgT19SVU5ORVJfQ0xFQVIgPSAnb2JzaWRpYW4tb3J0aG9ncmFwaHktcnVubmVyLS1jbGVhcic7XG5leHBvcnQgY29uc3QgT19SVU5ORVJfSElEREVOID0gJ29ic2lkaWFuLW9ydGhvZ3JhcGh5LXJ1bm5lci0taGlkZGVuJztcbmV4cG9ydCBjb25zdCBPX1JVTk5FUl9MT0FESU5HID0gJ29ic2lkaWFuLW9ydGhvZ3JhcGh5LXJ1bm5lci0tbG9hZGluZyc7XG5cbi8vIFRvb2x0aXBcbmV4cG9ydCBjb25zdCBPX1RPT0xUSVAgPSAnb2JzaWRpYW4tb3J0aG9ncmFwaHktdG9vbHRpcCc7XG5leHBvcnQgY29uc3QgT19UT09MVElQX1ZJU0lCTEUgPSAnb2JzaWRpYW4tb3J0aG9ncmFwaHktdG9vbHRpcC0tdmlzaWJsZSc7XG5leHBvcnQgY29uc3QgT19UT09MVElQX0hJTlQgPSAnb2JzaWRpYW4tb3J0aG9ncmFwaHktdG9vbHRpcC1oaW50JztcblxuLy8gSGlnaGxpZ2h0XG5leHBvcnQgY29uc3QgT19ISUdITElHSFQgPSAnb2JzaWRpYW4tb3J0aG9ncmFwaHktaGlnaGxpZ2h0JztcbmV4cG9ydCBjb25zdCBPX0hJR0hMSUdIVF9GT0NVU0VEID0gJ29ic2lkaWFuLW9ydGhvZ3JhcGh5LWhpZ2hsaWdodC0tZm9jdXNlZCc7XG4iLCJjb25zdCBVSUNvbnRyb2xzID0gKGhhc0RhdGE6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcz1cIm9ic2lkaWFuLW9ydGhvZ3JhcGh5LXBvcHVwLWNvbnRyb2xzXCI+XG4gICAgICAgICR7XG4gICAgICAgICAgaGFzRGF0YVxuICAgICAgICAgICAgPyAnPGJ1dHRvbiBpZD1cInJlbG9hZGVyXCIgY2xhc3M9XCJvYnNpZGlhbi1vcnRob2dyYXBoeS1wb3B1cC1yZWxvYWRcIiB0aXRsZT1cIlJlc3RhcnQgdGhlIG9ydGhvZ3JhcGh5IGNoZWNrZXJcIj5SZWxvYWQ8L2J1dHRvbj4nXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgIH1cbiAgICAgICAgPGRpdiBpZD1cImNsb3NlclwiIGNsYXNzPVwib2JzaWRpYW4tb3J0aG9ncmFwaHktcG9wdXAtY2xvc2VcIiB0aXRsZT1cIkNsb3NlIHBvcHVwXCI+4pyVPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVUlDb250cm9scztcbiIsImltcG9ydCB7IElEYXRhIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XG5cbmNvbnN0IHJlbmRlckhpbnRzID0gKGNhcmQ6IElEYXRhLCBpbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgY29uc3QgeyByZXBsYWNlbWVudHMsIHRleHQsIGJlZ2luLCBoaWdobGlnaHRUZXh0IH0gPSBjYXJkO1xuICBpZiAoY2FyZC5jYXRlZ29yeSA9PT0gJ0RldGVybWluZXJzJykge1xuICAgIHJldHVybiByZXBsYWNlbWVudHNcbiAgICAgIC5tYXAoKGl0ZW06IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBkYXRhLXRvcmVwbGFjZT1cIiR7aXRlbX1cIlxuICAgICAgICAgICAgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJcbiAgICAgICAgICAgIGRhdGEtYmVnaW49XCIke2JlZ2lufVwiXG4gICAgICAgICAgICBkYXRhLXRleHQ9XCIke3RleHR9XCJcbiAgICAgICAgICAgIGNsYXNzPVwib2JzaWRpYW4tb3J0aG9ncmFwaHktd29yZC10by1yZXBsYWNlIG9ic2lkaWFuLW9ydGhvZ3JhcGh5LXBvcHVwLXJlcGxhY2VtZW50XCJcbiAgICAgICAgICAgIHRpdGxlPVwiQ2xpY2sgdG8gY29ycmVjdCB5b3VyIHNwZWxsaW5nXCI+XG4gICAgICAgICAgICAgIDxiPiR7aXRlbX08L2I+Jm5ic3Ake2hpZ2hsaWdodFRleHR9XG4gICAgICAgICAgPC9zcGFuPmA7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJ29yJyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0gRk9SIFJFTU9WRSBISU5UUyAtLS0tLS0tLS0tLSAvL1xuICBpZiAoXG4gICAgY2FyZC5jYXRlZ29yeSA9PT0gJ0Zvcm1hdHRpbmcnIHx8XG4gICAgY2FyZC5jYXRlZ29yeSA9PT0gJ0Jhc2ljUHVuY3QnIHx8XG4gICAgY2FyZC5jYXRlZ29yeSA9PT0gJ1dvcmRpbmVzcycgfHxcbiAgICBjYXJkLmNhdGVnb3J5ID09PSAnQ29uanVuY3Rpb25zJ1xuICApIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHNwYW5cbiAgICAgICAgZGF0YS1iZWdpbj1cIiR7YmVnaW59XCJcbiAgICAgICAgZGF0YS10ZXh0PVwiJHt0ZXh0fVwiXG4gICAgICAgIGRhdGEtdG9yZXBsYWNlPVwiJHtyZXBsYWNlbWVudHNbMF19XCJcbiAgICAgICAgY2xhc3M9XCJvYnNpZGlhbi1vcnRob2dyYXBoeS13b3JkLXRvLXJlcGxhY2Ugb2JzaWRpYW4tb3J0aG9ncmFwaHktcG9wdXAtaGlnaHRsaWdoLS1yZWRcIj4ke1xuICAgICAgICAgIGhpZ2hsaWdodFRleHQgfHwgJydcbiAgICAgICAgfVxuICAgICAgPC9zcGFuPlxuICAgIGA7XG4gIH1cbiAgaWYgKGNhcmQuY2F0ZWdvcnkgPT09ICdQcmVwb3NpdGlvbnMnKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VtZW50c1xuICAgICAgLm1hcCgoaXRlbTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgZGF0YS10b3JlcGxhY2U9XCIke2l0ZW19XCJcbiAgICAgICAgICBkYXRhLWluZGV4PVwiJHtpbmRleH1cIlxuICAgICAgICAgIGRhdGEtYmVnaW49XCIke2JlZ2lufVwiXG4gICAgICAgICAgZGF0YS10ZXh0PVwiJHtoaWdobGlnaHRUZXh0fVwiXG4gICAgICAgICAgY2xhc3M9XCJvYnNpZGlhbi1vcnRob2dyYXBoeS13b3JkLXRvLXJlcGxhY2Ugb2JzaWRpYW4tb3J0aG9ncmFwaHktcG9wdXAtcmVwbGFjZW1lbnRcIlxuICAgICAgICAgIHRpdGxlPVwiQ2xpY2sgdG8gY29ycmVjdCB5b3VyIHNwZWxsaW5nXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxiPiR7aXRlbX08L2I+Jm5ic3Ake2hpZ2hsaWdodFRleHR9XG4gICAgICAgIDwvc3Bhbj5gO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCdvcicpO1xuICB9XG4gIHJldHVybiByZXBsYWNlbWVudHNcbiAgICAubWFwKChpdGVtOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwib2JzaWRpYW4tb3J0aG9ncmFwaHktcG9wdXAtY2FyZC0tbGluZS10aHJvdWdoXCI+JHtoaWdobGlnaHRUZXh0fTwvc3Bhbj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBkYXRhLXRvcmVwbGFjZT1cIiR7aXRlbX1cIlxuICAgICAgICAgIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiXG4gICAgICAgICAgZGF0YS1iZWdpbj1cIiR7YmVnaW59XCJcbiAgICAgICAgICBkYXRhLXRleHQ9XCIke3RleHR9XCJcbiAgICAgICAgICBjbGFzcz1cIm9ic2lkaWFuLW9ydGhvZ3JhcGh5LXdvcmQtdG8tcmVwbGFjZSBvYnNpZGlhbi1vcnRob2dyYXBoeS1wb3B1cC1yZXBsYWNlbWVudFwiXG4gICAgICAgICAgdGl0bGU9XCJDbGljayB0byBjb3JyZWN0IHlvdXIgc3BlbGxpbmdcIlxuICAgICAgICA+XG4gICAgICAgICAgJHtpdGVtfVxuICAgICAgICA8L3NwYW4+YDtcbiAgICB9KVxuICAgIC5qb2luKCdvcicpO1xufTtcblxuY29uc3QgVUlIaW50cyA9IChhbGVydHM6IElEYXRhW10pOiBzdHJpbmcgPT4ge1xuICBpZiAoIWFsZXJ0cyB8fCAhYWxlcnRzLmxlbmd0aCkgcmV0dXJuICcnO1xuICByZXR1cm4gYWxlcnRzXG4gICAgLm1hcCgoY2FyZDogSURhdGEsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaW1wYWN0LFxuICAgICAgICBoaWdobGlnaHRUZXh0LFxuICAgICAgICBtaW5pY2FyZFRpdGxlLFxuICAgICAgICBleHBsYW5hdGlvbixcbiAgICAgICAgY2FyZExheW91dCxcbiAgICAgICAgYmVnaW5cbiAgICAgIH0gPSBjYXJkO1xuICAgICAgcmV0dXJuIGBcbiAgICAgICAgICA8ZGl2IGRhdGEtYmVnaW49XCIke2JlZ2lufVwiIGlkPVwib2JzaWRpYW4tb3J0aG9ncmFwaHktcG9wdXAtaXRlbS0ke2luZGV4fVwiIGNsYXNzPVwib2JzaWRpYW4tb3J0aG9ncmFwaHktcG9wdXAtaXRlbSAke2ltcGFjdH1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvYnNpZGlhbi1vcnRob2dyYXBoeS1wb3B1cC1taW5pY2FyZFwiPlxuICAgICAgICAgICAgICA8ZGl2PiR7aGlnaGxpZ2h0VGV4dCB8fCAnJ308L2Rpdj5cbiAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICBtaW5pY2FyZFRpdGxlXG4gICAgICAgICAgICAgICAgICA/IGA8ZGl2IGNsYXNzPVwib2JzaWRpYW4tb3J0aG9ncmFwaHktcG9wdXAtaXRlbS1zdWdnXCI+JHttaW5pY2FyZFRpdGxlfTwvZGl2PmBcbiAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib2JzaWRpYW4tb3J0aG9ncmFwaHktcG9wdXAtYXJyb3dzXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMCAxMFwiPjxwYXRoIGQ9XCJNNSA0LjNMLjg1LjE0Yy0uMi0uMi0uNS0uMi0uNyAwLS4yLjItLjIuNSAwIC43TDUgNS43IDkuODUuODdjLjItLjIuMi0uNSAwLS43LS4yLS4yLS41LS4yLS43IDBMNSA0LjI4elwiIHN0cm9rZT1cIm5vbmVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAzKSByb3RhdGUoMClcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMCAxMFwiPjxwYXRoIGQ9XCJNNSA0LjNMLjg1LjE0Yy0uMi0uMi0uNS0uMi0uNyAwLS4yLjItLjIuNSAwIC43TDUgNS43IDkuODUuODdjLjItLjIuMi0uNSAwLS43LS4yLS4yLS41LS4yLS43IDBMNSA0LjI4elwiIHN0cm9rZT1cIm5vbmVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAzKSByb3RhdGUoMClcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib2JzaWRpYW4tb3J0aG9ncmFwaHktcG9wdXAtY2FyZFwiPlxuICAgICAgICAgICAgICA8ZGl2PiR7Y2FyZExheW91dC5ncm91cCB8fCAnJ308L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAke3JlbmRlckhpbnRzKGNhcmQsIGluZGV4KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+JHtleHBsYW5hdGlvbiB8fCAnJ308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH0pXG4gICAgLmpvaW4oJycpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVUlIaW50cztcbiIsImNvbnN0IFVJSGludHNGYWxsYmFjayA9ICgpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBoaW50c0ZhbGxiYWNrID0gYFxuICAgIDxkaXYgY2xhc3M9XCJvYnNpZGlhbi1vcnRob2dyYXBoeS1oaW50cy1mYWxsYmFja1wiPlxuICAgICAgPGJ1dHRvbiBpZD1cInJ1bm5lclwiPlxuICAgICAgICBSdW4gb3J0aG9ncmFwaHkgY2hlY2tcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPHA+QWxwaGEgdmVyc2lvbjwvcD5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICByZXR1cm4gaGludHNGYWxsYmFjaztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVJSGludHNGYWxsYmFjaztcbiIsImNvbnN0IFVJTG9hZGVyID0gKCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGxvYWRlciA9IGBcbiAgICA8ZGl2IGNsYXNzPVwib2JzaWRpYW4tb3J0aG9ncmFwaHktbG9hZGVyXCI+XG4gICAgICBDaGVja2luZy4uLlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIHJldHVybiBsb2FkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVSUxvYWRlcjtcbiIsImltcG9ydCBVSUNvbnRyb2xzIGZyb20gJy4vVUlDb250cm9scyc7XG5pbXBvcnQgVUlIaW50cyBmcm9tICcuL1VJSGludHMnO1xuaW1wb3J0IHsgSUFsZXJ0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgVUlIaW50c0ZhbGxiYWNrIGZyb20gJy4vVUlIaW50c0ZhbGxiYWNrJztcbmltcG9ydCBVSUxvYWRlciBmcm9tICcuL1VJTG9hZGVyJztcblxuY29uc3QgVUlCYXIgPSAoZGF0YTogSUFsZXJ0LCBsb2FkaW5nOiBib29sZWFuKTogc3RyaW5nID0+IHtcbiAgY29uc3QgaGFzRGF0YSA9IGRhdGEgJiYgZGF0YS5hbGVydHMgJiYgZGF0YS5hbGVydHMubGVuZ3RoO1xuICBjb25zdCBjb250cm9sczogc3RyaW5nID0gVUlDb250cm9scyghIWhhc0RhdGEpO1xuICBjb25zdCBmYWxsYmFjayA9IGxvYWRpbmcgPyBVSUxvYWRlcigpIDogVUlIaW50c0ZhbGxiYWNrKCk7XG4gIGNvbnN0IGNhcmRzID0gaGFzRGF0YSA/IFVJSGludHMoZGF0YS5hbGVydHMpIDogZmFsbGJhY2s7XG4gIHJldHVybiBgJHtjb250cm9sc30ke2NhcmRzfWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVSUJhcjtcbiIsImltcG9ydCB7IEFwcCwgRXZlbnRzIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHsgT3J0aG9ncmFwaHlTZXR0aW5ncyB9IGZyb20gJ3NyYy9zZXR0aW5ncyc7XG5pbXBvcnQge1xuICBPX1BPUFVQLFxuICBPX1BPUFVQX0RJU0FCTEVELFxuICBPX1BPUFVQX0NPTlRST0xTLFxuICBPX1BPUFVQX0lURU0sXG4gIE9fUE9QVVBfUkVTSVpFRCxcbiAgT19QT1BVUF9JVEVNX09QRU5FRCxcbiAgT19QT1BVUF9XT1JEX1RPX1JFUExBQ0UsXG4gIE9fSElHSExJR0hUX0ZPQ1VTRURcbn0gZnJvbSAnLi4vY3NzQ2xhc3Nlcyc7XG5pbXBvcnQgeyBJQWxlcnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuaW1wb3J0IFVJQmFyIGZyb20gJy4vVUlFbGVtZW50cy9VSUJhcic7XG5cbmxldCBzZWxmOiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBPcnRob2dyYXBoeVBvcHVwIHtcbiAgcHJpdmF0ZSBhcHA6IEFwcDtcbiAgcHJpdmF0ZSBzZXR0aW5nczogT3J0aG9ncmFwaHlTZXR0aW5ncztcbiAgcHJpdmF0ZSBlbWl0dGVyOiBhbnk7XG4gIHByaXZhdGUgc2l6ZXI6IGFueTtcbiAgcHJpdmF0ZSBtb3ZlcjogYW55O1xuICBwcml2YXRlIGNsb3NlcjogYW55O1xuICBwcml2YXRlIHJlbG9hZGVyOiBhbnk7XG4gIHByaXZhdGUgcnVubmVyOiBhbnk7XG4gIHByaXZhdGUgcG9wdXBPZmZzZXQ6IG51bWJlcltdID0gWzAsIDBdO1xuICBwcml2YXRlIG1vdmVyU2VsZWN0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBjcmVhdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHNldHRpbmdzOiBPcnRob2dyYXBoeVNldHRpbmdzLCBlbWl0dGVyOiBFdmVudHMpIHtcbiAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5lbWl0dGVyID0gZW1pdHRlcjtcbiAgfVxuXG4gIHB1YmxpYyBpbml0KCk6IHZvaWQge1xuICAgIHNlbGYgPSB0aGlzO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcbiAgICBzZWxmLmNyZWF0ZWQgPSB0cnVlO1xuICAgIHNlbGYucG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWxmLnBvcHVwLmNsYXNzTGlzdC5hZGQoT19QT1BVUCk7XG4gICAgc2VsZi5wb3B1cC5pZCA9IE9fUE9QVVA7XG4gICAgY29uc3QgYmFyID0gVUlCYXIobnVsbCwgZmFsc2UpO1xuICAgIHNlbGYucG9wdXAuaW5uZXJIVE1MID0gYmFyO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VsZi5wb3B1cCk7XG4gICAgc2VsZi5zZXRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgIHNlbGYuY3JlYXRlZCA9IGZhbHNlO1xuICAgIHNlbGYucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChPX1BPUFVQKTtcbiAgICBpZiAocG9wdXApIHBvcHVwLnJlbW92ZSgpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShkYXRhOiBJQWxlcnQsIGxvYWRpbmc/OiBib29sZWFuKTogdm9pZCB7XG4gICAgc2VsZi5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICBjb25zdCBiYXIgPSBVSUJhcihkYXRhLCBsb2FkaW5nKTtcbiAgICBzZWxmLnBvcHVwLmlubmVySFRNTCA9IGJhcjtcbiAgICBzZWxmLnNldExpc3RlbmVycygpO1xuICB9XG5cbiAgcHVibGljIHNldExvYWRlcigpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZShudWxsLCB0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVMb2FkZXIoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUobnVsbCwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIGRpc2FibGUoKTogdm9pZCB7XG4gICAgY29uc3QgaGludHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtPX1BPUFVQfWApO1xuICAgIGlmIChoaW50cykge1xuICAgICAgaGludHMuY2xhc3NMaXN0LmFkZChPX1BPUFVQX0RJU0FCTEVEKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZW5hYmxlKCk6IHZvaWQge1xuICAgIGNvbnN0IGhpbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7T19QT1BVUH1gKTtcbiAgICBpZiAoaGludHMpIHtcbiAgICAgIGhpbnRzLmNsYXNzTGlzdC5yZW1vdmUoT19QT1BVUF9ESVNBQkxFRCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgbWluaWNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7T19QT1BVUF9JVEVNfWApO1xuICAgIG1pbmljYXJkcy5mb3JFYWNoKChtYykgPT4gbWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxmLm9uQ2xpY2tCeUhpbnQpKTtcbiAgICBtaW5pY2FyZHMuZm9yRWFjaCgobWMpID0+XG4gICAgICBtYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBzZWxmLm9uRm9jdXNXb3JkKVxuICAgICk7XG4gICAgbWluaWNhcmRzLmZvckVhY2goKG1jKSA9PlxuICAgICAgbWMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBzZWxmLm9uUmVtb3ZlRm9jdXNXb3JkKVxuICAgICk7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIGAuJHtPX1BPUFVQX1dPUkRfVE9fUkVQTEFDRX1gXG4gICAgKTtcbiAgICByZXBsYWNlbWVudHMuZm9yRWFjaCgocnApID0+XG4gICAgICBycC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGYub25SZXBsYWNlV29yZClcbiAgICApO1xuICAgIHNlbGYucmVsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVsb2FkZXInKTtcbiAgICBpZiAoc2VsZi5yZWxvYWRlcikge1xuICAgICAgc2VsZi5yZWxvYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGYub25SdW4pO1xuICAgIH1cbiAgICBzZWxmLnJ1bm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdydW5uZXInKTtcbiAgICBpZiAoc2VsZi5ydW5uZXIpIHtcbiAgICAgIHNlbGYucnVubmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZi5vblJ1bik7XG4gICAgfVxuICAgIHNlbGYuc2l6ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l6ZXInKTtcbiAgICBpZiAoc2VsZi5zaXplcikge1xuICAgICAgc2VsZi5zaXplci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGYub25SZXNpemUpO1xuICAgIH1cbiAgICBzZWxmLmNsb3NlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZXInKTtcbiAgICBpZiAoc2VsZi5jbG9zZXIpIHtcbiAgICAgIHNlbGYuY2xvc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZi5vbkNsb3NlKTtcbiAgICB9XG4gICAgc2VsZi5tb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke09fUE9QVVBfQ09OVFJPTFN9YCk7XG4gICAgc2VsZi5tb3Zlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzZWxmLm1vdmVySXNEb3duKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc2VsZi5vbk1vdXNlVXApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHNlbGYub25Nb3VzZU1vdmUpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgbWluaWNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7T19QT1BVUF9JVEVNfWApO1xuICAgIG1pbmljYXJkcy5mb3JFYWNoKChtYykgPT5cbiAgICAgIG1jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZi5vbkNsaWNrQnlIaW50KVxuICAgICk7XG4gICAgbWluaWNhcmRzLmZvckVhY2goKG1jKSA9PlxuICAgICAgbWMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgc2VsZi5vbkZvY3VzV29yZClcbiAgICApO1xuICAgIG1pbmljYXJkcy5mb3JFYWNoKChtYykgPT5cbiAgICAgIG1jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0Jywgc2VsZi5vblJlbW92ZUZvY3VzV29yZClcbiAgICApO1xuICAgIGNvbnN0IHJlcGxhY2VtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgLiR7T19QT1BVUF9XT1JEX1RPX1JFUExBQ0V9YFxuICAgICk7XG4gICAgcmVwbGFjZW1lbnRzLmZvckVhY2goKHJwKSA9PlxuICAgICAgcnAucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxmLm9uUmVwbGFjZVdvcmQpXG4gICAgKTtcbiAgICBpZiAoc2VsZi5yZWxvYWRlcikgc2VsZi5yZWxvYWRlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGYub25SdW4pO1xuICAgIGlmIChzZWxmLnJ1bm5lcikgc2VsZi5ydW5uZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxmLm9uUnVuKTtcbiAgICBpZiAoc2VsZi5zaXplcikgc2VsZi5zaXplci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGYub25SZXNpemUpO1xuICAgIGlmIChzZWxmLmNsb3Nlcikgc2VsZi5jbG9zZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxmLm9uQ2xvc2UpO1xuICAgIGlmIChzZWxmLm1vdmVyKVxuICAgICAgc2VsZi5tb3Zlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzZWxmLm1vdmVySXNEb3duKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc2VsZi5vbk1vdXNlVXApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHNlbGYub25Nb3VzZU1vdmUpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkNsaWNrQnlIaW50KGU6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IG9wZW5lZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke09fUE9QVVBfSVRFTV9PUEVORUR9YCk7XG4gICAgb3BlbmVkLmZvckVhY2goKG8pID0+IG8uY2xhc3NMaXN0LnJlbW92ZShPX1BPUFVQX0lURU1fT1BFTkVEKSk7XG4gICAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoT19QT1BVUF9JVEVNX09QRU5FRCkpIHtcbiAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKE9fUE9QVVBfSVRFTV9PUEVORUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChPX1BPUFVQX0lURU1fT1BFTkVEKTtcbiAgICB9XG5cbiAgICBjb25zdCBiZWdpbiA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmJlZ2luO1xuICAgIGlmIChiZWdpbikge1xuICAgICAgc2VsZi5zY3JvbGxUb1dvcmQoYmVnaW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbW92ZXJJc0Rvd24oZTogYW55KSB7XG4gICAgc2VsZi5tb3ZlclNlbGVjdGVkID0gdHJ1ZTtcbiAgICBzZWxmLnBvcHVwT2Zmc2V0ID0gW1xuICAgICAgc2VsZi5wb3B1cC5vZmZzZXRMZWZ0IC0gZS5jbGllbnRYLFxuICAgICAgc2VsZi5wb3B1cC5vZmZzZXRUb3AgLSBlLmNsaWVudFlcbiAgICBdO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1vdXNlVXAoKSB7XG4gICAgc2VsZi5tb3ZlclNlbGVjdGVkID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIG9uTW91c2VNb3ZlKGU6IGFueSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoc2VsZi5tb3ZlclNlbGVjdGVkKSB7XG4gICAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0ge1xuICAgICAgICB4OiBlLmNsaWVudFgsXG4gICAgICAgIHk6IGUuY2xpZW50WVxuICAgICAgfTtcbiAgICAgIHNlbGYucG9wdXAuc3R5bGUubGVmdCA9IGAke21vdXNlUG9zaXRpb24ueCArIHNlbGYucG9wdXBPZmZzZXRbMF19cHhgO1xuICAgICAgc2VsZi5wb3B1cC5zdHlsZS50b3AgPSBgJHttb3VzZVBvc2l0aW9uLnkgKyBzZWxmLnBvcHVwT2Zmc2V0WzFdfXB4YDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uUmVzaXplKCkge1xuICAgIGlmIChzZWxmLnBvcHVwLmNsYXNzTmFtZS5jb250YWlucyhPX1BPUFVQX1JFU0laRUQpKSB7XG4gICAgICBzZWxmLnBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoT19QT1BVUF9SRVNJWkVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5wb3B1cC5jbGFzc0xpc3QuYWRkKE9fUE9QVVBfUkVTSVpFRCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkNsb3NlKCkge1xuICAgIHNlbGYuZW1pdHRlci50cmlnZ2VyKCdvcnRob2dyYXBoeTpjbG9zZScpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkZvY3VzV29yZChlOiBhbnkpIHtcbiAgICBjb25zdCBiZWdpbiA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmJlZ2luO1xuICAgIGNvbnN0IHdvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbYmVnaW49XCIke2JlZ2lufVwiXWApO1xuICAgIGlmICh3b3JkKSB7XG4gICAgICB3b3JkLmNsYXNzTGlzdC5hZGQoT19ISUdITElHSFRfRk9DVVNFRCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvblJlbW92ZUZvY3VzV29yZCgpIHtcbiAgICBjb25zdCB3b3JkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke09fSElHSExJR0hUX0ZPQ1VTRUR9YCk7XG4gICAgd29yZHMuZm9yRWFjaCgodykgPT4gdy5jbGFzc0xpc3QucmVtb3ZlKE9fSElHSExJR0hUX0ZPQ1VTRUQpKTtcbiAgfVxuXG4gIHByaXZhdGUgb25SdW4oKSB7XG4gICAgc2VsZi5lbWl0dGVyLnRyaWdnZXIoJ29ydGhvZ3JhcGh5OnJ1bicpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblJlcGxhY2VXb3JkKGV2ZW50OiBhbnkpIHtcbiAgICBzZWxmLmVtaXR0ZXIudHJpZ2dlcignb3J0aG9ncmFwaHk6cmVwbGFjZScsIGV2ZW50KTtcbiAgICBjb25zdCB7IGluZGV4IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7T19QT1BVUF9JVEVNfS0ke2luZGV4fWApO1xuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHNlbGVjdGVkSXRlbS5yZW1vdmUoKTtcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke09fUE9QVVBfSVRFTX1gKS5sZW5ndGgpIHtcbiAgICAgIHNlbGYucmVtb3ZlTG9hZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbk9wZW5DYXJkKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCB7IHZhbHVlOiBiZWdpbiB9ID0gZXZlbnQuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzLmJlZ2luO1xuICAgIGNvbnN0IHBvcHVwOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtPX1BPUFVQfWApO1xuICAgIGNvbnN0IG9wZW5lZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke09fUE9QVVBfSVRFTV9PUEVORUR9YCk7XG4gICAgb3BlbmVkLmZvckVhY2goKG8pID0+IG8uY2xhc3NMaXN0LnJlbW92ZShPX1BPUFVQX0lURU1fT1BFTkVEKSk7XG4gICAgY29uc3Qgc2VsZWN0ZWQ6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJlZ2luPVwiJHtiZWdpbn1cIl1gKTtcbiAgICBzZWxlY3RlZC5jbGFzc0xpc3QuYWRkKE9fUE9QVVBfSVRFTV9PUEVORUQpO1xuICAgIHBvcHVwLnNjcm9sbFRvcCA9IHNlbGVjdGVkLm9mZnNldFRvcDtcbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsVG9Xb3JkKGJlZ2luOiBudW1iZXIpIHtcbiAgICBjb25zdCBhY3RpdmVFZGl0b3IgPSBzZWxmLmdldEVkaXRvcigpO1xuICAgIGNvbnN0IHNjcm9sbGVyID0gYWN0aXZlRWRpdG9yLmdldFNjcm9sbGVyRWxlbWVudCgpO1xuICAgIHNjcm9sbGVyLnNjcm9sbFRvcCA9ICtiZWdpbiAtIDMwMDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RWRpdG9yKCkge1xuICAgIGNvbnN0IGFjdGl2ZUxlYWY6IGFueSA9IHRoaXMuYXBwLndvcmtzcGFjZS5hY3RpdmVMZWFmO1xuICAgIHJldHVybiBhY3RpdmVMZWFmLnZpZXcuc291cmNlTW9kZS5jbUVkaXRvcjtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IE9fUlVOTkVSX0lDT04gPSAn4oyYJztcbmV4cG9ydCBjb25zdCBPX1JVTk5FUl9JQ09OX0NMRUFSID0gJ+KclSc7XG4iLCJpbXBvcnQgeyBFdmVudHMsIE5vdGljZSB9IGZyb20gJ29ic2lkaWFuJztcbmltcG9ydCB0eXBlIHsgQXBwIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHsgT3J0aG9ncmFwaHlTZXR0aW5ncyB9IGZyb20gJy4uL3NldHRpbmdzJztcbmltcG9ydCB7IE9fUlVOTkVSX0lDT04sIE9fUlVOTkVSX0lDT05fQ0xFQVIgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgT19SVU5ORVIsIE9fUlVOTkVSX0hJRERFTiwgT19SVU5ORVJfTE9BRElORyB9IGZyb20gJy4uL2Nzc0NsYXNzZXMnO1xuXG5pbnRlcmZhY2UgSU9ydGhvZ3JhcGh5VG9nZ2xlciB7XG4gIGluaXQoKTogdm9pZDtcbn1cblxubGV0IHNlbGY6IGFueTtcblxuZXhwb3J0IGNsYXNzIE9ydGhvZ3JhcGh5VG9nZ2xlciBpbXBsZW1lbnRzIElPcnRob2dyYXBoeVRvZ2dsZXIge1xuICBwcml2YXRlIGFwcDogQXBwO1xuICBwcml2YXRlIHNldHRpbmdzOiBPcnRob2dyYXBoeVNldHRpbmdzO1xuICBwcml2YXRlIGVtaXR0ZXI6IGFueTtcbiAgcHJpdmF0ZSB0b2dnbGVyOiBhbnk7XG4gIHByaXZhdGUgc2hvd2VkOiBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgc2V0dGluZ3M6IE9ydGhvZ3JhcGh5U2V0dGluZ3MsIGVtaXR0ZXI6IEV2ZW50cykge1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLmVtaXR0ZXIgPSBlbWl0dGVyO1xuICB9XG5cbiAgcHVibGljIGluaXQoKTogdm9pZCB7XG4gICAgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5jcmVhdGVCdXR0b24oT19SVU5ORVJfSUNPTik7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUxvYWRpbmcoKTtcbiAgICB0aGlzLnRvZ2dsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZSk7XG4gICAgdGhpcy5yZW1vdmVCdXR0b24oKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHNlbGYuZ2V0RWRpdG9yKCkpIHtcbiAgICAgIHNlbGYuc2hvd2VkID0gIXNlbGYuc2hvd2VkO1xuICAgICAgaWYgKHNlbGYuc2hvd2VkKSB7XG4gICAgICAgIHNlbGYudXBkYXRlQnV0dG9uVGV4dChPX1JVTk5FUl9JQ09OX0NMRUFSKTtcbiAgICAgICAgc2VsZi5lbWl0dGVyLnRyaWdnZXIoJ29ydGhvZ3JhcGh5Om9wZW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYudXBkYXRlQnV0dG9uVGV4dChPX1JVTk5FUl9JQ09OKTtcbiAgICAgICAgc2VsZi5yZW1vdmVMb2FkaW5nKCk7XG4gICAgICAgIHNlbGYuZW1pdHRlci50cmlnZ2VyKCdvcnRob2dyYXBoeTpjbG9zZScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXcgTm90aWNlKCdQbGVhc2Ugb3BlbiBhIGZpbGUgZmlyc3QuJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgY29uc3QgcnVubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBPX1JVTk5FUik7XG4gICAgcnVubmVyLmNsYXNzTGlzdC5hZGQoT19SVU5ORVJfSElEREVOKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRMb2FkaW5nKCk6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlci5jbGFzc0xpc3QuYWRkKE9fUlVOTkVSX0xPQURJTkcpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUxvYWRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGVyLmNsYXNzTGlzdC5yZW1vdmUoT19SVU5ORVJfTE9BRElORyk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbW92ZUxvYWRpbmcoKTtcbiAgICB0aGlzLnVwZGF0ZUJ1dHRvblRleHQoT19SVU5ORVJfSUNPTik7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUJ1dHRvbih0ZXh0OiBzdHJpbmcpIHtcbiAgICB0aGlzLnRvZ2dsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGljb24uaW5uZXJUZXh0ID0gdGV4dDtcbiAgICB0aGlzLnRvZ2dsZXIuY2xhc3NMaXN0LmFkZChPX1JVTk5FUik7XG4gICAgdGhpcy50b2dnbGVyLmFwcGVuZENoaWxkKGljb24pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy50b2dnbGVyKTtcbiAgICB0aGlzLnRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUJ1dHRvblRleHQodGV4dDogc3RyaW5nKSB7XG4gICAgY29uc3QgdG9nZ2xlcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtPX1JVTk5FUn0gc3BhbmApO1xuICAgIGlmICh0b2dnbGVyKSB0b2dnbGVyLmlubmVyVGV4dCA9IHRleHQ7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUJ1dHRvbigpIHtcbiAgICBjb25zdCB0b2dnbGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke09fUlVOTkVSfWApO1xuICAgIGlmICh0b2dnbGVyKSB0b2dnbGVyLnJlbW92ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFZGl0b3IoKSB7XG4gICAgY29uc3QgYWN0aXZlTGVhZjogYW55ID0gdGhpcy5hcHAud29ya3NwYWNlLmFjdGl2ZUxlYWY7XG4gICAgcmV0dXJuICEhYWN0aXZlTGVhZi52aWV3LnNvdXJjZU1vZGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IE9ydGhvZ3JhcGh5U2V0dGluZ3MgfSBmcm9tICcuLi9zZXR0aW5ncyc7XG5pbXBvcnQgdHlwZSB7IEFwcCB9IGZyb20gJ29ic2lkaWFuJztcbmltcG9ydCB7IE9fSElHSExJR0hUIH0gZnJvbSAnLi4vY3NzQ2xhc3Nlcyc7XG5pbXBvcnQgeyBJT3JpZ2luYWxXb3JkLCBJRGF0YSB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcblxuaW50ZXJmYWNlIElPcnRob2dyYXBoeUVkaXRvciB7XG4gIGluaXQoKTogdm9pZDtcbn1cblxubGV0IHNlbGY6IGFueTtcblxuZXhwb3J0IGNsYXNzIE9ydGhvZ3JhcGh5RWRpdG9yIGltcGxlbWVudHMgSU9ydGhvZ3JhcGh5RWRpdG9yIHtcbiAgcHJpdmF0ZSBhcHA6IEFwcDtcbiAgcHJpdmF0ZSBzZXR0aW5nczogT3J0aG9ncmFwaHlTZXR0aW5ncztcbiAgcHJpdmF0ZSBoaWdobGlnaHRlZFdvcmRzOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHNldHRpbmdzOiBPcnRob2dyYXBoeVNldHRpbmdzKSB7XG4gICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICB9XG5cbiAgcHVibGljIGluaXQoKTogdm9pZCB7XG4gICAgc2VsZiA9IHRoaXM7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBzZWxmLmNsZWFySGlnaGxpZ2h0V29yZHMoKTtcbiAgfVxuXG4gIHB1YmxpYyBoaWdobGlnaHRXb3JkcyhlZGl0b3I6IGFueSwgYWxlcnRzOiBJRGF0YVtdKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckhpZ2hsaWdodFdvcmRzKCk7XG5cbiAgICBhbGVydHMuZm9yRWFjaCgoYWxlcnQ6IGFueSkgPT4ge1xuICAgICAgY29uc3QgdGV4dExlbmd0aCA9IGFsZXJ0LnRleHQubGVuZ3RoIHx8IGFsZXJ0LmhpZ2hsaWdodFRleHQubGVuZ3RoO1xuICAgICAgY29uc3Qgb3JpZ2luYWxXb3JkID0ge1xuICAgICAgICBiZWdpbjogYWxlcnQuYmVnaW4sXG4gICAgICAgIGVuZDogYWxlcnQuZW5kLFxuICAgICAgICBsZW46IHRleHRMZW5ndGhcbiAgICAgIH07XG4gICAgICB0aGlzLmhpZ2hsaWdodFdvcmQoZWRpdG9yLCBvcmlnaW5hbFdvcmQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoaWdobGlnaHRXb3JkKFxuICAgIGVkaXRvcjogYW55LFxuICAgIG9yaWdpbmFsV29yZDogeyBiZWdpbjogbnVtYmVyOyBlbmQ6IG51bWJlcjsgbGVuOiBudW1iZXIgfVxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb2xSb3cgPSB0aGlzLmdldENvbFJvdyhlZGl0b3IsIG9yaWdpbmFsV29yZCk7XG4gICAgaWYgKCFjb2xSb3cpIHJldHVybjtcbiAgICBjb25zdCB7IGNvbCwgcm93IH0gPSBjb2xSb3c7XG5cbiAgICB0aGlzLmhpZ2hsaWdodGVkV29yZHMgPSBlZGl0b3IubWFya1RleHQoXG4gICAgICB7IGxpbmU6IHJvdywgY2g6IGNvbCB9LFxuICAgICAgeyBsaW5lOiByb3csIGNoOiBjb2wgKyBvcmlnaW5hbFdvcmQubGVuIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogT19ISUdITElHSFQsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBiZWdpbjogb3JpZ2luYWxXb3JkLmJlZ2luLFxuICAgICAgICAgIGVuZDogb3JpZ2luYWxXb3JkLmVuZCxcbiAgICAgICAgICBsZW46IG9yaWdpbmFsV29yZC5sZW5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgcmVwbGFjZVdvcmQoXG4gICAgZWRpdG9yOiBhbnksXG4gICAgb3JpZ2luYWxXb3JkOiBJT3JpZ2luYWxXb3JkLFxuICAgIG5ld1dvcmQ6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBpZiAoIW9yaWdpbmFsV29yZCkgcmV0dXJuO1xuICAgIGNvbnN0IGNvbFJvdyA9IHRoaXMuZ2V0Q29sUm93KGVkaXRvciwgb3JpZ2luYWxXb3JkKTtcbiAgICBpZiAoIWNvbFJvdykgcmV0dXJuO1xuICAgIGNvbnN0IHsgY29sLCByb3cgfSA9IGNvbFJvdztcblxuICAgIGNvbnN0IGRvYyA9IGVkaXRvci5nZXREb2MoKTtcblxuICAgIGNvbnN0IGZyb20gPSB7XG4gICAgICBsaW5lOiByb3csXG4gICAgICBjaDogY29sXG4gICAgfTtcbiAgICBjb25zdCB0byA9IHtcbiAgICAgIGxpbmU6IHJvdyxcbiAgICAgIGNoOiBjb2wgKyBvcmlnaW5hbFdvcmQubGVuXG4gICAgfTtcblxuICAgIGRvYy5yZXBsYWNlUmFuZ2UobmV3V29yZCwgZnJvbSwgdG8pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb2xSb3coXG4gICAgZWRpdG9yOiBhbnksXG4gICAgb3JpZ2luYWxXb3JkOiBJT3JpZ2luYWxXb3JkXG4gICk6IHsgY29sOiBudW1iZXI7IHJvdzogbnVtYmVyIH0ge1xuICAgIGxldCB0dGwgPSAwO1xuICAgIGxldCByb3cgPSAwO1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIGNvbnN0IHsgYmVnaW4gfSA9IG9yaWdpbmFsV29yZDtcblxuICAgIGVkaXRvci5lYWNoTGluZSgobDogYW55KSA9PiB7XG4gICAgICBjb25zdCBzID0gdHRsID09PSAwID8gdHRsIDogdHRsICsgMTtcbiAgICAgIGNvbnN0IGxpbmVUZXh0TGVuZ3RoID0gbC50ZXh0Lmxlbmd0aDtcbiAgICAgIHR0bCArPSBsaW5lVGV4dExlbmd0aDtcblxuICAgICAgaWYgKHJvdyA+IDApIHtcbiAgICAgICAgdHRsKys7XG4gICAgICB9XG4gICAgICBpZiAoYmVnaW4gPj0gcyAmJiBiZWdpbiA8PSB0dGwpIHtcbiAgICAgICAgY29uc3QgZGlmZiA9IHR0bCAtIGxpbmVUZXh0TGVuZ3RoO1xuICAgICAgICBjb25zdCBjb2wgPSBiZWdpbiAtIGRpZmY7XG4gICAgICAgIHJlc3VsdCA9IHsgY29sLCByb3cgfTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcm93Kys7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJIaWdobGlnaHRXb3JkcygpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHNlbGYuaGlnaGxpZ2h0ZWRXb3JkcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNlbGYuaGlnaGxpZ2h0ZWRXb3Jkcy5jbGVhcigpO1xuICAgIH1cbiAgICBjb25zdCBoaWdobGlnaHRXb3JkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke09fSElHSExJR0hUfWApO1xuICAgIGhpZ2hsaWdodFdvcmRzLmZvckVhY2goKHNwYW4pID0+IHtcbiAgICAgIHNwYW4ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIH0pO1xuICB9XG59XG4iLCJjb25zdCBkZWJvdW5jZSA9IChmdW5jOiBhbnksIHRpbWVvdXQ6IG51bWJlcik6IGFueSA9PiB7XG4gIGxldCB0aW1lcjogYW55O1xuICByZXR1cm4gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlYm91bmNlO1xuIiwiaW1wb3J0IHsgSURhdGEgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjb25zdCBzb3J0QWxlcnRzID0gKGFsZXJ0czogSURhdGFbXSk6IGFueSA9PiB7XG4gIHJldHVybiBhbGVydHMuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IGEuYmVnaW4gLSBiLmJlZ2luKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRBbGVydHMgPSAoYWxlcnRzOiBJRGF0YVtdKTogYW55ID0+IHtcbiAgY29uc3Qgd2l0aG91dEhpZGRlbiA9IGFsZXJ0cy5maWx0ZXIoKGFsZXJ0OiBhbnkpID0+IGFsZXJ0LmhpZGRlbiAhPT0gdHJ1ZSk7XG4gIGNvbnN0IHdpdGhvdXREdXBsaWNhdGUgPSB3aXRob3V0SGlkZGVuLnJlZHVjZSgoYWNjLCBjdXJyZW50KSA9PiB7XG4gICAgY29uc3QgeCA9IGFjYy5maW5kKChpdGVtOiBhbnkpID0+IGl0ZW0uZXhwbGFuYXRpb24gPT09IGN1cnJlbnQuZXhwbGFuYXRpb24pO1xuICAgIGlmICgheCkge1xuICAgICAgcmV0dXJuIGFjYy5jb25jYXQoW2N1cnJlbnRdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIHdpdGhvdXREdXBsaWNhdGU7XG59O1xuIiwiZXhwb3J0IGNvbnN0IEFQSV9VUkxfU1BFTExFUiA9XG4gICdodHRwczovL3NwZWxsZXIueWFuZGV4Lm5ldC9zZXJ2aWNlcy9zcGVsbHNlcnZpY2UuanNvbi9jaGVja1RleHQnO1xuZXhwb3J0IGNvbnN0IEFQSV9VUkxfR1JBTU1BUiA9XG4gICdodHRwczovL29ic2lkaWFuLW9ydGhvZ3JhcGh5LWFwaS1tejhsNjR0ejMtZGVuaXNvZWQudmVyY2VsLmFwcC9jaGVjayc7XG4iLCJpbXBvcnQgeyBQbHVnaW4sIEV2ZW50cywgTm90aWNlIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHsgT3J0aG9ncmFwaHlTZXR0aW5ncyB9IGZyb20gJy4vc2V0dGluZ3MnO1xuaW1wb3J0IHtcbiAgT3J0aG9ncmFwaHlFZGl0b3IsXG4gIE9ydGhvZ3JhcGh5UG9wdXAsXG4gIE9ydGhvZ3JhcGh5VG9nZ2xlclxufSBmcm9tICcuL29ydGhvZ3JhcGh5JztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuL29ydGhvZ3JhcGh5L2hlbHBlcnMvZGVib3VuY2UnO1xuaW1wb3J0IHsgc29ydEFsZXJ0cywgZm9ybWF0QWxlcnRzIH0gZnJvbSAnLi9vcnRob2dyYXBoeS9oZWxwZXJzL2Zvcm1hdHRlcnMnO1xuaW1wb3J0IHsgQVBJX1VSTF9HUkFNTUFSIH0gZnJvbSAnLi9jb25maWcnO1xuXG4vLyBVc2Ugc2VsZiBpbiBldmVudHMgY2FsbGJhY2tzXG5sZXQgc2VsZjogYW55O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcnRob2dyYXBoeVBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIHByaXZhdGUgc2V0dGluZ3M6IE9ydGhvZ3JhcGh5U2V0dGluZ3M7XG4gIHByaXZhdGUgcG9wdXA6IGFueTtcbiAgcHJpdmF0ZSB0b2dnbGVyOiBhbnk7XG4gIHByaXZhdGUgZWRpdG9yOiBhbnk7XG4gIHByaXZhdGUgZW1pdHRlcjogYW55O1xuICBwcml2YXRlIGFjdGl2ZUVkaXRvcjogYW55O1xuICBwcml2YXRlIGFib3J0ZXI6IGFueTtcbiAgcHJpdmF0ZSBoaW50czogYW55O1xuICBwcml2YXRlIGRlYm91bmNlR2V0RGF0YUZ1bmMgPSBkZWJvdW5jZSh0aGlzLm9uQ2hhbmdlVGV4dC5iaW5kKHRoaXMpLCA1MDApO1xuICBwcml2YXRlIGdldERhdGFGdW5jID0gZGVib3VuY2UodGhpcy5vblJ1bkZyb21Qb3B1cC5iaW5kKHRoaXMpLCAwKTtcblxuICBhc3luYyBvbmxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gLS0tLS0tIEluaXQgLS0tLS0tLS0gLy9cbiAgICBzZWxmID0gdGhpcztcbiAgICB0aGlzLmVtaXR0ZXIgPSBuZXcgRXZlbnRzKCk7XG5cbiAgICBjb25zdCBzZXR0aW5ncyA9IG5ldyBPcnRob2dyYXBoeVNldHRpbmdzKHRoaXMsIHRoaXMuZW1pdHRlcik7XG4gICAgYXdhaXQgc2V0dGluZ3MubG9hZFNldHRpbmdzKCk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuXG4gICAgLy8gdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBPcnRob2dyYXBoeVNldHRpbmdUYWIodGhpcy5hcHAsIHNldHRpbmdzLCB0aGlzKSk7XG5cbiAgICB0aGlzLmluaXRPcnRob2dyYXBoeVRvZ2dsZXIoKTtcbiAgICB0aGlzLmluaXRPcnRob2dyYXBoeVBvcHVwKCk7XG4gICAgdGhpcy5pbml0T3J0aG9ncmFwaHlFZGl0b3IoKTtcblxuICAgIC8vIC0tLS0tLS0gRXZlbnRzIC0tLS0tLS0tIC8vXG4gICAgdGhpcy5lbWl0dGVyLm9uKCdvcnRob2dyYXBoeTpvcGVuJywgdGhpcy5vblBvcHVwT3Blbik7XG4gICAgdGhpcy5lbWl0dGVyLm9uKCdvcnRob2dyYXBoeTpjbG9zZScsIHRoaXMub25Qb3B1cENsb3NlKTtcbiAgICB0aGlzLmVtaXR0ZXIub24oJ29ydGhvZ3JhcGh5OnJ1bicsIHRoaXMuZ2V0RGF0YUZ1bmMpO1xuICAgIHRoaXMuZW1pdHRlci5vbignb3J0aG9ncmFwaHk6cmVwbGFjZScsIHRoaXMub25SZXBsYWNlV29yZCk7XG5cbiAgICAvLyBOT1RFOiBmaW5kIGEgYmV0dGVyIHdheSB0byBkbyB0aGlzXG4gICAgLy8gTGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIGVkaXRvclxuICAgIHRoaXMucmVnaXN0ZXJEb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlRWRpdG9yKVxuICAgICAgICB0aGlzLmFjdGl2ZUVkaXRvci5vZmYoJ2NoYW5nZScsIHRoaXMuZGVib3VuY2VHZXREYXRhRnVuYyk7XG4gICAgICB0aGlzLmFjdGl2ZUVkaXRvciA9IHRoaXMuZ2V0RWRpdG9yKCk7XG4gICAgICB0aGlzLmFjdGl2ZUVkaXRvci5vbignY2hhbmdlJywgdGhpcy5kZWJvdW5jZUdldERhdGFGdW5jKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9udW5sb2FkKCk6IHZvaWQge1xuICAgIHRoaXMuZW1pdHRlci5vZmYoJ29ydGhvZ3JhcGh5Om9wZW4nLCB0aGlzLm9uUG9wdXBPcGVuKTtcbiAgICB0aGlzLmVtaXR0ZXIub2ZmKCdvcnRob2dyYXBoeTpjbG9zZScsIHRoaXMub25Qb3B1cENsb3NlKTtcbiAgICB0aGlzLmVtaXR0ZXIub2ZmKCdvcnRob2dyYXBoeTpydW4nLCB0aGlzLm9uUnVuRnJvbVBvcHVwKTtcbiAgICB0aGlzLmVtaXR0ZXIub2ZmKCdvcnRob2dyYXBoeTpyZXBsYWNlJywgdGhpcy5vblJlcGxhY2VXb3JkKTtcbiAgICBpZiAodGhpcy5hY3RpdmVFZGl0b3IpXG4gICAgICB0aGlzLmFjdGl2ZUVkaXRvci5vZmYoJ2NoYW5nZScsIHRoaXMuZGVib3VuY2VHZXREYXRhRnVuYyk7XG4gICAgdGhpcy50b2dnbGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLnBvcHVwLmRlc3Ryb3koKTtcbiAgICB0aGlzLmVkaXRvci5kZXN0cm95KCk7XG4gICAgdGhpcy5oaW50cyA9IG51bGw7XG4gICAgdGhpcy5hY3RpdmVFZGl0b3IgPSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0T3J0aG9ncmFwaHlUb2dnbGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgYXBwLCBzZXR0aW5ncywgZW1pdHRlciB9ID0gdGhpcztcbiAgICB0aGlzLnRvZ2dsZXIgPSBuZXcgT3J0aG9ncmFwaHlUb2dnbGVyKGFwcCwgc2V0dGluZ3MsIGVtaXR0ZXIpO1xuICAgIHRoaXMudG9nZ2xlci5pbml0KCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRPcnRob2dyYXBoeVBvcHVwKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgYXBwLCBzZXR0aW5ncywgZW1pdHRlciB9ID0gdGhpcztcbiAgICB0aGlzLnBvcHVwID0gbmV3IE9ydGhvZ3JhcGh5UG9wdXAoYXBwLCBzZXR0aW5ncywgZW1pdHRlcik7XG4gICAgdGhpcy5wb3B1cC5pbml0KCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRPcnRob2dyYXBoeUVkaXRvcigpOiB2b2lkIHtcbiAgICBjb25zdCB7IGFwcCwgc2V0dGluZ3MgfSA9IHRoaXM7XG4gICAgdGhpcy5lZGl0b3IgPSBuZXcgT3J0aG9ncmFwaHlFZGl0b3IoYXBwLCBzZXR0aW5ncyk7XG4gICAgdGhpcy5lZGl0b3IuaW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFZGl0b3IoKSB7XG4gICAgY29uc3QgYWN0aXZlTGVhZjogYW55ID0gdGhpcy5hcHAud29ya3NwYWNlLmFjdGl2ZUxlYWY7XG4gICAgcmV0dXJuIGFjdGl2ZUxlYWYudmlldy5zb3VyY2VNb2RlLmNtRWRpdG9yO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBvbkNoYW5nZVRleHQoKSB7XG4gICAgaWYgKCF0aGlzLnBvcHVwLmNyZWF0ZWQpIHJldHVybjtcbiAgICB0aGlzLnJ1bkNoZWNrZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgb25SdW5Gcm9tUG9wdXAoKSB7XG4gICAgaWYgKCF0aGlzLnBvcHVwLmNyZWF0ZWQpIHJldHVybjtcbiAgICB0aGlzLmVkaXRvci5kZXN0cm95KCk7XG4gICAgdGhpcy5wb3B1cC5zZXRMb2FkZXIoKTtcbiAgICB0aGlzLmFjdGl2ZUVkaXRvciA9IHRoaXMuZ2V0RWRpdG9yKCk7XG4gICAgdGhpcy5ydW5DaGVja2VyKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJ1bkNoZWNrZXIoKSB7XG4gICAgdGhpcy50b2dnbGVyLnNldExvYWRpbmcoKTtcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5hY3RpdmVFZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICB0aGlzLmhpbnRzID0gYXdhaXQgdGhpcy5mZXRjaERhdGEodGV4dCk7XG4gICAgaWYgKHRoaXMuaGludHMgaW5zdGFuY2VvZiBUeXBlRXJyb3IpIHtcbiAgICAgIHRoaXMucG9wdXAucmVtb3ZlTG9hZGVyKCk7XG4gICAgICB0aGlzLnRvZ2dsZXIucmVtb3ZlTG9hZGluZygpO1xuICAgICAgbmV3IE5vdGljZShcbiAgICAgICAgJ1RoZSBzZXJ2ZXIgaXMgbm90IHJlc3BvbmRpbmcuIFBsZWFzZSBjaGVjayB5b3VyIEludGVybmV0IGNvbm5lY3Rpb24uJ1xuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaGludHMgJiYgdGhpcy5oaW50cy5hbGVydHMgJiYgdGhpcy5oaW50cy5hbGVydHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBhbGVydHMgPSBmb3JtYXRBbGVydHModGhpcy5oaW50cy5hbGVydHMpO1xuICAgICAgdGhpcy5lZGl0b3IuaGlnaGxpZ2h0V29yZHModGhpcy5hY3RpdmVFZGl0b3IsIGFsZXJ0cyk7XG4gICAgICB0aGlzLnBvcHVwLnVwZGF0ZSh7XG4gICAgICAgIGFsZXJ0czogc29ydEFsZXJ0cyhhbGVydHMpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3IE5vdGljZSgnU3BlbGxpbmcgZXJyb3JzIG5vdCBmb3VuZCEnKTtcbiAgICAgIHRoaXMucG9wdXAucmVtb3ZlTG9hZGVyKCk7XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlci5yZW1vdmVMb2FkaW5nKCk7XG4gIH1cblxuICBwcml2YXRlIG9uUG9wdXBPcGVuKCkge1xuICAgIHNlbGYucG9wdXAuY3JlYXRlKCk7XG4gIH1cblxuICBwcml2YXRlIG9uUG9wdXBDbG9zZSgpIHtcbiAgICBzZWxmLmVkaXRvci5kZXN0cm95KCk7XG4gICAgaWYgKHNlbGYuYWN0aXZlRWRpdG9yKVxuICAgICAgc2VsZi5hY3RpdmVFZGl0b3IuZG9jLmdldEFsbE1hcmtzKCkuZm9yRWFjaCgobTogYW55KSA9PiBtLmNsZWFyKCkpO1xuICAgIHNlbGYucG9wdXAuZGVzdHJveSgpO1xuICAgIHNlbGYudG9nZ2xlci5yZXNldCgpO1xuICAgIGlmIChzZWxmLmFib3J0ZXIpIHtcbiAgICAgIHNlbGYuYWJvcnRlci5hYm9ydCgpO1xuICAgICAgc2VsZi5hYm9ydGVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uUmVwbGFjZVdvcmQoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IG9yaWdXb3JkTGVuID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnRleHQubGVuZ3RoO1xuICAgIGNvbnN0IG5ld1dvcmQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudG9yZXBsYWNlO1xuICAgIGNvbnN0IGJlZ2luID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmJlZ2luO1xuICAgIGNvbnN0IGVuZCA9IGJlZ2luICsgb3JpZ1dvcmRMZW47XG4gICAgc2VsZi5lZGl0b3IucmVwbGFjZVdvcmQoXG4gICAgICBzZWxmLmFjdGl2ZUVkaXRvcixcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICtiZWdpbixcbiAgICAgICAgZW5kOiArZW5kLFxuICAgICAgICBsZW46ICtvcmlnV29yZExlblxuICAgICAgfSxcbiAgICAgIG5ld1dvcmRcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBmZXRjaERhdGEodGV4dDogc3RyaW5nKTogUHJvbWlzZTxKU09OPiB7XG4gICAgaWYgKHNlbGYuYWJvcnRlcikgc2VsZi5hYm9ydGVyLmFib3J0KCk7XG4gICAgc2VsZi5wb3B1cC5kaXNhYmxlKCk7XG5cbiAgICBzZWxmLmFib3J0ZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgY29uc3QgeyBzaWduYWwgfSA9IHNlbGYuYWJvcnRlcjtcblxuICAgIGNvbnN0IHVybDogYW55ID0gbmV3IFVSTChBUElfVVJMX0dSQU1NQVIpO1xuICAgIGNvbnN0IHBhcmFtczogYW55ID0geyB0ZXh0IH07XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+XG4gICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHBhcmFtc1trZXldKVxuICAgICk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHNpZ25hbFxuICAgICAgfSk7XG4gICAgICBzZWxmLmFib3J0ZXIgPSBudWxsO1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZWxmLnBvcHVwLmVuYWJsZSgpO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNldHRpbmciLCJQbHVnaW5TZXR0aW5nVGFiIiwic2VsZiIsIk5vdGljZSIsInRoaXMiLCJFdmVudHMiLCJQbHVnaW4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUksQ0FBQyxLQUFLLElBQUk7QUFDN0MsUUFBUSxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyxDQUFDO0FBQ2xHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMzQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQXVDRDtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdKLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDdEUsUUFBUSxPQUFPLENBQUMsRUFBRSxJQUFJO0FBQ3RCLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekssWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLGdCQUFnQixLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNO0FBQzlDLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDeEUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7QUFDakUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVM7QUFDakUsZ0JBQWdCO0FBQ2hCLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFO0FBQ2hJLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQzFHLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMs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
