!function e(t,a,n){function r(i,c){if(!a[i]){if(!t[i]){var u="function"==typeof require&&require;if(!c&&u)return u(i,!0);if(o)return o(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var d=a[i]={exports:{}};t[i][0].call(d.exports,function(e){var a=t[i][1][e];return r(a||e)},d,d.exports,e,t,a,n)}return a[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)r(n[i]);return r}({1:[function(e,t,a){"use strict";var n={apiKey:"AIzaSyA9EYUXVL5WAh6Aam1qXlWyvi3b7HLcZ1U",authDomain:"esigamma.firebaseapp.com",databaseURL:"https://esigamma.firebaseio.com",projectId:"esigamma",storageBucket:"esigamma.appspot.com",messagingSenderId:"734163636039"},r=firebase.initializeApp(n,"Davy Jones' Locker").database(),o=document.getElementById("input-code"),i=document.getElementById("input-data");document.getElementById("submit").addEventListener("click",function(e){var t=o.value,a=i.value;if(t&&a){var n=JSON.parse(a),c=r.ref("davy-jones-locker/"+t);c.once("value",function(e){e.exists()?window.alert("Code already in use."):c.set(n).then(function(e){window.alert("Data saved with code: "+t)}).catch(function(e){console.log(e)})}).catch(function(e){console.error(e)})}})},{}]},{},[1]);
//# sourceMappingURL=maps/upload.js.map
