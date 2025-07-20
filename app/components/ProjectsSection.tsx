'use client';

import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="work" className="relative py-12 sm:py-20 px-4 overflow-hidden">
			{/* ✅ Background Image Layer (grayscale + cover) */}
			<div
				className="absolute inset-0 z-0 bg-cover bg-center grayscale"
				style={{ backgroundImage: "url('/star_bg.jpg')" }}
			/>
			<div className="absolute inset-0 z-0 bg-black/20" />

			<div className="relative z-10 max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-white">Featured Projects</h2>

				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'Farmer’s Assistant',
							description: 'Data-driven agricultural assistant integrating machine learning and offline-first architecture',
							learnings: [
								'System design principles, ML lifecycle, and model deployment',
								'Built an end-to-end ML-integrated application from scratch',
								'Exposure to caching, distributed systems, and user-centric design',
							],
							techDetails: [
								'CNN for crop disease detection and health analysis',
								'Redis caching for offline data access in rural areas',
								'RESTful API backend with Python and Flask',
								'ReactJS frontend with dynamic insights',
							],
							image: '/farmer.jpg',
						},
						{
							title: 'Firmware Performance Predictor',
							description: 'System-level AI integration for firmware performance optimization',
							learnings: [
								'Real-world fusion of machine learning with system architecture',
								'Advanced Linux kernel internals:',
								'Practical exposure to high-performance compute systems powering AI innovation',
							],
							techDetails: [
								'XGBoost model for latency and bandwidth prediction',
								'Integrated Linux kernel-level insights',
								'Data pipeline for continuous firmware version benchmarking',
							],
							image: '/server.jpg',
						},
					].map((project) => (
						<div key={project.title} className="bg-[#21262D]/90 rounded-lg overflow-hidden">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-400">{project.description}</p>

									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white">Technical Implementation</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
											{project.techDetails.map((detail) => (
												<li key={detail} className="flex items-center gap-2">
													<span className="text-green-400">▹</span>
													<span className="text-gray-300">{detail}</span>
												</li>
											))}
										</ul>
									</div>

									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white">My Learnings</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
											{project.learnings.map((detail) => (
												<li key={detail} className="flex items-center gap-2">
													<span className="text-green-400">▹</span>
													<span className="text-gray-300">{detail}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								<div className="relative h-full min-h-[300px] lg:min-h-full">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 50vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
