"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.resolvers = exports.typeDefs = void 0;
var gql = require("apollo-server-express").gql;
exports.typeDefs = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    hello: String\n  }\n"], ["\n  type Query {\n    hello: String\n  }\n"])));
exports.resolvers = {
    Query: {
        hello: function () { return "Hello world!"; }
    }
};
var templateObject_1;
