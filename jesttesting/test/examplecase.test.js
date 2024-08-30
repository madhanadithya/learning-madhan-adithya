const {
  getTotalLikes,
  getMostPopularBlog,
  getMinLikes,
} = require("../examplecase");

const user = {
  username: "user1",
  blogs: [
    {
      title: "Entry 1",
      likes: 130,
      content: "Blog 1 content...",
    },
    {
      title: "Entry 2",
      likes: 100,
      content: "Blog 2 content...",
    },
  ],
};

describe("getTotalLikes", () => {
  test("should return the total likes of a user", () => {
    expect(getTotalLikes(user)).toBe(230);
  });
});

describe("getMostPopularBlog", () => {
  test("should return the most popular blog of a user", () => {
    const output = {
      title: "Entry 1",
      likes: 130,
      content: "Blog 1 content...",
    };
    expect(getMostPopularBlog(user)).toEqual(output);
  });
});

describe("getMinLikes", () => {
  test("should return the Min likes of a user", () => {
    expect(getMinLikes(user)).toBe(100);
  });
});
