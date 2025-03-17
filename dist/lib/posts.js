"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = getAllPosts;
exports.getPostBySlug = getPostBySlug;
function getAllPosts() {
    return [
        {
            slug: 'interactive-chart-demo',
            title: 'Interactive Chart Demo',
            description: 'A demonstration of interactive charts built directly in React components',
            date: 'March 16, 2025',
            component: function () { return Promise.resolve().then(function () { return __importStar(require('../components/posts/PostOne')); }).then(function (mod) { return mod.default; }); }
        },
        {
            slug: 'ai-tools-overview',
            title: 'AI Tools Overview',
            description: 'Exploring the best AI tools for developers in 2025',
            date: 'March 10, 2025',
            component: function () { return Promise.resolve().then(function () { return __importStar(require('../components/posts/PostTwo')); }).then(function (mod) { return mod.default; }); }
        },
        // Add more posts here
    ];
}
function getPostBySlug(slug) {
    return getAllPosts().find(function (post) { return post.slug === slug; });
}
