import "dotenv/load.ts";
import { createBot, startBot, Intents } from "discordeno/bot/mod.ts";
import { askCommand } from "./commands/ask.ts";

// Load env vars
const token = Deno.env.get("DISCORD_TOKEN")!;
const botId = BigInt(Deno.env.get("DISCORD_CLIENT_ID")!);

const bot = createBot({
  token,
  botId,
  intents: Intents.Guilds,
  events: {
    ready() {
      console.log("Copilotus is online!");
    },
    async interactionCreate(bot, interaction) {
      if (interaction.data?.name === "ask") {
        await askCommand(bot, interaction);
      }
    },
  },
});

await startBot(bot);