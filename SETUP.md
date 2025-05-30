# Getting Started: Dev Environment (Yarn + Deno Edition)

Welcome to the Deno-powered Socratic Discord Bot project!

---

## 1. Prerequisites

- [Deno](https://deno.com/manual/getting_started/installation) (latest stable)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) (for any JS/TS package management, if needed)
- Discord server where you have permission to add bots
- Discord Developer Portal access for bot creation

---

## 2. Clone and Setup

```bash
git clone https://github.com/ujbolivar/Prometheus-Unbound.git
cd Prometheus-Unbound
```

---

## 3. Discord App Setup

1. Go to [Discord Developer Portal](https://discord.com/developers/applications) and create a new application.
2. Add a Bot user to your app.
3. Copy the Bot Token and Client ID.
4. Enable the required intents (at minimum: "MESSAGE CONTENT" and "GUILDS").
5. [Invite your bot](https://discordapi.com/permissions.html) to your server with the right permissions (e.g., applications.commands, bot).

---

## 4. Environment Variables

Copy `.env.example` to `.env` and fill in:

```env
DISCORD_TOKEN=your-discord-bot-token
DISCORD_CLIENT_ID=your-client-id
OPENAI_API_KEY=your-openai-key
```

---

## 5. Run the Bot

```bash
deno task dev
```

---

## 6. Register Commands

Command registration may need to be run separately depending on your setup. See `src/register_commands.ts` for details.

---

## 7. Next Steps

- Try `/ask` in your Discord server.
- Open issues/PRs for improvements and new features.
- See CONTRIBUTING.md (if exists) for code standards and PR workflow.