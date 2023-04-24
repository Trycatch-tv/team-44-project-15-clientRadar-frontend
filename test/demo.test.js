describe("demo", () => {
  test("should first", () => {
    const msg1 = "hola mundo";
    const msg2 = msg1.trim();
    expect(msg1).toBe(msg2);
  });
});
