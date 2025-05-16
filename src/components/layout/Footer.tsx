import Link from 'next/link';
import { SOCIAL_LINKS, APP_NAME } from '@/lib/constants';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border/40">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
        <Separator className="my-6" />
        <p className="text-center text-xs text-muted-foreground">
          Crafted with <span role="img" aria-label="heart">❤️</span> by Muhammad Shaheer.
        </p>
      </div>
    </footer>
  );
}
