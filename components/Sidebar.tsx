
import Link from 'next/link';
import Image from 'next/image';
import { headers } from 'next/headers';

const navItems = [
  { name: 'Home', href: '/', icon: <Image src="/Home.svg" alt="home-logo" height={24} width={24} className="mr-2" /> },
  { name: 'Cards', href: '/cards', icon: <Image src="/Card.svg" alt="card-logo" height={24} width={24} className="mr-2" /> },
  { name: 'Payments', href: '/payments', icon: <Image src="/Payments.svg" alt="payment-logo" height={24} width={24}  className="mr-2" /> },
  { name: 'Credit', href: '/credit', icon: <Image src="/Credit.svg" alt="credit-logo" height={24} width={24}  className="mr-2" /> },
  { name: 'Settings', href: '/settings', icon: <Image src="/Setting.svg" alt="setting-logo" height={24} width={24}  className="mr-2" /> },
];

export default async function Sidebar({ }) {
  const headersList = await headers();
  const url = headersList.get('x-invoke-path') || headersList.get('referer') || '';
  const pathname = url ? new URL(url, 'http://localhost').pathname : '/';
  console.log("--->>>pathname", pathname, url);
  return (
    <aside className="w-[340px] border-r py-[48px] bg-[var(--aspire-color)]">
      <div className='px-[48px]'>
        <Image className="mb-[19px]" alt="Aspire logo" src="Logo.svg" width={125} height={35}/>
        <h3 className='text-white opacity-30 text-[15px] mb-[81px]'>
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </h3>
      </div>
      <ul className="space-y-2">
        {navItems.map(({ name, href, icon }) => {
          const isActive = true;
          return (
            <li key={name} className='p-[30px] px-[48px] text-[var(--aspire-color)] cursor-pointer hover:bg-white transition-colors '>
              <Link href={href}>
                <div className='flex items-center '>
                  <span className='mr-[16px]'>{icon}</span>
                  <span className='text-[var(--primary-text)] text-[16px] hover:text-[var(--aspire-color)]'>{name}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
