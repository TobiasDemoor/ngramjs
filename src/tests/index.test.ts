import { ngram, ngramSet, NgramStyle, tokenize } from "../index";

describe("Test", () => {
  describe("tokenize returns list of words", () => {
    it("should return empty array", () => {
      expect(tokenize("")).toEqual([]);
      expect(tokenize(null as unknown as string)).toEqual([]);
    });

    it("should return list of words", () => {
      expect(tokenize("I like opensource!")).toEqual([
        "I",
        "like",
        "opensource",
      ]);
      expect(tokenize("Anže and špela are tokenized!")).toEqual([
        "Anže",
        "and",
        "špela",
        "are",
        "tokenized",
      ]);
    });
  });

  describe("ngram returns list of grams", () => {
    it("should return empty array", () => {
      expect(ngram("")).toEqual([]);
      expect(ngram(null as unknown as string)).toEqual([]);
    });

    it("should set default values for min, max and/or style", () => {
      // set's style=middle min=0 max=length by default
      expect(ngram("foo")).toEqual(["f", "fo", "foo", "o", "oo", "o"]);
      // sets max as string length and min as 1
      expect(ngram("foo", { style: NgramStyle.START })).toEqual([
        "f",
        "fo",
        "foo",
      ]);
      expect(ngram("foo", { style: NgramStyle.START, max: -1 })).toEqual([
        "f",
        "fo",
        "foo",
      ]);
      expect(ngram("foo", { style: NgramStyle.START, max: 25 })).toEqual([
        "f",
        "fo",
        "foo",
      ]);
      expect(ngram("foo", { style: NgramStyle.START, min: -1 })).toEqual([
        "f",
        "fo",
        "foo",
      ]);
    });

    it("should return list of grams", () => {
      expect(
        ngram("opensource", { style: NgramStyle.START, min: 3, max: 5 }),
      ).toEqual(["ope", "open", "opens"]);
      expect(ngram("foo", { style: NgramStyle.START, min: 3, max: 5 })).toEqual(
        ["foo"],
      );

      expect(
        ngram("opensource", { style: NgramStyle.MIDDLE, min: 3, max: 5 }),
      ).toEqual([
        "ope",
        "open",
        "opens",
        "pen",
        "pens",
        "penso",
        "ens",
        "enso",
        "ensou",
      ]);
      expect(
        ngram("foo", { style: NgramStyle.MIDDLE, min: 3, max: 5 }),
      ).toEqual(["foo"]);
    });
  });

  describe("ngramSet returns set of grams", () => {
    it("should return empty set", () => {
      expect(ngramSet("")).toEqual(new Set());
      expect(ngramSet(null as unknown as string)).toEqual(new Set());
    });

    it("should return set of grams", () => {
      expect(ngramSet("foo")).toEqual(new Set(["f", "fo", "foo", "o", "oo"]));
    });
  });
});
