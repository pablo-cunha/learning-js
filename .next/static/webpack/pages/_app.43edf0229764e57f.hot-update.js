"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./style/Main.css":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./style/Main.css ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Fonte para textos dos artigos */\\r\\n@import url(\\\"https://fonts.googleapis.com/css2?family=Lora&display=swap\\\");\\r\\n\\r\\n/* Fonte para textos especiais */\\r\\n@import url(\\\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\\\");\\r\\n\\r\\n/* Variáveis dark mode / light mode */\\r\\n:root {\\r\\n  --dark-background: #000011;\\r\\n  --dark-hypertext: #BA4FC2;\\r\\n  --dark-text: #f0f0f0;\\r\\n  --light-background: #f0f0f0;\\r\\n  --light-hypertext: #210535;\\r\\n  --light-text: #0f0f0f;\\r\\n  --standard-yellow: #ffd700;\\r\\n}\\r\\n\\r\\n/* Estilos Padronizados Momentaneamnente */\\r\\n* {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  height: 100vh;\\r\\n  padding-left: 400px;\\r\\n  width: 50%;\\r\\n  background-color: var(--dark-background);\\r\\n  font-family: \\\"Lora\\\", serif;\\r\\n  color: var(--dark-text);\\r\\n}\\r\\n\\r\\n/* Hyper-Texts */\\r\\n.hyper-text {\\r\\n  font-family: \\\"Roboto\\\", sans-serif;\\r\\n  color: var(--dark-hypertext);\\r\\n}\\r\\n\\r\\n/* Header Component */\\r\\n.header-container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  margin-bottom: 32px;\\r\\n  padding-top: 16px;\\r\\n}\\r\\n\\r\\n.header-logo {\\r\\n  height: 100px;\\r\\n  width: 100px;\\r\\n}\\r\\n\\r\\n.logo-title {\\r\\n  font-size: 35px;\\r\\n  color: var(--dark-text);\\r\\n}\\r\\n\\r\\n/* Bio Container */\\r\\n.bio-container {\\r\\n  height: 60px;\\r\\n  padding-bottom: 80px;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.bio-main {\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n}\\r\\n\\r\\n.bio-img {\\r\\n  max-height: 60px;\\r\\n  max-width: 60px;\\r\\n  border-radius: 100%;\\r\\n  margin-right: 16px;\\r\\n}\\r\\n\\r\\n/* Articles Box Component */\\r\\n.articles-container {\\r\\n  margin-bottom: px;\\r\\n}\\r\\n\\r\\n.article-title {\\r\\n  padding-top: 30px;\\r\\n  margin-bottom: 0;\\r\\n}\\r\\n\\r\\n.article-date {\\r\\n  margin-bottom: 5px;\\r\\n  font-size: 13px;\\r\\n  color: #B2BEB5;\\r\\n}\\r\\n\\r\\n.article-description {\\r\\n  margin-top: 0;\\r\\n}\\r\\n\\r\\n/* Footer Component */\\r\\n.footer-container {\\r\\n  padding-top: 95px;\\r\\n  margin-bottom: 40px;\\r\\n}\\r\\n\\r\\n.footer-container .hyper-text {\\r\\n  padding-left: 35px;\\r\\n}\\r\\n\\r\\n.footer-container .hyper-text:hover {\\r\\n  color: var(--standard-yellow);\\r\\n  font-size: 18px;\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://style/Main.css\"],\"names\":[],\"mappings\":\"AAAA,kCAAkC;AAClC,yEAAyE;;AAEzE,gCAAgC;AAChC,2EAA2E;;AAE3E,qCAAqC;AACrC;EACE,0BAA0B;EAC1B,yBAAyB;EACzB,oBAAoB;EACpB,2BAA2B;EAC3B,0BAA0B;EAC1B,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA,0CAA0C;AAC1C;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,UAAU;EACV,wCAAwC;EACxC,0BAA0B;EAC1B,uBAAuB;AACzB;;AAEA,gBAAgB;AAChB;EACE,iCAAiC;EACjC,4BAA4B;AAC9B;;AAEA,qBAAqB;AACrB;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,eAAe;EACf,uBAAuB;AACzB;;AAEA,kBAAkB;AAClB;EACE,YAAY;EACZ,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA,qBAAqB;AACrB;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,eAAe;AACjB\",\"sourcesContent\":[\"/* Fonte para textos dos artigos */\\r\\n@import url(\\\"https://fonts.googleapis.com/css2?family=Lora&display=swap\\\");\\r\\n\\r\\n/* Fonte para textos especiais */\\r\\n@import url(\\\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\\\");\\r\\n\\r\\n/* Variáveis dark mode / light mode */\\r\\n:root {\\r\\n  --dark-background: #000011;\\r\\n  --dark-hypertext: #BA4FC2;\\r\\n  --dark-text: #f0f0f0;\\r\\n  --light-background: #f0f0f0;\\r\\n  --light-hypertext: #210535;\\r\\n  --light-text: #0f0f0f;\\r\\n  --standard-yellow: #ffd700;\\r\\n}\\r\\n\\r\\n/* Estilos Padronizados Momentaneamnente */\\r\\n* {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  height: 100vh;\\r\\n  padding-left: 400px;\\r\\n  width: 50%;\\r\\n  background-color: var(--dark-background);\\r\\n  font-family: \\\"Lora\\\", serif;\\r\\n  color: var(--dark-text);\\r\\n}\\r\\n\\r\\n/* Hyper-Texts */\\r\\n.hyper-text {\\r\\n  font-family: \\\"Roboto\\\", sans-serif;\\r\\n  color: var(--dark-hypertext);\\r\\n}\\r\\n\\r\\n/* Header Component */\\r\\n.header-container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  margin-bottom: 32px;\\r\\n  padding-top: 16px;\\r\\n}\\r\\n\\r\\n.header-logo {\\r\\n  height: 100px;\\r\\n  width: 100px;\\r\\n}\\r\\n\\r\\n.logo-title {\\r\\n  font-size: 35px;\\r\\n  color: var(--dark-text);\\r\\n}\\r\\n\\r\\n/* Bio Container */\\r\\n.bio-container {\\r\\n  height: 60px;\\r\\n  padding-bottom: 80px;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.bio-main {\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n}\\r\\n\\r\\n.bio-img {\\r\\n  max-height: 60px;\\r\\n  max-width: 60px;\\r\\n  border-radius: 100%;\\r\\n  margin-right: 16px;\\r\\n}\\r\\n\\r\\n/* Articles Box Component */\\r\\n.articles-container {\\r\\n  margin-bottom: px;\\r\\n}\\r\\n\\r\\n.article-title {\\r\\n  padding-top: 30px;\\r\\n  margin-bottom: 0;\\r\\n}\\r\\n\\r\\n.article-date {\\r\\n  margin-bottom: 5px;\\r\\n  font-size: 13px;\\r\\n  color: #B2BEB5;\\r\\n}\\r\\n\\r\\n.article-description {\\r\\n  margin-top: 0;\\r\\n}\\r\\n\\r\\n/* Footer Component */\\r\\n.footer-container {\\r\\n  padding-top: 95px;\\r\\n  margin-bottom: 40px;\\r\\n}\\r\\n\\r\\n.footer-container .hyper-text {\\r\\n  padding-left: 35px;\\r\\n}\\r\\n\\r\\n.footer-container .hyper-text:hover {\\r\\n  color: var(--standard-yellow);\\r\\n  font-size: 18px;\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGUvTWFpbi5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLDZKQUE2SiwySEFBMkgseURBQXlELGlDQUFpQyxnQ0FBZ0MsMkJBQTJCLGtDQUFrQyxpQ0FBaUMsNEJBQTRCLGlDQUFpQyxLQUFLLDBEQUEwRCw0QkFBNEIsS0FBSyxjQUFjLG9CQUFvQiwwQkFBMEIsaUJBQWlCLCtDQUErQyxtQ0FBbUMsOEJBQThCLEtBQUssMENBQTBDLDBDQUEwQyxtQ0FBbUMsS0FBSyxxREFBcUQsb0JBQW9CLDBCQUEwQiwwQkFBMEIsd0JBQXdCLEtBQUssc0JBQXNCLG9CQUFvQixtQkFBbUIsS0FBSyxxQkFBcUIsc0JBQXNCLDhCQUE4QixLQUFLLCtDQUErQyxtQkFBbUIsMkJBQTJCLDBCQUEwQiw4QkFBOEIsS0FBSyxtQkFBbUIsb0JBQW9CLGtDQUFrQyxLQUFLLGtCQUFrQix1QkFBdUIsc0JBQXNCLDBCQUEwQix5QkFBeUIsS0FBSyw2REFBNkQsd0JBQXdCLEtBQUssd0JBQXdCLHdCQUF3Qix1QkFBdUIsS0FBSyx1QkFBdUIseUJBQXlCLHNCQUFzQixxQkFBcUIsS0FBSyw4QkFBOEIsb0JBQW9CLEtBQUsscURBQXFELHdCQUF3QiwwQkFBMEIsS0FBSyx1Q0FBdUMseUJBQXlCLEtBQUssNkNBQTZDLG9DQUFvQyxzQkFBc0IsS0FBSyxXQUFXLHNGQUFzRixjQUFjLGFBQWEsY0FBYyxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsNklBQTZJLDJIQUEySCx5REFBeUQsaUNBQWlDLGdDQUFnQywyQkFBMkIsa0NBQWtDLGlDQUFpQyw0QkFBNEIsaUNBQWlDLEtBQUssMERBQTBELDRCQUE0QixLQUFLLGNBQWMsb0JBQW9CLDBCQUEwQixpQkFBaUIsK0NBQStDLG1DQUFtQyw4QkFBOEIsS0FBSywwQ0FBMEMsMENBQTBDLG1DQUFtQyxLQUFLLHFEQUFxRCxvQkFBb0IsMEJBQTBCLDBCQUEwQix3QkFBd0IsS0FBSyxzQkFBc0Isb0JBQW9CLG1CQUFtQixLQUFLLHFCQUFxQixzQkFBc0IsOEJBQThCLEtBQUssK0NBQStDLG1CQUFtQiwyQkFBMkIsMEJBQTBCLDhCQUE4QixLQUFLLG1CQUFtQixvQkFBb0Isa0NBQWtDLEtBQUssa0JBQWtCLHVCQUF1QixzQkFBc0IsMEJBQTBCLHlCQUF5QixLQUFLLDZEQUE2RCx3QkFBd0IsS0FBSyx3QkFBd0Isd0JBQXdCLHVCQUF1QixLQUFLLHVCQUF1Qix5QkFBeUIsc0JBQXNCLHFCQUFxQixLQUFLLDhCQUE4QixvQkFBb0IsS0FBSyxxREFBcUQsd0JBQXdCLDBCQUEwQixLQUFLLHVDQUF1Qyx5QkFBeUIsS0FBSyw2Q0FBNkMsb0NBQW9DLHNCQUFzQixLQUFLLHVCQUF1QjtBQUM5eUs7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZS9NYWluLmNzcz8yYzEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBGb250ZSBwYXJhIHRleHRvcyBkb3MgYXJ0aWdvcyAqL1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmEmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuLyogRm9udGUgcGFyYSB0ZXh0b3MgZXNwZWNpYWlzICovXFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbi8qIFZhcmnDoXZlaXMgZGFyayBtb2RlIC8gbGlnaHQgbW9kZSAqL1xcclxcbjpyb290IHtcXHJcXG4gIC0tZGFyay1iYWNrZ3JvdW5kOiAjMDAwMDExO1xcclxcbiAgLS1kYXJrLWh5cGVydGV4dDogI0JBNEZDMjtcXHJcXG4gIC0tZGFyay10ZXh0OiAjZjBmMGYwO1xcclxcbiAgLS1saWdodC1iYWNrZ3JvdW5kOiAjZjBmMGYwO1xcclxcbiAgLS1saWdodC1oeXBlcnRleHQ6ICMyMTA1MzU7XFxyXFxuICAtLWxpZ2h0LXRleHQ6ICMwZjBmMGY7XFxyXFxuICAtLXN0YW5kYXJkLXllbGxvdzogI2ZmZDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRXN0aWxvcyBQYWRyb25pemFkb3MgTW9tZW50YW5lYW1uZW50ZSAqL1xcclxcbioge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDQwMHB4O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmFja2dyb3VuZCk7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBzZXJpZjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLXRleHQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIeXBlci1UZXh0cyAqL1xcclxcbi5oeXBlci10ZXh0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWh5cGVydGV4dCk7XFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciBDb21wb25lbnQgKi9cXHJcXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sb2dvIHtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLXRleHQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCaW8gQ29udGFpbmVyICovXFxyXFxuLmJpby1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5iaW8tbWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYmlvLWltZyB7XFxyXFxuICBtYXgtaGVpZ2h0OiA2MHB4O1xcclxcbiAgbWF4LXdpZHRoOiA2MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQXJ0aWNsZXMgQm94IENvbXBvbmVudCAqL1xcclxcbi5hcnRpY2xlcy1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogcHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLXRpdGxlIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtZGF0ZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBjb2xvcjogI0IyQkVCNTtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtZGVzY3JpcHRpb24ge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9vdGVyIENvbXBvbmVudCAqL1xcclxcbi5mb290ZXItY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmctdG9wOiA5NXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250YWluZXIgLmh5cGVyLXRleHQge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciAuaHlwZXItdGV4dDpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tc3RhbmRhcmQteWVsbG93KTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlL01haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtDQUFrQztBQUNsQyx5RUFBeUU7O0FBRXpFLGdDQUFnQztBQUNoQywyRUFBMkU7O0FBRTNFLHFDQUFxQztBQUNyQztFQUNFLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLDBCQUEwQjtBQUM1Qjs7QUFFQSwwQ0FBMEM7QUFDMUM7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVix3Q0FBd0M7RUFDeEMsMEJBQTBCO0VBQzFCLHVCQUF1QjtBQUN6Qjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxpQ0FBaUM7RUFDakMsNEJBQTRCO0FBQzlCOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRm9udGUgcGFyYSB0ZXh0b3MgZG9zIGFydGlnb3MgKi9cXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbi8qIEZvbnRlIHBhcmEgdGV4dG9zIGVzcGVjaWFpcyAqL1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4vKiBWYXJpw6F2ZWlzIGRhcmsgbW9kZSAvIGxpZ2h0IG1vZGUgKi9cXHJcXG46cm9vdCB7XFxyXFxuICAtLWRhcmstYmFja2dyb3VuZDogIzAwMDAxMTtcXHJcXG4gIC0tZGFyay1oeXBlcnRleHQ6ICNCQTRGQzI7XFxyXFxuICAtLWRhcmstdGV4dDogI2YwZjBmMDtcXHJcXG4gIC0tbGlnaHQtYmFja2dyb3VuZDogI2YwZjBmMDtcXHJcXG4gIC0tbGlnaHQtaHlwZXJ0ZXh0OiAjMjEwNTM1O1xcclxcbiAgLS1saWdodC10ZXh0OiAjMGYwZjBmO1xcclxcbiAgLS1zdGFuZGFyZC15ZWxsb3c6ICNmZmQ3MDA7XFxyXFxufVxcclxcblxcclxcbi8qIEVzdGlsb3MgUGFkcm9uaXphZG9zIE1vbWVudGFuZWFtbmVudGUgKi9cXHJcXG4qIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA0MDBweDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJhY2tncm91bmQpO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgc2VyaWY7XFxyXFxuICBjb2xvcjogdmFyKC0tZGFyay10ZXh0KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSHlwZXItVGV4dHMgKi9cXHJcXG4uaHlwZXItdGV4dCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogdmFyKC0tZGFyay1oeXBlcnRleHQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgQ29tcG9uZW50ICovXFxyXFxuLmhlYWRlci1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcclxcbiAgcGFkZGluZy10b3A6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbG9nbyB7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDM1cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tZGFyay10ZXh0KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQmlvIENvbnRhaW5lciAqL1xcclxcbi5iaW8tY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlvLW1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmJpby1pbWcge1xcclxcbiAgbWF4LWhlaWdodDogNjBweDtcXHJcXG4gIG1heC13aWR0aDogNjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi8qIEFydGljbGVzIEJveCBDb21wb25lbnQgKi9cXHJcXG4uYXJ0aWNsZXMtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS10aXRsZSB7XFxyXFxuICBwYWRkaW5nLXRvcDogMzBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLWRhdGUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgY29sb3I6ICNCMkJFQjU7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLWRlc2NyaXB0aW9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciBDb21wb25lbnQgKi9cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nLXRvcDogOTVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItY29udGFpbmVyIC5oeXBlci10ZXh0IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250YWluZXIgLmh5cGVyLXRleHQ6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLXN0YW5kYXJkLXllbGxvdyk7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./style/Main.css\n");

/***/ })

});