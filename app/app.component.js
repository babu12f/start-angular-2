"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Babor';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        // template: `<h1>Hello {{ name}} In Main Component</h1> 
        // 			<babor></babor>
        // 			<user></user>`,
        template: "\n  \t\t\t<ul>\n  \t\t\t\t<li><a href=\"/\">Home</a></li>\n  \t\t\t\t<li><a href=\"/about\">About</a></li>\n  \t\t\t</ul>\n  \t\t\t<router-outlet></router-outlet>",
        styles: ["\n  \th1{\n  \t\tcolor:green;\n  \t}\n  "],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map