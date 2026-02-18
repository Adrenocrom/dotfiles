import { tool } from "@opencode-ai/plugin"
import { $ } from "bun";

export default tool({
  description: "get date and time",
  args: { },
  async execute(args) {
    // Your database logic here
    return await $`date`.text()
  },
})
