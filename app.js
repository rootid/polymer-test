
//document.addEventListener('click', function(e) {
//  var pages = document.querySelector('iron-pages');
//  pages.selectNext();
//});

//var title_d = document.querySelector("#init");
//title_d.title = "FriendFlix";


//var ff_option = document.querySelector("ffOption-cls");
//ff_option.ff_option1 = "RATE MOVIES";
//ff_option.ff_option2 = "RATE MOVIES" ;
//ff_option.ff_option3 = "RATE MOVIES";

// Add event-listeners to custom object
// Polymer({
//   is: 'x-custom',
// 		listeners: {
//			'tap': 'regularTap',
//			'special.tap': 'specialTap'
//		},
//		regularTap: function(e) {
//   		  alert("Thank you for tapping");
//   		},
//   		specialTap: function(e) {
//   		  alert("It was not special tapping");
//   		},
//		handleClick : function(e) {
//			alert("Button got clicked");
//		}
// });


// Extend native HTML elements

//MyInput = Polymer({
//  is: 'my-input',
//  extends: 'input',
//  created: function() {
//    this.style.border = '1px solid red';
//  }
//
//});
//
//var el1 = new MyInput();
//console.log(el1 instanceof HTMLInputElement); // true
//
//var el2 = document.createElement('input', 'my-input');
//console.log(el2 instanceof HTMLInputElement); // true


//Life-cycle of particular elements
//MyElement = Polymer({
//
//  is: 'my-element',
//
//  created: function() {
//    console.log(this.localName + '#' + this.id + ' was created');
//  },
//
//  ready: function() {
//    console.log(this.localName + '#' + this.id + ' has local DOM initialized');
//  },
//
//  attached: function() {
//    console.log(this.localName + '#' + this.id + ' was attached');
//  },
//
//  detached: function() {
//    console.log(this.localName + '#' + this.id + ' was detached');
//  },
//
//  attributeChanged: function(name, type) {
//    console.log(this.localName + '#' + this.id + ' attribute ' + name +
//      ' was changed to ' + this.getAttribute(name));
//  }
//
//});




//FFButton = Polymer( 
//		{ is : 'paper-autocomplete' }
//		,label = "Search Movies"
//);
//
//
//
