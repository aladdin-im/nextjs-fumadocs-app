import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center px-4 py-20">
			{/* Hero Section */}
			<div className="max-w-4xl mx-auto text-center space-y-8">
				<h1 className="text-5xl md:text-6xl font-bold tracking-tight">
					Welcome to Your Next.js App
				</h1>
				<p className="text-xl text-fd-muted-foreground max-w-2xl mx-auto">
					A modern, fast, and scalable web application built with Next.js, Tailwind CSS, and Fumadocs.
				</p>

				{/* CTA Buttons */}
				<div className="flex gap-4 justify-center pt-4">
					<Link
						href="/blog"
						className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium rounded-lg bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/90 transition-colors"
					>
						Read Our Blog
						<ArrowRight className="w-4 h-4" />
					</Link>
					<Link
						href="/docs"
						className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium rounded-lg border border-fd-border bg-fd-background hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors"
					>
						View Documentation
					</Link>
				</div>
			</div>

			{/* Features Section */}
			<div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className="p-6 rounded-lg border border-fd-border bg-fd-card">
					<h3 className="text-xl font-semibold mb-3">⚡ Fast Performance</h3>
					<p className="text-fd-muted-foreground">
						Built with Next.js for optimal performance and user experience.
					</p>
				</div>
				<div className="p-6 rounded-lg border border-fd-border bg-fd-card">
					<h3 className="text-xl font-semibold mb-3">🎨 Modern Design</h3>
					<p className="text-fd-muted-foreground">
						Beautiful UI with Tailwind CSS and dark mode support.
					</p>
				</div>
				<div className="p-6 rounded-lg border border-fd-border bg-fd-card">
					<h3 className="text-xl font-semibold mb-3">📱 Fully Responsive</h3>
					<p className="text-fd-muted-foreground">
						Works seamlessly on all devices and screen sizes.
					</p>
				</div>
			</div>
		</div>
	);
}
