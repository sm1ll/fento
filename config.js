// ╔═╗╔═╗╔╗╔╔╦╗╔═╗
// ╠╣ ║╣ ║║║ ║ ║ ║
// ╚  ╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Smill',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '9113a84ae0deb23def7710e61ad2467c', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '18.492939',
	defaultLongitude: '-69.799074',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Amazon',
            icon: 'custom:assets/icons/amazon.png',
			link: 'https://amazon.com',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://www.icloud.com/mail/',
		},
		{
			id: '3',
			name: 'Reddit',
			icon: 'bot',
			link: 'https://reddit.com',
		},
		{
			id: '4',
			name: 'X',
            icon: 'custom:assets/icons/x.png',
			link: 'https://x.com',
		},
		{
			id: '5',
			name: 'Youtube',
			icon: 'square-play',
			link: 'https://youtube.com',
		},
		{
			id: '6',
			name: 'ChatGPT',
            icon: 'custom:assets/icons/gpt.png',
			link: 'https://chatgpt.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Crunchyroll',
            icon: 'custom:assets/icons/crunchyroll.png',
			link: 'https://Crunchyroll.com',
		},
		{
			id: '3',
			name: 'Notes',
			icon: 'notepad-text',
			link: 'https://www.icloud.com/notes/',
		},
		{
			id: '2',
			name: 'Disney+',
            icon: 'custom:assets/icons/disney.png',
			link: 'https://www.disneyplus.com/',
		},
		{
			id: '5',
			name: 'HBO',
            icon: 'custom:assets/icons/hbo.png',
			link: 'https://hbomax.com/',
		},
		{
			id: '4',
			name: 'Telegram',
            icon: 'custom:assets/icons/telegram.png',
			link: 'https://web.telegram.org/k/',
		},
		{
			id: '6',
			name: 'Music',
			icon: 'notepad-text',
			link: 'https://music.apple.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Inspirational',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Classic',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Oldies',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Rock',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com',
				},
				{
					name: 'Dribbble',
					link: 'https://www.dribbble.com',
				},
				{
					name: 'Trello',
					link: 'https://www.trello.com',
				},
				{
					name: 'Slack',
					link: 'https://www.slack.com',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
