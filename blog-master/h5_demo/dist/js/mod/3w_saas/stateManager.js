define("mod/3w_saas/stateManager",[],function(require,exports,module){var n=Object.prototype.hasOwnProperty;return function(r,t){r=r||{};var a=function(){var t=!0;for(var a in r)if(n.call(r,a)&&!r[a]){t=!1;break}return t};return{set:function(n){n in r&&(r[n]=!0,a()&&t&&t())}}}});