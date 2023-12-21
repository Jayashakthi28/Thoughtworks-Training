require("../index");

describe("Custom Functions", () => {
  test("compare inbuilt map method with custom map method", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const inbuiltMapResult = array.map((t) => t ** 2);
    const customMapResult = array.customMap((t) => t ** 2);
    expect(inbuiltMapResult).toEqual(customMapResult);
  });
  test("compare inbuilt reduce method with custom reduce method", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const inbuiltReduceResult = array.reduce((t, i) => t + i);
    const customReduceResult = array.customReduce((t, i) => t + i);
    expect(inbuiltReduceResult).toEqual(customReduceResult);
  });
  test("compare inbuilt filter method with custom filter method", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const inbuiltFilterResult = array.filter((t) => t % 2 === 0);
    const customFilterResult = array.customFilter((t) => t % 2 === 0);
    expect(inbuiltFilterResult).toEqual(customFilterResult);
  });
  test("compare inbuilt forEach method with custom forEach method", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const inbuiltForEachResult = [];
    const customForEachResult = [];
    array.forEach((t) => {
      inbuiltForEachResult.push(t);
    });
    array.customForEach((t) => {
      customForEachResult.push(t);
    });
    expect(inbuiltForEachResult).toEqual(customForEachResult);
  });
});
