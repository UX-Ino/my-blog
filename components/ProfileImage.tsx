'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export function ProfileImage() {
  const { theme } = useTheme();
  const src = theme === 'dark' ? '/images/profile-dark.png' : '/images/profile-light.png';

  return <Image src={src} alt="아이노" width={144} height={144} className="object-cover" />;
}
