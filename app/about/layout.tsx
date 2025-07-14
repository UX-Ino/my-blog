import Link from 'next/link';
import type { ReactNode } from 'react';

const sidebarMenus = [
  { label: '기술스택', href: '/about/skills' },
  { label: '프로젝트', href: '/about/projects' },
  { label: '연락처', href: '/about/contact' },
];

/**
 * /about 레이아웃: 좌측 사이드바(메뉴) + 우측 메인 콘텐츠
 */
export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* 사이드바 */}
        <aside className="mb-6 w-full shrink-0 md:mb-0 md:w-60">
          <nav>
            <ul className="space-y-2">
              {sidebarMenus.map((menu) => (
                <li key={menu.href}>
                  <Link
                    href={menu.href}
                    className="block rounded px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-sky-100 dark:text-gray-200 dark:hover:bg-sky-900"
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        {/* 메인 콘텐츠 */}
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
