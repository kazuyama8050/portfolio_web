import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { services } from "@/app/lib/constants";
import clsx from 'clsx';

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {Object.values(services).map((service) => {
        const LinkIcon = service.icon;
        return (
          <Link
            key={service.name}
            href={service.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === service.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{service.name}</p>
          </Link>
        );
      })}
    </>
  );
}
