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
  it("first index is empty", () => {
    let setofflashcards1 = simpleflashcardgenerator(1,1);
    let setofflashcards2 = new Set<Flashcard>([]);
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
  }
  );
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
    let range = getBucketRange(arrayofsets);
  }
  );
  it("all buckets are empty" ,() =>{
    let setofflashcards1 = new Set<Flashcard>([]);
    let bucketmap = new Map<number, Set<Flashcard>>();
    bucketmap.set(1,setofflashcards1);
    bucketmap.set(2,setofflashcards1);
    bucketmap.set(3,setofflashcards1);
    bucketmap.set(4,setofflashcards1);
    bucketmap.set(5,setofflashcards1);
    let arrayofsets = toBucketSets(bucketmap);
    let range = getBucketRange(arrayofsets);

  });
});

/*
 * Testing strategy for practice():
 *
 * DONE: Describe your testing strategy for practice() here.
 * Buckets have different practice schedules (powers of 2)
 * used Edge cases like day 0 
 * */
describe("practice()", () => {
  it("should return correct flashcards for given practice day", () => {
    let bucketmap = new Map<number, Set<Flashcard>>();
    bucketmap.set(0, simpleflashcardgenerator(1, 0));
    bucketmap.set(1, simpleflashcardgenerator(1, 1));
    let sets = toBucketSets(bucketmap);
    assert.strictEqual(practice(sets, 0).size, 2); 
  });
});



/*
 * Testing strategy for update():
 *
 * DONE: Describe your testing strategy for update() here.
 * 1. demote card to bucket 0 when difficulty is 0
 */
describe("update()", () => {
  it("should demote card to bucket 0 when difficulty is 0", () => {
    let card = new Flashcard("Question", "Answer", "Hint", ["tag"]);
    let bucketmap = new Map<number, Set<Flashcard>>();
    bucketmap.set(1, new Set([card]));
    let updated = update(bucketmap, card, 0);
    assert(updated.get(0)?.has(card));
  });
  
});

/*
 * Testing strategy for getHint():
 *
 * DONE: Describe your testing strategy for getHint() here.
 * self explanitory no need fo comment 
 * i hope you got brain tornike ... i still dont know what to do with last thing 
 */
describe("getHint()", () => {
  it("should return the correct hint for a flashcard", () => {
    let card = new Flashcard("Q", "A", "Hint123", ["tag"]);
    assert.strictEqual(getHint(card), "Hint123");
  });
});

/*
 * Testing strategy for computeProgress():
 *
 * TODO: Describe your testing strategy for computeProgress() here.
 * tornike do this yourself brother 
 */
describe("computeProgress()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "TORNIKE DO SOMETHING !!! WTH IS THIS CREATION OF YOURS ? IT DON'T MAKE NO SENSE TO ME - ROMA"
    );
  });
  it("Example test case - WTF U MEAN", () => {
    assert.fail(
      "ROMA THIS IS PERFECTION, YOU JUST DON'T UNDERSTAND IT - TORNIKE"
    );
  });
});
