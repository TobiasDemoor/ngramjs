/**
 * Possible ngram style values.
 */
export enum NgramStyle {
  START = 1,
  MIDDLE = 2,
}

/**
 * Interface defining ngram configuration object.
 */
export interface NgramRecipe {
  min?: number;
  max?: number;
  style?: NgramStyle;
}

/**
 * Splits the provided string into words.
 * @param str Input string.
 */
export function tokenize(str: string): string[] {
  if (typeof str !== "string") return [];
  return str
    .replace(/[$-/:-?{-~!"^_`[\]]/g, "")
    .split(" ")
    .filter((v) => v);
}

/**
 * Generates searchable words for the provided string.
 * @param str Input string.
 * @param recipe Ngram configuration.
 */
export function ngram(str: string, recipe: NgramRecipe = {}): string[] {
  if (!str) {
    return [];
  }

  const grams = [];

  let min: number = recipe.min || 0;
  let max: number = recipe.max || str.length;

  if (min < 0) min = 0; // min cannot be negative
  if (max <= min) max = min; // max cannot be less than min
  if (max > str.length) max = str.length; // max cannot be greater than string length

  if (recipe.style === NgramStyle.START) {
    for (let i = min; i <= max; i++) {
      grams.push(str.substring(0, i));
    }
  } else {
    for (let i = 0; i <= max - min; i++) {
      for (let j = min; j <= max; j++) {
        grams.push(str.substring(0 + i, j + i));
      }
    }
  }
  return grams;
}
