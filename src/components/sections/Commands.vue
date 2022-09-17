<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon, BadgeCheckIcon } from "@heroicons/vue/solid";

const stats = [
  { name: "Total Servers", stat: "+90" },
  { name: "Total members", stat: "+30000" },
  { name: "Verified", icon: BadgeCheckIcon },
  { name: "Total Commands", stat: "+40" }
];

const commandsCategories = [
  {
    name: "Fun",
    title: "Fun Commands",
    commands: [
      { name: "anilist", description: "Search for an anime on Anilist" },
      {
        name: "awesomecars",
        description:
          "Get a random Drip Car meme from https://awesomecars.neocities.org/",
      },
      { name: "cataas", description: "Find some cute cat pictures!" },
      { name: "cute", description: "Cute-o-meter!" },
      {
        name: "dinoscomics",
        description: "Replies with a random comic from Dinos and Comics.",
      },
      { name: "fakebot", description: "Fake a user or a bot!" },
      { name: "gelbooru", description: "Free Anime and Hentai Gallery" },
      {
        name: "love",
        description: "Calculate the love percentage between two users",
      },
      {
        name: "openings",
        description:
          "Get a random anime opening or ending from https://openings.moe/",
      },
      {
        name: "petittube",
        description:
          "Replies with a random video from https://petittube.com/. (Some videos may be NSFW so be careful!)",
      },
      {
        name: "reddit",
        description:
          "Replies with a random image from the subreddit you chose!",
      },
      { name: "rps", description: "Play Rock-Paper-Scissor!" },
      { name: "social", description: "Fetch cute image from waifu.pics!" },
      { name: "tictactoe", description: "Play Tic-Tac-Toe!" },
      {
        name: "tts",
        description: "Send you a mp3 file of what you wrote in chat",
      },
      { name: "tweet", description: "Send tweet to the bot twitter account" },
    ],
  },
  {
    name: "General",
    title: "General Commands",
    commands: [
      { name: "8ball", description: "Ask the magic 8ball a question" },
      { name: "advice", description: "Give you some useful advice" },
      {
        name: "choose",
        description: "Randomly choose between the choices you provide.",
      },
      {
        name: "doesntexist",
        description: "Get a random image from thiscatdoesnotexist.com",
      },
      {
        name: "explosm",
        description: "Generate a random comic from Cyanide & Happiness",
      },
      { name: "roll", description: "Roll a dice" },
      {
        name: "say",
        description: "Write something you want the bot to repeat",
      },
      {
        name: "spoiler",
        description: "Write something you want the bot to spoil",
      },
      { name: "steam", description: "Retrieve Steam user infos" },
      { name: "strawpoll", description: "Create a poll" },
      {
        name: "urban",
        description: "Search for slang words and phrases on Urban Dictionary",
      },
      {
        name: "wikihow",
        description: "Replies with a random wikihow article!",
      },
      {
        name: "wikipedia",
        description: "Replies with a random wikipedia article!",
      },
    ],
  },
  {
    name: "Utility",
    title: "Utility Commands",
    commands: [
      {
        name: "about",
        description: "Replies with some informations about the bot!",
      },
      {
        name: "avatar",
        description: "Replies with the avatar of the mentioned user.",
      },
      {
        name: "color",
        description: "Replies with a random color using hex!",
      },
      {
        name: "download",
        description: "Download videos from different website",
      },
      {
        name: "help",
        description: "Displays the list of commands for the bot",
      },
      {
        name: "images",
        description: "Retrieve all images found on the current channel!",
      },
      { name: "invite", description: "Invite me in your own server!" },
      { name: "ping", description: "Replies with Pong!" },
      { name: "serverinfo", description: "Replies with server info!" },
      { name: "stats", description: "Show some stats about the bot" },
      { name: "upvote", description: "Send you a link to vote for my bot" },
      { name: "userinfo", description: "Replies with user info!" },
    ],
  },
];
</script>

<script>
// import api from '../../services/api'

// export default {
//   data () {
//     return {
//       botstats: [],
//     }
//   },
//   methods: {
//     async getStats() {
//       this.botstats = await api.getBotStats();
//     }
//   },
//   mounted() {
//     this.getStats();
//   }
// }
</script>

<template>
  <section id="commands" class="bg-primary py-24">
    <div class="px-12 xl:px-[400px] text-center">
      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div
          v-for="s in stats"
          :key="s.name"
          class="px-4 py-5 rounded-lg overflow-hidden sm:p-6"
        >
          <dt class="text-xl font-medium text-gray-300 truncate">
            {{ s.name }}
          </dt>
          <dd class="mt-1 text-5xl tracking-tight font-semibold text-accent">
            <component v-if="s.icon" :is="s.icon" class="h-16 w-16 mx-auto" />
            <span v-else>{{ s.stat }}</span>
          </dd>
        </div>
      </dl>
    </div>

    <div class="w-full px-4 pt-16">
      <h2 class="text-4xl text-center font-semibold text-white mb-8">
        All Command
      </h2>
      <div class="mx-auto w-full max-w-xl rounded-2xl bg-secondary p-8">
        <Disclosure
          v-for="category of commandsCategories"
          :key="category.name"
          as="div"
          class="first-of-type:mt-0 mt-2"
          v-slot="{ open }"
        >
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-accent p-4 text-left text-sm font-medium text-black hover:bg-accent/60 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          >
            <span>{{ category.title }}</span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-black"
            />
          </DisclosureButton>
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform opacity-0"
            enter-to-class="transform opacity-100"
            leave-active-class="transition duration-200 ease-out"
            leave-from-class="transform opacity-100"
            leave-to-class="transform opacity-0"
          >
            <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-300">
              <div
                v-for="command of category.commands"
                :key="command.name"
                class="flex justify-between items-center"
              >
                <div class="text-sm text-gray-300 my-0.5">
                  <span class="text-accent font-semibold">/{{ command.name }}</span>
                  <span class="mx-2"> - </span>
                  <span>{{ command.description }}</span>
                </div>
              </div>
            </DisclosurePanel>
          </transition>
        </Disclosure>
      </div>
    </div>
  </section>
</template>
