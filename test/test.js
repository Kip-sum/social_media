const { fetchPosts } = require("../index");

describe("Asynchronous Fetching", function () {

  it("should fetch data from API", async function () {
    const data = await fetchPosts();

    if (!data || !data.length) {
      throw new Error("No data returned");
    }
  });

});