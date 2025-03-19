"use strict";
// This file is for utility functions that might be helpful
// for both implementation and testing code.
// Place any reusable helper functions here.
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.simpleflashcardgenerator = simpleflashcardgenerator;
const flashcards_1 = require("./flashcards");
// Example utility function (you can remove this):
/**
 * Adds two numbers together.
 * @param a first number
 * @param b second number
 * @returns sum of a and b
 */
function add(a, b) {
    return a + b;
}
/**
 *
 * @param x how many flashcards
 * @param helper
 * @returns
 */
function simpleflashcardgenerator(x, helper) {
    let anarray = new Set();
    for (let i = 0; i < x; i++) {
        let front = "FTEST" + i + "" + helper;
        let back = "BTEST" + i + "" + helper;
        let hint = "HTEST" + i + "" + helper;
        let tags = [front, back, hint];
        let y = new flashcards_1.Flashcard(front, back, hint, tags);
        anarray.add(y);
    }
    return anarray;
}
