export const languages = {
	en: { htmlLang: "en-GB", label: "English", ogLocale: "en_GB", short: "EN" },
	zh: { htmlLang: "zh-Hans", label: "中文", ogLocale: "zh_CN", short: "中文" },
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
				desc: "Sundial (晷) — a screen time app for iPhone to set app limits and build healthier phone habits.",
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
			"Sundial (晷) is a screen time app for iPhone — daily app limits that actually shield, a block that says why, and a year of history in one heatmap.",
		brandSub: "Screen time for iPhone",
		heroTitle: "A limit should feel like a sundial, not a stopwatch.",
		lede: "Give the apps that eat your day a daily allowance. When the time runs out, iOS blocks the app itself — and the shield repeats the reason you set.",
		appStore: {
			small: "Download on the",
		},
		appStoreSoon: {
			small: "Coming soon to the",
		},
		seeHowItWorks: "See how it works",
		heroMeta: "Free to use · Sundial Pro is a one-time unlock · No subscription, ever",
		chipLabel: "Screen time",
		heroAlt:
			"Sundial's Today tab: today's screen time, a health reading, and an ink-wash landscape.",
		features: [
			{
				id: "limits",
				index: "01",
				eyebrow: "Limits",
				title: "Limits that actually shield",
				body: "Give any app or category a daily allowance. One rule can hold as many apps as you like. When the time is up, iOS blocks the app itself — not a timer you can swipe away.",
				bullets: [
					"Any app, or a whole category",
					"One rule can hold many apps",
					"Resets at midnight on its own",
				],
				alt: "Sundial's Limits tab, listing rules for X, Rednote, Bilibili and two app groups with their daily allowances.",
			},
			{
				id: "shield",
				index: "02",
				eyebrow: "The shield",
				title: "A block that says why",
				body: "Every shield first says what you finished — “10 min done for today.” Then it repeats the reason you set that rule: “For my health. Put the phone down.” The exit stays yours.",
				bullets: [
					"Finish for today, and keep the limit",
					"Take 15 more minutes",
					"Lift that rule until midnight",
				],
				alt: "Sundial's app shield: a sun icon, the line '10 min done for today.', the reason 'For my health. Put the phone down.', and two buttons.",
			},
			{
				id: "history",
				index: "03",
				eyebrow: "History",
				title: "A year in one heatmap",
				body: "A whole year of days in one heatmap, shaded by how much you used. Open any day for the detail: which apps, which categories, and how they compare with your limits.",
				bullets: [
					"A year at a glance",
					"Per-day app and category detail",
					"Each day against its limits",
				],
				alt: "Sundial's History tab: a year of days as a warm heatmap, with one day opened to show apps, categories and total time.",
			},
			{
				id: "setup",
				index: "04",
				eyebrow: "Set up",
				title: "Set one in 20 seconds",
				body: "Pick the apps, name the rule, choose a duration, and say why it matters. That reason is what greets you later, at the exact moment it counts.",
				bullets: [
					"Pick apps or a category",
					"Name the rule and the reason",
					"Choose a daily duration",
				],
				alt: "Sundial's New Limit sheet: a name field, app picker, a grid of reasons such as Sleep, Mind & body, Study, Family, Work and Other, and a daily duration wheel.",
			},
		],
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
				icon: "mdi:weather-night",
				title: "Midnight reset",
				body: "As the day turns, every limit refills. No streak to keep, no guilt to carry.",
			},
		],
		quiet: {
			index: "05",
			eyebrow: "Quiet by design",
			title: "No account. No server. No analytics. No ads.",
			body: "Sundial reads only your total usage time through Apple's Screen Time framework — never what you do inside an app. Usage, limits and settings stay on your iPhone.",
			link: "Read the privacy policy",
		},
		pro: {
			eyebrow: "Sundial Pro",
			title: "One purchase. Yours for good.",
			body: "No subscription, nothing to cancel. Pro opens up every theme colour, every background scene, and the Home Screen widget. The heart of the app — limits, shields and history — is free.",
			badge: "One-time unlock",
			bullets: ["Every theme colour", "Every background scene", "Home Screen widget, all sizes"],
			note: "No subscription. Ever.",
		},
		final: {
			title: "Put the phone down on time.",
			meta: "Requires the Screen Time permission (Settings → Screen Time → Sundial). iPhone, iOS 27 or later.",
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
				desc: "Sundial（晷）——一款 iPhone 屏幕时间应用，帮你设置 App 限额，养成更健康的用机习惯。",
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
			"Sundial（晷）是一款 iPhone 屏幕时间应用——真正能屏蔽的每日 App 限额、会说明理由的拦截页，以及用一张热力图回顾一整年。",
		brandSub: "iPhone 屏幕时间应用",
		heroTitle: "限额应该像日晷，而不是秒表。",
		lede: "给那些偷走你一天的 App 设定每日额度。用完之后，iOS 会直接屏蔽 App 本身，拦截页会重申你当初设定的理由。",
		appStore: {
			small: "下载于",
		},
		appStoreSoon: {
			small: "即将登陆",
		},
		seeHowItWorks: "了解它如何运作",
		heroMeta: "免费使用 · Sundial Pro 一次买断 · 永不订阅",
		chipLabel: "屏幕时间",
		heroAlt: "Sundial 的「今天」标签页：今日屏幕时间、健康度读数和一幅水墨风景。",
		features: [
			{
				id: "limits",
				index: "01",
				eyebrow: "限额",
				title: "真正能屏蔽的限额",
				body: "为任意 App 或类别设定每日额度。一条规则可以包含任意多个 App。时间一到，iOS 会直接屏蔽 App 本身，而不是一个可以随手划掉的计时器。",
				bullets: ["任意 App，或整个类别", "一条规则可包含多个 App", "每天午夜自动重置"],
				alt: "Sundial 的「限额」标签页，列出 X、小红书、哔哩哔哩以及两个 App 分组的每日额度规则。",
			},
			{
				id: "shield",
				index: "02",
				eyebrow: "拦截页",
				title: "会说明理由的拦截",
				body: "每次拦截都会先告诉你已完成什么——「今天的 10 分钟已完成。」然后重申你为该规则设定的理由：「为了我的健康，把手机放下。」是否离开，始终由你决定。",
				bullets: ["今天到此为止，保留限额", "再玩一刻钟", "今天解除该规则"],
				alt: "Sundial 的 App 拦截页：一个太阳图标、一句「今天的 10 分钟已完成。」、理由「为了我的健康，把手机放下。」，以及两个按钮。",
			},
			{
				id: "history",
				index: "03",
				eyebrow: "历史",
				title: "一张热力图，一整年",
				body: "用一张热力图呈现一整年的每一天，颜色深浅代表用时多少。展开任意一天查看细节：哪些 App、哪些类别，以及与限额的对比。",
				bullets: ["一整年一眼看完", "按天查看 App 与类别明细", "每天与限额的对比"],
				alt: "Sundial 的「历史」标签页：以温暖的热力图展示一整年的每一天，展开某一天可见 App、类别与总用时。",
			},
			{
				id: "setup",
				index: "04",
				eyebrow: "设置",
				title: "20 秒即可建立",
				body: "选择 App、给规则命名、设定时长，并写下它为何重要。日后在最关键的那一刻，迎接你的正是这个理由。",
				bullets: ["选择 App 或类别", "为规则和理由命名", "设定每日时长"],
				alt: "Sundial 的「新建限额」面板：名称输入框、App 选择器、包含睡眠、身心、学习、家人、工作、其它等理由的网格，以及每日时长选择轮。",
			},
		],
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
				icon: "mdi:weather-night",
				title: "午夜重置",
				body: "新的一天开始，所有限额重新充满。无需续火花，也无需背负愧疚。",
			},
		],
		quiet: {
			index: "05",
			eyebrow: "安静的设计",
			title: "无需账号。没有服务器。没有统计分析。没有广告。",
			body: "Sundial 仅通过 Apple 的「屏幕时间」框架读取你的总计用时——绝不窥探你在 App 内做了什么。用量、限额与设置都留在你的 iPhone 上。",
			link: "阅读隐私政策",
		},
		pro: {
			eyebrow: "Sundial Pro",
			title: "一次购买，永久拥有。",
			body: "没有订阅，也无需取消。Pro 解锁全部主题配色、全部背景场景以及主屏幕小组件。应用的核心——限额、拦截与历史——始终免费。",
			badge: "一次买断",
			bullets: ["全部主题配色", "全部背景场景", "全尺寸主屏幕小组件"],
			note: "永不订阅。",
		},
		final: {
			title: "准时把手机放下。",
			meta: "需要「屏幕时间」权限（设置 → 屏幕时间 → Sundial）。iPhone，iOS 27 或更高版本。",
		},
		footLinks: {
			support: "支持",
			privacy: "隐私",
			more: "Samuel Zuo 的更多作品",
		},
	},
};

export const ui: Record<Lang, Dict> = { en, zh };
