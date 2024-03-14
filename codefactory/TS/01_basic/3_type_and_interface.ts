/**
 * Type and Interface
 */

/**
 * Type
 */
type NewStringType = string;

type MaleOrFemale = "male" | "female";

const stringVar: NewStringType = "test;";

type IdolType = {
  name: string;
  year?: number;
};

const yuJin: IdolType = {
  name: "안유진",
  // year: 2003,
};

/**
 * Interface
 */
interface IdolInterface {
  name: string;
  year?: number;
}

const yuJin2: IdolInterface = {
  name: "안유진",
  year: 2003,
};
