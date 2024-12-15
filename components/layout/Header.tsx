import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookOpen, LogIn } from "lucide-react";

const menuItems = [
  { title: "Features", href: "#features" },
  { title: "Pricing", href: "#pricing" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex gap-2 items-center">
            <BookOpen className="h-6 w-6" />
            <Link href="/" className="text-xl font-bold">
              Weekly.Meal Planner
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="gap-2">
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 