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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var data = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	var users = {
	
	  "yosukeonrails@gmail.com": {
	    username: 'yohyoh',
	    name: 'Yosuke Hishinuma',
	    age: '26',
	    email: 'yosukeonrails@gmail.com',
	    password: '12345',
	    friendList: ["jonedc@gmail.com", "benrogojan@gmail.com", "kellykstong@gmail.com", "chucknorris@gmail.com"],
	    pictureUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAWKAAAAJDgxMjY2MTExLTVjNGQtNDM1My05NTIxLTcxNmM5MzEzYjQ0YQ.jpg'
	  },
	
	  "jonedc@gmail.com": {
	    username: 'jonedc',
	    name: 'Jon M. Spittle',
	    age: '30',
	    birthday: 'July 15th',
	    email: 'jonedc@gmail.com',
	    password: '12345',
	    friendList: ["yosukeonrails@gmail.com", "benrogojan@gmail.com", "kellykstong@gmail.com"],
	    pictureUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAALPAAAAJGFhOGQyMTNjLTBmZjktNDBjNi04M2RkLTMxY2VhYzRjZjNhYQ.jpg'
	  },
	
	  "benrogojan@gmail.com": {
	    username: 'benrogojan',
	    name: 'Ben Rogojan',
	    age: '25',
	    email: 'benrogojan@gmail.com',
	    password: '12345',
	    friendList: ["jonedc@gmail.com", "yosukeonrails@gmail.com", "kellykstong@gmail.com"],
	    pictureUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAALyAAAAJGRlNjE4NGY1LWIwMzAtNGU3Mi1iNDkwLTkzNGMxOGU3NGZkMw.jpg'
	  },
	
	  "kellykstong@gmail.com": {
	    username: 'benrogojan',
	    name: 'Kelly Tong',
	    age: '24',
	    email: 'kellykstong@gmail.com',
	    password: '12345',
	    friendList: ["jonedc@gmail.com", "yosukeonrails@gmail.com"],
	    pictureUrl: 'http://www.bioenergytrain.eu/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
	  },
	  "chucknorris@gmail.com": {
	    username: 'chuckchuck',
	    name: 'Chuck Norris',
	    age: '1000',
	    email: 'churcknorris@gmail.com',
	    password: '12345',
	    friendList: ["jonedc@gmail.com", "benrogojan@gmail.com", "kellykstong@gmail.com", "yosukeonrails@gmail.com"],
	    pictureUrl: 'http://www.writecamp.org/writecamp//files/copy_images/Vd3MJo.jpg'
	  }
	};
	
	var item_array1 = [{
	  piclink: 'https://images-na.ssl-images-amazon.com/images/I/41TNWb29-HL._AC_US160_.jpg',
	  buylink: 'https://www.amazon.com/Affinity-Premium-Protection-Material-Protective/dp/B019WUSIY8/ref=sr_1_2?s=wireless&ie=UTF8&qid=1476239477&sr=1-2-spons&keywords=samsung+s7&psc=1',
	  price: 9.95,
	  title: "Galaxy S7 Case, POETIC [Affinity Series] [Premium Thin][Corner Protection]No Bulk/Protection where its needed/Dual Material Protective Bumper Case for Samsung Galaxy S7 Blue/Clear"
	}, {
	  piclink: 'https://images-na.ssl-images-amazon.com/images/I/41TNWb29-HL._AC_US160_.jpg',
	  buylink: 'https://www.amazon.com/Affinity-Premium-Protection-Material-Protective/dp/B019WUSIY8/ref=sr_1_2?s=wireless&ie=UTF8&qid=1476239477&sr=1-2-spons&keywords=samsung+s7&psc=1',
	  price: 10,
	  title: "Galaxy S7 Case, POETIC [Affinity Series] [Premium Thin][Corner Protection]No Bulk/Protection where its needed/Dual Material Protective Bumper Case for Samsung Galaxy S7 Blue/Clear"
	}, {
	  piclink: 'https://images-na.ssl-images-amazon.com/images/I/41TNWb29-HL._AC_US160_.jpg',
	  buylink: 'https://www.amazon.com/Affinity-Premium-Protection-Material-Protective/dp/B019WUSIY8/ref=sr_1_2?s=wireless&ie=UTF8&qid=1476239477&sr=1-2-spons&keywords=samsung+s7&psc=1',
	  price: 11,
	  title: "Galaxy S7 Case, POETIC [Affinity Series] [Premium Thin][Corner Protection]No Bulk/Protection where its needed/Dual Material Protective Bumper Case for Samsung Galaxy S7 Blue/Clear"
	}, {
	  piclink: 'https://images-na.ssl-images-amazon.com/images/I/41TNWb29-HL._AC_US160_.jpg',
	  buylink: 'https://www.amazon.com/Affinity-Premium-Protection-Material-Protective/dp/B019WUSIY8/ref=sr_1_2?s=wireless&ie=UTF8&qid=1476239477&sr=1-2-spons&keywords=samsung+s7&psc=1',
	  price: 9.95,
	  title: "Galaxy S7 Case, POETIC [Affinity Series] [Premium Thin][Corner Protection]No Bulk/Protection where its needed/Dual Material Protective Bumper Case for Samsung Galaxy S7 Blue/Clear"
	}];
	
	var item_array2 = [];
	
	var item_array3 = [];
	
	module.exports.users = users;

/***/ }
/******/ ]);
//# sourceMappingURL=givagifts.1.0.0.js.map