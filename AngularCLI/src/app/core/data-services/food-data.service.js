var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Configuration } from '../../shared/configuration/app.configuration';
import { HttpWrapperService } from '../services/httpWrapper.service';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
var FoodDataService = (function () {
    function FoodDataService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.GetAllFood = function () {
            return _this.http.get(_this.actionUrl)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.GetSingleFood = function (id) {
            return _this.http.get(_this.actionUrl + id)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.AddFood = function (foodItem) {
            var toAdd = JSON.stringify({
                name: foodItem.name,
                calories: foodItem.calories,
                type: foodItem.type,
                created: new Date()
            });
            var options = _this.prepareOptions(null);
            return _this.http.post(_this.actionUrl, toAdd, options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.UpdateFood = function (id, foodToUpdate) {
            var options = _this.prepareOptions(null);
            return _this.http.put(_this.actionUrl + id, JSON.stringify(foodToUpdate), options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.DeleteFood = function (id) {
            return _this.http.delete(_this.actionUrl + id)
                .catch(_this.handleError);
        };
        this.GetRandomMeal = function () {
            return _this.http.get(_this.actionUrl + 'GetRandomMeal/')
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.prepareOptions = function (options) {
            options = options || {};
            if (!options.headers) {
                options.headers = new Headers();
            }
            options.headers.append('Content-Type', 'application/json');
            return options;
        };
        this.actionUrl = configuration.server + configuration.apiUrl + 'foods/';
    }
    FoodDataService.prototype.handleError = function (error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    };
    return FoodDataService;
}());
FoodDataService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpWrapperService, Configuration])
], FoodDataService);
export { FoodDataService };
//# sourceMappingURL=food-data.service.js.map