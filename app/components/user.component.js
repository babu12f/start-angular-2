"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var posts_service_1 = require("../services/posts.service");
var UserComponent = (function () {
    //constructor
    function UserComponent(postsService) {
        var _this = this;
        this.postsService = postsService;
        console.log('User Created');
        this.name = 'Shofiullah Babor';
        this.email = 'babu_12@yahoo.com';
        this.address = {
            div: 'Chittagong',
            city: 'Feni',
            thana: 'Feni Sadar'
        };
        this.hobbies = ['Traveling', 'Programming', 'Pera Jumping'];
        this.showHobbies = false;
        this.postsService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
            console.log(posts);
        });
    }
    UserComponent.prototype.toggleHobbies = function () {
        this.showHobbies = !this.showHobbies;
    };
    UserComponent.prototype.addHobby = function (h) {
        //console.log(hobby);
        this.hobbies.push(h);
    };
    UserComponent.prototype.deleteHobby = function (i) {
        this.hobbies.splice(i, 1);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user',
        //template: ``,
        templateUrl: 'user.component.html',
        providers: [posts_service_1.PostsService],
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], UserComponent);
exports.UserComponent = UserComponent;
//50 min 22 sec done 
//# sourceMappingURL=user.component.js.map