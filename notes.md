My idea with SlowClaw (my personal AI agent based social media feed ) should be developed further I think. 

- Reasons why this idea can work and there might be merit
-- AI Agent can try new workflows, which are branches of existing ways of doing something and if I like the variety I can "like" it else dislike it or comment on it to improve. For example, I like the initial version of audio clips I made. But there are ways I want to improve it as well but maybe I won't myself like the improvement because of some reasons like maybe my thoughts were too impractical or implementation was bad etc but AI agent should try experiments in branches and present results of it for me to check. And thus social media style likes and dislikes and comments are useful for my journalling style workflow.
-- Its a curation mechanism for endless infinite content that exists on the internet, specially because of lot of Hype content, clickbait titles, AI slop that is generated. We need content that is truly worth our time.

- Data Location and Ownership
Currently I store it in Google Drive. it works and its okay. To scale it, we need a personal storage system , people can use google drive , local folder on laptop is very viable form of storage too, since everyone mostly has a laptop nowadays , atleast for early adopters. 
Just simple Storage on Phone is also a possibility and it can sync with local laptop folder as well. 

- Security 
-- Workflows are basically skills (md + scripts) , but these workflows are about taking personal notes about you and doing something with them using AI and also Scripts. I guess sandboxing is a way to prevent scripts from sending data outside maybe ? 
The only thing allowed is to send data (text + audio & video) to private bot / private server ; from which SlowClaw app picks up stuff to show in your feed. A like will send text to be posted on X, bluesky, nostr etc, video on YT , audio on spotify etc. This part of integration with outside world should be tightly locked and inaccessible to any AI for modification. 
-- So basically a mobile app but also a web app. Bare bones of application that cannot be tweaked or changed by general public or AIs.
Bare bones are : 
1. Text, Audio and Video (vertical and horizontal) capturing. 
2. Save data on phone, use phone as its the always on personal data server. (Dont worry about Memory , we have expandable memory,sd cards, etc)
3. Serve 2 types of content via app - 
3.1. Personal content :  From AI based workflows / external skill hub workflows that create Content/Apps based on your notes. This content can be downloaded from LAPTOP based cronjobs , every morning, so that you can look, read and give feedback on it all day and new feed evovles based on that as days pass. (In future maybe some ephemeral Cloud VM machine can be spun up to do some things with notes using scripts and AI calls and shutsdown, some Lambda functions maybe ? Later problem to worry about not current one. Currently use personal laptop that user authorizes, where skills are saved along with notes and that generates feeds that are synced with phone)
Two types of Personal Content :
3.1.1 Content for External Publishing : This is using your notes to publish content to the world - like tweets, podcasts, videos, art, blog posts etc. So AI workflows here try to use your content to filter out for useful nuggets of gold or repackages it or put together things and connects dots for you that is worth paying attention to or sharing it as well, etc.
3.1.2 Apps based on your ideas for self / External publishing : These would be new skills that you want (or community needs), say a todo based on recent notes to track personal goals and tasks, if this wasnt there , you build it and you get the link to checkout the app (maybe a git hosted url) - you open it and if its good you add it to home screen as shortcut to have it as a seperate app based on your notes. Like it to publish this skill to the community. Comment on it to improve the app if your not happy with it. Dislike it to discontinue the project.
3.2 External content : Based on Algorithm that you use (from Skill hub , etc) , curates Text, Audio and Video.

I think NOSTR is the right way forward for future. Host and own your files privately. Use DVMs to get work done.
But Openclaw, just uses an extra PC / laptop / mac-mini , with root access and does things. And people communicate with it using Discord, whatsapp , Telegram, etc.
My challenge is, SlowClaw Claw ;) , has to send me feed in my custom feed app ! But why cant I use something like discord or telegram ?
WIth a rule that it should never respond like in a conversation, it can only communicate with Finished Outputs.
So basically, an openclaw with just one folder access ? or sandboxed access on my own laptop ? But the issue is , how do I program to Publish my content - I dont want openclaw to have this level of access to publish on my behalf, so a like should result in publish should be a script outside of openclaw's sandbox.

-------------
Update: I installed NullClaw, written in zig and just 678 KB , mindblowing.
I could succeed in getting it to work in just one folder and work via telegram and also setup a scheduled message.
But pretty fast hit Rate limits as Free tier API rate limits of google gemini are super duper low - 20 requests per day !!! 

Nullclaw and Openclaw is basically like a remote control for AI - Claude released its own remote control , thats where I stole the analogy from. But seems like claude cracked the core of what made openclaw popular i.e you can operate it from Apps and what else is the main feature of it, hmm you give Openclaw/AI full computer access, so it can do anything a human can do, but what do I want a human to do on a computer for me ? Not many things actually .. hmm .. I wrote a script recently to edit my audios into minimalistic videos. I needed to sit and prompt the AI (Codex on my mac) to get things right , so this level of handholding feedback is still needed for AI and thats because it doesnt get full context of what I want and I dont understand some things until I see them implemented, some blindspots I miss and some new realizations or ideas I get, its all a slow process.

SlowClaw, I want to rename SlowClawApp to this. I just tested the initial mvp to post things (text and video) to Bluesky and it works. Now, I just need to send texts and videos to PocketBase DB and make UI like social media UIs and likes should = posting. comments = workflow changes, etc etc.

Slowclaw, because, our ideas develop over time , we need to slow down! Maybe SlowClaw.social because its about content curation and content/stuff creation. 

Dashboard to see what tasks its working on based on your notes ?
1.  Content: Tweet, blogpost, video generators (one per day by default)
2. Stuff : App ideas, extensions, skills

Because Openclaw was great but I guess its still not clear what are people doing with it. I guess mostly like a personal agent to manage things but cmon, how many things we have in life that we cant do ourselves on a computer ? For coding we need to be there to guide it as I wrote previously and also good projects are a slow process (first ideation phase + next let it brew + try an MVP + then iterate).
For content we need time and space. 

Pure AI content , no one is interested in. But content creation using AI is here to stay. We are here to see the magic of fellow humans , ofcourse a bit of AI help is okay, as long as human has touched it. And this is it. SlowClawSocial will be that power to people to create and curate content and hence the internet will once again be reclaimed !
---
ZeroClaw , I saw, is built using Rust and has many stars on github. Since my App project is also using rust i.e Tauri language underneath, I think its a good match. What do I need the claw project basics for ? For writing workflow scripts and implementing scripts like cronjob. And those SKILLS will be shared by community. Your feed but powered by community based workflows based on your ideas (text, audio & videos) , right inside your app. 

Security ? Perfect because Data will only be posted to the App. We are not giving AI a computer , we are giving it a very specific role. We are downgrading 4X4 all terrain openclaw into a city car. It can go fast and do it work safely as it also follows traffic rules unlike other.

App handles all the external things like posting.
#Curation : This will be handled by scripts I think. We can bring in feed using App , since credentials will be stored securely and locally. And then scripts can take it and run vector similarities or whatever to curate feed according to user journals and publish it to app as they are only allowed to do that !

---------
Simple instructions to test the entire flow

Install prerequisites.
Rust (cargo, rustc)
Node.js 18+ (for rebuilding web/dist)
PocketBase binary (place at /Users/nikhil/.gemini/antigravity/scratch/zeroclaw_modify/pocketbase/pocketbase)
Rebuild the frontend bundle first (important: Rust embeds web/dist at build time).
cd /Users/nikhil/.gemini/antigravity/scratch/zeroclaw_modify/web
npm install
npm run build
Build the Rust binary.
cd /Users/nikhil/.gemini/antigravity/scratch/zeroclaw_modify
cargo build --release
Start the gateway (this should auto-start PocketBase sidecar if binary is present).
./target/release/slowclaw gateway
Confirm startup log shows:
PocketBase URL
PocketBase chat bridge: chat_messages (...)
Create a PocketBase admin user (first run only).
Open http://127.0.0.1:8090/_/
Create the admin account
Bootstrap PocketBase collections (includes chat_messages).
cd /Users/nikhil/.gemini/antigravity/scratch/zeroclaw_modify/web
PB_URL=http://127.0.0.1:8090 PB_EMAIL=admin@example.com PB_PASSWORD='your-admin-password' npm run pb:bootstrap
Configure your LLM/provider for SlowClaw (required for replies).
Use your normal config/onboarding flow, e.g. ./target/release/slowclaw onboard
If provider/API key is missing, chat messages will queue but replies will be written back as error
Open the UI and send a chat message.
Open http://127.0.0.1:8080/
In the SlowClaw Chat (via PocketBase) panel:
leave/default PocketBase URL
keep generated Thread ID (or create a new one)
send a message
Verify the flow in PocketBase.
In PocketBase admin UI (/_/), open chat_messages
You should see:
a user record with status=pending then done
an assistant record with the reply (status=done) or error (status=error)
Optional sanity checks.
curl -s http://127.0.0.1:8080/health
curl -s http://127.0.0.1:8080/metrics | head
Validation

git diff --check passed in both repos.
cargo check was not run here because cargo is not installed in this environment.
