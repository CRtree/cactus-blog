export const languages = {
	en: { htmlLang: "en-GB", label: "English", ogLocale: "en_GB", short: "EN" },
	zh: { htmlLang: "zh-Hans", label: "中文", ogLocale: "zh_CN", short: "中文" },
	ja: { htmlLang: "ja", label: "日本語", ogLocale: "ja_JP", short: "日本語" },
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

const en = {
	skipToContent: "skip to content",
	header: {
		logo: "Logo",
		mainMenu: "Main menu",
		toggleNav: "Open main menu",
	},
	footer: {
		moreOnSite: "More on this site",
	},
	search: {
		aria: "search",
		close: "Close",
		devNotice:
			"Search is only available in production builds. Try building and previewing the site to test it out locally.",
	},
	social: {
		findMeOn: "Find me on",
		copyEmail: "Copy email address",
		emailCopied: "Email address copied",
	},
	languageSwitcher: {
		aria: "Language",
	},
	nav: {
		home: "Home",
	},
	home: {
		title: "Home",
		description: "Apps and tools I build.",
		hello: "Hello 👋",
		intro:
			"Welcome to my little corner of the internet. This is where I share the applications and tools I build.",
		buildApplications: "Build Applications",
		projects: [
			{
				title: "Sundial",
				desc: "Sundial (晷) — a screen time app for iPhone and iPad that turns app limits into daily allowances, active hours and a shield that explains itself.",
			},
			{
				title: "Youtube Scroll Saver",
				desc: "A Chrome extension that remembers your spot on any YouTube channel and jumps you back to the last video or Short you watched.",
			},
			{
				title: "Code Changes Summarizer",
				desc: "JetBrains IDE plugin that summarizes code changes and generates commit messages with a local LLM (Ollama).",
			},
			{
				title: "Analysis Logs with AI",
				desc: "JetBrains IDE plugin that analyzes application logs with AI to speed up issue identification and root cause analysis.",
			},
			{
				title: "EnvVarTool",
				desc: "A native macOS app for managing shell environment variables across profiles, with JSON import and export.",
			},
			{
				title: "String Remove",
				desc: "A small web app for string manipulation and text processing.",
			},
		],
	},
	sundial: {
		title: "Sundial",
		description:
			"Sundial (晷) is a screen time app for iPhone and iPad — daily limits with active hours, a shield that says why, pickups, and 30 days of history in one heatmap.",
		brandSub: "Screen time for iPhone & iPad",
		heroTitle: "A limit should feel like a sundial, not a stopwatch.",
		lede: "Give the apps that eat your day a daily allowance — all day, or only during the hours you choose. When the time runs out, iOS blocks the app itself, and the shield repeats the reason you set.",
		appStore: {
			small: "Download on the",
		},
		appStoreSoon: {
			small: "Coming soon to the",
		},
		seeHowItWorks: "See how it works",
		heroMeta: "Free to use · Sundial Pro is a one-time unlock · No subscription, ever",
		chipLabel: "Screen time",
		chipValue: "2h 28m",
		heroAlt:
			"Sundial's Today tab: today's screen time, 140 pickups, the top three apps, and an ink-wash landscape.",
		features: [
			{
				id: "limits",
				index: "01",
				eyebrow: "Limits",
				title: "Limits that actually hold",
				body: "Give any app or category a daily allowance. One rule can hold as many apps as you like, and every rule shows its own state — spent, snoozed, paused or unlocked. When the time is up, iOS blocks the app itself, not a timer you can swipe away.",
				bullets: [
					"Any app, or a whole category",
					"One rule can hold many apps",
					"See each rule's state at a glance",
				],
				alt: "Sundial's Limits tab, listing rules with their daily allowances, switches and progress bars showing limit reached, snoozed and unlocked states.",
			},
			{
				id: "hours",
				index: "02",
				eyebrow: "Active hours",
				title: "All day, or only your hours",
				body: "Set a daily allowance for the whole day, or draw a window — 9:00 to 18:00, for example — and only those hours count. Tick Lock now and the rule shields its apps the moment you save it.",
				bullets: [
					"A custom window for every rule",
					"Nothing counts outside the hours",
					"Lock now, the moment you save",
				],
				alt: "Sundial's New Limit sheet: a one-hour allowance, an Active hours window from 9:00 to 18:00, and the Lock now switch.",
			},
			{
				id: "shield",
				index: "03",
				eyebrow: "The shield",
				title: "A block that says why",
				body: "Every shield first says what you finished — “2 hr done for today.” Then it repeats the reason you set that rule: “For my health. Put the phone down.” The exit stays yours.",
				bullets: [
					"Finish for today, and keep the limit",
					"Take 15 more minutes",
					"Lift that rule until midnight",
				],
				alt: "Sundial's app shield: a sun icon, the line '2 hr done for today.', the reason 'For my health. Put the phone down.', and two buttons.",
			},
			{
				id: "history",
				index: "04",
				eyebrow: "History",
				title: "See the shape of your habit",
				body: "Thirty days in one heatmap, shaded by how much you used. Switch between screen time and pickups to see what actually pulls you back: which apps, which categories, your first pickup and your daily average.",
				bullets: [
					"Screen time and pickups, one tap apart",
					"30 days at a glance",
					"Per-day apps, categories and averages",
				],
				alt: "Sundial's History tab on the pickups measure: 30 days as a warm heatmap, with one day opened to show 140 pickups, the app breakdown and the category treemap.",
			},
		],
		themes: {
			index: "05",
			eyebrow: "Appearance",
			title: "Any colour is a theme.",
			body: "Six curated palettes ship with the app. The seventh disc is yours: open it and pick any colour with the system picker or a HEX value, and the accent, the history grid and the tab bar follow. Light and dark follow your device, and the painting behind it shifts with the day. Pro unlocks the full set.",
			bullets: [
				"Six palettes, plus your own colour",
				"Light and dark, every scene",
				"iPhone, iPad and foldables",
			],
			alt: "Sundial's Settings on an iPad: the appearance rows for theme colour, light and dark mode, and background scene.",
		},
		extras: [
			{
				icon: "mdi:widgets-outline",
				title: "On your Home Screen",
				body: "Today's figure and your most urgent rules live on the Home Screen, small or medium.",
			},
			{
				icon: "mdi:heart-pulse",
				title: "A health score",
				body: "A running estimate of today's screen time, draining as the hours do.",
			},
			{
				icon: "mdi:gesture-tap",
				title: "Pickups, counted",
				body: "Every time you pick the phone up is counted, then shown beside screen time so you can see what pulls you back.",
			},
			{
				icon: "mdi:weather-night",
				title: "Midnight reset",
				body: "As the day turns, every limit refills. No streak to keep, no guilt to carry.",
			},
			{
				icon: "mdi:tablet-dashboard",
				title: "Every screen",
				body: "One app for iPhone, iPad and foldables — on a wide canvas the painting owns the page and the numbers become glass chips.",
			},
			{
				icon: "mdi:translate",
				title: "Your language",
				body: "English, 简体中文, 日本語, Deutsch, Français, Español, 한국어 — every part of the app speaks it.",
			},
		],
		quiet: {
			index: "06",
			eyebrow: "Quiet by design",
			title: "No account. No server. No analytics. No ads.",
			body: "Sundial reads only your total usage time through Apple's Screen Time framework — never what you do inside an app. Usage, limits and settings stay on your device.",
			link: "Read the privacy policy",
		},
		pro: {
			eyebrow: "Sundial Pro",
			title: "One purchase. Yours for good.",
			body: "No subscription, nothing to cancel. Pro opens every palette (and the custom colour), every background scene, and the Home Screen widget. The heart of the app — limits, shields and history — is free.",
			badge: "One-time unlock",
			bullets: [
				"Six palettes, plus your own colour",
				"Every ink-wash scene",
				"Home Screen widget, all sizes",
			],
			note: "No subscription. Ever.",
		},
		final: {
			title: "Put the phone down on time.",
			meta: "Requires the Screen Time permission (Settings → Screen Time → Sundial). iPhone and iPad, iOS 18.5 or later.",
		},
		footLinks: {
			support: "Support",
			privacy: "Privacy",
			more: "More by Samuel Zuo",
		},
	},
};

export type Dict = typeof en;

const zh: Dict = {
	skipToContent: "跳到主要内容",
	header: {
		logo: "Logo",
		mainMenu: "主菜单",
		toggleNav: "打开主菜单",
	},
	footer: {
		moreOnSite: "站内更多",
	},
	search: {
		aria: "搜索",
		close: "关闭",
		devNotice: "搜索仅在正式构建中可用。请在本地构建并预览站点后再试。",
	},
	social: {
		findMeOn: "在这些平台找到我",
		copyEmail: "复制邮箱地址",
		emailCopied: "已复制邮箱地址",
	},
	languageSwitcher: {
		aria: "语言",
	},
	nav: {
		home: "首页",
	},
	home: {
		title: "首页",
		description: "我构建的应用和工具。",
		hello: "你好 👋",
		intro: "欢迎来到我的小角落。这里记录我构建的应用和工具。",
		buildApplications: "构建的应用",
		projects: [
			{
				title: "Sundial",
				desc: "Sundial（晷）——一款 iPhone 与 iPad 屏幕时间应用，把 App 限额变成每日额度、生效时段，以及会说明理由的拦截。",
			},
			{
				title: "Youtube Scroll Saver",
				desc: "一款 Chrome 扩展，记住你在任意 YouTube 频道看到的位置，一键回到最后观看的视频或 Short。",
			},
			{
				title: "Code Changes Summarizer",
				desc: "JetBrains IDE 插件，使用本地大模型（Ollama）总结代码改动并生成提交信息。",
			},
			{
				title: "Analysis Logs with AI",
				desc: "JetBrains IDE 插件，用 AI 分析应用日志，加快问题定位与根因分析。",
			},
			{
				title: "EnvVarTool",
				desc: "一款原生 macOS 应用，用于跨配置文件管理 shell 环境变量，支持 JSON 导入导出。",
			},
			{
				title: "String Remove",
				desc: "一个小巧的网页应用，用于字符串处理与文本编辑。",
			},
		],
	},
	sundial: {
		title: "Sundial",
		description:
			"Sundial（晷）是一款 iPhone 与 iPad 屏幕时间应用——带生效时段的每日限额、会说明理由的拦截页、拿起次数，以及一张 30 天历史热力图。",
		brandSub: "iPhone 与 iPad 屏幕时间应用",
		heroTitle: "限额应该像日晷，而不是秒表。",
		lede: "给那些偷走你一天的 App 设定每日额度——全天生效，或只在设定的时段里计数。时间用完之后，iOS 会直接屏蔽 App 本身，拦截页会重申你当初设定的理由。",
		appStore: {
			small: "下载于",
		},
		appStoreSoon: {
			small: "即将登陆",
		},
		seeHowItWorks: "了解它如何运作",
		heroMeta: "免费使用 · Sundial Pro 一次买断 · 永不订阅",
		chipLabel: "屏幕时间",
		chipValue: "2.5 小时",
		heroAlt: "Sundial 的「今天」标签页：今日屏幕时间、140 次拿起、前三名 App，以及一幅水墨风景。",
		features: [
			{
				id: "limits",
				index: "01",
				eyebrow: "限额",
				title: "真正拦得住的限额",
				body: "为任意 App 或类别设定每日额度。一条规则可以包含任意多个 App，每条规则都有自己的状态——已用完、已延长、已暂停或已解锁。时间一到，iOS 会直接屏蔽 App 本身，而不是一个随手就能划掉的计时器。",
				bullets: ["任意 App，或整个类别", "一条规则可包含多个 App", "每条规则的状态一目了然"],
				alt: "Sundial 的「限额」标签页，列出各条规则的每日额度、开关，以及显示「已达上限」「已延长」「已解锁」等状态的进度条。",
			},
			{
				id: "hours",
				index: "02",
				eyebrow: "生效时段",
				title: "全天生效，或只在你设定的时段",
				body: "每日额度可以覆盖全天，也可以划出一段时间——比如 9:00 到 18:00，只在此时段内计时。勾选「立即锁定」，保存规则的那一刻就会锁住这些 App。",
				bullets: ["每条规则可自定义时间窗口", "时段之外不计时，也不拦截", "保存即锁定"],
				alt: "Sundial 的「新建限额」面板：1 小时额度、9:00 至 18:00 的生效时段，以及「立即锁定」开关。",
			},
			{
				id: "shield",
				index: "03",
				eyebrow: "拦截页",
				title: "会说明理由的拦截",
				body: "每次拦截都会先告诉你完成了什么——「今天的 2 小时已完成。」然后重申你为这条规则设定的理由：「为了我的健康，把手机放下。」出口始终由你决定。",
				bullets: ["今天到此为止，保留限额", "再延长 15 分钟", "今天解除该规则"],
				alt: "Sundial 的 App 拦截页：一个太阳图标、一句「今天的 2 小时已完成。」、理由「为了我的健康，把手机放下。」，以及「今天到此为止」和「还不想结束」两个按钮。",
			},
			{
				id: "history",
				index: "04",
				eyebrow: "历史",
				title: "看见习惯的形状",
				body: "用一张热力图呈现最近 30 天，颜色深浅代表用时多少。在屏幕使用时间与拿起次数之间切换，看清究竟是什么把你拉回手机：哪些 App、哪些类别、第一次拿起的时间，以及日均拿起次数。",
				bullets: ["屏幕时间与拿起次数，一键切换", "30 天一眼看完", "按天查看 App、类别与均值"],
				alt: "Sundial 的「历史」标签页，切到「拿起次数」：以热力图展示最近 30 天，展开某一天可见 140 次拿起、App 明细与类别占比。",
			},
		],
		themes: {
			index: "05",
			eyebrow: "外观",
			title: "任何颜色，都能成为主题。",
			body: "App 自带六种精选配色。第七格是你的：打开它，用系统取色器或 HEX 值调出任意颜色，强调色、历史热力图和标签栏都会随之改变。浅色与深色跟随系统，背后的水墨也随昼夜流转。Pro 解锁全部外观。",
			bullets: ["六种精选配色，加上你的颜色", "浅色、深色与每一幅场景", "iPhone、iPad 与折叠屏"],
			alt: "Sundial 在 iPad 上的「设置」：主题配色、浅色/深色外观与背景场景三行设置。",
		},
		extras: [
			{
				icon: "mdi:widgets-outline",
				title: "在「主屏幕」上",
				body: "今日数字与最紧迫的规则就在主屏幕小组件上，支持小号与中号。",
			},
			{
				icon: "mdi:heart-pulse",
				title: "健康度评分",
				body: "对今日屏幕时间的实时估算，随时间流逝而消耗。",
			},
			{
				icon: "mdi:gesture-tap",
				title: "拿起次数",
				body: "每一次拿起手机都会被记录，并与屏幕时间并列呈现，让你看清是什么把你拉回手机。",
			},
			{
				icon: "mdi:weather-night",
				title: "午夜重置",
				body: "新的一天开始，所有限额重新充满。无需续火花，也无需背负愧疚。",
			},
			{
				icon: "mdi:tablet-dashboard",
				title: "每一个屏幕",
				body: "同一款 App 适配 iPhone、iPad 与折叠屏——在大画布上，水墨画铺满页面，数字变成玻璃质感的小卡片。",
			},
			{
				icon: "mdi:translate",
				title: "你的语言",
				body: "English、简体中文、日本語、Deutsch、Français、Español、한국어——从 App 到各个扩展，都说你的语言。",
			},
		],
		quiet: {
			index: "06",
			eyebrow: "安静的设计",
			title: "无需账号。没有服务器。没有统计分析。没有广告。",
			body: "Sundial 仅通过 Apple 的「屏幕时间」框架读取你的总计用时——绝不窥探你在 App 内做了什么。用量、限额与设置都留在你的设备上。",
			link: "阅读隐私政策",
		},
		pro: {
			eyebrow: "Sundial Pro",
			title: "一次购买，永久拥有。",
			body: "没有订阅，也无需取消。Pro 解锁全部配色（以及自定义颜色）、全部背景场景和主屏幕小组件。应用的核心——限额、拦截与历史——始终免费。",
			badge: "一次买断",
			bullets: ["六种配色，加上你的颜色", "每一幅水墨场景", "全尺寸主屏幕小组件"],
			note: "永不订阅。",
		},
		final: {
			title: "准时把手机放下。",
			meta: "需要「屏幕时间」权限（设置 → 屏幕时间 → Sundial）。iPhone 与 iPad，iOS 18.5 或更高版本。",
		},
		footLinks: {
			support: "支持",
			privacy: "隐私",
			more: "Samuel Zuo 的更多作品",
		},
	},
};

const jaProduct = {
	skipToContent: "本文へスキップ",
	header: {
		logo: "ロゴ",
		mainMenu: "メインメニュー",
		toggleNav: "メインメニューを開く",
	},
	footer: {
		moreOnSite: "このサイトの他のページ",
	},
	search: {
		aria: "検索",
		close: "閉じる",
		devNotice:
			"検索は本番ビルドでのみ利用できます。ローカルで確認するにはビルドしてプレビューしてください。",
	},
	social: {
		findMeOn: "ここで見つける",
		copyEmail: "メールアドレスをコピー",
		emailCopied: "メールアドレスをコピーしました",
	},
	languageSwitcher: {
		aria: "言語",
	},
	nav: {
		home: "ホーム",
	},
	sundial: {
		title: "Sundial",
		description:
			"Sundial（晷）は iPhone と iPad のスクリーンタイムアプリ。有効な時間帯つきの1日の上限、理由を伝えるブロック、ピックアップ、30日間の履歴をひとつのヒートマップに。",
		brandSub: "iPhone と iPad のスクリーンタイム",
		heroTitle: "上限はタイマーではなく、日時計のように。",
		lede: "一日を奪うアプリに、1日の上限を。一日中でも、自分で選んだ時間帯だけでも。時間を使い切ると、iOS がアプリそのものをブロックします。ブロック画面は、あなたが設定した理由をもう一度伝えます。",
		appStore: {
			small: "ダウンロードは",
		},
		appStoreSoon: {
			small: "近日公開",
		},
		seeHowItWorks: "使い方を見る",
		heroMeta: "無料で利用 · Sundial Pro は買い切り · サブスクリプションはありません",
		chipLabel: "スクリーンタイム",
		chipValue: "2.5 時間",
		heroAlt:
			"Sundial の「今日」タブ。今日のスクリーンタイム、ピックアップ140回、上位3つのアプリ、水墨画の風景。",
		features: [
			{
				id: "limits",
				index: "01",
				eyebrow: "制限",
				title: "本当に守られる上限",
				body: "任意のアプリやカテゴリに1日の上限を設定します。1つのルールにいくつでもアプリをまとめられ、ルールごとに「使い切り」「延期」「停止中」「解除済み」の状態が表示されます。時間になると、iOS がアプリそのものをブロックします。スワイプで消せるタイマーではありません。",
				bullets: [
					"任意のアプリ、またはカテゴリ全体",
					"1つのルールに複数のアプリ",
					"ルールの状態がひと目でわかる",
				],
				alt: "Sundial の「制限」タブ。各ルールの1日の上限、スイッチ、上限に達しました・延期・解除済みなどの状態を示すプログレスバー。",
			},
			{
				id: "hours",
				index: "02",
				eyebrow: "有効な時間帯",
				title: "一日中でも、決めた時間帯だけでも",
				body: "1日の上限を一日中に設定することも、9:00〜18:00 のような時間帯を指定して、その時間だけカウントすることもできます。「今すぐブロック」をオンにすると、ルールを保存した瞬間にアプリがブロックされます。",
				bullets: [
					"ルールごとに時間帯を指定",
					"時間外はカウントもブロックもしない",
					"保存と同時にブロック",
				],
				alt: "Sundial の「新しい制限」シート。1時間の上限、9:00〜18:00 の有効な時間帯、「今すぐブロック」スイッチ。",
			},
			{
				id: "shield",
				index: "03",
				eyebrow: "ブロック画面",
				title: "理由を伝えるブロック",
				body: "ブロック画面はまず、何をやり遂げたかを伝えます——「今日の2時間、完了しました。」続けて、そのルールを設定した理由を繰り返します——「健康のため。スマホを置こう。」出口はあなた次第です。",
				bullets: ["今日はここまで（上限を残す）", "あと15分", "今日は制限を解除"],
				alt: "Sundial のアプリブロック画面。太陽のアイコン、「今日の2時間、完了しました。」という一文、「健康のため。スマホを置こう。」という理由、2つのボタン。",
			},
			{
				id: "history",
				index: "04",
				eyebrow: "履歴",
				title: "習慣の形が見えてくる",
				body: "直近30日を1枚のヒートマップに。使った時間に応じて色が濃くなります。スクリーンタイムとピックアップを切り替えて、何があなたをスマホに引き戻しているのかを見つけましょう。アプリ、カテゴリ、最初に手に取った時刻、1日の平均回数までわかります。",
				bullets: [
					"スクリーンタイムとピックアップをワンタップで切替",
					"30日間をひと目で",
					"日ごとのアプリ、カテゴリ、平均",
				],
				alt: "Sundial の「履歴」タブ（ピックアップ表示）。直近30日を暖かいヒートマップで表示し、ある日を開くとピックアップ140回、アプリ別の内訳、カテゴリのツリーマップが見える。",
			},
		],
		themes: {
			index: "05",
			eyebrow: "外観",
			title: "どんな色も、テーマになる。",
			body: "アプリには6つの厳選パレットが入っています。7つ目のディスクはあなたのもの。開いてシステムのカラーピッカーか HEX 値で好きな色を選ぶと、アクセント、履歴のヒートマップ、タブバーがその色に変わります。ライト／ダークはデバイスに従い、背景の水墨画は一日の移ろいとともに変わります。Pro で全セットをアンロック。",
			bullets: [
				"6つのパレット＋自分だけの色",
				"ライト／ダークとすべての背景",
				"iPhone、iPad、折りたたみ端末",
			],
			alt: "iPad の Sundial の「設定」。テーマカラー、ライト／ダーク、背景シーンの外観設定が並ぶ。",
		},
		extras: [
			{
				icon: "mdi:widgets-outline",
				title: "ホーム画面に",
				body: "今日の数字といちばん気になるルールを、ホーム画面のウィジェットに。小サイズと中サイズに対応。",
			},
			{
				icon: "mdi:heart-pulse",
				title: "健康度",
				body: "今日のスクリーンタイムの推定値。時間が過ぎるほど下がっていきます。",
			},
			{
				icon: "mdi:gesture-tap",
				title: "ピックアップ",
				body: "スマホを手に取るたびに記録し、スクリーンタイムと並べて表示。何があなたを引き戻しているのかがわかります。",
			},
			{
				icon: "mdi:weather-night",
				title: "午前0時にリセット",
				body: "日付が変わると、すべての上限が満タンに戻ります。連続記録も、罪悪感もありません。",
			},
			{
				icon: "mdi:tablet-dashboard",
				title: "どの画面でも",
				body: "iPhone、iPad、折りたたみ端末に対応した1つのアプリ。広い画面では水墨画がページいっぱいに広がり、数字はガラスのチップになります。",
			},
			{
				icon: "mdi:translate",
				title: "あなたの言語",
				body: "English、简体中文、日本語、Deutsch、Français、Español、한국어。アプリのすみずみまで、あなたの言語で。",
			},
		],
		quiet: {
			index: "06",
			eyebrow: "静かな設計",
			title: "アカウントなし。サーバーなし。解析なし。広告なし。",
			body: "Sundial は Apple のスクリーンタイムフレームワークを通じて、合計の使用時間だけを読み取ります。アプリ内での行動を見ることはありません。使用状況、制限、設定はデバイスの中にとどまります。",
			link: "プライバシーポリシーを読む",
		},
		pro: {
			eyebrow: "Sundial Pro",
			title: "一度の購入で、ずっとあなたのもの。",
			body: "サブスクリプションはなく、解約するものもありません。Pro はすべてのパレット（カスタムカラーを含む）、すべての背景シーン、ホーム画面ウィジェットをアンロックします。アプリの中心である制限、ブロック、履歴は無料です。",
			badge: "買い切り",
			bullets: [
				"6つのパレット＋自分だけの色",
				"すべての水墨シーン",
				"全サイズのホーム画面ウィジェット",
			],
			note: "サブスクリプションはありません。",
		},
		final: {
			title: "時間になったら、スマホを置く。",
			meta: "「スクリーンタイム」の権限が必要です（設定 → スクリーンタイム → Sundial）。iPhone と iPad、iOS 18.5 以降。",
		},
		footLinks: {
			support: "サポート",
			privacy: "プライバシー",
			more: "Samuel Zuo の他の作品",
		},
	},
};

// Japanese ships on the Sundial product page only — the home page is not
// translated, so it falls back to the English dictionary.
const ja: Dict = { ...en, ...jaProduct };

export const ui: Record<Lang, Dict> = { en, ja, zh };
