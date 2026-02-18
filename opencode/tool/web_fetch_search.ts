import { tool } from "@opencode-ai/plugin"
import { $ } from "bun";

export default tool({
  description: "Search with duckduckgo",
  args: {
    query: tool.schema.string().describe("search query")
  },
  async execute(args) {
    // Your database logic here
    return await $`web_fetch_search "${args.query}"`.text()
  },
})
