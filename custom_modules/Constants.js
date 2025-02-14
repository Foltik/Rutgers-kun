exports.VERSION = '2.0',
exports.TWITCH_URL = 'https://twitch.tv/rutgersesports',
exports.DEBUG = true,

exports.Commands = {
    HELP: "help",
    PING: "ping",
    ROLE: "role",
    SCHEDULE: "schedule",
    MUTE: "mute",
    UNMUTE: "unmute",
    IGNORE: "ignore",
    AGREE: "agree",
    EIGHTBALL: "8ball",
    LOVE: "love",
    ROLL: "roll",
    WOOF: "woof",
    EXECUTE: "execute",
    PLAY: "play",
    ADDSOUND: "addsound",
    LEAVE: "leave",
    COMMAND: "command",
    ADDEMOTE: "addemote",
    GIVEPERMSALL: "givepermsall",
    LISTADMINCOMMANDS: "listadmincommands",
    QUOTE: "quote",
    QUOTES: "quotes",
    QUERY: "query",
    FILTER: "filter",
    WARN: "warn",
    WARNS: "warns",
    ECHO: "echo",
    NICK: "nick",
    PURGE: "purge",
    SETTINGS: "settings",
    UPDATERULES: "updaterules",
    WHOAMI: "whoami",
    LASTCOMMAND: "",
}

exports.CommandSynonyms = {
    ADDROLE: "addrole",
    REMOVEROLE: "removerole",
    ROLES: "roles",
    ADDCOMMAND: "addcommand",
    DELETECOMMAND: "deletecommand",
    LISTCUSTOMCOMMANDS: "listcustomcommands",
    LCC: "lcc",
    LAC: "lac",
    ADD: "add",
    REMOVE: "remove",
    LIST: "list",
    EXEC: "exec",
    UNFILTER: "unfilter",
    FILTERS: "filters",
}

exports.CommandsArray = [
    this.Commands.HELP,
    this.Commands.ROLE,
    this.Commands.PING,
    this.Commands.MUTE,
    this.Commands.UNMUTE,
    this.Commands.IGNORE,
    this.Commands.AGREE,
    this.Commands.EIGHTBALL,
    this.Commands.LOVE,
    this.Commands.ROLL,
    this.Commands.WOOF,
    this.Commands.EXECUTE,
    this.Commands.PLAY,
    this.Commands.ADDSOUND,
    this.Commands.LEAVE,
    this.Commands.COMMAND,
    this.Commands.ADDEMOTE,
    this.Commands.GIVEPERMSALL,
    this.Commands.LISTADMINCOMMANDS,
    this.Commands.QUOTE,
    this.Commands.QUOTES,
    this.Commands.QUERY,
    this.Commands.FILTER,
    this.Commands.WARN,
    this.Commands.WARNS,
    this.Commands.ECHO,
    this.Commands.NICK,
    this.Commands.PURGE,
    this.Commands.SETTINGS,
    this.Commands.UPDATERULES,
    this.Commands.WHOAMI,
];

exports.HiddenCommands = [
    this.Commands.MUTE,
    this.Commands.UNMUTE,
    this.Commands.IGNORE,
    this.Commands.AGREE,
    this.Commands.GIVEPERMSALL,
    this.Commands.LISTADMINCOMMANDS,
    this.Commands.QUERY,
    this.Commands.FILTER,
    this.Commands.WARN,
    this.Commands.WARNS,
    this.Commands.ECHO,
    this.Commands.NICK,
    this.Commands.PURGE,
    this.Commands.UPDATERULES,
    this.Commands.SETTINGS,
];

exports.ManagedCommands = [
    this.Commands.ROLES,
    this.Commands.ROLE,
    this.Commands.MUTE,
    this.Commands.UNMUTE,
    this.Commands.IGNORE,
    this.Commands.AGREE,
    this.Commands.GIVEPERMSALL,
    this.Commands.LISTADMINCOMMANDS,
    this.Commands.FILTER,
    this.Commands.NICK,
    this.Commands.PURGE,
    this.Commands.UPDATERULES,
];

exports.Permissions = {
    PRIORITYSPEAKER: 'PRIORITY_SPEAKER',
    ADMIN: 'ADMINISTRATOR',
    KICKMEMBERS: 'KICK_MEMBERS',
    MENTIONEVERYONE: "MENTION_EVERYONE",
}

exports.ManagedServers = [
    143013824679641088, //red
    291367115565301763, //redb env
]

exports.eightBallResponses = [
    "It is certain.",
    "Without a doubt.",
    "Yes - definitely.",
    "As I see it, yes.",
    "Signs point to yes.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
];

exports.Strings = {
    // PREFIX
    PREFIX: "!",

    // COMMANDS
    FALLBACK: "I don't understand. Try `!help` ",
    // COMMAND USAGE FEEDBACK
    ADDROLEDONE: " role(s) succesfully added.",
    REMOVEROLEDONE: " role(s) successfully removed.",
    NOROLEADDDONE: "Add some roles as arguments to this command to add/remove them.",
    NOROLEREMOVEDDONE: "Role(s) could not be removed.",
    ATTEMPTEDROLEADD: "Role(s) could not be added. Mods will be notified and will evaluate if you need this role.",
    DUPLICATEROLE: "One or more role(s) were ignored because you already have them.",
    NOTFOUNDROLE: "One or more role(s) were ignored because you do not have that role.",
    PONG: "pong\nMost recent heartbeat: ",
    MUTING: "Muting user ",
    MUTINGDURATION: " for ",
    UNMUTING: "Unmuting user ",
    LOVES: " loves ",
    LOVELOAD: "#",
    LOVENOLOAD: " ",
    LOVELOADSTART: "[",
    LOVELOADEND: "]",
    ROLLS: "Rolls:",
    ROLL: "`Roll ",
    ROLLEND: ":` ",
    YESRESPONSE: "yes",
    TRUERESPONSE: "true",
    AVERAGE: "`Average:` ",
    SUM: "`Sum:` ",
    COMMANDADDSUCCESS: "Command successfully added: ",
    COMMANDADDFAILURE: "Your command has not been approved: ",
    SOUNDADDSUCCESS: "Sound successfully added: ",
    SOUNDADDFAILURE: "Your sound has not been approved: ",
    EMOTEADDSUCCESS: "Your emote has been successfully added: ",
    EMOTEADDFAILURE: "Your emote has not been approved: ",
    COMMANDDELETESUCCESS: "Command successfully deleted: !",
    QUOTEADDSUCCESS: "Quote successfully added for user: ",
    QUOTECOUNT: "_Quote #",
    QUOTECOUNTEND: ":_ ",
    MENTIONMUTE: "You have been auto-muted for role pinging or attempting to ping everyone. This mute will expire `",
    MENTIONMUTE2: "` from the time this message was sent.",
    PURGEARG: "TRUE",
    MEMBERSPURGED: "Members have been purged. Check the log for more details.",
    NOMEMBERSPURGED: "No members were purged.",
    WELCOMEMESSAGE: "Welcome, ",
    WELCOMEMESSAGEEND: " to the Rutgers Esports Discord! Add roles using `!role add role-name` in ",
    WELCOMEMESSAGEEND2: " to see game channels. Use `!roles` to see the list of roles you can add.",
    FILTERADDED: "Filter successfully added for word: ",
    DURATION: "\nLasting: ",
    FILTERREMOVED: "Filter successfully removed for word: ",
    NICKSET: "Nickname successfully set: ",
    ADDCMDATTEMPT: " attempted to add command: !",
    ADDCMDATTEMPT2: "\n:thumbsup: this message to accept it.",
    ADDSOUNDATTEMPT: " attempted to add sound: ",
    ADDSOUNDATTEMPT2: "\n:thumbsup: this message to accept it.",
    SOUNDUNDERREVIEW: "Your sound has been submitted to mods to be reviewed. You will be notified if they accept.",
    GHOSTPING: "The role ",
    GHOSTPING2: " was mentioned in this channel.",
    MEMBERIGNORED: "Ignoring member: ",
    MEMBERUNIGNORED: "Unignoring member: ",
    GAMERFRIENDZONED: "Friendzoning gamer: ",
    FILTEREDWORDCAUGHT: "**Filtered word caught!**",
    PINGATTEMPTCAUGHT: "**Ping attempt caught!**",
    CONGRATULATIONSGRAD: "Congratulations on graduating!",
    COMMANDSPLITTER: " ; ",
    SCHEDULERAUTHOR: "This is an announcement scheduled by",
    SCHEDULEDANNOUNCEMENT: "Your announcement has been successfully scheduled for ",
    SCHEDULEDANNOUNCEMENT2: " from this timestamp.",
    WARNINGMESSAGE: "You have been issued a warning by the Moderators of the Rutgers Esports Discord.",
    OFFENDINGMESSAGE: "__Offending Message:__ ",
    WARNDISCLAIMER: "This message is a warning. The generation of this report does not necessarily mean action will be taken at this time.",
    VOTETIMEOUT: "Vote has timed out.",
    VOTEPASS: "Vote has passed!",
    VOTEFAIL: "Vote has failed.",
    VOTERUNNING: "A vote is already running.",
    VOTEINVALID: "Your vote has been ignored because the vote has already finished.",
    CANNOTVOTETWICE: "You cannot vote twice on the same vote.",

    // REASONS
    ROLEREASON: "This role was added/removed by Rutgers Esports Discord Bot in response to a command by a Guild Member.",
    KICKAGREEMENTREASON: "This user was kicked for failing to !agree in time.",
    MENTIONKICKREASON: "This user was kicked for mentioning a role without the right permissions.",
    PURGEKICKREASON: "This user has been purged with !purge.",

    // EVENT-RELATED
    DELETEDAUTHOR: "Deleted message by user: ",
    DELETEDMESSAGE: "\nMessage Contents: ",
    DELETEDMESSAGELINK: "Jump to deleted message",
    TIMESTAMP: "Timestamp: ",
    EDITEDAUTHOR: "Edited message by user: ",
    EDITEDOLDMESSAGE: "\nOld Message Contents: ",
    EDITEDNEWMESSAGE: "\nNew Message Contents: ",
    EDITEDMESSAGELINK: "Jump to edited message",
    INCHANNEL: "\nIn channel: ",
    DEFAULTMESSAGESERVER: "Rutgers Esports Executive Board",
    DEFAULTMESSAGECHANNEL: "shitposting",
    MESSAGEID: "Message ID: ",
    MEMBERJOINED: "Member Joined: ",
    MEMBERLEFT: "Member Left: ",
    NOWARNEDMESSAGES: "This user has no logged warned messages.",
    NOTES: "Notes: ",

    // EMBEDDED MESSAGES
    EMCOMMANDS: "Available Commands:",
    EMROLES: "Available Roles:",
    EMFILTERS: "Active Filters:",
    EMUSERS: "Ignored Users:",
    EMCOMMANDADD: "Command add attempt:",
    EMCOMMANDNAME: "Command name:",
    EMCOMMANDMSG: "Message: ",
    EMSOUNDADD: "Sound add attempt:",
    EMEMOTEADD: "Emote add attempt:",
    EMSOUNDFILENAME: "Filename:",
    EMEMOTENAME: "Emote name:",

    // ARGUMENTS
    ADDROLE: "add",
    REMOVEROLE: "remove",

    // WARNINGS AND ERRORS
    ROLENOTFOUND: "One or more roles could not be found in the server! Take note that this bot only runs on servers customized by Rutgers Esports Systems and Tech Committee Members!",
    CHANNELNOTFOUND: "Channel could not be found.",
    NOAUDITWARN: "No `#audit` was found in this server. Contact a mod if you see this message.",
    WRONGARGS: "Invalid number of arguments. Please refer to `!help command-name` to learn how to use this command correctly.",
    WRONGSERVER: "This command is not designed to work in other servers. Please only use this bot in ",
    NOPERMISSION: "You do not have permission to run this command!",
    ASKQUESTION: "You must ask a question to the eight ball (Try ending your question with a question mark).",
    NOPERMROLE: "I do not have permission to add/remove this role.",
    NOTALLNUMBERS: "Not all your arguments are numbers.",
    TOOMANYDICE: "That's too many dice! Please try again with fewer dice.",
    NOTAGREEMENT: "This is not ",
    NOTAGREEMENT2: ". Exiting...",
    ALODICE: "There must be at least one die.",
    ALOSIDE: "There must be at least one side.",
    AGREEMOREARGS: "Please specify which role you would like to add first with `!agree role-name`.",
    AGREELESSARGS: "Please make sure you specify only one role you would like to add with `!agree role-name`.",
    WRONGCODE: "That appears to be an incorrect code.",
    NOTCOMPLETEDPASTSTEP: "You may not have completed a previous step in the email verification process.",
    RUTGERSEMAILPLS: "Please make sure you are entering a \"rutgers.edu\" email.",
    TOOLONGVERIFY: "You took too long to agree to the server rules. You can still rejoin the server with http://discord.gg/rutgersesports",
    TOOMANYPRIV: "You are not allowed to add this role through this command. If you were a Guest and recently became a Rutgers Student you will need to restart the verification process with `!role remove Guest`.",
    BOTCOMMANDSWARNING: "This command only works in ",
    COMMANDALREADYRUN: "This command has already been run once since the bot started. This command is only meant to be run once!! Exiting...",
    NOTRED: "This command is not being run in Rutgers Esports Discord or its testing environment! Exiting...",
    NOCUSTOMCOMMANDSWARNING: "There are no custom commands in this server yet or there are no matches for your filter. Add them with `!addcommand`.",
    SAMEASBUILTIN: "You cannot add a command with the same name as a built-in command.",
    SAMEASBUILTINDELETE: "You cannot remove built-in commands.",
    QUOTEMENTION: "You must mention someone in your first argument of this command.",
    NOLASTMESSAGE: "This user has not made a message in this server yet.",
    TRIEDTOADDROLE: " tried to add role ",
    NOQUOTESWARN: "This user has no quotes in this server.",
    CANNOTQUOTESELF: "You cannot quote yourself.",
    NOTVALIDMEMBER: "This is not a valid member.",
    PURGEWARNING: "Only run this command if you know what you're doing! If you truly want to use this command run `!purge TRUE`.",
    WRONGCHANNELWARN: "This command is supposed to run when agreeing to the rules when you joined the server.",
    ROLENOTREMOVABLEWARN: "This role is not removable because it is a managed role that provides you permissions in this server.",
    NOCOMMANDFOUND: "No command was found in this server by that name.",
    WORDNOTFOUNDERROR: "Word to be unfiltered was not filtered already.",
    NOFILTERSWARN: "There are no active filters.",
    NOTYOURCOMMANDWARN: "You cannot delete commands that are not your own!",
    DUPECOMMANDWARN: "There is already a custom command by that name.",
    ROLEPINGWARN: "You are not allowed to ping roles if you are not a club leader or other trusted member. You have been automatically muted for this. If you believe this was a wrongful mute please contact an Admin or Moderator.",
    NOTINVOICEWARN: "You must join a voice channel first.",
    NOTINVOICEMEWARN: "I am not in a voice channel.",
    VOICEFILENOTFOUNDWARN: "Sound file was not found. See the list of sound files with `!help play`",
    NOPERMREACTIONWARN: "Your reaction has not been processed because you must be Moderator or higher to approve commands.",
    NOTMANAGEDSERVERWARN: "This command has been turned off because this server is unmanaged.",
    NEEDATTACHMENTWARN: "You need to attach a .mp3 file that is <25MB to this command.",
    NEEDATTACHMENTEMOTEWARN: "You need to attach an image file that is <256 KB.",
    NOTMODVOTEWARN: "You must be a moderator or higher to vote. Sorry :(",
    USERNOTFOUNDWARN: "User could not be found.",
    INVALIDTIMESTRING: "You passed an invalid time string. Make sure your time string is formatted as: `Aw Bd Xh Ym Zs`. All fields but one are mandatory.",
    NOIGNORESWARN: "There are no ignored users.",
    FILTEREDWORDWARN: "You have entered a filter word. As such, your message has been deleted.",
    ALREADYAPPROVED: "Action has alredy been taken on this command by another Moderator or higher.",
    IGNOREHIGHER: "You cannot make me ignore someone with a role higher or equal to yours.",
    MUTEHIGHER: "You cannot make me mute someone with a role higher or equal to yours.",
    IGNORECREATOR: "You cannot make me ignore Arjun.",
    MESSAGENOTFOUNDWARN: "Message could not be found. :(",
    NOTVALIDRULE: "One of these is not a valid rule. Valid rules are number inputs representing the rule number you wish to choose.",
    ALREADYWARNED: "This message has already been warned.",
    SERVERONLYSETTING: "This is a server only setting.",
    NOTAPPROVEDEMOJI: "This is not an approved voting emoji.",

    // PLACEHOLDERS
    PLACEHOLDER: "I am still being worked on!",
    ARGSPLACEHOLDER: "Here are the arguments I was supplied: ",

    // SERVER NAMES
    REEBO: "Rutgers Esports Executive Board",
    RED: "Rutgers Esports",
    REDBENV: "REDB_ENV",
    THOMAS: "Thomas's pp poo poo's",

    // CHANNEL NAMES
    SHITPOSTING: "shitposting",
    AUDIT: "audit",
    BOTOUTPUT: "approval",
    APPROVAL: "approval",
    AGREEMENT: "agreement",
    BOTCOMMANDS: "botcommands",
    GENERAL: "general",
    VOTES: "votes",

    // EMOTES
    THUMBSUP: "👍",
    THUMBSDOWN: "👎",
    CLAP: "👏",
    WAVE: "👋",
    ZERO: "0⃣",
    ONE: "1⃣",
    TWO: "2⃣",
    THREE: "3⃣",
    FOUR: "4⃣",
    FIVE: "5⃣",
    SIX: "6⃣",
    SEVEN: "7⃣",
    EIGHT: "8⃣",
    NINE: "9⃣",
    DEFAULT: "🔢",
    ANGRY: "😠",
    NOENTRY: "⛔",
    THINK: "🤔",
    WRENCH: "🔧",
    EYEROLL: "🙄",
    FIRE: "🔥",

    // USER IDs
    RUTGERSESPORTS: 227615199950012416,
    ARJUNID: 87525135241728000,
    JOEYID: 223169696055296011,
    
    // USERs
    JOEYTAG: "joey#1337",

    // ROLE NAMES - These lines may need to be adjusted per server
    PRIVROLE: "GAMER",
    MUTEDROLE: "MUTED",
    SCHOOL: "Rutgers",
    ALUMNI: "Alumni",
    GUEST: "Guest",
    SCHOOLROLE: "Rutgers Student",
    ALUMNIROLE: "Rutgers Alumni",
    GUESTROLE: "Guest",
    LIVEROLE: "LIVE",
    VOICEROLE: "VOICE",

    // EMAIL FIELDS
    REQUESTEMAIL: "Please enter your \"@scarletmail.rutgers.edu\" email to start the verification process. This email starts with your netID. **Do NOT enter an email that does is not formatted as yournetID1234@scarletmail.rutgers.edu, or the email will not send.**.",
    FROMNAME: "Rutgers Esports",
    SENDER: "rutgersesports",
    SUBJECT: "Verify your Rutgers Student role in Rutgers Esports Discord!",
    TEXT: "To verify your Rutgers Student Role in Rutgers Esports Discord, please respond to the bot with the following string, \n",
    EMAILSENT: "Email successfully sent!",
    VERIFIED: "Congratulations! You have now been verified as a Rutgers Student on the Rutgers Esports Discord!",
    ENDEMAILADDRESS: "@scarletmail.rutgers.edu",

    // DEFAULTS
    DEFAULTMUTETIME: "12h",

    // FILES
    CUSTOMCOMMANDSLISTSFILE: "customcommandslists.txt",
    CUSTOMCOMMANDSFILE: "customcommands.txt",
    ABSOLUTEPATH: "sound/",
    MP3: ".mp3",

    // WHOAMI RICHEMBED FIELDS
    WHOAMIAUTHOR: "Who am I?",
    WHOAMIDESCRIPTION: "I am a bot specially designed for the Rutgers Esports Discord.",
    PROGRAMMER: "Programmer: ",
    PROGRAMMERDESCRIPTION: "I was written by Arjun Srivastav, <@87525135241728000>. He wrote this as a member of the Systems and Tech committee at Rutgers Esports.",
    SERVERSTATS: "Server Statistics: ",
    MEMBERCOUNT: "Members: ",
    WARNEDMEMBER: "Warned Member:",
    WARNEDBY: "Warned by:",
    TIME: "Time:",
}

////////// RUTGERS CHAN /////////////
exports.HEARTEMOTES = [
    "♥",
    "💘",
    "💖",
    "💗",
    "💓",
    "💝",
    "💞",
    "💟",
    "💕",
    "😍",
]
////////// RUTGERS CHAN /////////////

////////// SETTINGS STUFF ///////////
exports.Settings = {
    PREFIX: "prefix",
    ISCHAIN: "chain",
    ISLOG: "log",
    VOTE: "vote",
}

exports.SettingsArr = [
    this.Settings.PREFIX,
    this.Settings.ISCHAIN,
    this.Settings.ISLOG,
    this.Settings.VOTE,
]

exports.SettingsArrOptions = [
    "Any string up to 255 characters.",
    "on/off",
    "on/off",
    "on/off",
]
// SettingsArr and SettingsArrOptions should be same size

exports.ServerOnlySettings = [
    this.Settings.ISCHAIN,
    this.Settings.ISLOG,
    this.Settings.VOTE,
    "command: ",
]
////////// SETTINGS STUFF ///////////

////////// EXEC STUFF ///////////////
exports.SupportedLanguages = {
    PYTHON: "py",
    JAVA: "java",
}

exports.SupportedLanguagesArr = [
    this.SupportedLanguages.PYTHON,
    this.SupportedLanguages.JAVA,
]
////////// EXEC STUFF ///////////////

////////// ROLES STUFF //////////////
exports.PrivilegedRoles = [
    this.Strings.LIVEROLE,
    this.Strings.PRIVROLE,
    this.Strings.MUTEDROLE,
    this.Strings.VOICEROLE,
]

exports.SpecialRoles = [
    this.Strings.SCHOOLROLE,
    this.Strings.ALUMNIROLE,
    this.Strings.GUESTROLE,
]
////////// ROLES STUFF //////////////
