import React from 'react';

export const SkillsSection = () => {
	return (
		<section className="relative py-12 sm:py-20 px-4 bg-[#000000] overflow-hidden">
			{/* ✅ Background Image Layer (grayscale + cover) */}
			<div
				className="absolute inset-0 z-0 bg-cover bg-center grayscale"
				style={{ backgroundImage: "url('/star_bg.jpg')" }}
			/>

			{/* ✅ Optional dark overlay for readability */}
			<div className="absolute inset-0 z-0 bg-black/40" />
			
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center text-white drop-shadow-md">Technical Expertise</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
					{[
						{
							category: 'Data Science',
							skills: [
								{ name: 'Neural Networks', level: 95 },
								{ name: 'Supervised Learning', level: 90 },
								{ name: 'Python', level: 95 },
								{ name: 'Visualization', level: 85 },
							],
							icon: '🗿',
							color: 'from-blue-500 to-blue-700',
						},
						{
							category: 'System Architecture',
							skills: [
								{ name: 'Linux Kernel', level: 90 },
								{ name: 'Distributed Systems', level: 95 },
								{ name: 'SQL', level: 85 },
								{ name: 'Shell', level: 88 },
							],
							icon: '⚡',
							color: 'from-green-500 to-green-700',
						},
						{
							category: 'Automation & DevOps',
							skills: [
								{ name: 'Web Automation', level: 92 },
								{ name: 'CI/CD', level: 88 },
								{ name: 'Docker', level: 85 },
								{ name: 'Selenium', level: 82 },
							],
							icon: '🚀',
							color: 'from-purple-500 to-purple-700',
						},
					].map((category) => (
						<div key={category.category} className="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all">
							<div className="flex items-center gap-3 mb-6">
								<span className="text-3xl">{category.icon}</span>
								<h3 className="text-xl font-bold">{category.category}</h3>
							</div>
							<div className="space-y-4">
								{category.skills.map((skill) => (
									<div key={skill.name}>
										<div className="flex justify-between text-sm mb-1">
											<span>{skill.name}</span>
											<span className="text-gray-400">{skill.level}%</span>
										</div>
										<div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
											<div className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`} style={{ width: `${skill.level}%` }}></div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
