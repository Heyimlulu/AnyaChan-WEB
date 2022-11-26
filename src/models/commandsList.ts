export const commandsList = [
    {
        "name": "Admin",
        "title": "Admin Commands",
        "commands": [
            {
                "name": "addrole",
                "description": "Add a new role, with optional color (Admin only)",
                "options": [
                    {
                        "type": 3,
                        "name": "name",
                        "description": "Name of the role",
                        "required": true
                    },
                    {
                        "type": 3,
                        "name": "color",
                        "description": "Color of the role in the format #RRGGBB without the #",
                        "required": false
                    }
                ]
            },
            {
                "name": "ban",
                "description": "Bans a user from the server (Admin only)",
                "options": [
                    {
                        "name": "user",
                        "description": "The user to ban",
                        "required": true,
                        "type": 6
                    },
                    {
                        "type": 3,
                        "name": "reason",
                        "description": "The reason for the ban",
                        "required": false
                    }
                ]
            },
            {
                "name": "bye",
                "description": "Set a leave message for your server (Admin only)",
                "options": [
                    {
                        "type": 3,
                        "name": "message",
                        "description": "The message you want to send when someone leaves the server",
                        "required": false
                    }
                ]
            },
            {
                "name": "clear",
                "description": "Clean up messages in a channel (Admin only)",
                "options": [
                    {
                        "type": 4,
                        "name": "amount",
                        "description": "The amount of messages to delete (max 100)",
                        "required": true
                    }
                ]
            },
            {
                "name": "deleterole",
                "description": "Delete a role (Admin only)",
                "options": [
                    {
                        "name": "role",
                        "description": "The role to delete",
                        "required": true,
                        "type": 8
                    }
                ]
            },
            {
                "name": "kick",
                "description": "Kicks a user from the server (Admin only)",
                "options": [
                    {
                        "name": "user",
                        "description": "The user to kick",
                        "required": true,
                        "type": 6
                    },
                    {
                        "type": 3,
                        "name": "reason",
                        "description": "The reason for the kick",
                        "required": false
                    }
                ]
            },
            {
                "name": "welcome",
                "description": "Set a welcome message for your server (Admin only)",
                "options": [
                    {
                        "type": 3,
                        "name": "message",
                        "description": "The message you want to send when someone joins the server",
                        "required": false
                    }
                ]
            }
        ]
    },
    {
        "name": "Fun",
        "title": "Fun Commands",
        "commands": [
            {
                "name": "anilist",
                "description": "Search for an anime on Anilist",
                "options": [
                    {
                        "type": 3,
                        "name": "search",
                        "description": "The anime to search for",
                        "required": true
                    }
                ]
            },
            {
                "name": "awesomecars",
                "description": "Get a random Drip Car meme from https://awesomecars.neocities.org/",
                "options": []
            },
            {
                "name": "cardhighlow",
                "description": "Guess if the next card will be higher or lower than the previous one",
                "options": []
            },
            {
                "name": "cataas",
                "description": "Find some cute cat pictures!",
                "options": []
            },
            {
                "name": "cute",
                "description": "Cute-o-meter!",
                "options": [
                    {
                        "name": "user",
                        "description": "Select a user",
                        "required": false,
                        "type": 6
                    }
                ]
            },
            {
                "name": "dinoscomics",
                "description": "Replies with a random comic from Dinos and Comics.",
                "options": []
            },
            {
                "name": "fakebot",
                "description": "Fake a user or a bot!",
                "options": [
                    {
                        "name": "user",
                        "description": "Select a user",
                        "required": true,
                        "type": 6
                    },
                    {
                        "type": 3,
                        "name": "text",
                        "description": "What do you want to say?",
                        "required": true
                    }
                ]
            },
            {
                "name": "gelbooru",
                "description": "Free Anime and Hentai Gallery",
                "options": [
                    {
                        "type": 3,
                        "name": "tags",
                        "description": "The tags to search for",
                        "required": false
                    },
                    {
                        "choices": [
                            {
                                "name": "safe",
                                "value": "safe"
                            },
                            {
                                "name": "questionable",
                                "value": "questionable"
                            },
                            {
                                "name": "explicit",
                                "value": "explicit"
                            }
                        ],
                        "type": 3,
                        "name": "rating",
                        "description": "Search for posts that are rated questionable",
                        "required": false
                    }
                ]
            },
            {
                "name": "love",
                "description": "Calculate the love percentage between two users",
                "options": [
                    {
                        "name": "firstuser",
                        "description": "Select the first user",
                        "required": true,
                        "type": 6
                    },
                    {
                        "name": "seconduser",
                        "description": "Select the second user",
                        "required": true,
                        "type": 6
                    }
                ]
            },
            {
                "name": "openings",
                "description": "Get a random anime opening or ending from https://openings.moe/",
                "options": []
            },
            {
                "name": "petittube",
                "description": "Replies with a random video from https://petittube.com/. (Some videos may be NSFW so be careful!)",
                "options": []
            },
            {
                "name": "reddit",
                "description": "Replies with a random image from the subreddit you chose!",
                "options": [
                    {
                        "type": 3,
                        "name": "subreddit",
                        "description": "Dive into anything",
                        "required": true
                    }
                ]
            },
            {
                "name": "rps",
                "description": "Play Rock-Paper-Scissor!",
                "options": []
            },
            {
                "name": "social",
                "description": "Fetch cute image from waifu.pics!",
                "options": [
                    {
                        "choices": [
                            {
                                "name": "blush",
                                "value": "blush"
                            },
                            {
                                "name": "cuddle",
                                "value": "cuddle"
                            },
                            {
                                "name": "hug",
                                "value": "hug"
                            },
                            {
                                "name": "kiss",
                                "value": "kiss"
                            },
                            {
                                "name": "lick",
                                "value": "lick"
                            },
                            {
                                "name": "pat",
                                "value": "pat"
                            },
                            {
                                "name": "smug",
                                "value": "smug"
                            },
                            {
                                "name": "wave",
                                "value": "wave"
                            },
                            {
                                "name": "dance",
                                "value": "dance"
                            },
                            {
                                "name": "cry",
                                "value": "cry"
                            },
                            {
                                "name": "poke",
                                "value": "poke"
                            },
                            {
                                "name": "cringe",
                                "value": "cringe"
                            },
                            {
                                "name": "awoo",
                                "value": "awoo"
                            },
                            {
                                "name": "yeet",
                                "value": "yeet"
                            },
                            {
                                "name": "smile",
                                "value": "smile"
                            },
                            {
                                "name": "nom",
                                "value": "nom"
                            }
                        ],
                        "type": 3,
                        "name": "category",
                        "description": "Choose a category",
                        "required": true
                    },
                    {
                        "name": "user",
                        "description": "Select a user",
                        "required": false,
                        "type": 6
                    }
                ]
            },
            {
                "name": "tictactoe",
                "description": "Play Tic-Tac-Toe!",
                "options": []
            },
            {
                "name": "tts",
                "description": "Send you a mp3 file of what you wrote in chat",
                "options": [
                    {
                        "type": 3,
                        "name": "text",
                        "description": "The text you want to convert to speech (Default language is English)",
                        "required": true
                    },
                    {
                        "choices": [
                            {
                                "name": "English",
                                "value": "en-US"
                            },
                            {
                                "name": "Spanish",
                                "value": "es-ES"
                            },
                            {
                                "name": "Quebec French",
                                "value": "fr-CA"
                            }
                        ],
                        "type": 3,
                        "name": "voice",
                        "description": "The voice you want to use",
                        "required": true
                    }
                ]
            },
            {
                "name": "tweet",
                "description": "Tweet something using the bot's Twitter account",
                "options": [
                    {
                        "type": 3,
                        "name": "text",
                        "description": "What do you want to say?",
                        "required": true
                    },
                    {
                        "name": "image",
                        "description": "Attach an image to the tweet",
                        "required": false,
                        "type": 11
                    }
                ]
            }
        ]
    },
    {
        "name": "General",
        "title": "General Commands",
        "commands": [
            {
                "name": "8ball",
                "description": "Ask the magic 8ball a question",
                "options": [
                    {
                        "type": 3,
                        "name": "question",
                        "description": "The question to ask the magic 8ball",
                        "required": true
                    }
                ]
            },
            {
                "name": "dodocodes",
                "description": "Get a Dodo Code from the ACNH community!",
                "options": []
            },
            {
                "name": "advice",
                "description": "Give you some useful advice",
                "options": []
            },
            {
                "name": "choose",
                "description": "Randomly choose between the choices you provide.",
                "options": [
                    {
                        "type": 3,
                        "name": "choices",
                        "description": "(use | to separate choices)",
                        "required": true
                    }
                ]
            },
            {
                "name": "doesntexist",
                "description": "Get a random image from thiscatdoesnotexist.com",
                "options": []
            },
            {
                "name": "roll",
                "description": "Roll a dice",
                "options": [
                    {
                        "type": 4,
                        "name": "dice",
                        "description": "The amount of dice to roll",
                        "required": true
                    },
                    {
                        "type": 4,
                        "name": "sides",
                        "description": "The number of sides on the dice",
                        "required": true
                    }
                ]
            },
            {
                "name": "say",
                "description": "Write something you want the bot to repeat",
                "options": [
                    {
                        "type": 3,
                        "name": "say",
                        "description": "What do you want me to say?",
                        "required": true
                    }
                ]
            },
            {
                "name": "spoiler",
                "description": "Write something you want the bot to spoil",
                "options": [
                    {
                        "type": 3,
                        "name": "spoil",
                        "description": "What do you want me to spoil?",
                        "required": true
                    }
                ]
            },
            {
                "name": "steam",
                "description": "Retrieve Steam user infos",
                "options": [
                    {
                        "type": 3,
                        "name": "user",
                        "description": "Which Steam user should I show infos?",
                        "required": true
                    }
                ]
            },
            {
                "name": "strawpoll",
                "description": "Create a poll",
                "options": [
                    {
                        "type": 3,
                        "name": "title",
                        "description": "Title of your poll",
                        "required": true
                    },
                    {
                        "type": 3,
                        "name": "options",
                        "description": "The options for your poll (use | to separate choices)",
                        "required": true
                    },
                    {
                        "name": "multi",
                        "description": "Allow multiple votes",
                        "required": false,
                        "type": 5
                    }
                ]
            },
            {
                "name": "urban",
                "description": "Search for slang words and phrases on Urban Dictionary",
                "options": [
                    {
                        "type": 3,
                        "name": "word",
                        "description": "Which word are you looking for?",
                        "required": true
                    }
                ]
            },
            {
                "name": "wikihow",
                "description": "Replies with a random wikihow article!",
                "options": []
            },
            {
                "name": "wikipedia",
                "description": "Replies with a random wikipedia article!",
                "options": []
            }
        ]
    },
    {
        "name": "Image",
        "title": "Image Commands",
        "commands": [
            {
                "name": "bobross",
                "description": "Get a canvas painted by Bob Ross from the image you provide.",
                "options": [
                    {
                        "name": "image",
                        "description": "The image you want to see on the painting",
                        "required": true,
                        "type": 11
                    }
                ]
            },
            {
                "name": "idubbzpaint",
                "description": "Get a painting of idubbz from the image you provide",
                "options": [
                    {
                        "name": "image",
                        "description": "The image you want to see on the painting",
                        "required": true,
                        "type": 11
                    }
                ]
            },
            {
                "name": "ilikethisshow",
                "description": "Get a canvas of Anya showing her favorite show",
                "options": [
                    {
                        "name": "image",
                        "description": "The image you want to see on the canvas",
                        "required": true,
                        "type": 11
                    }
                ]
            }
        ]
    },
    {
        "name": "Utility",
        "title": "Utility Commands",
        "commands": [
            {
                "name": "about",
                "description": "Replies with some informations about the bot!",
                "options": []
            },
            {
                "name": "avatar",
                "description": "Replies with the avatar of the mentioned user.",
                "options": [
                    {
                        "name": "user",
                        "description": "The user to get the avatar of.",
                        "required": true,
                        "type": 6
                    }
                ]
            },
            {
                "name": "color",
                "description": "Replies with a random color using hex!",
                "options": []
            },
            {
                "name": "download",
                "description": "Download videos from different website",
                "options": [
                    {
                        "type": 3,
                        "name": "url",
                        "description": "Please provide a valid url",
                        "required": true
                    },
                    {
                        "choices": [
                            {
                                "name": "Switzerland",
                                "value": 0
                            },
                            {
                                "name": "United States",
                                "value": 1
                            },
                            {
                                "name": "Germany",
                                "value": 2
                            }
                        ],
                        "type": 4,
                        "name": "proxy",
                        "description": "Select a proxy",
                        "required": true
                    }
                ]
            },
            {
                "name": "help",
                "description": "Displays the list of commands for the bot",
                "options": []
            },
            {
                "name": "images",
                "description": "Retrieve all images found on the current channel!",
                "options": [
                    {
                        "type": 3,
                        "name": "channelid",
                        "description": "Please input a valid channel ID",
                        "required": true
                    }
                ]
            },
            {
                "name": "invite",
                "description": "Invite links for the bot",
                "options": []
            },
            {
                "name": "ko-fi",
                "description": "Link to the bot creator's Ko-fi page",
                "options": []
            },
            {
                "name": "ping",
                "description": "Replies with Pong!",
                "options": []
            },
            {
                "name": "serverinfo",
                "description": "Replies with server info!",
                "options": []
            },
            {
                "name": "stats",
                "description": "Show some stats about the bot",
                "options": []
            },
            {
                "name": "tracemoe",
                "description": "Search an Anime by image for the exact scene.",
                "options": [
                    {
                        "name": "image",
                        "description": "The image to search for the exact scene. (Result may not be accurate depending on the image)",
                        "required": true,
                        "type": 11
                    }
                ]
            },
            {
                "name": "upvote",
                "description": "Send you a link to vote for my bot",
                "options": []
            },
            {
                "name": "userinfo",
                "description": "Replies with user info!",
                "options": [
                    {
                        "name": "user",
                        "description": "The user to lookup.",
                        "required": true,
                        "type": 6
                    }
                ]
            }
        ]
    }
]
