import { add } from "../src/example";

test("should return 3 when parameters are 2 and 1", () =>{
    expect(add(2,1)).toBe(3);
})