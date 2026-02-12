import { RootProvider } from 'fumadocs-ui/provider/next';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return (
        <RootProvider>
            <main>
                {children}
            </main>
        </RootProvider>
    );
}
