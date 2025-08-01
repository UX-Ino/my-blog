import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <Link href="" className="logo-link">
            <span className="header-text">Ino’s Code Playground</span>
          </Link>
        </div>
        <div>
          <span className="header-text">ino-code.vercel.app</span>
        </div>
        <div className="header-btn">
          <span className="header-text">Menu</span>
          <Button variant="outline" size="sm">
            <i></i>
          </Button>
        </div>
      </div>
      <div className="header-bottom">
        <span className="header-text">Ino: 배움을 즐기는 웹 퍼블리셔</span>
      </div>
    </header>
  );
}
