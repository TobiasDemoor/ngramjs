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
  if (!str || typeof str !== "string") return [];
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
  if (!str || typeof str !== "string") return [];

  const style: NgramStyle = recipe.style || NgramStyle.MIDDLE;
  let min: number = recipe.min || 1;
  let max: number = recipe.max || str.length;

  if (min <= 0) min = 1; // min cannot be negative or zero
  if (max < min || max > str.length) max = str.length; // max cannot be less than min and cannot be greater than string length

  const grams: string[] = [];
  switch (style) {
    case NgramStyle.START:
      for (let i = min; i <= max; i++) {
        grams.push(str.substring(0, i));
      }
      break;
    case NgramStyle.MIDDLE:
      for (let i = 0; i <= max - min; i++) {
        for (let j = min; j <= Math.min(max, str.length - i); j++) {
          grams.push(str.substring(i, i + j));
        }
      }
      break;
  }
  return grams;
}

export function ngramSet(str: string, recipe: NgramRecipe = {}): Set<string> {
  return new Set(ngram(str, recipe));
}
