'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  CreditIcon,
  HomeIcon,
  PaymentsIcon,
  SettingsIcon,
  CardIcon,
} from '@/components/Icons';

const navItems = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Cards', href: '/cards', icon: CardIcon },
  { name: 'Payments', href: '/payments', icon: PaymentsIcon },
  { name: 'Credit', href: '/credit', icon: CreditIcon },
  { name: 'Settings', href: '/settings', icon: SettingsIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[340px] border-r py-[48px] bg-[var(--aspire-color)] h-full">
      <div className="px-[48px]">
        <Image
          className="mb-[19px]"
          alt="Aspire logo"
          src="/Logo.svg"
          width={125}
          height={35}
        />
        <h3 className="text-white opacity-30 text-[15px] mb-[81px]">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </h3>
      </div>
      <ul className="space-y-2">
        {navItems.map(({ name, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <li
              key={name}
              className={`group  cursor-pointer transition-colors ${
                isActive ? 'bg-white' : 'hover:bg-white'
              }`}
            >
              <Link href={href}>
                <div className="flex items-center p-[30px] px-[48px]">
                  <Icon
                    className={`w-6 h-6 transition-colors duration-500 ${
                      isActive
                        ? 'text-[#01D167]'
                        : 'text-white group-hover:text-[#0C365A]'
                    }`}
                  />
                  <span
                    className={`ml-[16px] text-[16px] transition-colors duration-500 ${
                      isActive
                        ? 'text-[#01D167]'
                        : 'text-[var(--primary-text)] group-hover:text-[var(--aspire-color)]'
                    }`}
                  >
                    {name}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
