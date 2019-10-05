import React from 'react';
import {render} from "@testing-library/react";
import App, {addStrike, addBall, hit, foul} from './App';

test('renders without crashing', () => {
  render(<App />);
});

test("addStrike adds 1 strike to the current strike count whe strike count is less than 3", () => {
  let actual;
  let expected;
  actual = addStrike(2);
  expected = 0;
  expect(actual).toBe(expected);
})

test("addStrike resets to 0 when current strike count is 3 or greater", () => {
  let actual;
  let expected;
  actual = addStrike(3);
  expected = 0;
  expect(actual).toBe(expected);
})

test("addBall adds 1 ball to the current ball count when ball count is less than 4", () => {
  let actual;
  let expected;
  actual = addBall(3);
  expected = 0;
  expect(actual).toBe(expected);
})

test("addBall resets to 0 when current ball count is 4 or greater", () => {
  let actual;
  let expected;
  actual = addBall(4);
  expected = 0;
  expect(actual).toBe(expected);
})

test("hit resets ball and strike count to 0", () => {
  let actual;
  let expected;
  actual = hit(4);
  expected = 0;
  expect(actual).toBe(expected);
})

test("if there are 0 current strikes, foul adds 1 strike", () => {
  let actual;
  let expected;
  actual = foul(0);
  expected = 1;
  expect(actual).toBe(expected);
})

test("if there is 1 current strike, foul adds 1 strike", () => {
  let actual;
  let expected;
  actual = foul(1);
  expected = 2;
  expect(actual).toBe(expected);
})

test("if there are 2 current strikes, foul does not add a strike", () => {
  let actual;
  let expected;
  actual = foul(2);
  expected = 2;
  expect(actual).toBe(expected);
})