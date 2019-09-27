const Discord = require ('discord.js');
const client = new Discord.Client();

const token = "NjI3Mjc0OTUwNjEyNDg0MTI1.XY6Ruw.WsICIur2Sc015WXXkv48C11E1Ow"
usedCommandRecently4 = new Set();

client.on('ready', () =>{
    console.log('gen bot is now online!')
});
client.on('message', message =>{ 
if (message.content === '!help'){
message.author.send('```!Minecraft          !Spotify          !NordVPN          !Nitro```')
};
});
client.on('message', message =>{
    if (message.guild);
if (message.content === '!Minecraft'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('`Wait 5 minutes untill you can generate a new account again`')
    } else{
        usedCommandRecently4.add(message.author.id)
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 300000)
    var string = `zombieass@hotmail.co.nz:katana10  Minecraft
    bergenwest@ymail.com:butter48  Minecraft
    sniperdog3@icloud.com:Navyseal19  Minecraft
    slamurella@gmail.com:44buddah44  Minecraft
    amma02524@yahoo.com.tw:a22911293  Minecraft
    jorgen6455@hotmail.no:oskar6455  Minecraft
    skoldjohan11@gmail.com:madness11  Minecraft
    kevinpadilla562@gmail.com:19585671aa  Minecraft
    jacksoncasanova13@gmail.com:Pokemon27  Minecraft
    desticraft.ppaauulo@gmail.com:Alexis95  Minecraft
    photoviking@yahoo.com:damien11  Minecraft
    bcclark617@hotmail.com:apeture21  Minecraft
    starblast10@rocketmail.com:10starblast  Minecraft
    dunderfettot@hotmail.com:werde1997  Minecraft
    enes.sardar@hotmail.de:luminatoR1996  Minecraft
    adventureisoutthere626@yahoo.com:pepsi721  Minecraft
    thatonedude1211@gmail.com:casper101  Minecraft
    livvy.cargill@gmail.com:livvy2000  Minecraft
    crimsonxaeis@gmail.com:Hiwatari1  Minecraft`
    message.channel.send('```A Minecraft Account Was Sent!```')
    
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
client.on('message', message =>{
    if (message.guild);
if (message.content === '!NordVPN'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('`Wait 5 minutes untill you can generate a new account again`')
    } else{
        usedCommandRecently4.add(message.author.id)
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 300000)
    var string = `robbie68@hotmail.com:bonethugs  NordVPN
    coreyverge21@hotmail.com:GrayScar99  NordVPN
    stowell.joe63@gmail.com:microsoft  NordVPN
    jamesqhr@gmail.com:hanrong123  NordVPN
    flipskate065@yahoo.com:dragoon5  NordVPN
    rmorlarived@yahoo.es:Telefonica1  NordVPN
    kakadu312@gmail.com:kakadu312  NordVPN
    koolaidmanway123@gmail.com:Shortyboy1  NordVPN
    jmkeane95@gmail.com:Cosine45  NordVPN
    sliptreyu@gmail.com:totodile22  NordVPN
    seb.priou@hotmail.com:awesome101  NordVPN
    gtonsei101@gmail.com:angelwing7  NordVPN
    looki666@web.de:Banzai13  NordVPN`
    message.channel.send('```A NordVPN Account Was Sent!```')

    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
    };
}
});
client.on('message', message =>{
    if (message.guild);
if (message.content === '!Spotify'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('`Wait 5 minutes untill you can generate a new account again`')
    } else{
        usedCommandRecently4.add(message.author.id)
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 300000)
    var string = `Premium nikkoallen4@gmail.com:Lakers22$ Cntry: US | Exp: 12/12/19   24.09.2019 13:41:15
    Premium oyemami123@gmail.com:Jag1289!   Cntry: US | Exp: 10/21/19   24.09.2019 13:41:24
    Premium henry.pham@txchiro.edu:Qazslkmjh1!  Cntry: US | Exp: 9/30/19    24.09.2019 13:41:34
    Premium-Other   hairlesschimpdai@gmail.com:sophiarose1  Cntry: GB | Exp: 10/11/19   24.09.2019 13:41:39
    Premium gabejohnson27@gmail.com:Skeety2715! Cntry: US | Exp: 9/25/19    24.09.2019 13:41:59
    Premium jeffreym.wong@hotmail.com:Romeitaly7    Cntry: US   24.09.2019 13:42:10
    Premium loganstanley60@gmail.com:4myLogan!  Cntry: US | Exp: 10/19/19   24.09.2019 13:42:13
    Premium daniellemoos@gmail.com:Grad20074!   Cntry: US | Exp: 10/15/19   24.09.2019 13:42:16
    Premium edmansamual@gmail.com:Jmg076988!    Cntry: US | Exp: 10/6/19    24.09.2019 13:42:31
    Premium jrios1943@gmail.com:Brenda13    Cntry: US | Exp: 10/21/19   24.09.2019 13:42:38
    Premium smith.joe.paul@gmail.com:gonzaga22  Cntry: US | Exp: 10/21/19   24.09.2019 13:42:52
    Premium ryanaldred03@gmail.com:qpalzm.1 Cntry: AU | Exp: 10/10/19   24.09.2019 13:43:11
    Premium torresariosti@hotmail.com:Melanie24 Cntry: US | Exp: 9/25/19    24.09.2019 13:43:22
    Premium lyleshaw12@gmail.com:lionking369    Cntry: GB | Exp: 10/7/19    24.09.2019 13:43:46
    Premium cmdiaz102@gmail.com:Poaching123!    Cntry: US | Exp: 10/7/19    24.09.2019 13:43:50
    Premium rubiknmn@gmail.com:Nmn1234# Cntry: VN | Exp: 10/20/19   24.09.2019 13:43:53
    Premium-Other   gllaryora@gmail.com:Gonzalo1101 Cntry: PT   24.09.2019 13:44:00
    Premium erlealberto97@gmail.com:Lalakers24! Cntry: US   24.09.2019 13:44:03
    Premium lilianrubat@hotmail.fr:Mojito38 Cntry: FR | Exp: 9/25/19    24.09.2019 13:44:06
    Premium solaresalbert@gmail.com:alberts0    Cntry: US | Exp: 9/26/19    24.09.2019 13:44:09
    Premium f.c.zerrouki@gmail.com:Headspin3    Cntry: NL | Exp: 9/30/19    24.09.2019 13:44:32
    Premium lilwillium@gmail.com:Milan2012  Cntry: US   24.09.2019 13:44:55
    Premium anchell.le@gmail.com:Monkey2126!    Cntry: US | Exp: 10/19/19   24.09.2019 13:44:58
    Premium rachelhsieh92@gmail.com:Pinklion1!  Cntry: US | Exp: 10/22/19   24.09.2019 13:45:02
    Premium kara.wallace2010@gmail.com:Iloveu2babe* Cntry: US | Exp: 10/15/19   24.09.2019 13:45:05
    Premium mflambert10@gmail.com:Dalebird98    Cntry: US | Exp: 10/10/19   24.09.2019 13:45:08
    Premium MarkAmiel.a@gmail.com:Locorocio1!   Cntry: PH | Exp: 10/19/19   24.09.2019 13:45:12
    Premium ericemeryshulman@gmail.com:Shadow11!    Cntry: US | Exp: 10/5/19    24.09.2019 13:45:19
    Premium jordanhillman@live.co.uk:Jordan123@ Cntry: GB | Exp: 10/17/19   24.09.2019 13:45:24
    Premium bryantcb68@gmail.com:nava1997   Cntry: US | Exp: 10/13/19   24.09.2019 13:45:36
    Premium nnieves88@gmail.com:Naynay69$   Cntry: US | Exp: 10/22/19   24.09.2019 13:45:58
    Premium wbvincent07@gmail.com:blade18!  Cntry: US | Exp: 10/6/19    24.09.2019 13:46:06
    Premium jacksully2202@gmail.com:Baller2202  Cntry: US | Exp: 10/13/19   24.09.2019 13:46:27
    Premium attkisson77@gmail.com:Nobull77! Cntry: US | Exp: 10/9/19    24.09.2019 13:46:30
    Premium c.heindl@gmx.net:Hans1958$  Cntry: DE   24.09.2019 13:46:38
    Premium orkydork@gmail.com:Shadow765$   Cntry: US | Exp: 10/13/19   24.09.2019 13:46:47
    Premium blakehogan5@gmail.com:Brick2002 Cntry: NZ   24.09.2019 13:46:50
    Premium yosep.joo@gmail.com:Qwer123$    Cntry: US | Exp: 9/24/19    24.09.2019 13:46:58
    Premium seanmbuckley14@gmail.com:Michael215 Cntry: US | Exp: 10/1/19    24.09.2019 13:47:01
    Premium julieying07@gmail.com:Whysomad21?   Cntry: US   24.09.2019 13:47:05
    Premium owens.prt@gmail.com:Rainyday44!!    Cntry: US | Exp: 10/10/19   24.09.2019 13:47:15
    Premium cyquitta721@gmail.com:ellen721  Cntry: US | Exp: 10/16/19   24.09.2019 13:47:21
    Premium dianehrjing@gmail.com:Zq593388@ Cntry: US | Exp: 10/3/19    24.09.2019 13:47:30
    Premium hisiocha@gmail.com:dragonslayer123  Cntry: CA   24.09.2019 13:47:39
    Premium recatala.lucie@outlook.fr:mousse30  Cntry: FR | Exp: 9/27/19    24.09.2019 13:47:42
    Premium liamc832@hotmail.co.uk:webcam96 Cntry: GB | Exp: 12/20/19   24.09.2019 13:47:51
    Premium jrandrade1994@gmail.com:Briggs55!   Cntry: US | Exp: 10/2/19    24.09.2019 13:48:07
    Premium judywang311@gmail.com:Hw207539149*  Cntry: US | Exp: 10/19/19   24.09.2019 13:48:10
    Premium christopher.kim43@gmail.com:Blahblah123!    Cntry: US | Exp: 12/13/19   24.09.2019 13:48:14
    Premium omaribrahim@live.ca:Girlsareshort1! Cntry: CA | Exp: 9/29/19    24.09.2019 13:48:22
    Premium js.davies@hotmail.com:Jasper22  Cntry: AU | Exp: 9/27/19    24.09.2019 13:48:30
    Premium amyhunt565@gmail.com:amyhunt123#    Cntry: GB   24.09.2019 13:48:35
    Premium evanhalim@yahoo.ca:Nathan16 Cntry: CA | Exp: 10/10/19   24.09.2019 13:48:58
    Premium alexanderthfc@googlemail.com:Hellobye1! Cntry: GB | Exp: 10/3/19    24.09.2019 13:49:03
    Premium amikajenae@gmail.com:Amika123!  Cntry: US | Exp: 9/29/19    24.09.2019 13:49:27
    Premium karlbradshaw24@gmail.com:Bradshaw69 Cntry: GB | Exp: 10/2/19    24.09.2019 13:49:39
    Premium cmontana1164@gmail.com:Werty911$    Cntry: US | Exp: 10/21/19   24.09.2019 13:49:45
    Premium mbibian34@gmail.com:Zepplin34!  Cntry: US | Exp: 10/4/19    24.09.2019 13:49:50
    Premium esteiner6@gmail.com:sabrina66$  Cntry: US | Exp: 9/26/19    24.09.2019 13:49:57
    Premium jordie99@hotmail.com.au:jordan99    Cntry: AU | Exp: 10/2/19    24.09.2019 13:50:06
    Premium lauren.prindes5@gmail.com:Dcclddb0! Cntry: US | Exp: 9/24/19    24.09.2019 13:50:18
    Premium feigelr@kean.edu:Chalky4ee  Cntry: US | Exp: 10/9/19    24.09.2019 13:50:30
    Premium brianoh@gmail.com:Hello123# Cntry: US | Exp: 9/24/19    24.09.2019 13:50:59
    Premium khariharrison06@gmail.com:june0699  Cntry: US | Exp: 10/18/19   24.09.2019 13:51:07
    Premium jcorreauci@gmail.com:Pass16word Cntry: US | Exp: 10/11/19   24.09.2019 13:51:32
    Premium saviorxt@gmail.com:Asdfasdf1!   Cntry: US | Exp: 10/21/19   24.09.2019 13:51:43
    Premium atbrooks000@gmail.com:Crispy60! Cntry: US | Exp: 9/28/19    24.09.2019 13:51:46
    Premium rzer.133@gmail.com:anasifa1996! Cntry: GB | Exp: 10/13/19   24.09.2019 13:51:50
    Premium jamesstockman1@gmail.com:HOTdog15!  Cntry: US | Exp: 9/30/19    24.09.2019 13:51:56
    Premium hanahollinger@gmail.com:ellen88!@#  Cntry: US | Exp: 10/16/19   24.09.2019 13:52:00
    Premium elaine.viray@gmail.com:Justice23*   Cntry: US | Exp: 1/16/20    24.09.2019 13:52:05
    Premium samrix19@gmail.com:Laclippers99 Cntry: GB | Exp: 10/9/19    24.09.2019 13:52:45
    Premium georgiodimitrov@outlook.com:Dimitrov7   Cntry: US | Exp: 10/10/19   24.09.2019 13:53:07
    Premium souder4@gmail.com:Abigail125!   Cntry: US | Exp: 9/26/19    24.09.2019 13:53:10
    Premium yomiguel23@gmail.com:ColdPlay23!    Cntry: US | Exp: 10/19/19   24.09.2019 13:53:19
    Premium jmandell94@gmail.com:Topspin6171994!    Cntry: US | Exp: 10/11/19   24.09.2019 13:53:22
    Premium mccalmon.sa@gmail.com:Pieces01! Cntry: US | Exp: 12/12/19   24.09.2019 13:53:27
    Premium csagnep@gmail.com:Fitness0831   Cntry: US | Exp: 10/15/19   24.09.2019 13:53:30
    Premium marcus.1.myhre@gmail.com:Spiller12  Cntry: NO | Exp: 10/15/19   24.09.2019 13:53:37
    Premium timheindl@gmail.com:freedom1968 Cntry: US | Exp: 10/9/19    24.09.2019 13:53:47
    Premium goolsby18@gmail.com:Andre3000!! Cntry: US | Exp: 9/29/19    24.09.2019 13:54:01
    Premium DLAUMANN1296@GMAIL.COM:Brockhampton23   Cntry: US | Exp: 9/28/19    24.09.2019 13:54:14
    Premium kimchristian99@gmail.com:Dragonforeskin4!   Cntry: US   24.09.2019 13:54:18
    Premium liambutler96@hotmail.co.uk:Wombat456    Cntry: GB   24.09.2019 13:54:23
    Premium matteo.degiuli@gmail.com:ludovica10 Cntry: IT | Exp: 10/14/19   24.09.2019 13:54:26
    Premium lito2196@gmail.com:aaplo1234    Cntry: PA | Exp: 10/7/19    24.09.2019 13:54:29
    Premium jrodestroys@gmail.com:2Legit2Quit.  Cntry: US | Exp: 10/15/19   24.09.2019 13:54:35
    Premium luki.ramsauer@gmail.com:Belli123    Cntry: AT | Exp: 10/18/19   24.09.2019 13:55:08
    Premium cameronross1999@yahoo.co.uk:Omega1968-  Cntry: GB | Exp: 9/27/19    24.09.2019 13:55:21
    Premium ploscaruradu@gmail.com:1258401245R. Cntry: DE | Exp: 9/30/19    24.09.2019 13:55:27
    Premium troyrandall654@gmail.com:Basketball12   Cntry: US | Exp: 10/22/19   24.09.2019 13:55:38
    Premium isaias_gp@hotmail.es:Euclides1  Cntry: EC | Exp: 10/7/19    24.09.2019 13:55:42
    Premium indiarhorgan@gmail.com:horgan123/   Cntry: NZ   24.09.2019 13:55:50
    Premium d.martinjr147@gmail.com:martinjr7   Cntry: US   24.09.2019 13:56:03
    Premium inboundbobcat32@gmail.com:Weather12!    Cntry: US   24.09.2019 13:56:09
    Premium matt.w.bush@gmail.com:M050887b! Cntry: US | Exp: 10/8/19    24.09.2019 13:56:12
    Premium salvatore.savarese11@hotmail.com:Napoli1926$    Cntry: GB   24.09.2019 13:56:18
    Premium timohvannieuwland@gmail.com:Bakugan65!  Cntry: NL | Exp: 10/7/19    24.09.2019 13:56:23
    Premium wesghouser@gmail.com:Wildflowers1!  Cntry: US | Exp: 10/3/19    24.09.2019 13:56:27
    Premium tibodemeulemeester@hotmail.be:Rune1501  Cntry: BE | Exp: 10/21/19   24.09.2019 13:56:31
    Premium haascarter@gmail.com:Secrethart1    Cntry: US | Exp: 9/25/19    24.09.2019 13:56:41
    Premium garrettsgumballs@gmail.com:Raymond1!    Cntry: US | Exp: 10/15/19   24.09.2019 13:56:48
    Premium ddw_11@hotmail.com:Braves1978$  Cntry: US | Exp: 10/2/19    24.09.2019 13:57:10
    Premium Christopher.eastlick05@gmail.com:doge.2005  Cntry: US | Exp: 10/3/19    24.09.2019 13:57:23
    Premium jweiss723@gmail.com:tyson1!!    Cntry: US | Exp: 9/25/19    24.09.2019 13:57:32
    Premium nickmarton1993@gmail.com:Atlitw1993!    Cntry: US | Exp: 10/1/19    24.09.2019 13:57:35
    Premium mizerylovesco@gmail.com:Shelby47    Cntry: SG   24.09.2019 13:57:50
    Premium dylanishot420@gmail.com:Aidanu12!   Cntry: US | Exp: 10/4/19    24.09.2019 13:57:53
    Premium tharusha_silva@hotmail.com:Ronaldojr7   Cntry: AU   24.09.2019 13:58:02
    Premium good2q@gmail.com:Frisky105! Cntry: US | Exp: 10/2/19    24.09.2019 13:58:25
    Premium timbits4011@gmail.com:Timbits40!    Cntry: US | Exp: 10/9/19    24.09.2019 13:58:29
    Premium paul.gracia1023@gmail.com:Jukes4days!   Cntry: US | Exp: 9/24/19    24.09.2019 13:58:41
    Premium coreypasseri@gmail.com:Auditt77 Cntry: US | Exp: 10/2/19    24.09.2019 13:58:46
    Premium erinmarie.dowdell@gmail.com:Meowmeow711 Cntry: US | Exp: 9/26/19    24.09.2019 13:58:49
    Premium beau.dustin.king@gmail.com:Beau.king1   Cntry: US | Exp: 10/9/19    24.09.2019 13:58:54
    Premium Driloni.2000@hotmail.com:Drilonnuha1    Cntry: DE | Exp: 9/29/19    24.09.2019 13:59:00
    Premium sonichamy@gmail.com:Ogiedert1!  Cntry: US | Exp: 9/24/19    24.09.2019 13:59:13
    Premium luca99persico@hotmail.com:Pexico99  Cntry: IT   24.09.2019 13:59:19
    Premium martzt421@gmail.com:rosie2014   Cntry: US | Exp: 12/24/19   24.09.2019 13:59:26
    Premium kiley7745@gmail.com:Kgrace1007! Cntry: US | Exp: 10/12/19   24.09.2019 13:59:32
    Premium yacel.garcia23@gmail.com:nicaragua03    Cntry: CA   24.09.2019 13:59:47
    Premium austenleonard@gmail.com:@Leonard92  Cntry: US | Exp: 10/6/19    24.09.2019 13:59:51
    Premium shaun.brown999@gmail.com:Brown3022! Cntry: GB   24.09.2019 13:59:58
    Premium avila2165@hotmail.com:Ferrari458    Cntry: US | Exp: 10/5/19    24.09.2019 14:00:24
    Premium penny.syf@gmail.com:Infred803   Cntry: US | Exp: 11/25/19   24.09.2019 14:00:33
    Premium jameslangridge404@gmail.com:Pinecone12@ Cntry: GB | Exp: 9/28/19    24.09.2019 14:00:36
    Premium elisaf_01@hotmail.it:Elieli01   Cntry: IT   24.09.2019 14:00:39
    Premium monika.underhill@gmail.com:monika34 Cntry: US | Exp: 10/14/19   24.09.2019 14:00:52
    Premium michellej413@gmail.com:June0630 Cntry: US | Exp: 9/25/19    24.09.2019 14:00:58
    Premium maxkushner29@gmail.com:Kushner76!   Cntry: US | Exp: 10/1/19    24.09.2019 14:01:15
    Premium bduffer18@gmail.com:139600Adrian!   Cntry: US | Exp: 10/7/19    24.09.2019 14:01:29
    Premium harryadcroft@virginmedia.com:harryboy1  Cntry: GB | Exp: 10/23/19   24.09.2019 14:01:34
    Premium dray5737@gmail.com:Bertha1929!  Cntry: US   24.09.2019 14:01:53
    Premium iwblanchette08@gmail.com:Blanchette33   Cntry: US | Exp: 10/21/19   24.09.2019 14:02:12
    Premium lucapericolini@gmail.com:Wimbledon2001. Cntry: IT | Exp: 12/3/19    24.09.2019 14:02:18
    Premium albert.boedker@gmail.com:Albe2949   Cntry: DK   24.09.2019 14:02:21
    Premium cairistionarobinson@outlook.com:ilovechicken1   Cntry: GB | Exp: 9/28/19    24.09.2019 14:02:25
    Premium rkendricks1988@gmail.com:Arianna1$  Cntry: US | Exp: 10/6/19    24.09.2019 14:02:30
    Premium republiccomando745@gmail.com:skiski123  Cntry: US | Exp: 10/6/19    24.09.2019 14:02:38
    Premium guyton.tyrellious@gmail.com:vanessa22   Cntry: US | Exp: 10/16/19   24.09.2019 14:02:51
    Premium julianlisle18@gmail.com:Ykraps44!   Cntry: US | Exp: 10/19/19   24.09.2019 14:02:55
    Premium lukel596@googlemail.com:Lk231105!   Cntry: DE | Exp: 9/26/19    24.09.2019 14:03:00
    Premium joeygavin05@gmail.com:RedDevils135! Cntry: US | Exp: 10/19/19   24.09.2019 14:03:04
    Premium rowland.robert@gmail.com:Albany07   Cntry: GB   24.09.2019 14:03:08
    Premium micahstufflebeam@gmail.com:Cougar831    Cntry: US | Exp: 10/14/19   24.09.2019 14:03:14
    Premium mampouyaboy@gmail.com:acmilan1899   Cntry: FR | Exp: 12/24/19   24.09.2019 14:03:17
    Premium branson.kwok2123@gmail.com:Starbucks1@  Cntry: CA | Exp: 9/26/19    24.09.2019 14:03:21
    Premium rjluntzel@gmail.com:Visvim89    Cntry: US | Exp: 10/5/19    24.09.2019 14:03:33
    Premium mitchpriestap@gmail.com:03Silverado Cntry: CA   24.09.2019 14:03:43
    Premium justinbaldrey@gmail.com:Justin1996! Cntry: CA | Exp: 10/7/19    24.09.2019 14:04:01
    Premium ttom84@gmail.com:Ctrizzy22$ Cntry: US | Exp: 10/21/19   24.09.2019 14:04:09
    Premium chris.fuller98@gmail.com:chris3598. Cntry: US | Exp: 9/26/19    24.09.2019 14:04:14
    Premium alex.minulescu@gmail.com:minwoo89.  Cntry: RO | Exp: 10/1/19    24.09.2019 14:04:18
    Premium parksubin565@gmail.com:plani0076!   Cntry: US | Exp: 10/9/19    24.09.2019 14:04:41
    Premium evsixers3@gmail.com:sixers321!  Cntry: US | Exp: 10/19/19   24.09.2019 14:04:46
    Premium corbinfranklin08@gmail.com:Grace4ever   Cntry: US | Exp: 10/9/19    24.09.2019 14:04:54
    Premium graham.akers@gmail.com:Live2sk8!    Cntry: US | Exp: 9/30/19    24.09.2019 14:05:00
    Premium fowlkes8280@gmail.com:Toth8684! Cntry: US | Exp: 9/28/19    24.09.2019 14:05:05
    Premium iksaehan@gmail.com:Thai12land   Cntry: US | Exp: 9/29/19    24.09.2019 14:05:10
    Premium 96jleonard@gmail.com:leonard96  Cntry: US | Exp: 10/23/19   24.09.2019 14:05:16
    Premium ericcfrickss@gmail.com:lemonpie23   Cntry: US | Exp: 10/16/19   24.09.2019 14:05:21
    Premium stefanismileydee@gmail.com:taylor101    Cntry: US | Exp: 9/28/19    24.09.2019 14:05:28
    Premium scott_fleming@hotmail.com:Lukeandmia123 Cntry: GB   24.09.2019 14:05:37
    Premium romaindecombis@gmail.com:romain31   Cntry: FR | Exp: 10/10/19   24.09.2019 14:05:42
    Premium ph.chi301@gmail.com:sujuonly13  Cntry: US | Exp: 10/18/19   24.09.2019 14:05:48
    Premium paulcraig3450@googlemail.com:!Superskunk1   Cntry: GB   24.09.2019 14:05:52
    Premium tomwigley2015@gmail.com:@tiger741   Cntry: GB | Exp: 9/24/19    24.09.2019 14:05:55
    Premium coolmoataz1@gmail.com:Swagger601    Cntry: AU | Exp: 10/14/19   24.09.2019 14:06:01
    Premium cfisher97@gmail.com:happyday84  Cntry: US | Exp: 10/7/19    24.09.2019 14:06:08
    Premium mjmiller2496@gmail.com:@Ouspapa30   Cntry: US | Exp: 10/14/19   24.09.2019 14:06:20
    Premium sheetsje@gmail.com:Fuckthis1!   Cntry: US | Exp: 10/22/19   24.09.2019 14:06:25
    Premium jackv7199@gmail.com:godzilla1   Cntry: US | Exp: 9/24/19    24.09.2019 14:06:28
    Premium pcb@live.nl:Kansloos1   Cntry: NL   24.09.2019 14:06:40
    Premium samrobles2192@gmail.com:Zafiro2192@ Cntry: US   24.09.2019 14:06:44
    Premium juliettecarrion2@gmail.com:Bubbles0929! Cntry: US | Exp: 10/3/19    24.09.2019 14:06:47
    Premium alsulaiti722@gmail.com:Leicester11* Cntry: US | Exp: 9/28/19    24.09.2019 14:06:57
    Premium twisey09@gmail.com:snowman100   Cntry: AU | Exp: 10/20/19   24.09.2019 14:07:03
    Premium sjn0038@gmail.com:Longhorns13!  Cntry: US | Exp: 10/6/19    24.09.2019 14:07:14
    Premium joshsud2424@gmail.com:football8 Cntry: GB   24.09.2019 14:07:33
    Premium raflouis77@gmail.com:Shamelda1! Cntry: US | Exp: 10/7/19    24.09.2019 14:07:37
    Premium woodstock94_saugerties@hotmail.com:Pngjyecf123  Cntry: SG | Exp: 10/15/19   24.09.2019 14:07:41
    Premium spencerselleck@gmail.com:Martians16!    Cntry: US | Exp: 10/7/19    24.09.2019 14:07:45
    Premium mayanpablorosales@gmail.com:mayan30@    Cntry: US | Exp: 10/14/19   24.09.2019 14:08:00
    Premium abs2790@hotmail.com:Flipflops420$   Cntry: US | Exp: 10/20/19   24.09.2019 14:08:04
    Premium yeeimi.cast@gmail.com:ztrellita1    Cntry: MX | Exp: 10/4/19    24.09.2019 14:08:07
    Premium max.hardwick98@gmail.com:Nightwing98!   Cntry: US | Exp: 9/24/19    24.09.2019 14:08:13
    Premium angelayoungyea@gmail.com:mickey87   Cntry: US | Exp: 10/13/19   24.09.2019 14:08:22
    Premium schuppsarah@gmail.com:108Mumford    Cntry: US | Exp: 10/10/19   24.09.2019 14:08:27
    Premium Alex@jwelchdesigns.com:Learning1!   Cntry: US | Exp: 10/7/19    24.09.2019 14:08:38
    Premium oavonromer@gmail.com:Marlee21!  Cntry: US | Exp: 10/17/19   24.09.2019 14:08:42
    Premium rwn1999lfc@hotmail.com:Scunny99 Cntry: GB | Exp: 10/23/19   24.09.2019 14:08:45
    Premium jamescutts1@yahoo.co.uk:london2012  Cntry: GB | Exp: 10/13/19   24.09.2019 14:08:52
    Premium dillingerjo@gmail.com:eminem94  Cntry: IT | Exp: 10/2/19    24.09.2019 14:09:04
    Premium Matthewskene1@gmail.com:Tattie20!   Cntry: GB | Exp: 10/20/19   24.09.2019 14:09:11
    Premium yass.ali11@hotmail.com:Mohsin786.   Cntry: GB | Exp: 10/21/19   24.09.2019 14:09:15
    Premium samsam87@live.fr:Momorin01  Cntry: CA | Exp: 10/11/19   24.09.2019 14:09:22
    Premium stevojmartin@gmail.com:Dalek100 Cntry: GB | Exp: 10/2/19    24.09.2019 14:09:26
    Premium aramakoopu18@gmail.com:arama123 Cntry: NZ   24.09.2019 14:09:40
    Premium Augustynke@ghaps.org:Cooper23!  Cntry: US | Exp: 10/23/19   24.09.2019 14:09:50
    Premium rubenalcaraz11@mittymonarch.com:oO8311993   Cntry: US | Exp: 11/25/19   24.09.2019 14:10:08
    Premium kyler@tamu.edu:Montgomery4! Cntry: US | Exp: 9/30/19    24.09.2019 14:10:13
    Premium strongk09@gmail.com:kstrong1    Cntry: US | Exp: 9/25/19    24.09.2019 14:10:23
    Premium tylerhorgan10@gmail.com:Grand001.   Cntry: US | Exp: 10/8/19    24.09.2019 14:10:26
    Premium 20189@jcpstudents.org:Bailey711!    Cntry: US | Exp: 10/19/19   24.09.2019 14:10:28
    Premium a.urena.ms@gmail.com:Tijuana2011    Cntry: MX | Exp: 9/30/19    24.09.2019 14:10:37
    Premium mk_maguire@hotmail.com:Guybrush87   Cntry: AU | Exp: 10/9/19    24.09.2019 14:10:52
    Premium ortiz.omar.129@gmail.com:double.0   Cntry: US | Exp: 9/29/19    24.09.2019 14:10:59
    Premium zac.schwartz212@gmail.com:Mazda6262626. Cntry: US | Exp: 10/22/19   24.09.2019 14:11:02
    Premium chrisperollk@gmail.com:Juve.1996    Cntry: IT | Exp: 9/26/19    24.09.2019 14:11:10
    Premium-Other   demin0935342036@gmail.com:demin0520 Cntry: TW | Exp: 10/4/19    24.09.2019 14:11:31`
    message.channel.send('```A Spotify Account Was Sent!```')
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
    };
}});
}});
client.login(token);