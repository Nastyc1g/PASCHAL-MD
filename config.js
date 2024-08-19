//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhoUXBoVmxTRFZDWVR5eHIvSXQvVkNBODhWbThiWTFMY05GSkFyc3dYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3lQeFA1TFZOV015RXVyMDFWWmN0dXV5T0xSenlQNG55VVpuTmR5cHBUUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRCtYYk9BSGovUFNNdHMrM2V6bVJiTkJkaFNBQ0xZSWEvRHJGRk52NTNnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrMnpsOXB2d2xZUnhQMDJaSjVRZEZxekRTaU9Xb1d0UXA4TEF3UzVESjNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZNZVl5MUoyL2IvOS9VYVAyM2RQUzJ6TWs0eEZid2FXLzl3YUNXS2JUMm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitHN3JweGZyM2xYd0FQNCtFTHE0bEE5SkVwZXhNZlBkMVlOd2I0UFYzajg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE1tTTd0UWdYN2d0aW1rZmFkQnVVUVV0T1ZIYmZuZk44MmVvYVNTR3psbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWtRV2djNmpXZHZFVTJJNkl6WEFjUFhZUHVISFNYNlhVTVZXdE1OUWVqRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5qM0d6UnVhYWZtOG13YkhGaWhxcEpoWkdhclVmdVdMdyswQ2FUZnJlMFpuTEV1UUJBSERXems0M1p4MVlqR1AvUHpDMWVoNmx4RkxxTHQyTDB2SWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzEsImFkdlNlY3JldEtleSI6IlJEMjgzVGs3WVd0cTMxM2kzQ2EwQUFQdWRueC9DV2ljMG5UNDdTWjZ6NjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA2NjU3NTY4NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBMzVFRDk2MUNGMzNCQkFFMjhDM0MwODhCNDBBMjYwNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0MDM5NTcwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDY2NTc1Njg1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU0MjA1OEZERTZBMDY4NzI0NzZCMThBRjBFREU2MTcxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQwMzk1NzB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjRCUElLVHZuVHp1ZkpwWFdBSHdUYUEiLCJwaG9uZUlkIjoiZmU3NmUyOGUtNjU4Zi00NzBiLTg1YmYtNTFhZGFmNGQzMTU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhQWFUrcTB3WGIrN3BYR0IwYVNkK0tHLzVHTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYU29TNzB5a2w1N3BZK3NaQzlrRGVSelVsYkk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQk4yNUU5UDYiLCJtZSI6eyJpZCI6IjIzNDcwNjY1NzU2ODU6NjdAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMTE3NTQ3NzI2MDMwNjM6NjdAbGlkIiwibmFtZSI6IlBhc2NoYWwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tLamthd0hFUCtDaTdZR0dBd2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNtNW51TzNqaVJnTXF6L0xZM0g1QjFvZ2NXb2ZkWjdKSGhOamRmRHZEa289IiwiYWNjb3VudFNpZ25hdHVyZSI6InE3SHlodHVmcEJHMmdpbStzbkUwN1RuWFVTTTBYV0xBZ2NOZC9ZcUJnV2dhYlIvZXhTRU1RVlEzNWhZMm50dFpoUmY0Y2NneXA0WW9XT3hkQ0NpUERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrbGpiN1RKZ1IrbHFwSlFFMCtFeFRTQ2JtQ0J5YmVCeUR6MVk1K25ZM3dKSm1qNXBxV3EwRk81Y1Z6UjBhRVp1TGx2TklyQk51R2xXTEpoSmRsTWZodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNjY1NzU2ODU6NjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYkp1WjdqdDQ0a1lES3MveTJOeCtRZGFJSEZxSDNXZXlSNFRZM1h3N3c1SyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0MDM5NTY0LCJsYXN0UHJvcEhhc2giOiIyWk42aXYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1WLyJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2347066575685";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/ecc1eb763366515338113.jpg,https://telegra.ph/file/0654ccf3bca4001dbe5b7.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/0654ccf3bca4001dbe5b7.jpg,https://telegra.ph/file/ecc1eb763366515338113.jpg,https://telegra.ph/file/66b884192c27df2020403.jpg,https://telegra.ph/file/58319db16eed44d646c4f.jpg,https://telegra.ph/file/7615e8957b6efa9e84f38.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`PASCHAL-MD`",
  author: process.env.PACK_AUTHER || "PASCHAL-MD",
  packname: process.env.PACK_NAME || "PASCHAL-MD💚",
  botname: process.env.BOT_NAME || "PASCHAL-MD",
  ownername: process.env.OWNER_NAME || "PASCHAL",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Nastyc1g/PASCHAL-MD";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2347066575685";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api.maher-zubair.tech";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
