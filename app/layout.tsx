import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://sudhanva.dev'),
	title: 'Sudhanva\'s Portfolio',
	description:
		'Welcome to my portfolio! I am a system software engineer passionate about building high-performance server tools, AI/ML solutions, and scalable web platforms. With experience in system architecture, Linux internals, and automation, I create impactful solutions for enterprise and social good.',
	keywords: [
		'System Software Engineer',
		'AI Engineer',
		'Data Scientist',
		'Full-Stack Developer',
		'React Developer',
		'Python',
		'Machine Learning',
		'Linux Kernel',
		'Docker',
		'CI/CD',
		'Server Performance',
		'Automation Frameworks',
		'Firmware Testing',
		'IEEE',
		'Selenium',
		'Sudhanva R',
	],
	authors: [{ name: 'Sudhanva R' }],
	creator: 'Sudhanva R',
	openGraph: {
		title: 'Sudhanva R - Portfolio',
		description: 'Passionate Software Engineer crafting modern and engaging digital experiences. Explore my projects and software expertise.',
		url: 'https://sudhanva.dev',
		siteName: 'Sudhanva R - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Sudhanva R - System Software Engineer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		icon: '/portfolio.png',
	}
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
