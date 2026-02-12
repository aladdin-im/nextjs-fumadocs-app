import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-fd-border bg-fd-background">
            <div className="container mx-auto max-w-7xl px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold mb-4">Your Brand</h3>
                        <p className="text-sm text-fd-muted-foreground max-w-md">
                            Building amazing products for the modern web.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Resources</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link 
                                    href="/blog" 
                                    className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link 
                                    href="/privacy" 
                                    className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/terms" 
                                    className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-fd-border">
                    <p className="text-sm text-fd-muted-foreground text-center">
                        © {currentYear} Your Brand. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;