(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container m-5\">\n  <router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'spotiapp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_artista_artista_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/artista/artista.component */ "./src/app/components/artista/artista.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _app_routs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routs */ "./src/app/app.routs.ts");
/* harmony import */ var _pipes_noimage_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/noimage.pipe */ "./src/app/pipes/noimage.pipe.ts");
/* harmony import */ var _components_tarjetas_tarjetas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tarjetas/tarjetas.component */ "./src/app/components/tarjetas/tarjetas.component.ts");
/* harmony import */ var _components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shared/loading/loading.component */ "./src/app/components/shared/loading/loading.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Import routes

// Services
// Pipes



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
                _components_artista_artista_component__WEBPACK_IMPORTED_MODULE_7__["ArtistaComponent"],
                _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _pipes_noimage_pipe__WEBPACK_IMPORTED_MODULE_10__["NoimagePipe"],
                _components_tarjetas_tarjetas_component__WEBPACK_IMPORTED_MODULE_11__["TarjetasComponent"],
                _components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routs__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], { useHash: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routs.ts":
/*!******************************!*\
  !*** ./src/app/app.routs.ts ***!
  \******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_artista_artista_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/artista/artista.component */ "./src/app/components/artista/artista.component.ts");



var ROUTES = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'search', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"] },
    { path: 'artist/:id', component: _components_artista_artista_component__WEBPACK_IMPORTED_MODULE_2__["ArtistaComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];


/***/ }),

/***/ "./src/app/components/artista/artista.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/artista/artista.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"loadingArtist\"></app-loading>\n\n<div class=\"row animated fadeIn\" *ngIf=\"!loadingArtist\">\n  <div class=\"col-2\">\n    <img [src]=\"artista.images | noimage\" class=\"img-thumbnail img-circle\">\n  </div>\n  <div class=\"col\">\n    <h3>{{ artista.name}}</h3>\n    <p>\n      <a [href]=\"artista.external_urls.spotify\" target=\"_blank\">\n        Go to artist page!\n      </a>\n        \n    </p>\n  </div>\n  <div class=\"col-4 text-right\">\n    <button  routerLink=\"/home\" class=\"btn btn-outline-danger\">Back</button>\n\n  </div>\n</div>\n<div class=\"row m-5\">\n  <div class=\"col\">\n    <table class=\"table\">\n      <thead>\n          <tr>\n              <th>Photo</th>\n              <th>Album</th>\n              <th>Song</th>\n              <th>Preview</th>\n            </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let topTrack of topTracks\">\n          <td>\n            <img [src]=\"topTrack.album.images | noimage\" class=\"img-thumb\">\n          </td>\n          <td>{{topTrack.album.name}}</td>\n          <td>{{topTrack.name}}</td>\n          <td>\n            <audio [src]=\"topTrack.preview_url\" controls></audio>\n          </td>\n        </tr>\n      </tbody>\n\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/artista/artista.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/artista/artista.component.ts ***!
  \*********************************************************/
/*! exports provided: ArtistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistaComponent", function() { return ArtistaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/spotify.service */ "./src/app/services/spotify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistaComponent = /** @class */ (function () {
    function ArtistaComponent(router, spotify) {
        var _this = this;
        this.router = router;
        this.spotify = spotify;
        this.artista = {};
        this.topTracks = [];
        this.loadingArtist = true;
        this.router.params.subscribe(function (params) {
            _this.getArtista(params['id']);
            _this.geTopTracks(params['id']);
        });
    }
    ArtistaComponent.prototype.getArtista = function (id) {
        var _this = this;
        this.loadingArtist = true;
        this.spotify.getArtista(id).subscribe(function (artista) {
            console.log(artista);
            _this.artista = artista;
            _this.loadingArtist = false;
        });
    };
    ArtistaComponent.prototype.geTopTracks = function (id) {
        var _this = this;
        this.spotify.getTopTracks(id).subscribe(function (topTracks) {
            console.log(topTracks);
            _this.topTracks = topTracks;
        });
    };
    ArtistaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-artista',
            template: __webpack_require__(/*! ./artista.component.html */ "./src/app/components/artista/artista.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"]])
    ], ArtistaComponent);
    return ArtistaComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ul>\n  <li *ngFor=\"let pais of paises\">\n    {{pais.name}} --- {{pais.population | number}}\n\n  </li>\n</ul> -->\n\n<!-- \n<div class=\"card-columns\">\n  <div  *ngFor=\"let cancion of nuevasCanciones\" class=\"card\">\n    <img class=\"card-img-top\" [src]=\"cancion.images | noimage\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{cancion.name}}</h5>\n      <p class=\"card-text\">\n        <span *ngFor=\"let artista of cancion.artists\" class=\"badge badge-pill badge-primary\">{{artista.name}}</span>\n      </p>\n    </div>\n  </div>\n</div> -->\n<app-loading *ngIf=\"loading\"></app-loading>\n<div *ngIf=\"error\" class=\"alert alert-danger animated fadeIn m-5\">\n  <h3>Error</h3>\n  <p>\n  {{mensajeError}}\n  </p>\n</div>\n<app-tarjetas [items]=\"nuevasCanciones\"></app-tarjetas>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/spotify.service */ "./src/app/services/spotify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(spotify) {
        var _this = this;
        this.spotify = spotify;
        // paises: any[] = [];
        this.nuevasCanciones = [];
        this.loading = true;
        this.error = false;
        this.spotify.getNewReleases().subscribe(function (data) {
            console.log(data);
            _this.nuevasCanciones = data;
            _this.loading = false;
        }, function (errorServicio) {
            _this.loading = false;
            _this.error = true;
            _this.mensajeError = errorServicio.error.error.message;
        });
        // console.log('Doing a http request');
        // this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (response: any) => {
        //   this.paises = response;
        //   console.log(response);
        // });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_spotify_service__WEBPACK_IMPORTED_MODULE_1__["SpotifyService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col\">\n    <input #termino type=\"text\" (keyup)=\"buscar(termino.value)\" class=\"form-control\" placeholder=\"Search an artist\">\n  </div>\n</div>\n\n\n<!-- <div class=\"card-columns m-5\">\n  <div  *ngFor=\"let artista of artistas\" class=\"card\">\n    <img class=\"card-img-top\" [src]=\"artista.images | noimage\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{artista.name}}</h5>\n    </div>\n  </div>\n</div> -->\n<app-loading *ngIf=\"loading\" class=\"m-5\"></app-loading>\n<app-tarjetas *ngIf=\"!loading\" [items]=\"artistas\"></app-tarjetas>"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/spotify.service */ "./src/app/services/spotify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(spotify) {
        this.spotify = spotify;
        this.artistas = [];
    }
    SearchComponent.prototype.buscar = function (termino) {
        var _this = this;
        this.loading = true;
        console.log(termino);
        this.spotify.getArtistas(termino).subscribe(function (data) {
            console.log(data);
            _this.artistas = data;
            _this.loading = false;
        });
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_spotify_service__WEBPACK_IMPORTED_MODULE_1__["SpotifyService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/loading/loading.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/loading/loading.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center animated fadeIn\">\n  <div class=\"col\">\n     <i class=\"fa fa-sync fa-5x fa-spin\"></i>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/shared/loading/loading.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/loading/loading.component.ts ***!
  \****************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/components/shared/loading/loading.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"assets/img/banner-ico.png\" width=\"30\" height=\"30\" alt=\"\">\n    Spotiapp\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"home\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"search\">Search</a>\n      </li>\n\n\n    </ul>\n\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/shared/navbar/navbar.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/tarjetas/tarjetas.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/tarjetas/tarjetas.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tarjetas/tarjetas.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/tarjetas/tarjetas.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card-columns m-5 animated fadeIn  \">\n  <div (click)=\"verArtista(item)\" *ngFor=\"let item of items\" class=\"card puntero\">\n    <img class=\"card-img-top\" [src]=\"item.images | noimage\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{item.name}}</h5>\n      <p class=\"card-text\">\n        <span *ngFor=\"let artista of item.artists\" class=\"badge badge-pill badge-primary\">{{artista.name}}</span>\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/tarjetas/tarjetas.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/tarjetas/tarjetas.component.ts ***!
  \***********************************************************/
/*! exports provided: TarjetasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarjetasComponent", function() { return TarjetasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TarjetasComponent = /** @class */ (function () {
    function TarjetasComponent(router) {
        this.router = router;
        this.items = [];
    }
    TarjetasComponent.prototype.verArtista = function (item) {
        var artistId;
        if (item.type === 'artist') {
            artistId = item.id;
        }
        else {
            artistId = item.artists[0].id;
        }
        console.log(artistId);
        this.router.navigate(['artist', artistId]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TarjetasComponent.prototype, "items", void 0);
    TarjetasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tarjetas',
            template: __webpack_require__(/*! ./tarjetas.component.html */ "./src/app/components/tarjetas/tarjetas.component.html"),
            styles: [__webpack_require__(/*! ./tarjetas.component.css */ "./src/app/components/tarjetas/tarjetas.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TarjetasComponent);
    return TarjetasComponent;
}());



/***/ }),

/***/ "./src/app/pipes/noimage.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/noimage.pipe.ts ***!
  \***************************************/
/*! exports provided: NoimagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoimagePipe", function() { return NoimagePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NoimagePipe = /** @class */ (function () {
    function NoimagePipe() {
    }
    NoimagePipe.prototype.transform = function (images) {
        if (!images) {
            return 'assets/img/noimage.png';
        }
        if (images.length > 0) {
            return images[0].url;
        }
        return null;
    };
    NoimagePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'noimage'
        })
    ], NoimagePipe);
    return NoimagePipe;
}());



/***/ }),

/***/ "./src/app/services/spotify.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/spotify.service.ts ***!
  \*********************************************/
/*! exports provided: SpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyService", function() { return SpotifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpotifyService = /** @class */ (function () {
    function SpotifyService(http) {
        this.http = http;
        console.log('Service done');
    }
    SpotifyService.prototype.getQuery = function (query) {
        var URL = "https://api.spotify.com/v1/" + query;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': 'Bearer BQC62bLGpwa8qs7bUjJhvpKmcOZmUx8VPFJrEJoo7Q7kVGETIHAYq8TBNOHt5W29qVEB_0mNjztHM_LCQik'
        });
        return this.http.get(URL, { headers: headers });
    };
    SpotifyService.prototype.getNewReleases = function () {
        return this.getQuery('browse/new-releases?limit=20').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data['albums'].items;
        }));
        // const headers = new HttpHeaders({
        //   'Authorization': 'Bearer BQAg48dL39RcgEEB7GikSp37IpJAYJB6NG2jBr_O-8_bgPASLTVdCjFCn7tHe4yFn5Wphiu5C-wAidrWV2U'
        // });
        // return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers }).pipe( map( data => {
        //   return data['albums'].items;
        // }));
        // subscribe(data => {
        //   console.log(data);
        // });
    };
    SpotifyService.prototype.getArtistas = function (termino) {
        return this.getQuery("search?q=" + termino + "&type=artist&limit=10").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data['artists'].items;
        }));
        // const headers = new HttpHeaders({
        //   'Authorization': 'Bearer BQD7luP6w7qL7_qbwPk_m66pu4PL68zFWlSXle1a9CVzQKqkWrwjRbt74hfUgG_x3TbQRob3v-eWNyrbpuE'
        // });
        // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10`, { headers })
        // .pipe( map ( data => data['artists'].items));
    };
    SpotifyService.prototype.getArtista = function (id) {
        return this.getQuery("artists/" + id);
        // .pipe(map(data => {return data['artists'].items;}));
    };
    SpotifyService.prototype.getTopTracks = function (id) {
        return this.getQuery("artists/" + id + "/top-tracks?country=us")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data['tracks']; }));
    };
    SpotifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SpotifyService);
    return SpotifyService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sergio/Documents/Udemy/04-spotiapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map