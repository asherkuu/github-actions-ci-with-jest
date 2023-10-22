import { foo } from "@/src/common";

describe("simple test", () => {
  it("test", () => {
    expect(foo(1, 2)).toEqual(3);
  });
});
