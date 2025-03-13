import assert from "assert";
import { AnswerDifficulty, Flashcard, BucketMap } from "../src/flashcards";
import {
  toBucketSets,
  getBucketRange,
  practice,
  update,
  getHint,
  computeProgress,
} from "../src/algorithm";
import{simpleflashcardgenerator} from "../src/utils"

/*
 * Testing strategy for toBucketSets():
 *
 * TODO: Describe your testing strategy for toBucketSets() here.
 * toBucketSets returns an array of sets of flashcards , the index of each set should match from which bucket it came from.
 * to test this we need to check at each index if the sets of flashcards match . 
 * first for each index check if the sets match .
 */
describe("toBucketSets()", () => {
  
  it("testing equality ", () => {
    //initialize the sets of flashcards
    
    let setofflashcards1 = simpleflashcardgenerator(1,1);
    let setofflashcards2 = simpleflashcardgenerator(1,2);
    let setofflashcards3 = simpleflashcardgenerator(1,3);
    let setofflashcards4 = simpleflashcardgenerator(1,4);
    let setofflashcards5 = simpleflashcardgenerator(1,5);
    //next make a bucketmap with the sets of flashcards
    let bucketmap = new Map<number, Set<Flashcard>>();
    bucketmap.set(1,setofflashcards1);
    bucketmap.set(2,setofflashcards2);
    bucketmap.set(3,setofflashcards3);
    bucketmap.set(4,setofflashcards4);
    bucketmap.set(5,setofflashcards5);
    //next make an array of sets of flashcards
    let arrayofsets = toBucketSets(bucketmap);
    //check if the sets of flashcards match
    //check if the length of the array of sets is the same as the length of the bucketmap
    //check if the array of sets is not empty
    
    assert.deepStrictEqual(toBucketSets(bucketmap),arrayofsets);

   
  });
  it("first index is empty", () => {
    //initialize the sets of flashcards
    
    let setofflashcards1 = simpleflashcardgenerator(1,1);
    let setofflashcards2 = new Set<Flashcard>([]);
    let setofflashcards3 = simpleflashcardgenerator(1,3);
    let setofflashcards4 = simpleflashcardgenerator(1,4);
    let setofflashcards5 = simpleflashcardgenerator(1,5);
    //next make a bucketmap with the sets of flashcards
    let bucketmap = new Map<number, Set<Flashcard>>();
    bucketmap.set(1,setofflashcards1);
    bucketmap.set(2,setofflashcards2);
    bucketmap.set(3,setofflashcards3);
    bucketmap.set(4,setofflashcards4);
    bucketmap.set(5,setofflashcards5);
    let arrayofsets = toBucketSets(bucketmap);
    //check if the sets of flashcards match
    assert.deepStrictEqual(toBucketSets(bucketmap),arrayofsets);

  });
  it("all flashcards are in the first bucket", () => {
  let setofflashcards1 = simpleflashcardgenerator(5,1);
  let setofflashcards2 = new Set<Flashcard>([]);
  let bucketmap = new Map<number, Set<Flashcard>>();
  bucketmap.set(1,setofflashcards1);
  bucketmap.set(2,setofflashcards2);
  bucketmap.set(3,setofflashcards2);
  bucketmap.set(4,setofflashcards2);
  bucketmap.set(5,setofflashcards2);
  let arrayofsets = toBucketSets(bucketmap);
  assert.deepStrictEqual(toBucketSets(bucketmap),arrayofsets);
  });
});

/*
 * Testing strategy for getBucketRange():
 *
 * TODO: Describe your testing strategy for getBucketRange() here.
 * 
 */
describe("getBucketRange()", () => {
  it("everything acording to plan / all have something ", () => {
    let setofflashcards1 = simpleflashcardgenerator(1,1);
    let setofflashcards2 = simpleflashcardgenerator(1,2);
    let setofflashcards3 = simpleflashcardgenerator(1,3);
    let setofflashcards4 = simpleflashcardgenerator(1,4);
    let setofflashcards5 = simpleflashcardgenerator(1,5);
    let bucketmap = new Map<number, Set<Flashcard>>();
    bucketmap.set(1,setofflashcards1);
    bucketmap.set(2,setofflashcards2);
    bucketmap.set(3,setofflashcards3);
    bucketmap.set(4,setofflashcards4);
    bucketmap.set(5,setofflashcards5);
    
    let arrayofsets = toBucketSets(bucketmap);
    let range = getBucketRange(arrayofsets);
    
    
  });
});

/*
 * Testing strategy for practice():
 *
 * TODO: Describe your testing strategy for practice() here.
 */
describe("practice()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for update():
 *
 * TODO: Describe your testing strategy for update() here.
 */
describe("update()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for getHint():
 *
 * TODO: Describe your testing strategy for getHint() here.
 */
describe("getHint()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for computeProgress():
 *
 * TODO: Describe your testing strategy for computeProgress() here.
 */
describe("computeProgress()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});
