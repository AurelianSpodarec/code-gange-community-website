/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-intl");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DELETE_POST = exports.ADD_POSTS = exports.ADD_POST = undefined;
	exports.addPost = addPost;
	exports.addPostRequest = addPostRequest;
	exports.addPosts = addPosts;
	exports.fetchPosts = fetchPosts;
	exports.fetchPost = fetchPost;
	exports.deletePost = deletePost;
	exports.deletePostRequest = deletePostRequest;
	
	var _apiCaller = __webpack_require__(39);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export Constants
	var ADD_POST = exports.ADD_POST = 'ADD_POST';
	var ADD_POSTS = exports.ADD_POSTS = 'ADD_POSTS';
	var DELETE_POST = exports.DELETE_POST = 'DELETE_POST';
	
	// Export Actions
	function addPost(post) {
	  return {
	    type: ADD_POST,
	    post: post
	  };
	}
	
	function addPostRequest(post) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts', 'post', {
	      post: {
	        name: post.name,
	        title: post.title,
	        content: post.content
	      }
	    }).then(function (res) {
	      return dispatch(addPost(res.post));
	    });
	  };
	}
	
	function addPosts(posts) {
	  return {
	    type: ADD_POSTS,
	    posts: posts
	  };
	}
	
	function fetchPosts() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts').then(function (res) {
	      dispatch(addPosts(res.posts));
	    });
	  };
	}
	
	function fetchPost(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid).then(function (res) {
	      return dispatch(addPost(res.post));
	    });
	  };
	}
	
	function deletePost(cuid) {
	  return {
	    type: DELETE_POST,
	    cuid: cuid
	  };
	}
	
	function deletePostRequest(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid, 'delete').then(function () {
	      return dispatch(deletePost(cuid));
	    });
	  };
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPost = exports.getPosts = undefined;
	
	var _PostActions = __webpack_require__(5);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// Initial State
	var initialState = { data: [] };
	
	var PostReducer = function PostReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _PostActions.ADD_POST:
	      return {
	        data: [action.post].concat(_toConsumableArray(state.data))
	      };
	
	    case _PostActions.ADD_POSTS:
	      return {
	        data: action.posts
	      };
	
	    case _PostActions.DELETE_POST:
	      return {
	        data: state.data.filter(function (post) {
	          return post.cuid !== action.cuid;
	        })
	      };
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get all posts
	var getPosts = exports.getPosts = function getPosts(state) {
	  return state.posts.data;
	};
	
	// Get post by cuid
	var getPost = exports.getPost = function getPost(state, cuid) {
	  return state.posts.data.filter(function (post) {
	    return post.cuid === cuid;
	  })[0];
	};
	
	// Export Reducer
	exports.default = PostReducer;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  mongoURL: process.env.MONGO_URL || process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-starter',
	  port: process.env.PORT || 8000
	};
	
	exports.default = config;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.localizationData = exports.enabledLanguages = undefined;
	
	var _reactIntl = __webpack_require__(2);
	
	var _intl = __webpack_require__(45);
	
	var _intl2 = _interopRequireDefault(_intl);
	
	var _intlLocalesSupported = __webpack_require__(46);
	
	var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);
	
	__webpack_require__(47);
	
	var _en = __webpack_require__(54);
	
	var _en2 = _interopRequireDefault(_en);
	
	var _en3 = __webpack_require__(29);
	
	var _en4 = _interopRequireDefault(_en3);
	
	__webpack_require__(48);
	
	var _fr = __webpack_require__(55);
	
	var _fr2 = _interopRequireDefault(_fr);
	
	var _fr3 = __webpack_require__(30);
	
	var _fr4 = _interopRequireDefault(_fr3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// list of available languages
	var enabledLanguages = exports.enabledLanguages = ['en', 'fr'];
	
	// this object will have language-specific data added to it which will be placed in the state when that language is active
	// if localization data get to big, stop importing in all languages and switch to using API requests to load upon switching languages
	var localizationData = exports.localizationData = {};
	
	// here you bring in 'intl' browser polyfill and language-specific polyfills
	// (needed as safari doesn't have native intl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
	// as well as react-intl's language-specific data
	// be sure to use static imports for language or else every language will be included in your build (adds ~800 kb)
	
	
	// need Intl polyfill, Intl not supported in Safari
	
	
	if (global.Intl) {
	  // Determine if the built-in `Intl` has the locale data we need.
	  if (!(0, _intlLocalesSupported2.default)(enabledLanguages)) {
	    // `Intl` exists, but it doesn't have the data we need, so load the
	    // polyfill and patch the constructors we need with the polyfill's.
	    global.Intl.NumberFormat = _intl2.default.NumberFormat;
	    global.Intl.DateTimeFormat = _intl2.default.DateTimeFormat;
	  }
	} else {
	  // No `Intl`, so use and load the polyfill.
	  global.Intl = _intl2.default;
	}
	
	// use this to allow nested messages, taken from docs:
	// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
	function flattenMessages() {
	  var nestedMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	  return Object.keys(nestedMessages).reduce(function (messages, key) {
	    var value = nestedMessages[key];
	    var prefixedKey = prefix ? prefix + '.' + key : key;
	
	    if (typeof value === 'string') {
	      messages[prefixedKey] = value; // eslint-disable-line no-param-reassign
	    } else {
	      Object.assign(messages, flattenMessages(value, prefixedKey));
	    }
	
	    return messages;
	  }, {});
	}
	
	// bring in intl polyfill, react-intl, and app-specific language data
	
	(0, _reactIntl.addLocaleData)(_en2.default);
	localizationData.en = _en4.default;
	localizationData.en.messages = flattenMessages(localizationData.en.messages);
	
	(0, _reactIntl.addLocaleData)(_fr2.default);
	localizationData.fr = _fr4.default;
	localizationData.fr.messages = flattenMessages(localizationData.fr.messages);

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toggleAddPost = toggleAddPost;
	// Export Constants
	var TOGGLE_ADD_POST = exports.TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
	
	// Export Actions
	function toggleAddPost() {
	  return {
	    type: TOGGLE_ADD_POST
	  };
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getShowAddPost = undefined;
	
	var _AppActions = __webpack_require__(12);
	
	// Initial State
	var initialState = {
	  showAddPost: false
	}; // Import Actions
	
	
	var AppReducer = function AppReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _AppActions.TOGGLE_ADD_POST:
	      return {
	        showAddPost: !state.showAddPost
	      };
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get showAddPost
	var getShowAddPost = exports.getShowAddPost = function getShowAddPost(state) {
	  return state.app.showAddPost;
	};
	
	// Export Reducer
	exports.default = AppReducer;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	// Import Actions
	
	
	// Import Selectors
	
	
	exports.PostDetailPage = PostDetailPage;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(1);
	
	var _reactHelmet = __webpack_require__(3);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(2);
	
	var _PostListItem = {
	  "single-post": "_3oms2qtMeNLzxFyWhz1UjH",
	  "post-title": "Fx0K-JjzVTK_Hda2lbMwV",
	  "author-name": "_2caUnFJtR_wmYTrmTKSfe3",
	  "post-desc": "_3DFNNMDbgnfiiKf0QUXlx8",
	  "post-action": "_3nmYwr6m0EtFpfy5dzRt03",
	  "divider": "_32kJpPVOubCfe-7yq6ODMb",
	  "post-detail": "_1WzGcCTfKlAsd1za9Ty-S-"
	};
	
	var _PostListItem2 = _interopRequireDefault(_PostListItem);
	
	var _PostActions = __webpack_require__(5);
	
	var _PostReducer = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactIntl.FormattedMessage, {
	  id: 'by'
	});
	
	function PostDetailPage(props) {
	  return _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	    title: props.post.title
	  }), _jsx('div', {
	    className: _PostListItem2.default['single-post'] + ' ' + _PostListItem2.default['post-detail']
	  }, void 0, _jsx('h3', {
	    className: _PostListItem2.default['post-title']
	  }, void 0, props.post.title), _jsx('p', {
	    className: _PostListItem2.default['author-name']
	  }, void 0, _ref, ' ', props.post.name), _jsx('p', {
	    className: _PostListItem2.default['post-desc']
	  }, void 0, props.post.content)));
	}
	
	// Actions required to provide data for this component to render in server side.
	PostDetailPage.need = [function (params) {
	  return (0, _PostActions.fetchPost)(params.cuid);
	}];
	
	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {
	    post: (0, _PostReducer.getPost)(state, props.params.cuid)
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostDetailPage);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(1);
	
	var _PostList = __webpack_require__(36);
	
	var _PostList2 = _interopRequireDefault(_PostList);
	
	var _PostCreateWidget = __webpack_require__(35);
	
	var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);
	
	var _PostActions = __webpack_require__(5);
	
	var _AppActions = __webpack_require__(12);
	
	var _AppReducer = __webpack_require__(13);
	
	var _PostReducer = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Components
	
	
	// Import Actions
	
	
	// Import Selectors
	
	
	var PostListPage = function (_Component) {
	  _inherits(PostListPage, _Component);
	
	  function PostListPage() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, PostListPage);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostListPage.__proto__ || Object.getPrototypeOf(PostListPage)).call.apply(_ref, [this].concat(args))), _this), _this.handleDeletePost = function (post) {
	      if (confirm('Do you want to delete this post')) {
	        // eslint-disable-line
	        _this.props.dispatch((0, _PostActions.deletePostRequest)(post));
	      }
	    }, _this.handleAddPost = function (name, title, content) {
	      _this.props.dispatch((0, _AppActions.toggleAddPost)());
	      _this.props.dispatch((0, _PostActions.addPostRequest)({ name: name, title: title, content: content }));
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(PostListPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _PostActions.fetchPosts)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx(_PostCreateWidget2.default, {
	        addPost: this.handleAddPost,
	        showAddPost: this.props.showAddPost
	      }), _jsx(_PostList2.default, {
	        handleDeletePost: this.handleDeletePost,
	        posts: this.props.posts
	      }));
	    }
	  }]);
	
	  return PostListPage;
	}(_react.Component);
	
	// Actions required to provide data for this component to render in sever side.
	
	
	PostListPage.need = [function () {
	  return (0, _PostActions.fetchPosts)();
	}];
	
	// Retrieve data from store as props
	function mapStateToProps(state) {
	  return {
	    showAddPost: (0, _AppReducer.getShowAddPost)(state),
	    posts: (0, _PostReducer.getPosts)(state)
	  };
	}
	
	PostListPage.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostListPage);

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IntlWrapper = IntlWrapper;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(2);
	
	var _reactRedux = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function IntlWrapper(props) {
	  return _react2.default.createElement(
	    _reactIntl.IntlProvider,
	    props.intl,
	    props.children
	  );
	}
	
	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    intl: store.intl
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(IntlWrapper);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */
	
	// import App from './modules/App/App';
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _Main = __webpack_require__(34);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// require.ensure polyfill for node
	if (false) {
	  require.ensure = function requireModule(deps, callback) {
	    callback(require);
	  };
	}
	
	/* Workaround for async react routes to work with react-hot-reloader till
	  https://github.com/reactjs/react-router/issues/2182 and
	  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  // Require async routes only in development for react-hot-reloader to work.
	  __webpack_require__(15);
	  __webpack_require__(14);
	}
	
	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	exports.default = _jsx(_reactRouter.Route, {
	  path: '/',
	  component: _Main2.default
	}, void 0, _jsx(_reactRouter.IndexRoute, {
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(15).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/posts/:slug-:cuid',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(14).default);
	    }).bind(null, __webpack_require__));
	  }
	}));

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;
	
	var _redux = __webpack_require__(16);
	
	var _reduxThunk = __webpack_require__(59);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _DevTools = __webpack_require__(31);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _reducers = __webpack_require__(38);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Main store function
	 */
	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  // Middleware and store enhancers
	  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];
	
	  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	    // Enable DevTools only when rendering on client and during development.
	    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : _DevTools2.default.instrument());
	  }
	
	  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));
	
	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }
	
	  return store;
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(8);
	
	var _post = __webpack_require__(40);
	
	var PostController = _interopRequireWildcard(_post);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	// Get all Posts
	router.route('/posts').get(PostController.getPosts);
	
	// Get one post by cuid
	router.route('/posts/:cuid').get(PostController.getPost);
	
	// Add a new Post
	router.route('/posts').post(PostController.addPost);
	
	// Delete a post by cuid
	router.route('/posts/:cuid').delete(PostController.deletePost);
	
	exports.default = router;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;
	
	var _promiseUtils = __webpack_require__(43);
	
	function fetchComponentData(store, components, params) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
	  }, []);
	
	  return (0, _promiseUtils.sequence)(needs, function (need) {
	    return store.dispatch(need(params, store.getState()));
	  });
	} /*
	  Utility function to fetch required data for component to render in server side.
	  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
	  */

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	var webpack = __webpack_require__(10);
	var cssnext = __webpack_require__(51);
	var postcssFocus = __webpack_require__(52);
	var postcssReporter = __webpack_require__(53);
	
	module.exports = {
	  devtool: 'cheap-module-eval-source-map',
	
	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },
	
	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: 'http://0.0.0.0:8000/'
	  },
	
	  resolve: {
	    extensions: ['', '.js', '.jsx'],
	    modules: ['client', 'node_modules']
	  },
	
	  module: {
	    loaders: [{
	      test: /\.scss$/,
	      exclude: /node_modules/,
	      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader!sass-loader?sourceMap'
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }]
	  },
	
	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],
	
	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'en',
	  messages: {
	    siteTitle: 'MERN Starter Blog',
	    addPost: 'Add Post',
	    switchLanguage: 'Switch Language',
	    twitterMessage: 'We are on Twitter',
	    by: 'By',
	    deletePost: 'Delete Post',
	    createNewPost: 'Create new post',
	    authorName: 'Author\'s Name',
	    postTitle: 'Post Title',
	    postContent: 'Post Content',
	    submit: 'Submit',
	    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t}',
	    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t}',
	    nestedDateComment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} as of {date}'
	  }
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'fr',
	  messages: {
	    siteTitle: 'MERN blog de démarrage',
	    addPost: 'Ajouter Poster',
	    switchLanguage: 'Changer de langue',
	    twitterMessage: 'Nous sommes sur Twitter',
	    by: 'Par',
	    deletePost: 'Supprimer le message',
	    createNewPost: 'Créer un nouveau message',
	    authorName: 'Nom de l\'auteur',
	    postTitle: 'Titre de l\'article',
	    postContent: 'Contenu après',
	    submit: 'Soumettre',
	    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} (in real app this would be translated to French)',
	    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t} (in real app this would be translated to French)',
	    nestedDateComment: 'user {name} {value, plural,\n  \t\t  =0 {does not have any comments}\n  \t\t  =1 {has # comment}\n  \t\t  other {has # comments}\n  \t\t} as of {date} (in real app this would be translated to French)'
	  }
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxDevtools = __webpack_require__(56);
	
	var _reduxDevtoolsLogMonitor = __webpack_require__(58);
	
	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);
	
	var _reduxDevtoolsDockMonitor = __webpack_require__(57);
	
	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SWITCH_LANGUAGE = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.switchLanguage = switchLanguage;
	
	var _setup = __webpack_require__(11);
	
	// Export Constants
	var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';
	
	function switchLanguage(newLang) {
	  return _extends({
	    type: SWITCH_LANGUAGE
	  }, _setup.localizationData[newLang]);
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _setup = __webpack_require__(11);
	
	var _IntlActions = __webpack_require__(32);
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var initLocale = global.navigator && global.navigator.language || 'en';
	
	var initialState = _extends({
	  locale: initLocale,
	  enabledLanguages: _setup.enabledLanguages
	}, _setup.localizationData[initLocale] || {});
	
	var IntlReducer = function IntlReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _IntlActions.SWITCH_LANGUAGE:
	      {
	        var type = action.type,
	            actionWithoutType = _objectWithoutProperties(action, ['type']); // eslint-disable-line
	
	
	        return _extends({}, state, actionWithoutType);
	      }
	
	    default:
	      return state;
	  }
	};
	
	exports.default = IntlReducer;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	// import styles from './App.scss';
	
	
	// Import Assets
	
	
	// Import Components
	
	
	exports.Main = Main;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(1);
	
	var _Main;
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _logo = "data:image/png;base64,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";
	
	var _logo2 = _interopRequireDefault(_logo);
	
	var _ = '/' + "91597607880385370e86066422823940.jpg";
	
	var _2 = _interopRequireDefault(_);
	
	var _3 = '/' + "4b6185c0e1dcf859f278b0ec421e6a37.jpg";
	
	var _4 = _interopRequireDefault(_3);
	
	var _5 = '/' + "13355d3949dffa4cb85caaf7f2dffdc5.jpg";
	
	var _6 = _interopRequireDefault(_5);
	
	var _7 = '/' + "ee552cb25d5bd15e1d17170eaecb4e28.jpg";
	
	var _8 = _interopRequireDefault(_7);
	
	var _9 = '/' + "33a308742c5ab98f3f6718e6ed5102c0.jpg";
	
	var _10 = _interopRequireDefault(_9);
	
	var _11 = '/' + "e3a912e8dbcfbd13631bf41f4d4c7453.jpg";
	
	var _12 = _interopRequireDefault(_11);
	
	var _13 = '/' + "6d7441f731d4907f4c7f45952d36ed55.jpg";
	
	var _14 = _interopRequireDefault(_13);
	
	var _15 = '/' + "81f968bec13b2c99a5ba6bcb1f75984a.jpg";
	
	var _16 = _interopRequireDefault(_15);
	
	var _17 = '/' + "965c4344996ea33030b0ca9e91ec6b7c.jpg";
	
	var _18 = _interopRequireDefault(_17);
	
	var _19 = '/' + "a019e32e0961043e1ad9d3fd39022097.jpg";
	
	var _20 = _interopRequireDefault(_19);
	
	var _21 = '/' + "9bb52dc62c679cb382e0ec6b254496d4.jpg";
	
	var _22 = _interopRequireDefault(_21);
	
	var _23 = '/' + "79fc837a567a8a0edbbd7ec52110fa71.jpg";
	
	var _24 = _interopRequireDefault(_23);
	
	var _reactHelmet = __webpack_require__(3);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import DevTools from './components/DevTools';
	// import Header from './components/Header/Header';
	// import Footer from './components/Footer/Footer';
	
	// Import Actions
	// import { toggleAddPost } from './AppActions';
	// import { switchLanguage } from '../../modules/Intl/IntlActions';
	
	var _ref = _jsx('nav', {
	  className: 'navbar navbar-default navbar-static-top text-center',
	  role: 'navigation'
	}, void 0, _jsx('div', {
	  className: 'container'
	}, void 0, _jsx('div', {
	  className: 'navbar-header'
	}, void 0, _jsx('button', {
	  type: 'button',
	  className: 'navbar-toggle',
	  'data-toggle': 'collapse',
	  'data-target': '#bs-example-navbar-collapse-1'
	}, void 0, _jsx('span', {
	  className: 'sr-only'
	}, void 0, 'Toggle navigation'), _jsx('span', {
	  className: 'icon-bar'
	}), _jsx('span', {
	  className: 'icon-bar'
	}), _jsx('span', {
	  className: 'icon-bar'
	})), _jsx('a', {
	  className: 'navbar-brand',
	  href: '#'
	}, void 0, _jsx('img', {
	  src: _logo2.default,
	  className: 'hidden-xs',
	  alt: ''
	}), _jsx('h3', {
	  className: 'visible-xs'
	}, void 0, 'Korona'))), _jsx('div', {
	  className: 'collapse navbar-collapse',
	  id: 'bs-example-navbar-collapse-1'
	}, void 0, _jsx('ul', {
	  className: 'nav navbar-nav navbar-right'
	}, void 0, _jsx('li', {}, void 0, _jsx('a', {
	  className: 'page-scroll',
	  href: 'index.html'
	}, void 0, 'Home')), _jsx('li', {}, void 0, _jsx('a', {
	  className: 'page-scroll',
	  href: 'single.html'
	}, void 0, 'About')), _jsx('li', {}, void 0, _jsx('a', {
	  className: 'page-scroll',
	  href: 'archive.html'
	}, void 0, 'Staff')), _jsx('li', {}, void 0, _jsx('a', {
	  className: 'page-scroll',
	  href: 'contact.html'
	}, void 0, 'Contact Us'))))));
	
	var _ref2 = _jsx('header', {}, void 0, _jsx('div', {
	  id: 'carousel-example-generic',
	  className: 'carousel slide',
	  'data-ride': 'carousel'
	}, void 0, _jsx('ol', {
	  className: 'carousel-indicators'
	}, void 0, _jsx('li', {
	  'data-target': '#carousel-example-generic',
	  'data-slide-to': '0',
	  className: 'active'
	}), _jsx('li', {
	  'data-target': '#carousel-example-generic',
	  'data-slide-to': '1'
	})), _jsx('div', {
	  className: 'carousel-inner'
	}, void 0, _jsx('div', {
	  className: 'item active'
	}, void 0, _jsx('img', {
	  src: _2.default,
	  alt: 'First slide'
	}), _jsx('div', {
	  className: 'header-text'
	}, void 0, _jsx('div', {
	  className: 'col-md-12 text-center'
	}, void 0, _jsx('h2', {}, void 0, 'Welcome to Us !'), _jsx('br', {}), _jsx('h3', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'), _jsx('br', {})))), _jsx('div', {
	  className: 'item'
	}, void 0, _jsx('img', {
	  src: _4.default,
	  alt: 'Second slide'
	}), _jsx('div', {
	  className: 'header-text'
	}, void 0, _jsx('div', {
	  className: 'col-md-12 text-center'
	}, void 0, _jsx('h2', {}, void 0, 'Sed diam nonumy eirmod tempor invidunt'), _jsx('br', {}), _jsx('h3', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'), _jsx('br', {}))))), _jsx('a', {
	  className: 'left carousel-control',
	  href: '#carousel-example-generic',
	  'data-slide': 'prev'
	}, void 0, _jsx('span', {
	  className: 'glyphicon glyphicon-chevron-left'
	})), _jsx('a', {
	  className: 'right carousel-control',
	  href: '#carousel-example-generic',
	  'data-slide': 'next'
	}, void 0, _jsx('span', {
	  className: 'glyphicon glyphicon-chevron-right'
	}))));
	
	var _ref3 = _jsx('a', {
	  id: 'backTop'
	}, void 0, 'Back To Top');
	
	var _ref4 = _jsx('div', {
	  id: 'page-content',
	  className: 'index-page'
	}, void 0, _jsx('section', {
	  className: 'box-content box-1 text-center'
	}, void 0, _jsx('div', {
	  className: 'no-gutter'
	}, void 0, _jsx('div', {
	  className: 'col-sm-4 bg-1'
	}, void 0, _jsx('div', {
	  className: 'box-text'
	}, void 0, _jsx('div', {
	  className: 'heading'
	}, void 0, _jsx('h2', {}, void 0, 'Text Heading')), _jsx('p', {}, void 0, 'Nam libero tempore, cum soluta nobis est eligendi optio cumque quod maxime placeat facere possimus nihil impedit quo minus id quod maxime placeat facere possimus ptio cumque quod maxime ibero tempore, cum soluta nobis.'), _jsx('a', {
	  className: 'btn btn-1'
	}, void 0, 'Learn More'))), _jsx('div', {
	  className: 'col-sm-4 bg-2'
	}, void 0, _jsx('div', {
	  className: 'box-text'
	}, void 0, _jsx('div', {
	  className: 'heading'
	}, void 0, _jsx('h2', {}, void 0, 'Text Heading')), _jsx('p', {}, void 0, 'Nam libero tempore, cum soluta nobis est eligendi optio cumque quod maxime placeat facere possimus nihil impedit quo minus id quod maxime placeat facere possimus ptio cumque quod maxime ibero tempore, cum soluta nobis.'), _jsx('a', {
	  className: 'btn btn-1'
	}, void 0, 'Learn More'))), _jsx('div', {
	  className: 'col-sm-4 bg-3'
	}, void 0, _jsx('div', {
	  className: 'box-text'
	}, void 0, _jsx('div', {
	  className: 'heading'
	}, void 0, _jsx('h2', {}, void 0, 'Text Heading')), _jsx('p', {}, void 0, 'Nam libero tempore, cum soluta nobis est eligendi optio cumque quod maxime placeat facere possimus nihil impedit quo minus id quod maxime placeat facere possimus ptio cumque quod maxime ibero tempore, cum soluta nobis.'), _jsx('a', {
	  className: 'btn btn-1'
	}, void 0, 'Learn More')))), _jsx('div', {
	  className: 'clear'
	})), _jsx('section', {
	  className: 'box-content box-2 box-bg-white'
	}, void 0, _jsx('div', {
	  className: 'no-gutter'
	}, void 0, _jsx('div', {
	  className: 'col-sm-6 fix-right'
	}, void 0, _jsx('div', {
	  className: 'box-image'
	}, void 0, _jsx('img', {
	  className: 'media__image',
	  src: _24.default
	}))), _jsx('div', {
	  className: 'col-sm-6'
	}, void 0, _jsx('div', {
	  className: 'box-text'
	}, void 0, _jsx('div', {
	  className: 'heading'
	}, void 0, _jsx('h2', {}, void 0, 'About'), _jsx('span', {}, void 0, 'SED NONUMY ', _jsx('br', {}), 'UT LABORE ALIQUYAM')), _jsx('p', {}, void 0, 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in.')))), _jsx('div', {
	  className: 'clear'
	})), _jsx('section', {
	  className: 'box-content box-3'
	}, void 0, _jsx('div', {
	  className: 'no-gutter'
	}, void 0, _jsx('div', {
	  className: 'col-lg-4 col-sm-6'
	}, void 0, _jsx('a', {
	  href: '#',
	  className: 'portfolio-box'
	}, void 0, _jsx('img', {
	  src: _6.default,
	  className: 'img-responsive',
	  alt: ''
	}), _jsx('div', {
	  className: 'portfolio-box-caption'
	}, void 0, _jsx('div', {
	  className: 'portfolio-box-caption-content'
	}, void 0, _jsx('div', {
	  className: 'project-category text-faded'
	}, void 0, 'Category'), _jsx('div', {
	  className: 'project-name'
	}, void 0, 'Project Name'))))), _jsx('div', {
	  className: 'col-lg-4 col-sm-6'
	}, void 0, _jsx('a', {
	  href: '#',
	  className: 'portfolio-box'
	}, void 0, _jsx('img', {
	  src: _8.default,
	  className: 'img-responsive',
	  alt: ''
	}), _jsx('div', {
	  className: 'portfolio-box-caption'
	}, void 0, _jsx('div', {
	  className: 'portfolio-box-caption-content'
	}, void 0, _jsx('div', {
	  className: 'project-category text-faded'
	}, void 0, 'Category'), _jsx('div', {
	  className: 'project-name'
	}, void 0, 'Project Name'))))), _jsx('div', {
	  className: 'col-lg-4 col-sm-6'
	}, void 0, _jsx('a', {
	  href: '#',
	  className: 'portfolio-box'
	}, void 0, _jsx('img', {
	  src: _10.default,
	  className: 'img-responsive',
	  alt: ''
	}), _jsx('div', {
	  className: 'portfolio-box-caption'
	}, void 0, _jsx('div', {
	  className: 'portfolio-box-caption-content'
	}, void 0, _jsx('div', {
	  className: 'project-category text-faded'
	}, void 0, 'Category'), _jsx('div', {
	  className: 'project-name'
	}, void 0, 'Project Name'))))), _jsx('div', {
	  className: 'col-lg-4 col-sm-6'
	}, void 0, _jsx('a', {
	  href: '#',
	  className: 'portfolio-box'
	}, void 0, _jsx('img', {
	  src: _12.default,
	  className: 'img-responsive',
	  alt: ''
	}), _jsx('div', {
	  className: 'portfolio-box-caption'
	}, void 0, _jsx('div', {
	  className: 'portfolio-box-caption-content'
	}, void 0, _jsx('div', {
	  className: 'project-category text-faded'
	}, void 0, 'Category'), _jsx('div', {
	  className: 'project-name'
	}, void 0, 'Project Name'))))), _jsx('div', {
	  className: 'col-lg-4 col-sm-6'
	}, void 0, _jsx('a', {
	  href: '#',
	  className: 'portfolio-box'
	}, void 0, _jsx('img', {
	  src: _14.default,
	  className: 'img-responsive',
	  alt: ''
	}), _jsx('div', {
	  className: 'portfolio-box-caption'
	}, void 0, _jsx('div', {
	  className: 'portfolio-box-caption-content'
	}, void 0, _jsx('div', {
	  className: 'project-category text-faded'
	}, void 0, 'Category'), _jsx('div', {
	  className: 'project-name'
	}, void 0, 'Project Name'))))), _jsx('div', {
	  className: 'col-lg-4 col-sm-6'
	}, void 0, _jsx('a', {
	  href: '#',
	  className: 'portfolio-box'
	}, void 0, _jsx('img', {
	  src: _16.default,
	  className: 'img-responsive',
	  alt: ''
	}), _jsx('div', {
	  className: 'portfolio-box-caption'
	}, void 0, _jsx('div', {
	  className: 'portfolio-box-caption-content'
	}, void 0, _jsx('div', {
	  className: 'project-category text-faded'
	}, void 0, 'Category'), _jsx('div', {
	  className: 'project-name'
	}, void 0, 'Project Name')))))), _jsx('div', {
	  className: 'clear'
	})), _jsx('section', {
	  className: 'box-content box-4 box-bg-black'
	}, void 0, _jsx('div', {
	  className: 'no-gutter'
	}, void 0, _jsx('div', {
	  className: 'col-sm-6'
	}, void 0, _jsx('div', {
	  className: 'box-image'
	}, void 0, _jsx('img', {
	  className: 'media__image ',
	  src: _22.default
	}))), _jsx('div', {
	  className: 'col-sm-6'
	}, void 0, _jsx('div', {
	  className: 'box-text'
	}, void 0, _jsx('div', {
	  className: 'heading'
	}, void 0, _jsx('h2', {}, void 0, 'welcome'), _jsx('span', {}, void 0, 'EUM IRIURE DOLOR ', _jsx('br', {}), 'IN HENDRERIT DUIS')), _jsx('p', {}, void 0, 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in.')))), _jsx('div', {
	  className: 'clear'
	})), _jsx('section', {
	  className: 'box-content box-5'
	}, void 0, _jsx('div', {
	  className: 'no-gutter'
	}, void 0, _jsx('div', {
	  className: 'col-sm-6 bg-3'
	}, void 0, _jsx('div', {
	  className: 'box-text'
	}, void 0, _jsx('div', {
	  className: 'heading'
	}, void 0, _jsx('h2', {}, void 0, 'Sign Up'), _jsx('span', {}, void 0, 'Get subscriber only insights & news ', _jsx('br', {}), 'delivered by John Doe')), _jsx('p', {}, void 0, 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores...'), _jsx('form', {
	  name: 'form1',
	  method: 'post',
	  action: ''
	}, void 0, _jsx('div', {
	  className: 'row'
	}, void 0, _jsx('div', {
	  className: 'col-md-8'
	}, void 0, _jsx('div', {
	  className: 'form-group'
	}, void 0, _jsx('input', {
	  type: 'email',
	  className: 'form-control input-lg',
	  name: 'email',
	  id: 'email',
	  placeholder: 'Enter Your Email',
	  required: 'required'
	}))), _jsx('div', {
	  className: 'col-md-4'
	}, void 0, _jsx('button', {
	  type: 'submit',
	  className: 'btn btn-letter',
	  name: 'btnSubcribe',
	  id: 'btnSubcribe'
	}, void 0, 'Submit')))))), _jsx('div', {
	  className: 'col-sm-6 bg-0'
	}, void 0, _jsx('div', {
	  className: 'box-text'
	}, void 0, _jsx('div', {
	  className: 'heading'
	}, void 0, _jsx('h2', {}, void 0, 'Contact')), _jsx('p', {}, void 0, _jsx('i', {
	  className: 'fa fa-map-marker'
	}), ' My Company Glasgow D04 89GR'), _jsx('p', {}, void 0, _jsx('i', {
	  className: 'fa fa-phone'
	}), ' 800-2345-6789'), _jsx('p', {}, void 0, _jsx('i', {
	  className: 'fa fa-phone'
	}), ' 800-2345-6789'), _jsx('p', {}, void 0, _jsx('i', {
	  className: 'fa fa-envelope-o'
	}), ' info@demolink.org'), _jsx('p', {}, void 0, _jsx('i', {
	  className: 'fa fa-clock-o'
	}), ' 7 Days a week from 9:00 am to 7:00 pm'), _jsx('ul', {
	  className: 'list-inline social-link'
	}, void 0, _jsx('li', {}, void 0, _jsx('a', {
	  href: ''
	}, void 0, _jsx('i', {
	  className: 'fa fa-facebook'
	}))), _jsx('li', {}, void 0, _jsx('a', {
	  href: ''
	}, void 0, _jsx('i', {
	  className: 'fa fa-twitter'
	}))), _jsx('li', {}, void 0, _jsx('a', {
	  href: ''
	}, void 0, _jsx('i', {
	  className: 'fa fa-google-plus'
	}))))))), _jsx('div', {
	  className: 'clear'
	})));
	
	var _ref5 = _jsx('footer', {}, void 0, _jsx('div', {
	  className: 'wrap-footer'
	}, void 0, _jsx('div', {
	  className: 'no-gutter'
	}, void 0, _jsx('div', {
	  className: 'col-md-6'
	}, void 0, _jsx('div', {
	  className: 'box-text'
	}, void 0, _jsx('div', {
	  className: 'footer-heading'
	}, void 0, _jsx('h2', {}, void 0, 'Text Heading')), _jsx('p', {}, void 0, 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'), _jsx('p', {}, void 0, 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.'), _jsx('br', {}), _jsx('p', {}, void 0, 'Copyright @ Korona - Designed by ', _jsx('a', {
	  href: 'https://www.Zerotheme.com'
	}, void 0, 'Zerotheme')))), _jsx('div', {
	  className: 'col-md-3'
	}, void 0, _jsx('div', {
	  className: 'box-text'
	}, void 0, _jsx('h5', {}, void 0, 'Financial Planning'), _jsx('ul', {
	  className: 'quick-link list-group'
	}, void 0, _jsx('li', {}, void 0, _jsx('a', {
	  href: '#'
	}, void 0, 'Investment Management')), _jsx('li', {}, void 0, _jsx('a', {
	  href: '#'
	}, void 0, 'Retirement Planning')), _jsx('li', {}, void 0, _jsx('a', {
	  href: '#'
	}, void 0, 'Long Term Care')), _jsx('li', {}, void 0, _jsx('a', {
	  href: '#'
	}, void 0, 'Estate Planning')), _jsx('li', {}, void 0, _jsx('a', {
	  href: '#'
	}, void 0, 'Social Security'))))), _jsx('div', {
	  className: 'col-md-3'
	}, void 0, _jsx('div', {
	  className: 'box-text'
	}, void 0, _jsx('h5', {}, void 0, 'Investment Help'), _jsx('ul', {
	  className: 'quick-link list-group'
	}, void 0, _jsx('li', {}, void 0, _jsx('a', {
	  href: '#'
	}, void 0, 'Wealth Management')), _jsx('li', {}, void 0, _jsx('a', {
	  href: '#'
	}, void 0, 'Retirement & College Savings')), _jsx('li', {}, void 0, _jsx('a', {
	  href: '#'
	}, void 0, 'Business Owners')), _jsx('li', {}, void 0, _jsx('a', {
	  href: '#'
	}, void 0, 'Insurance & Annuities')), _jsx('li', {}, void 0, _jsx('a', {
	  href: '#'
	}, void 0, 'Cash & Credit')), _jsx('li', {}, void 0, _jsx('a', {
	  href: '#'
	}, void 0, 'Stocks, Bonds & Mutual Funds')))))), _jsx('div', {
	  className: 'clear'
	})));
	
	function Main() {
	  return _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	    title: 'Code Gange',
	    titleTemplate: '%s - Community',
	    meta: [{ charset: 'utf-8' }, {
	      'http-equiv': 'X-UA-Compatible',
	      content: 'IE=edge'
	    }, {
	      name: 'viewport',
	      content: 'width=device-width, initial-scale=1'
	    }]
	  }), _ref, _ref2, _ref3, _ref4, _ref5);
	}
	
	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    intl: store.intl
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Main);

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PostCreateWidget = undefined;
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(2);
	
	var _PostCreateWidget = {
	  "form": "T84Ec1iQdmBAGKj9gbkSH",
	  "form-content": "_2Y1tDTRWJZk-8U52bIXRke",
	  "form-title": "_3TE7KAEFX90owO2pKtN1gt",
	  "form-field": "_-xF9pnKkSB-H3xhOa0BzM",
	  "post-submit-button": "_3aowHPFS14SEJ9rkAzB_sc",
	  "appear": "_2xPTJpHmu_bGBQV7rav4GG"
	};
	
	var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	var _ref2 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'createNewPost'
	});
	
	var _ref3 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'submit'
	});
	
	var PostCreateWidget = exports.PostCreateWidget = function (_Component) {
	  _inherits(PostCreateWidget, _Component);
	
	  function PostCreateWidget() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, PostCreateWidget);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostCreateWidget.__proto__ || Object.getPrototypeOf(PostCreateWidget)).call.apply(_ref, [this].concat(args))), _this), _this.addPost = function () {
	      var nameRef = _this.refs.name;
	      var titleRef = _this.refs.title;
	      var contentRef = _this.refs.content;
	      if (nameRef.value && titleRef.value && contentRef.value) {
	        _this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
	        nameRef.value = titleRef.value = contentRef.value = '';
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(PostCreateWidget, [{
	    key: 'render',
	    value: function render() {
	      var cls = _PostCreateWidget2.default.form + ' ' + (this.props.showAddPost ? _PostCreateWidget2.default.appear : '');
	      return _jsx('div', {
	        className: cls
	      }, void 0, _jsx('div', {
	        className: _PostCreateWidget2.default['form-content']
	      }, void 0, _jsx('h2', {
	        className: _PostCreateWidget2.default['form-title']
	      }, void 0, _ref2), _react2.default.createElement('input', { placeholder: this.props.intl.messages.authorName, className: _PostCreateWidget2.default['form-field'], ref: 'name' }), _react2.default.createElement('input', { placeholder: this.props.intl.messages.postTitle, className: _PostCreateWidget2.default['form-field'], ref: 'title' }), _react2.default.createElement('textarea', { placeholder: this.props.intl.messages.postContent, className: _PostCreateWidget2.default['form-field'], ref: 'content' }), _jsx('a', {
	        className: _PostCreateWidget2.default['post-submit-button'],
	        href: '#',
	        onClick: this.addPost
	      }, void 0, _ref3)));
	    }
	  }]);
	
	  return PostCreateWidget;
	}(_react.Component);
	
	exports.default = (0, _reactIntl.injectIntl)(PostCreateWidget);

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Components
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PostListItem = __webpack_require__(37);
	
	var _PostListItem2 = _interopRequireDefault(_PostListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function PostList(props) {
	  return _jsx('div', {
	    className: 'listView'
	  }, void 0, props.posts.map(function (post) {
	    return _jsx(_PostListItem2.default, {
	      post: post,
	      onDelete: function onDelete() {
	        return props.handleDeletePost(post.cuid);
	      }
	    }, post.cuid);
	  }));
	}
	
	exports.default = PostList;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _reactIntl = __webpack_require__(2);
	
	var _PostListItem = {
	  "single-post": "_3oms2qtMeNLzxFyWhz1UjH",
	  "post-title": "Fx0K-JjzVTK_Hda2lbMwV",
	  "author-name": "_2caUnFJtR_wmYTrmTKSfe3",
	  "post-desc": "_3DFNNMDbgnfiiKf0QUXlx8",
	  "post-action": "_3nmYwr6m0EtFpfy5dzRt03",
	  "divider": "_32kJpPVOubCfe-7yq6ODMb",
	  "post-detail": "_1WzGcCTfKlAsd1za9Ty-S-"
	};
	
	var _PostListItem2 = _interopRequireDefault(_PostListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactIntl.FormattedMessage, {
	  id: 'by'
	});
	
	var _ref2 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'deletePost'
	});
	
	function PostListItem(props) {
	  return _jsx('div', {
	    className: _PostListItem2.default['single-post']
	  }, void 0, _jsx('h3', {
	    className: _PostListItem2.default['post-title']
	  }, void 0, _jsx(_reactRouter.Link, {
	    to: '/posts/' + props.post.slug + '-' + props.post.cuid
	  }, void 0, props.post.title)), _jsx('p', {
	    className: _PostListItem2.default['author-name']
	  }, void 0, _ref, ' ', props.post.name), _jsx('p', {
	    className: _PostListItem2.default['post-desc']
	  }, void 0, props.post.content), _jsx('p', {
	    className: _PostListItem2.default['post-action']
	  }, void 0, _jsx('a', {
	    href: '#',
	    onClick: props.onDelete
	  }, void 0, _ref2)), _jsx('hr', {
	    className: _PostListItem2.default.divider
	  }));
	}
	
	exports.default = PostListItem;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(16);
	
	var _AppReducer = __webpack_require__(13);
	
	var _AppReducer2 = _interopRequireDefault(_AppReducer);
	
	var _PostReducer = __webpack_require__(6);
	
	var _PostReducer2 = _interopRequireDefault(_PostReducer);
	
	var _IntlReducer = __webpack_require__(33);
	
	var _IntlReducer2 = _interopRequireDefault(_IntlReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Combine all reducers into one root reducer
	/**
	 * Root Reducer
	 */
	exports.default = (0, _redux.combineReducers)({
	  app: _AppReducer2.default,
	  posts: _PostReducer2.default,
	  intl: _IntlReducer2.default
	});
	
	// Import Reducers

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;
	
	var _isomorphicFetch = __webpack_require__(49);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _config = __webpack_require__(7);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';
	
	function callApi(endpoint) {
	  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	  var body = arguments[2];
	
	  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
	    headers: { 'content-type': 'application/json' },
	    method: method,
	    body: JSON.stringify(body)
	  }).then(function (response) {
	    return response.json().then(function (json) {
	      return { json: json, response: response };
	    });
	  }).then(function (_ref) {
	    var json = _ref.json,
	        response = _ref.response;
	
	    if (!response.ok) {
	      return Promise.reject(json);
	    }
	
	    return json;
	  }).then(function (response) {
	    return response;
	  }, function (error) {
	    return error;
	  });
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPosts = getPosts;
	exports.addPost = addPost;
	exports.getPost = getPost;
	exports.deletePost = deletePost;
	
	var _post = __webpack_require__(41);
	
	var _post2 = _interopRequireDefault(_post);
	
	var _cuid = __webpack_require__(44);
	
	var _cuid2 = _interopRequireDefault(_cuid);
	
	var _limax = __webpack_require__(50);
	
	var _limax2 = _interopRequireDefault(_limax);
	
	var _sanitizeHtml = __webpack_require__(60);
	
	var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Get all posts
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPosts(req, res) {
	  _post2.default.find().sort('-dateAdded').exec(function (err, posts) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ posts: posts });
	  });
	}
	
	/**
	 * Save a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function addPost(req, res) {
	  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
	    res.status(403).end();
	  }
	
	  var newPost = new _post2.default(req.body.post);
	
	  // Let's sanitize inputs
	  newPost.title = (0, _sanitizeHtml2.default)(newPost.title);
	  newPost.name = (0, _sanitizeHtml2.default)(newPost.name);
	  newPost.content = (0, _sanitizeHtml2.default)(newPost.content);
	
	  newPost.slug = (0, _limax2.default)(newPost.title.toLowerCase(), { lowercase: true });
	  newPost.cuid = (0, _cuid2.default)();
	  newPost.save(function (err, saved) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: saved });
	  });
	}
	
	/**
	 * Get a single post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: post });
	  });
	}
	
	/**
	 * Delete a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function deletePost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }
	
	    post.remove(function () {
	      res.status(200).end();
	    });
	  });
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(9);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var postSchema = new Schema({
	  name: { type: 'String', required: true },
	  title: { type: 'String', required: true },
	  content: { type: 'String', required: true },
	  slug: { type: 'String', required: true },
	  cuid: { type: 'String', required: true },
	  dateAdded: { type: 'Date', default: Date.now, required: true }
	});
	
	exports.default = _mongoose2.default.model('Post', postSchema);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Webpack Requirements
	
	
	var _express = __webpack_require__(8);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _compression = __webpack_require__(24);
	
	var _compression2 = _interopRequireDefault(_compression);
	
	var _mongoose = __webpack_require__(9);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	var _bodyParser = __webpack_require__(23);
	
	var _bodyParser2 = _interopRequireDefault(_bodyParser);
	
	var _path = __webpack_require__(25);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _IntlWrapper = __webpack_require__(17);
	
	var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);
	
	var _webpack = __webpack_require__(10);
	
	var _webpack2 = _interopRequireDefault(_webpack);
	
	var _webpackConfig = __webpack_require__(22);
	
	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);
	
	var _webpackDevMiddleware = __webpack_require__(27);
	
	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);
	
	var _webpackHotMiddleware = __webpack_require__(28);
	
	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);
	
	var _store = __webpack_require__(19);
	
	var _reactRedux = __webpack_require__(1);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(26);
	
	var _reactRouter = __webpack_require__(4);
	
	var _reactHelmet = __webpack_require__(3);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _routes = __webpack_require__(18);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _fetchData = __webpack_require__(21);
	
	var _post = __webpack_require__(20);
	
	var _post2 = _interopRequireDefault(_post);
	
	var _config = __webpack_require__(7);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Initialize the Express App
	var app = new _express2.default();
	
	// Set Development modes checks
	var isDevMode = process.env.NODE_ENV === 'development' || false;
	var isProdMode = process.env.NODE_ENV === 'production' || false;
	
	// Run Webpack dev server in development mode
	if (isDevMode) {
	  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
	  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
	  app.use((0, _webpackHotMiddleware2.default)(compiler));
	}
	
	// React And Redux Setup
	
	
	// Import required modules
	
	// import dummyData from './dummyData';
	
	
	// Set native promises as mongoose promise
	_mongoose2.default.Promise = global.Promise;
	
	// MongoDB Connection
	_mongoose2.default.connect(_config2.default.mongoURL, {
	  useMongoClient: true
	}).then(function () {}, function (error) {
	  if (error) {
	    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
	    throw error;
	  }
	
	  // feed some dummy data in DB.
	  // dummyData();
	}).catch(function (err) {
	  console.error(err);
	});
	
	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist/client')));
	app.use('/api', _post2.default);
	
	// Render Initial HTML
	var renderFullPage = function renderFullPage(html, initialState) {
	  var head = _reactHelmet2.default.rewind();
	
	  // Import Manifests
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
	  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);
	
	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (isProdMode ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (isProdMode ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (isProdMode ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (isProdMode ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
	};
	
	var renderError = function renderError(err) {
	  var softTab = '&#32;&#32;&#32;&#32;';
	  var errTrace = isProdMode ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
	  return renderFullPage('Server Error' + errTrace, {});
	};
	
	// Server Side Rendering based on routes matched by React-router.
	app.use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }
	
	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }
	
	    if (!renderProps) {
	      return next();
	    }
	
	    var store = (0, _store.configureStore)();
	
	    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
	      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
	        store: store
	      }, void 0, _jsx(_IntlWrapper2.default, {}, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps))));
	      var finalState = store.getState();
	
	      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
	    }).catch(function (error) {
	      return next(error);
	    });
	  });
	});
	
	// start app
	app.listen(_config2.default.port, function (error) {
	  if (!error) {
	    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
	  }
	});
	
	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
	/**
	 * Throw an array to it and a function which can generate promises
	 * and it will call them sequentially, one after another
	 */
	function sequence(items, consumer) {
	  var results = [];
	  var runner = function runner() {
	    var item = items.shift();
	    if (item) {
	      return consumer(item).then(function (result) {
	        results.push(result);
	      }).then(runner);
	    }
	
	    return Promise.resolve(results);
	  };
	
	  return runner();
	}

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("cuid");

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("intl");

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = require("intl-locales-supported");

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/en");

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/fr");

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = require("limax");

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/en");

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/fr");

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = require("sanitize-html");

/***/ }
/******/ ]);