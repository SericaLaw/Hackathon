import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const data = {
        "cards": [
            {
                "keyword": "删除",
                "tokens": [
                    {
                        "id": "anchor0",
                        "sentence": "您进行实名注册时，应提供有关您本人真实、合法、准确、有效的身份信息及其他相关信息，且不得以他人身份资料进行实名注册。否则，腾讯有权终止为您提供腾讯游戏服务，并有权对您的游戏账号采取包括但不限于警告、限制或禁止使用游戏帐号全部或部分功能、删除游戏账号及游戏数据、删除相关信息、游戏账号封禁（以下有时简称“封号”）直至注销的处理措施（为描述方便，以下有时也将该等处理措施称为“处罚”），因此造成的一切后果由您自行承担。"
                    },
                    {
                        "id": "anchor1",
                        "sentence": "2.5 您充分理解并同意，为高效利用服务器资源，如果您3年内未使用游戏账号登录腾讯游戏，腾讯有权在提前通知的情况下，对该账号及其账号下的游戏数据及相关信息采取删除等处置措施。"
                    },
                    {
                        "id": "anchor2",
                        "sentence": "2.6 您理解并同意，您不得将游戏账号以任何方式提供给他人使用，包括但不限于不得以转让、出租、借用等方式提供给他人作包括但不限于直播、录制、代打代练等商业性使用。否则，因此产生任何法律后果及责任均由您自行承担，且腾讯有权对您的游戏账号采取包括但不限于警告、限制或禁止使用游戏帐号全部或部分功能、删除游戏账号及游戏数据及其他相关信息、封号直至注销的处理措施，因此造成的一切后果由您自行承担。"
                    },
                    {
                        "id": "anchor3",
                        "sentence": "4.5 如果您违反本协议约定的，腾讯有权采取相应的措施进行处理，该措施包括但不限于：不经通知随时对相关内容进行删除，并视行为情节对违规游戏账号处以包括但不限于警告、限制或禁止使用全部或部分功能、游戏账号封禁直至注销的处罚，并公告处理结果，要求您赔偿因您从事违约行为而给腾讯造成的损失等。"
                    },
                    {
                        "id": "anchor4",
                        "sentence": "（4）注销或删除您游戏账号及游戏数据等相关信息；"
                    },
                    {
                        "id": "anchor5",
                        "sentence": "（1）删除游戏软件及其副本上关于著作权的信息；"
                    },
                    {
                        "id": "anchor6",
                        "sentence": "（4）对游戏软件或者软件运行过程中释放到任何终端内存中的数据、软件运行过程中客户端与服务器端的交互数据，以及软件运行所必需的系统数据，进行复制、修改、增加、删除、挂接运行或创作任何衍生作品，形式包括但不限于使用插件、外挂或非经合法授权的第三方工具/服务接入软件和相关系统；"
                    },
                    {
                        "id": "anchor7",
                        "sentence": "6.5 您在使用腾讯游戏服务过程中有如下任何行为的，腾讯有权视情节严重程度，依据本协议及相关游戏规则的规定，对您做出暂时或永久性地禁止登录（即封号）、删除游戏账号及游戏数据、删除相关信息等处理措施，情节严重的将移交有关行政管理机关给予行政处罚，或者追究您的刑事责任："
                    }
                ]
            },
            {
                "keyword": "透露",
                "tokens": []
            },
            {
                "keyword": "注销",
                "tokens": [
                    {
                        "id": "anchor8",
                        "sentence": "您进行实名注册时，应提供有关您本人真实、合法、准确、有效的身份信息及其他相关信息，且不得以他人身份资料进行实名注册。否则，腾讯有权终止为您提供腾讯游戏服务，并有权对您的游戏账号采取包括但不限于警告、限制或禁止使用游戏帐号全部或部分功能、删除游戏账号及游戏数据、删除相关信息、游戏账号封禁（以下有时简称“封号”）直至注销的处理措施（为描述方便，以下有时也将该等处理措施称为“处罚”），因此造成的一切后果由您自行承担。"
                    },
                    {
                        "id": "anchor9",
                        "sentence": "2.6 您理解并同意，您不得将游戏账号以任何方式提供给他人使用，包括但不限于不得以转让、出租、借用等方式提供给他人作包括但不限于直播、录制、代打代练等商业性使用。否则，因此产生任何法律后果及责任均由您自行承担，且腾讯有权对您的游戏账号采取包括但不限于警告、限制或禁止使用游戏帐号全部或部分功能、删除游戏账号及游戏数据及其他相关信息、封号直至注销的处理措施，因此造成的一切后果由您自行承担。"
                    },
                    {
                        "id": "anchor10",
                        "sentence": "4.5 如果您违反本协议约定的，腾讯有权采取相应的措施进行处理，该措施包括但不限于：不经通知随时对相关内容进行删除，并视行为情节对违规游戏账号处以包括但不限于警告、限制或禁止使用全部或部分功能、游戏账号封禁直至注销的处罚，并公告处理结果，要求您赔偿因您从事违约行为而给腾讯造成的损失等。"
                    },
                    {
                        "id": "anchor11",
                        "sentence": "（4）注销或删除您游戏账号及游戏数据等相关信息；"
                    }
                ]
            }
        ],
        "html": "<!doctype html>\n<html>\n <head> \n  <meta charset=\"gb2312\"> \n  <meta name=\"robots\" content=\"all\"> \n  <meta name=\"viewport\" content=\"width=device-width; maximum-scale=1.0\"> \n  <meta name=\"author\" content=\"Tencent-TGideas\"> \n  <meta name=\"Copyright\" content=\"Tencent\"> \n  <meta name=\"Description\" content=\"腾讯游戏是腾讯四大网络平台之一，是全球领先的游戏开发和运营机构，也是国内最大的网络游戏社区。无论是腾讯公司整体的在线生活模式布局，还是腾讯游戏的产品布局，都是从用户的最基本需求、最简单应用入手，注重产品的可持续发展和长久生命力，打造绿色健康的精品游戏。在开放性的发展模式下，腾讯游戏采取内部自主研发和多元化的外部合作两者结合的方式，已经在网络游戏的多个细分市场领域形成专业化布局并取得良好的市场业绩。\"> \n  <meta name=\"Keywords\" content=\"腾讯游戏,Tencent Games,腾讯游戏嘉年华,Tencent Games Carnival,腾讯游戏竞技平台,Tencent Games Arena,腾讯游戏公会,Tencent Games Guild,腾讯游戏爱心联盟,Tencent Games Social Responsibility,腾讯游戏公益,Tencent Games Social Responsibility,腾讯小游戏,腾讯网页游戏,腾讯QQ游戏,QQ小游戏,QQ网页游戏,QQ腾讯游戏,腾讯网游,腾讯网络游戏,腾讯大型网游,腾讯大型网络游戏,腾讯游戏平台,QQ游戏平台\"> \n  <title>腾讯游戏许可及服务协议-腾讯游戏 - 用心创造快乐</title> \n  <!-- 设计：pinnazhang | 重构：rukkihuang | 创建：20140325 | 更新：20140325 | 团队博客：http://tgideas.qq.com --> \n  <style type=\"text/css\">\n/*==========基本样式==========*/\nbody,div,h1,h2,h3,h4,form,img,ul,ol,li,dl,dt,dd,p {margin:0; padding:0;}\nli {list-style:none;}\nh1,h2,h3,h4 {font-size:100%;}\nimg {border:0;}\ntable{ border-collapse:collapse;}\na {color:#666666; text-decoration:none; outline:none;}\na:hover{color:#f00; text-decoration:none;}\n/*清除浮动*/\n* html .q {height:1%;}\n*+html .q {height:1%;}\n.q:after {content:\"\"; display:block; height:0; clear:both; overflow:hidden;}\n.clear {clear:both; height:0px; overflow:hidden;}\n.hidden {display:none;}\nbody {font-size:12px; color:#666666;font-family:simsun;}\n.wrap {background:#f1f1f1 url(https://ossweb-img.qq.com/images/game/portal2012/colorBelt1.jpg) repeat-x 50% 0;}\n#header{max-width:1000px; margin:0 auto; padding:36px 0 0}\n#header h1 {max-width:1000px; height:160px; margin:0 auto; padding-top:20px; background:#ffffff url(https://ossweb-img.qq.com/images/game/brand/contract_logo.jpg) no-repeat 42px 20px;}\n#header a {display:block; width:172px; height:53px; overflow:hidden; text-indent:-9999px; margin:0 0 0 42px;}\n.content {width:920px; margin:-105px auto 0; padding:0 40px 40px;background:#fff;line-height:22px;}\n.content h2 {height:40px; line-height:40px; padding:0 0 25px; margin:0 0 25px; font-family:Microsoft YaHei; font-size:30px; line-height:40px; font-weight:normal; text-align:center; border-bottom:1px solid #d1d1d1;}\n.content h3 {margin:20px 0 5px;}\n.content p {}\n.content a {text-decoration:underline;}\n.content a:hover{color:#f00; text-decoration:underline;}\n.author {padding:10px 0; text-align:right; font-weight:bold;}\n#footer_ied{height:146px;text-align:center; font-size:12px; line-height:19px; font-family:Tahoma;}\n.wrap_ied{ margin:0 auto; padding:20px 0 0; color:#666666;}\n.wrap_ied p a {color:#666666;}\n.wrap_ied p a:hover {color:#f00;}\n#footer_ied p.e{ margin-top:-4px; font-size:10px;}\n\n@media screen and (max-width: 1000px)\n{\n\t.content { padding:0 5%; width:90%}\n}\n@media screen and (max-width: 420px)\n{\n\t.content h2 { font-size:18px; font-weight:bold; letter-spacing:-1px}\n}\n\n</style> \n </head> \n <body> \n  <div class=\"wrap\"> \n   <div id=\"header\"> \n    <h1><a href=\"/\" title=\"腾讯游戏\">腾讯游戏</a></h1> \n   </div> \n   <div class=\"content\"> \n    <h2>腾讯游戏许可及服务协议</h2> \n    <p><strong>《腾讯游戏许可及服务协议》（以下简称“本协议”）由您与腾讯游戏服务提供方共同缔结，本协议具有合同效力。请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制腾讯责任的条款（以下称“免责条款”）、对用户权利进行限制的条款（以下称“限制条款”）、约定争议解决方式和司法管辖的条款，以及开通或使用某项服务的单独协议。前述免责、限制及争议解决方式和管辖条款可能以黑体加粗、颜色标记或其他合理方式提示您注意，包括但不限于本协议第二条、第三条、第四条、第六条、第九条等相关条款，您对该等条款的确认将可能导致您在特定情况下的被动、不便、损失，请您在确认同意本协议之前或在使用腾讯游戏服务之前再次阅读前述条款。双方确认前述条款并非属于《合同法》第40条规定的“免除其责任、加重对方责任、排除对方主要权利的”的条款，并同意该条款的合法性及有效性。</strong></p> \n    <p><strong>除非您已阅读并接受本协议所有条款，否则您无权使用腾讯游戏服务。如果您对本协议或腾讯游戏服务有意见或建议，可与腾讯客户服务部门联系，我们会给予您必要的帮助。您点击同意、接受或下一步，或您注册、使用腾讯游戏服务均视为您已阅读并同意签署本协议。</strong></p> \n    <p><strong>如果您未满18周岁，请在法定监护人的陪同下阅读本协议，并特别注意未成年人使用条款。如您为未成年人法定监护人，希望合理设定孩子娱乐时间，培养孩子健康游戏习惯的，可依据相关规则登录腾讯游戏成长守护平台（<a href=\"https://jiazhang.qq.com/jz/home.html\" target=\"_blank\">https://jiazhang.qq.com/jz/home.html</a>）了解相关信息，您使用腾讯游戏成长守护平台的，应遵守该平台上的《成长守护平台许可及服务协议》。</strong></p> \n    <h3>一、【定义】</h3> \n    <p>1.1 <strong>本协议：</strong>指本协议正文、《<a href=\"http://www.qq.com/contract.shtml\" target=\"_blank\" title=\"腾讯服务协议\">腾讯服务协议</a>》、《<a href=\"http://zc.qq.com/chs/agreement1_chs.html\" target=\"_blank\" title=\"QQ号码规则\">QQ号码规则</a>》、《<a href=\"http://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&amp;t=weixin_agreement&amp;s=default\" target=\"_blank\" title=\"腾讯微信软件许可及服务协议\">腾讯微信软件许可及服务协议</a>》、《<a href=\"http://www.qq.com/privacy.htm\" target=\"_blank\" title=\"腾讯隐私政策\">腾讯隐私政策</a>》、游戏规则及其修订版本。上述内容一经正式发布，即为本协议不可分割的组成部分。<strong>本协议同时还包括文化部根据《网络游戏管理暂行办法》（文化部令第49号）制定的《<a href=\"//game.qq.com/contract_culture.shtml\" target=\"_blank\" title=\"网络游戏服务格式化协议必备条款\">网络游戏服务格式化协议必备条款</a>》</strong>。</p> \n    <p>1.2 <strong>游戏规则：</strong>指腾讯游戏服务提供方不时发布并修订的关于腾讯游戏的用户守则、玩家条例、游戏公告、提示及通知等内容。</p> \n    <p>1.3 <strong>腾讯游戏服务提供方：</strong>指向您提供腾讯游戏及其服务的深圳市腾讯计算机系统有限公司，在本协议中简称为“<strong>腾讯</strong>”。</p> \n    <p>1.4 <strong>腾讯游戏：</strong>指由腾讯负责运营的游戏的统称，包括计算机客户端游戏、网页游戏、HTML5游戏（H5游戏）、移动终端游戏、电视端游戏以及其他形式的游戏；腾讯游戏可能以软件形式提供，这种情况下，腾讯游戏还包括该相关软件及相关文档。</p> \n    <p>1.5 <strong>腾讯游戏服务：</strong>指腾讯向您提供的与游戏相关的各项在线运营服务。</p> \n    <p>1.6 <strong>您：</strong>又称“<strong>玩家</strong>”或“<strong>用户</strong>”，指被授权使用腾讯游戏及其服务的自然人。</p> \n    <p>1.7 <strong>游戏数据：</strong>指您在使用腾讯游戏过程中产生的被服务器记录的各种数据，包括但不限于角色数据、虚拟物品数据、行为日志、购买日志等等数据。</p> \n    <h3>二、【游戏账号】</h3> \n    <p>2.1 您如果需要使用和享受腾讯游戏，则您需要将您享有使用权的QQ账号或微信账号作为游戏账号，并按照文化部《网络游戏管理暂行办法》及《网络游戏服务格式化协议必备条款》的相关要求，登录实名注册系统并进行实名注册。您对该QQ号码和微信账号的申请、使用等行为应符合腾讯不时修订并公布的《腾讯服务协议》、《QQ号码规则》和《腾讯微信软件许可及服务协议》的规范。</p> \n    <p style=\"background-color:aqua\" id=\"anchor8\">您进行实名注册时，应提供有关您本人真实、合法、准确、有效的身份信息及其他相关信息，且不得以他人身份资料进行实名注册。否则，腾讯有权终止为您提供腾讯游戏服务，并有权对您的游戏账号采取包括但不限于警告、限制或禁止使用游戏帐号全部或部分功能、删除游戏账号及游戏数据、删除相关信息、游戏账号封禁（以下有时简称“封号”）直至注销的处理措施（为描述方便，以下有时也将该等处理措施称为“处罚”），因此造成的一切后果由您自行承担。</p> \n    <p><strong>若您不进行实名注册的，或您提供的注册信息不完整的，则您可能无法使用腾讯游戏或在使用腾讯游戏过程中会受到相应限制。</strong></p> \n    <p>2.2 <strong>您进一步知悉并同意，您在游客模式下可能无法进行游戏充值或消费。且一旦您卸载或重装腾讯游戏，或您更换手机、电脑等终端设备或该等终端设备损坏的，您在该游客模式下所有游戏相关数据可能都将会被清空，且无法查询和恢复。如因此造成您任何损失的，均由您自行承担。</strong></p> \n    <p>如您使用腾讯认可的第三方帐号作为游戏账号使用和享受腾讯游戏的，您还应遵守有关该第三方帐号的协议、规则，且因该第三方帐号产生的相关问题包括但不限于被盗等，您应自行联系该第三方进行解决，腾讯可视情况提供相应的协助。</p> \n    <p>2.3 <strong>您充分理解并同意：为判断或核实您提供的相关实名注册信息是否真实或有效，腾讯有权将您提供的实名注册信息提供给第三方进行整理、保存及比对等处理。且腾讯会按照国家相关要求将您的实名注册信息运用于防沉迷系统之中，即腾讯可能会根据您的实名注册信息判断您是否年满18周岁、您提交的实名身份信息是否规范或实名验证是否通过等，从而决定是否对您的游戏账号予以防沉迷限制。</strong></p> \n    <p>2.4 您充分理解并同意，腾讯有权审查用户注册所提供的身份信息是否真实、有效，并应积极地采取技术与管理等合理措施保障用户账号的安全、有效；用户有义务妥善保管其账号及密码，并正确、安全地使用其账号及密码。任何一方未尽上述义务导致账号密码遗失、账号被盗等情形而给用户和他人的民事权利造成损害的，应当承担由此产生的法律责任。</p> \n    <p><strong>若您发现有他人冒用或盗用您的游戏账号及密码、或任何其他未经您合法授权使用的情形时，应立即以腾讯要求的有效方式通知腾讯并告知腾讯需采取的措施。您通知腾讯时，应提供与您注册身份信息相一致的个人有效身份信息，腾讯收到您的有效请求并核实身份后，会根据您的要求或结合具体情况采取相应措施（包括但不限于暂停该账号的登录和使用等），腾讯因根据您的请求采取相应措施而造成您及其他用户损失的，由您自行承担。若您没有提供有效身份信息或您提供的个人有效身份信息与所注册的身份信息不一致的，腾讯有权拒绝您的请求，因此造成您损失的，由您自行承担。</strong></p> \n    <p style=\"background-color:aqua\" id=\"anchor1\">2.5 <strong>您充分理解并同意，为高效利用服务器资源，如果您3年内未使用游戏账号登录腾讯游戏，腾讯有权在提前通知的情况下，对该账号及其账号下的游戏数据及相关信息采取删除等处置措施。</strong></p> \n    <p style=\"background-color:aqua\" id=\"anchor9\">2.6 <strong>您理解并同意，您不得将游戏账号以任何方式提供给他人使用，包括但不限于不得以转让、出租、借用等方式提供给他人作包括但不限于直播、录制、代打代练等商业性使用。否则，因此产生任何法律后果及责任均由您自行承担，且腾讯有权对您的游戏账号采取包括但不限于警告、限制或禁止使用游戏帐号全部或部分功能、删除游戏账号及游戏数据及其他相关信息、封号直至注销的处理措施，因此造成的一切后果由您自行承担。</strong></p> \n    <h3>三、【用户信息收集、使用及保护】</h3> \n    <p>3.1 您同意并授权腾讯为履行本协议之目的收集您的用户信息，这些信息包括您在实名注册系统中注册的信息、您游戏账号下的游戏数据以及其他您在使用腾讯游戏服务的过程中向腾讯提供或腾讯基于安全、用户体验优化等考虑而需收集的信息，腾讯对您的用户信息的收集将遵循本协议及相关法律的规定。</p> \n    <p>3.2 <strong>您充分理解并同意：腾讯或其合作的第三方可以根据您的用户信息，通过短信、电话、邮件等各种方式向您提供关于腾讯游戏的活动信息、推广信息等各类信息。</strong></p> \n    <p>3.3 您理解并同意：为了更好地向您提供游戏服务，改善游戏体验，腾讯可对您QQ帐号、微信账号或游戏账号中的昵称、头像以及在腾讯游戏中的相关操作信息、游戏信息等信息（以下称“该等信息”。该等信息具体包括但不限于您的登录状态、对战信息/状态、成就信息等）进行使用，并可向您本人或其他用户或好友展示该等信息。</p> \n    <p>3.4 您应对通过腾讯游戏及相关服务了解、接收或可接触到的包括但不限于其他用户在内的任何人的个人信息予以充分尊重，您不应以搜集、复制、存储、传播或以其他任何方式使用其他用户的个人信息，否则，由此产生的后果由您自行承担。</p> \n    <p>3.5 <strong>保护用户信息及隐私是腾讯的一项基本原则。除本协议另有规定外，腾讯游戏服务对用户信息收集、使用及保护等将遵循腾讯统一公布的相关隐私政策（<a href=\"http://www.qq.com/privacy.htm\" target=\"_blank\">http://www.qq.com/privacy.htm</a>）。</strong></p> \n    <h3>四、【腾讯游戏服务】</h3> \n    <p>4.1 在您遵守本协议及相关法律法规的前提下，腾讯给予您一项个人的、不可转让及非排他性的许可，以使用腾讯游戏服务。您仅可为非商业目的使用腾讯游戏服务，包括：</p> \n    <p>（1）接收、下载、安装、启动、升级、登录、显示、运行和/或截屏腾讯游戏；</p> \n    <p>（2）创建游戏角色，设置网名，查阅游戏规则、用户个人资料、游戏对局结果，开设游戏房间、设置游戏参数，在游戏中购买、使用游戏道具、游戏装备、游戏币等，使用聊天功能、社交分享功能；</p> \n    <p>（3）使用腾讯游戏支持并允许的其他某一项或几项功能。</p> \n    <p>4.2 <strong>您在使用腾讯游戏服务过程中不得未经腾讯许可以任何方式录制、直播或向他人传播腾讯游戏内容，包括但不限于不得利用任何第三方软件进行网络直播、传播等。</strong></p> \n    <p>4.3 在腾讯游戏以软件形式提供的情况下，您在使用腾讯游戏及腾讯游戏服务时还应符合本协议第五条关于软件许可的规定。</p> \n    <p>4.4 本条及本协议其他条款未明示授权的其他一切权利仍由腾讯保留，您在行使这些权利时须另外取得腾讯的书面许可。</p> \n    <p style=\"background-color:aqua\" id=\"anchor10\">4.5 如果您违反本协议约定的，腾讯有权采取相应的措施进行处理，该措施包括但不限于：不经通知随时对相关内容进行删除，并视行为情节对违规游戏账号处以包括但不限于警告、限制或禁止使用全部或部分功能、游戏账号封禁直至注销的处罚，并公告处理结果，要求您赔偿因您从事违约行为而给腾讯造成的损失等。</p> \n    <p>4.6 您充分理解并同意，腾讯有权依合理判断对违反有关法律法规或本协议规定的行为进行处理，对违法违规的任何用户采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，用户应独自承担由此而产生的一切法律责任。</p> \n    <p>4.7 您充分理解并同意，因您违反本协议或相关服务条款的规定，导致或产生第三方主张的任何索赔、要求或损失，您应当独立承担责任；腾讯因此遭受损失的，您也应当一并赔偿。</p> \n    <p>4.8 <strong>您充分理解并同意：游戏道具、游戏装备、游戏币等是腾讯游戏服务的一部分，腾讯在此许可您依本协议而获得其使用权。您购买、使用游戏道具、游戏装备、游戏币等应遵循本协议、游戏具体规则的要求；同时，游戏道具、游戏装备、游戏币等可能受到一定有效期限的限制，即使您在规定的有效期内未使用，除不可抗力或可归责于腾讯的原因外，一旦有效期届满，将会自动失效。</strong></p> \n    <p><strong>您充分理解并同意：为更好地向用户提供腾讯游戏服务，腾讯有权对游戏中的任何内容或构成元素等作出调整、更新或优化（包括但不限于您购买或正在使用的角色、游戏装备及其他游戏道具的美术设计、性能及相关数值设置等作出调整、更新或优化等）。且如腾讯做出相应调整、更新或优化的，您同意不会因此追究腾讯的任何法律责任。</strong></p> \n    <p>4.9 <strong>您充分理解并同意：为保障您游戏账号安全，为营造公平、健康及安全的游戏环境，在您使用腾讯游戏服务的过程中，在不违反相关法律规定情况下，腾讯可以通过技术手段了解您终端设备的随机存储内存以及与腾讯游戏同时运行的相关程序。一经发现有任何未经授权的、危害腾讯游戏服务正常运营的相关程序，腾讯可以收集所有与此有关的信息并采取合理措施予以打击。</strong></p> \n    <p>4.10 <strong>您充分理解并同意：为了保证您及其他用户的游戏体验，腾讯有权转移或者清除腾讯游戏服务器上存储的一些过往的游戏数据。</strong></p> \n    <p>4.11 腾讯将按照相关法律法规和本协议的规定，采取切实有效的措施保护未成年人在使用腾讯游戏服务过程中的合法权益，包括可能采取技术措施、禁止未成年人接触不适宜的游戏或者游戏功能、限制未成年人的游戏时间、预防未成年人沉迷网络。作为游戏规则的一部分，腾讯还将在适当位置发布腾讯游戏用户指引和警示说明，包括游戏内容介绍、正确使用游戏的方法以及防止危害发生的方法。所有未成年人用户都应在法定监护人的指导下仔细阅读并遵照执行这些指引和说明；其他玩家在使用腾讯游戏服务的过程中应避免发布、产生任何有损未成年人身心健康的内容，共同营造健康游戏环境。</p> \n    <p>4.12 <strong>如果您未满18周岁的，为保障您的合法权益，腾讯有权依据国家有关法律法规及政策规定、本协议其他条款规定、腾讯游戏运营策略或根据您法定监护人的合理要求采取以下一种或多种措施：</strong></p> \n    <p><strong>（1）将与您游戏相关的信息（包括但不限于您游戏帐号的登录信息、充值流水信息等）提供给您的法定监护人，使得您法定监护人可及时或同步了解您游戏情况；</strong></p> \n    <p><strong>（2）限制您游戏账号的消费额度；</strong></p> \n    <p><strong>（3）采取技术措施屏蔽某些游戏或游戏的某些功能，或限定您游戏时间或游戏时长；</strong></p> \n    <p style=\"background-color:aqua\" id=\"anchor11\"><strong>（4）注销或删除您游戏账号及游戏数据等相关信息；</strong></p> \n    <p><strong>（5）您法定监护人要求采取的，或腾讯认为可采取的其他合理措施，以限制或禁止您使用腾讯游戏。</strong></p> \n    <p>4.13 <strong>腾讯向用户提供游戏服务本身属于商业行为，用户有权自主决定是否根据腾讯自行确定的收费项目（包括但不限于购买游戏内的虚拟道具的使用权以及接受其他增值服务等各类收费项目）及收费标准支付相应的费用，以获得相应的游戏服务。如您不按相应标准支付相应费用的，您将无法获得相应的游戏服务。</strong></p> \n    <p><strong>您知悉并同意：收费项目或收费标准的改变、调整是一种正常的商业行为，您不得因为收费项目或收费标准的改变、调整而要求腾讯进行赔偿或补偿。</strong></p> \n    <p>4.14 在任何情况下，腾讯不对因不可抗力导致的您在使用腾讯游戏服务过程中遭受的损失承担责任。该等不可抗力事件包括但不限于国家法律、法规、政策及国家机关的命令及其他政府行为或者其它的诸如地震、水灾、雪灾、火灾、海啸、台风、罢工、战争等不可预测、不可避免且不可克服的事件。</p> \n    <p>4.15 <strong>腾讯游戏可能因游戏软件BUG、版本更新缺陷、第三方病毒攻击或其他任何因素导致您的游戏角色、游戏道具、游戏装备及游戏币等账号数据发生异常。在数据异常的原因未得到查明前，腾讯有权暂时冻结该游戏账号；若查明数据异常为非正常游戏行为所致，腾讯有权恢复游戏账号数据至异常发生前的原始状态（包括向第三方追回被转移数据），且腾讯无须向您承担任何责任。</strong></p> \n    <p>4.16 <strong>腾讯未授权您从任何第三方通过购买、接受赠与或者其他的方式获得游戏账号、游戏道具、游戏装备、游戏币等，腾讯不对第三方交易的行为负责，并且不受理因任何第三方交易发生纠纷而带来的申诉。</strong></p> \n    <p>4.17 <strong>您充分理解到：不同操作系统之间存在不互通的客观情况，该客观情况并非腾讯造成，由此可能导致您在某一操作系统中的充值和游戏数据不能顺利转移到另一操作系统中。由于您在不同系统进行切换造成的充值损失和游戏数据丢失风险应由您自行承担，腾讯对此不承担任何责任。</strong></p> \n    <p>4.18 <strong>您充分理解到：腾讯游戏中可能会设置强制对战区域或玩法，如果您不同意强制对战，请您不要进入该游戏或游戏区域；您的进入，将被视为同意该玩法并接受相应后果。</strong></p> \n    <p>4.19 <strong>腾讯自行决定终止运营腾讯游戏时或腾讯游戏因其他任何原因终止运营时，腾讯会按照文化部有关网络游戏终止运营的相关规定处理游戏终止运营相关事宜，以保障用户合法权益。</strong></p> \n    <h3>五、【软件许可】</h3> \n    <p>5.1 使用腾讯游戏服务可能需要下载并安装相关软件，您可以直接从腾讯的相关网站上获取该软件，也可以从得到腾讯授权的第三方获取。<strong>如果您从未经腾讯授权的第三方获取腾讯游戏或与腾讯游戏名称相同的游戏，将视为您未获得腾讯授权，腾讯无法保证该游戏能够正常使用，并对因此给您造成的损失不予负责。</strong></p> \n    <p>5.2 <strong>腾讯可能为不同的终端设备或操作系统开发了不同的软件版本，包括但不限于windows、ios、android、windows phone、symbian、blackberry等多个应用版本，您应当根据实际情况选择下载合适的版本进行安装，下载安装程序后，您需要按照该程序提示的步骤正确安装。</strong></p> \n    <p>5.3 <strong>若腾讯游戏以软件形式提供，腾讯给予您一项个人的、不可转让及非排他性的许可。您仅可为非商业目的在单一台终端设备上下载、安装、登录、使用该腾讯游戏。</strong></p> \n    <p>5.4 为提供更加优质、安全的服务，在软件安装时腾讯可能推荐您安装其他软件，您可以选择安装或不安装。</p> \n    <p>5.5 如果您不再需要使用该软件或者需要安装新版，可以自行卸载。如果您愿意帮助腾讯改进产品服务，请告知卸载的原因。</p> \n    <p>5.6 为了保证腾讯游戏服务的安全性和功能的一致性，腾讯有权对软件进行更新，或者对软件的部分功能效果进行改变或限制。</p> \n    <p>5.7 软件新版本发布后，旧版本的软件可能无法使用。腾讯不保证旧版本软件继续可用及相应的客户服务，请您随时核对并下载最新版本。</p> \n    <h3>六、【用户行为规范】</h3> \n    <p>6.1 您充分了解并同意，您必须为自己游戏账号下的一切行为负责，包括您所发表的任何内容以及由此产生的任何后果。</p> \n    <p>6.2 您除了可以按照本协议的约定使用腾讯游戏服务之外，不得进行任何侵犯腾讯游戏的知识产权的行为，或者进行其他的有损于腾讯或其他第三方合法权益的行为。</p> \n    <p>6.3 <strong>您在使用腾讯游戏或腾讯游戏服务时须遵守法律法规，不得利用腾讯游戏或腾讯游戏服务从事违法违规行为，包括但不限于以下行为：</strong></p> \n    <p><strong>（一）违反宪法确定的基本原则的；</strong></p> \n    <p><strong>（二）危害国家统一、主权和领土完整的；</strong></p> \n    <p><strong>（三）泄露国家秘密、危害国家安全或者损害国家荣誉和利益的；</strong></p> \n    <p><strong>（四）煽动民族仇恨、民族歧视，破坏民族团结，或者侵害民族风俗、习惯的；</strong></p> \n    <p><strong>（五）宣扬邪教、迷信的；</strong></p> \n    <p><strong>（六）散布谣言，扰乱社会秩序，破坏社会稳定的；</strong></p> \n    <p><strong>（七）宣扬淫秽、色情、赌博、暴力，或者教唆犯罪的；</strong></p> \n    <p><strong>（八）侮辱、诽谤他人，侵害他人合法权益的；</strong></p> \n    <p><strong>（九）违背社会公德的；</strong></p> \n    <p><strong>（十）有法律、行政法规和国家规定禁止的其他内容的。</strong></p> \n    <p>6.4 <strong>除非法律允许或腾讯书面许可，您不得从事下列行为：</strong></p> \n    <p style=\"background-color:aqua\" id=\"anchor5\"><strong>（1）删除游戏软件及其副本上关于著作权的信息；</strong></p> \n    <p><strong>（2）对游戏软件进行反向工程、反向汇编、反向编译或者以其他方式尝试发现软件的源代码；</strong></p> \n    <p><strong>（3）对游戏软件进行扫描、探查、测试，以检测、发现、查找其中可能存在的BUG或弱点；</strong></p> \n    <p style=\"background-color:aqua\" id=\"anchor6\"><strong>（4）对游戏软件或者软件运行过程中释放到任何终端内存中的数据、软件运行过程中客户端与服务器端的交互数据，以及软件运行所必需的系统数据，进行复制、修改、增加、删除、挂接运行或创作任何衍生作品，形式包括但不限于使用插件、外挂或非经合法授权的第三方工具/服务接入软件和相关系统；</strong></p> \n    <p><strong>（5）修改或伪造软件运行中的指令、数据，增加、删减、变动软件的功能或运行效果，或者将用于上述用途的软件、方法进行运营或向公众传播，无论上述行为是否为商业目的；</strong></p> \n    <p><strong>（6）通过非腾讯开发、授权的第三方软件、插件、外挂、系统，使用腾讯游戏及腾讯游戏服务，或制作、发布、传播非腾讯开发、授权的第三方软件、插件、外挂、系统；</strong></p> \n    <p><strong>（7）对游戏中腾讯拥有知识产权的内容进行使用、出租、出借、复制、修改、链接、转载、汇编、发表、出版、建立镜像站点等；</strong></p> \n    <p><strong>（8）建立有关腾讯游戏的镜像站点，或者进行网页（络）快照，或者利用架设服务器等方式，为他人提供与腾讯游戏服务完全相同或者类似的服务；</strong></p> \n    <p><strong>（9）将腾讯游戏的任意部分分离出来单独使用，或者进行其他的不符合本协议的使用；</strong></p> \n    <p><strong>（10）使用、修改或遮盖腾讯游戏的名称、商标或其它知识产权；</strong></p> \n    <p><strong>（11）其他未经腾讯明示授权的行为。</strong></p> \n    <p style=\"background-color:aqua\" id=\"anchor7\">6.5 <strong>您在使用腾讯游戏服务过程中有如下任何行为的，腾讯有权视情节严重程度，依据本协议及相关游戏规则的规定，对您做出暂时或永久性地禁止登录（即封号）、删除游戏账号及游戏数据、删除相关信息等处理措施，情节严重的将移交有关行政管理机关给予行政处罚，或者追究您的刑事责任：</strong></p> \n    <p><strong>（1）以某种方式暗示或伪称腾讯内部员工或某种特殊身份，企图得到不正当利益或影响其他用户权益的行为；</strong></p> \n    <p><strong>（2）在腾讯游戏中使用非法或不当词语、字符等，包括用于角色命名；</strong></p> \n    <p><strong>（3）以任何方式破坏腾讯游戏或影响腾讯游戏服务的正常进行；</strong></p> \n    <p><strong>（4）各种非法外挂行为；</strong></p> \n    <p><strong>（5）传播非法言论或不当信息；</strong></p> \n    <p><strong>（6）盗取他人游戏账号、游戏物品；</strong></p> \n    <p><strong>（7）私自进行游戏账号交易；</strong></p> \n    <p><strong>（8）私自进行游戏虚拟货币、游戏装备、游戏币及其他游戏道具等交易；</strong></p> \n    <p><strong>（9）违反本协议任何约定的；</strong></p> \n    <p><strong>（10）其他在行业内被广泛认可的不当行为，无论是否已经被本协议或游戏规则明确列明。</strong></p> \n    <p><strong> 您知悉并同意，由于外挂具有隐蔽性或用完后即消失等特点，腾讯有权根据您的游戏数据和表现异常判断您有无使用非法外挂等行为。</strong></p> \n    <p>6.6 您知悉并同意，如腾讯依据本协议对您的游戏账号采取封号处理措施的，<strong>具体封号期间由腾讯根据您违规行为情节而定。</strong></p> \n    <p>您知悉并同意：<strong>（1）在封号期间，您游戏账号中的游戏虚拟货币、游戏装备、游戏币及其他游戏道具可能都将无法使用；（2）如前述游戏虚拟货币、游戏装备、游戏币及其他游戏道具存在一定有效期，该有效期可能会在封号期间过期，您游戏账号解封后，您将无法使用该等已过期的游戏虚拟货币、游戏装备、游戏币及其他游戏道具。据此，您也同意不会因发生前述第（1）和（或）第（2）点规定的情形而追究腾讯任何法律责任。</strong></p> \n    <h3>七、【知识产权】</h3> \n    <p>7.1 腾讯是腾讯游戏的知识产权权利人。腾讯游戏（包括腾讯游戏整体及腾讯游戏涉及的所有内容、组成部分或构成要素 ）的一切著作权、商标权、专利权、商业秘密等知识产权及其他合法权益，以及与腾讯游戏相关的所有信息内容（包括文字、图片、音频、视频、图表、界面设计、版面框架、有关数据或电子文档等）均受中华人民共和国法律法规和相应的国际条约保护，腾讯享有上述知识产权和合法权益，但相关权利人依照法律规定应享有的权利除外。<strong>未经腾讯事先书面同意，您不得以任何方式将腾讯游戏（包括腾讯游戏整体及腾讯游戏涉及的所有内容、组成部分或构成要素 ）进行商业性使用。</strong></p> \n    <p>7.2 <strong>尽管本协议有其他规定，您在使用腾讯游戏服务中产生的游戏数据的所有权和知识产权归腾讯所有，腾讯有权保存、处置该游戏数据。其中，腾讯对用户购买游戏虚拟货币的购买记录的保存期限将遵守文化部《网络游戏管理暂行办法》有关规定。对其他游戏数据的保存期限由腾讯自行决定，但国家法律法规另有规定的从其规定。</strong></p> \n    <p>7.3 腾讯游戏可能涉及第三方知识产权，而该等第三方对您基于本协议在腾讯游戏中使用该等知识产权有要求的，腾讯将以适当方式向您告知该要求，您应当一并遵守。</p> \n    <h3>八、【遵守当地法律监管】</h3> \n    <p>8.1 您在使用腾讯游戏服务过程中应当遵守当地相关的法律法规，并尊重当地的道德和风俗习惯。<strong>如果您的行为违反了当地法律法规或道德风俗，您应当为此独立承担责任。</strong></p> \n    <p>8.2 您应避免因使用腾讯游戏服务而使腾讯卷入政治和公共事件，否则腾讯有权暂停或终止对您的服务。</p> \n    <h3>九、【管辖与法律适用】</h3> \n    <p>9.1 <strong>本协议签订地为中华人民共和国广东省深圳市南山区。</strong></p> \n    <p>9.2 <strong>本协议的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律（不包括冲突法）。</strong></p> \n    <p>9.3 <strong>若您和腾讯之间因本协议发生任何纠纷或争议，首先应友好协商解决；协商不成的，您同意将纠纷或争议提交至本协议签订地有管辖权的人民法院管辖。</strong></p> \n    <p>9.4 本协议所有条款的标题仅为阅读方便，本身并无实际涵义，不能作为本协议涵义解释的依据。</p> \n    <p>9.5 本协议条款无论因何种原因部分无效，其余条款仍有效，对各方具有约束力。</p> \n    <h3>十、【其他】</h3> \n    <p>10.1 腾讯有权在必要时变更本协议条款，您可以在腾讯游戏的相关页面查阅最新版本的协议条款。<strong>本协议条款变更后，如果您继续使用腾讯游戏服务，即视为您已接受变更后的协议。</strong></p> \n    <p>10.2 根据国家新闻出版总署关于健康游戏的忠告，腾讯提醒您：<strong>抵制不良游戏，拒绝盗版游戏；注意自我保护，谨防受骗上当；适度游戏益脑，沉迷游戏伤身。</strong></p> \n    <p class=\"author\">腾讯公司</p> \n   </div> \n   <script src=\"https://ossweb-img.qq.com/images/js/foot.js\"></script> \n  </div> \n  <script src=\"https://pingjs.qq.com/tcss.ping.https.js\"></script> \n  <script>if(typeof(pgvMain) == 'function') pgvMain();</script>   \n  <!--[if !IE]>|xGv00|31024284ac06417e9e39bf822aece6e9<![endif]-->\n </body>\n</html>"
    }
	
	return {data};
  }


}