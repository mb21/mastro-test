
export default {
  async fetch(request, env, ctx) {
    const md = await import("./data/2024-01-01-test-post.md");
    return new Response(md);
  },
};
