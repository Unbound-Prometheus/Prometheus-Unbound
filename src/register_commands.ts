import "dotenv/load.ts";
import { REST, Routes, SlashCommandBuilder } from "discordeno/bot/deps.ts";

const token = Deno.env.get("DISCORD_TOKEN")!;
const clientId = Deno.env.get("DISCORD_CLIENT_ID")!;

const commands = [
  {
    name: "ask",
    description: "Ask Copilotus a question",
    type: 1, // CHAT_INPUT
  }
];

const rest = new REST({ version: "10" }).setToken(token);

async function registerCommands() {
  try {
    console.log("Registering slash commands...");
    await rest.put(
      Routes.applicationCommands(clientId),
      { body: commands }
    );
    console.log("Slash commands registered!");
  } catch (error) {
    console.error(error);
  }
}

registerCommands();