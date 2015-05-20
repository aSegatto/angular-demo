///<reference path="../typings/angularjs/angular.d.ts"/>

declare var require:any;

import angular = require('angular');
import products = require('./products/products')

var app = angular.module('store', [
    require('angular-material'),
    require('angular-resource'),
    require('angular-ui-router'),
    products.name,
    require('./toolbar/directives'),
    require('./cart')
]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('products', {
            url: '/',
            templateUrl: 'templates/products.html'
        })
        .state('cart', {
            url: '/cart',
            templateUrl: 'templates/cart.html'
        });
});