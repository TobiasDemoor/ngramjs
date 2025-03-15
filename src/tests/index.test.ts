import { ngram, NgramStyle, tokenize } from "../index";

describe("Test", () => {
  it("`tokenize` returns list of words", () => {
    expect(tokenize("")).toEqual([]);
    expect(tokenize(null as unknown as string)).toEqual([]);

    expect(tokenize("I like opensource!")).toEqual(["I", "like", "opensource"]);
    expect(tokenize("Anže and špela are tokenized!")).toEqual([
      "Anže",
      "and",
      "špela",
      "are",
      "tokenized",
    ]);
  });

  it("`ngram` returns list of grams", () => {
    expect(ngram("")).toEqual([]);

    expect(
      ngram("opensource", { style: NgramStyle.START, min: 3, max: 5 }),
    ).toEqual(["ope", "open", "opens"]);
    expect(ngram("foo", { style: NgramStyle.START, min: 3, max: 5 })).toEqual([
      "foo",
    ]);

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
    expect(ngram("foo", { style: NgramStyle.MIDDLE, min: 3, max: 5 })).toEqual([
      "foo",
    ]);
  });
});
