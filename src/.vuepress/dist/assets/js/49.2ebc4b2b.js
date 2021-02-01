(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{698:function(e,t,o){"use strict";o.r(t);var a=o(28),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"anonymous-logins"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-logins"}},[e._v("#")]),e._v(" Anonymous Logins")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://telegra.ph/file/d74a0829516e7f008c48f.png",alt:"Anonymous Logins"}})]),e._v(" "),o("h2",{attrs:{id:"how-does-it-work"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-does-it-work"}},[e._v("#")]),e._v(" How does it work?")]),e._v(" "),o("p",[o("strong",[e._v("Anonymous login feature is great for privacy enthusiasts however there are certain things you should know.")])]),e._v(" "),o("ol",[o("li",[o("p",[o("strong",[e._v("What is a Token Dispenser?")])]),e._v(" "),o("p",[e._v("A token dispenser is a web client, that has around 150 real google accounts (inclusive of all servers), it distributes the AuthToken[2] for anyone how makes a request to it in a defined format.")]),e._v(" "),o("p",[e._v("So basically all dispensers have the email-password (now aas tokens) pairs on the server, when a user makes a request, the server logs in to google using provided dummy accounts, generates authentication token and this token is given to the user.")]),e._v(" "),o("p",[e._v("All the dispensers are configured to use dummy device profiles, default : Xiaomi Mi5.")]),e._v(" "),o("p",[e._v("(Why Xiaomi ? Because I had this device when I first started android developement, nothing else. China has nothing to do with it. Chill !)")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("What is an AuthToken?")])]),e._v(" "),o("p",[e._v("In simple terms its a token that lets you access PlayStore service.")]),e._v(" "),o("p",[e._v("There are other complementary tokens required to make the api work, but that's done via Aurora Store and not related to Dispensers, so I would prefer avoiding it.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v('Why do Aurora Store always say "Session-expired"?')])]),e._v(" "),o("p",[e._v("There are multiple things that may cause it:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Multiple users are logged in using same dummy account provide by the dispenser, in different geographic locations.")])]),e._v(" "),o("li",[o("p",[e._v("There is a limit for concurrent active login sessions, post that limit, Google invalidates all sessions.")])]),e._v(" "),o("li",[o("p",[e._v('Recently google started putting a "rate-limit" on the usage of api, so if it detects overuse of the api, it just invalidates the authentication token.')])])]),e._v(" "),o("p",[e._v("How does Aurora reach the rate-limit ? The search logic I use now is just stupid greedy approach, but it works, so !")]),e._v(" "),o("p",[e._v("I will improve it and try to match how exactly Play Store does it.")])]),e._v(" "),o("li",[o("p",[e._v("Why am I not able to login anonymously [OR] I'm able to login on device A and not on device B ?")]),e._v(" "),o("p",[e._v("Again there can be multiple reasons:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Network configuration, make sure Aurora Store has access to internet.")])]),e._v(" "),o("li",[o("p",[e._v('Network filter, make sure you haven\'t blacklisted "Cloud Flare" all the dispenser are behind Cloud Flare, so if its DNS is blocked, you cant reach dispensers.')])]),e._v(" "),o("li",[o("p",[e._v("Tor connections [OR] Orbot setup, again Cloud Flare has some weird issues with TOR setup, I'm looking into it.")])])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("What all data is sent to Google if I'm logged in as Anonymous.")])]),e._v(" "),o("p",[e._v("I won't lie, this is what and why I send these data to Google.")]),e._v(" "),o("p",[e._v("a. Your complete build.prop")]),e._v(" "),o("p",[e._v("Why ? Play Store is a chaos, the hierarchy of apis, abis, locale, geo so very complex in Android. A single app has multiple versions, for different sdk levels (K,L..O), architecture x86,x64,ARM,ARM64, then locales, then different OEM specific library support. These all together are used to make a decision as what exact app version Aurora Store should download. So its mandatory I cant avoid. However you may choose to spoof it with build prop of someone else, or with a device that has same configuration as yours.")]),e._v(" "),o("p",[e._v("b. A list of your installed apps")]),e._v(" "),o("p",[e._v("WTF ! Why ?")]),e._v(" "),o("p",[e._v("Umm, quite obvious, if I need to download updates then I should tell Google that these are the apps I want to check updates for. Google's repo is very large, I can not afford to maintain a separate centralized server to maintain metadata.")]),e._v(" "),o("p",[e._v("Recently I thought of an idea to tackle this other way, like when we send our app list, we would dope it with some random apps that we haven't even installed. Then check for updates and parse only the required app data. Smart ? No ! Google is way too smart. I'm open to discuss about it and may implement it, if it turns out to be useful.")])])]),e._v(" "),o("p",[e._v("Join Aurora's Support Group on Telegram for more on this: "),o("a",{attrs:{href:"https://t.me/AuroraSupport",target:"_blank",rel:"noopener noreferrer"}},[e._v("@AuroraSupport"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Written by Rahul Patel, original article can be found "),o("a",{attrs:{href:"https://telegra.ph/Aurora-Store---Anonymous-Login-12-20-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);