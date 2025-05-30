import type { Bot, Interaction } from "discordeno/bot/mod.ts";

export async function askCommand(bot: Bot, interaction: Interaction) {
  // For now, simple reply
  await bot.helpers.sendInteractionResponse(interaction.id, interaction.token, {
    type: 4, // CHANNEL_MESSAGE_WITH_SOURCE
    data: {
      content: "Hello, world! I am Copilotus, your Socratic sidekick. (OpenAI integration coming soon!)",
    },
  });
}