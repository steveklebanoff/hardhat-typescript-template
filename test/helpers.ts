import { expect } from "chai";
import { BigNumber } from "ethers";

export const expectBnEqual = (
  givenNumber: BigNumber,
  expectedNumber: number
) => {
  const parsedGiven = parseFloat(givenNumber.toString());
  expect(parsedGiven).to.eql(expectedNumber);
};
