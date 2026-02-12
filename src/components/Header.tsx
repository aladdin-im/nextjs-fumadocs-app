import Link from 'next/link';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-fd-border bg-fd-background/95 backdrop-blur supports-backdrop-filter:bg-fd-background/60">
            <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl">
                {/* Logo / Brand */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold">Your Brand</span>
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-6">
                    <Link 
                        href="/blog" 
                        className="text-sm font-medium text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                    >
                        Blog
                    </Link>
                    {/* 在这里可以添加更多导航链接 */}
                </nav>
            </div>
        </header>
    );
}

export default Header;