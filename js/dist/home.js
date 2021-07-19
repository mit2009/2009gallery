/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 105);
/******/ })
/************************************************************************/
/******/ ({

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(106);


/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _nav = __webpack_require__(29);

var baseUrl = "http://designed.mit.edu/gallery/data/";

var GalleryContent = React.createClass({
    displayName: "GalleryContent",

    render: function render() {
        var years = Object.keys(DATA).reverse();
        var yearSections = [];
        for (var i in years) {
            var year = years[i];
            yearSections.push(React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    null,
                    year
                ),
                React.createElement(
                    "h3",
                    null,
                    DATA[year].themeName
                ),
                this.renderGalleryYear(year)
            ));
        }
        return React.createElement(
            "div",
            null,
            yearSections
        );
    },

    renderGalleryYear: function renderGalleryYear(year) {
        // var ideas = this.props.project.deliverables.ideas;
        var teams = [];
        var projects = DATA[year].projects;

        for (var s in projects) {
            var backgroundUrl = 'url("' + baseUrl + year + '/final/photos/small/' + s + '1.jpg")';
            var teamUrl = "view.html?year=" + year + "&team=" + s;
            teams.push(React.createElement(
                "a",
                { href: teamUrl },
                React.createElement(
                    "div",
                    { style: { backgroundImage: backgroundUrl }, className: "thumbnail-bg" },
                    React.createElement(
                        "div",
                        { className: "product-info" },
                        React.createElement(
                            "h4",
                            null,
                            projects[s].projName
                        ),
                        React.createElement(
                            "p",
                            null,
                            projects[s].projDesc
                        )
                    )
                )
            ));
        }

        var highlights = DATA[year].highlights;
        var highlightElements = [];
        var highlightGroup = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = highlights[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var highlight = _step.value;

                if (highlight['subheading']) {
                    if (highlightGroup.length != 0) {
                        // Push previous highlight group
                        highlightElements.push(React.createElement(
                            "div",
                            { className: "highlight-group" },
                            highlightGroup
                        ));
                        highlightGroup = [];
                    }
                    highlightGroup.push(React.createElement(
                        "div",
                        { className: "subheading" },
                        highlight.subheading
                    ));
                } else {
                    if (highlight.youtubeId) {
                        // Due to Vimeo hating us, now bumping youtube links as priority
                        highlightGroup.push(React.createElement(
                            "div",
                            { className: "highlight-link" },
                            React.createElement(
                                "a",
                                { href: "https://www.youtube.com/watch?v=" + highlight.youtubeId },
                                highlight.linkLabel
                            )
                        ));
                    } else if (highlight.vimeoId) {
                        highlightGroup.push(React.createElement(
                            "div",
                            { className: "highlight-link" },
                            React.createElement(
                                "a",
                                { href: "http://vimeo.com/" + highlight.vimeoId },
                                highlight.linkLabel
                            )
                        ));
                    } else {
                        // Some data has been malformed, and contains an additional data/. 
                        // Dirty hack to strip it.
                        var linkUrl = highlight.linkUrl.indexOf("data/") >= 0 ? highlight.linkUrl.replace('data/', '') : highlight.linkUrl;
                        highlightGroup.push(React.createElement(
                            "div",
                            { className: "highlight-link" },
                            React.createElement(
                                "a",
                                { href: baseUrl + linkUrl },
                                highlight.linkLabel
                            )
                        ));
                    }
                }
            }
            // Push final highlighht group
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        highlightElements.push(React.createElement(
            "div",
            { className: "highlight-group" },
            highlightGroup
        ));

        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "thumbnail-container" },
                teams
            ),
            React.createElement(
                "div",
                { className: "highlights-container" },
                React.createElement(
                    "h4",
                    null,
                    year,
                    " Highlight Links"
                ),
                React.createElement(
                    "div",
                    { className: "highlight-groups-container" },
                    highlightElements
                )
            )
        );
    }
});

$(function () {

    ReactDOM.render(React.createElement(GalleryContent, null), document.getElementById('gallery-content'));

    // TODO: Move

    ReactDOM.render(React.createElement(_nav.Navigation, null), document.getElementById('navigation'));

    $(window).scroll(function () {
        (0, _nav.updateNavigationBar)();
    });

    (0, _nav.updateNavigationBar)();
});

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Navigation = exports.updateNavigationBar = undefined;

var _classnames = __webpack_require__(30);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = "http://designed.mit.edu/gallery/data/";

var updateNavigationBar = exports.updateNavigationBar = function updateNavigationBar() {
    if ($(window).scrollTop() < 10) {
        $('.navigation').removeClass('condensed');
        $('h1').removeClass('condensed');
        $('h2').removeClass('condensed');
    } else if (!$('.navigation').hasClass('condensed')) {
        $('.navigation').addClass('condensed');
        $('h1').addClass('condensed');
        $('h2').addClass('condensed');
    }
};

var Navigation = exports.Navigation = React.createClass({
    displayName: "Navigation",

    getInitialState: function getInitialState() {
        return {
            teamColor: this.props.teamColor,
            teamYear: this.props.teamYear,
            isYearDropdownVisible: false,
            isTeamDropdownVisible: false
        };
    },
    componentDidMount: function componentDidMount() {
        var _this = this;

        $("body").on("click", function (event) {
            // react and jquery events aren't playing nice with each other
            if (!$(event.target).hasClass("nav-select") && !$(event.target).hasClass("year-item") && $(event.target).parents(".year-item").length === 0) {
                _this.setState({
                    isYearDropdownVisible: false,
                    isTeamDropdownVisible: false
                });
            }
        });

        $(document).scroll(function () {
            if (_this.state.isYearDropdownVisible || _this.state.isTeamDropdownVisible) {
                _this.setState({
                    isTeamDropdownVisible: false,
                    isYearDropdownVisible: false
                });
            }
        });
    },
    componentDidUpdate: function componentDidUpdate(oldProps, oldState) {
        if (!oldState.isTeamDropdownVisible && this.state.isTeamDropdownVisible) {
            $(document).on('mousewheel', '.team-selector', function (e) {

                var event = e.originalEvent,
                    d = event.wheelDelta || -event.detail;
                $('.team-selector').scrollTop($('.team-selector').scrollTop() + (d < 0 ? 1 : -1) * 30);
                e.preventDefault();
            });
        }

        if (!oldState.isYearDropdownVisible && this.state.isYearDropdownVisible) {
            $(document).on('mousewheel', '.year-selector', function (e) {

                var event = e.originalEvent,
                    d = event.wheelDelta || -event.detail;

                $('.year-selector').scrollTop($('.year-selector').scrollTop() + (d < 0 ? 1 : -1) * 30);
                e.preventDefault();
            });
        }
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "a",
                { href: "./" },
                React.createElement(
                    "div",
                    { className: "year-select nav-select" },
                    "All Projects"
                )
            ),
            React.createElement(
                "span",
                { className: "arrow" },
                ">"
            ),
            React.createElement(
                "div",
                { className: "year-select nav-select", onClick: this.toggleYearDropdown },
                this.state.teamYear !== undefined ? "Fall " + this.state.teamYear : "Select year",
                React.createElement(
                    "span",
                    { className: "dropdown-arrow" },
                    "\u25BE"
                ),
                this.maybeRenderYearDropdown()
            ),
            React.createElement(
                "span",
                { className: "arrow" },
                ">"
            ),
            React.createElement(
                "div",
                {
                    className: (0, _classnames2.default)("team-select nav-select", { "disabled-select": this.state.teamYear === undefined }),
                    onClick: this.toggleTeamDropdown
                },
                this.state.teamColor !== undefined ? this.state.teamColor + " Team" : "Select team",
                React.createElement(
                    "span",
                    { className: "dropdown-arrow" },
                    "\u25BE"
                ),
                this.maybeRenderTeamDropdown()
            )
        );
    },
    maybeRenderYearDropdown: function maybeRenderYearDropdown() {
        if (this.state.isYearDropdownVisible) {
            return React.createElement(
                "div",
                { className: "dropdown-selector year-selector" },
                React.createElement(
                    "ul",
                    null,
                    this.renderYearList()
                )
            );
        }
        return undefined;
    },
    maybeRenderTeamDropdown: function maybeRenderTeamDropdown() {
        if (this.state.isTeamDropdownVisible) {
            return React.createElement(
                "div",
                { className: "dropdown-selector team-selector" },
                React.createElement(
                    "ul",
                    { id: "dropdown-selector-list" },
                    this.renderProductList()
                )
            );
        }
        return undefined;
    },
    renderProductList: function renderProductList() {
        var projectList = [React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { className: "select-none", href: "" },
                React.createElement(
                    "span",
                    { className: "dim" },
                    "View All Products"
                )
            )
        )];
        var year = this.state.teamYear; // dynamically loaded
        var projects = DATA[year].projects;
        for (var i in projects) {
            var backgroundUrl = "url('" + baseUrl + year + "/final/photos/small/" + i + "1.jpg')";
            var teamUrl = "view.html?year=" + year + "&team=" + i;
            projectList.push(React.createElement(
                "li",
                { className: "selected-dropdown-item" },
                React.createElement(
                    "a",
                    { href: teamUrl },
                    React.createElement("div", { className: "product-image", style: { backgroundImage: backgroundUrl } }),
                    React.createElement(
                        "div",
                        { className: "product-text" },
                        React.createElement(
                            "em",
                            null,
                            projects[i].projName
                        ),
                        " ",
                        i,
                        " Team"
                    )
                )
            ));
        }
        return React.createElement(
            "div",
            null,
            projectList
        );
    },
    renderYearList: function renderYearList() {
        var yearsList = [React.createElement(
            "li",
            { key: "all" },
            React.createElement(
                "a",
                { href: "" },
                React.createElement(
                    "span",
                    { "class": "dim" },
                    "View All Years"
                )
            )
        )];
        var years = Object.keys(DATA).reverse();
        var _this = this;
        for (var i in years) {
            // var backgroundUrl = `url('${baseUrl}${year}/final/photos/small/${i}1.jpg')`;
            // var teamUrl = `view.html?year=${year}&team=${i}`
            var year = years[i];
            yearsList.push(React.createElement(
                "li",
                { key: year },
                React.createElement(
                    "a",
                    { onClick: this.getYearHandler(year), className: "year-item" },
                    React.createElement(
                        "em",
                        null,
                        DATA[year].themeName
                    ),
                    " Fall ",
                    year,
                    React.createElement(
                        "span",
                        { className: "dim" },
                        Object.keys(DATA[year].projects).length,
                        " projects"
                    )
                )
            ));
        }

        return React.createElement(
            "div",
            null,
            yearsList
        );
    },
    getYearHandler: function getYearHandler(year) {
        var _this = this;

        var handler = function handler(event) {
            event.stopPropagation();
            _this.setState({
                teamYear: year,
                isYearDropdownVisible: false,
                isTeamDropdownVisible: true
            });
        };
        return handler;
    },
    toggleYearDropdown: function toggleYearDropdown(event) {
        event.stopPropagation();
        this.setState({ isYearDropdownVisible: !this.state.isYearDropdownVisible, isTeamDropdownVisible: false });
    },
    toggleTeamDropdown: function toggleTeamDropdown(event) {
        event.stopPropagation();
        if (this.state.teamYear !== undefined) {
            this.setState({
                isTeamDropdownVisible: !this.state.isTeamDropdownVisible,
                isYearDropdownVisible: false
            });
        }
    }
});

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ })

/******/ });