const { fetchPosts } = require("../fetch");

describe("Service using fetch", () => {
  test("Calling fetchPosts function, and expect and array of data to be returned", async () => {
    let posts = await fetchPosts();
    expect(Array.isArray(posts)).toBeTruthy();
  });
});
