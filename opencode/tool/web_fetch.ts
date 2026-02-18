import { tool } from "@opencode-ai/plugin"
import { $ } from "bun";

export default tool({
  description: "Fetches the content of an url and convert it to markdown.",
  args: {
    url: tool.schema.string().describe("Url")
  },
  async execute(args) {
    // Your database logic here
    return await $`/home/josef/.local/bin/web_fetch "${args.url}"`.text()
  },
})
