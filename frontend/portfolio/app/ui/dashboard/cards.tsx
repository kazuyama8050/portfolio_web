"use client";
import Link from 'next/link';
import { services } from "@/app/lib/constants";
  
  export async function CardWrapper() {
    return (
      <>
        {Object.entries(services).map(([key, service]) => (
          <Card
            key={key}
            title={service.name}
            value={service.value}
            ref={service.href}
            icon={service.icon}
          />
        ))}
      </>
    );
  }
  
  export function Card({
    title,
    value,
    ref,
    icon
  }: {
    title: string;
    value: number | string;
    ref:  string;
    icon: IconType
  }) {
    const LinkIcon = icon;
  
    return (
      <Link 
        href={ref}
      >
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm m-5">
          <div className="flex p-4">
            {LinkIcon ? <LinkIcon className="h-5 w-5 text-gray-700" /> : null}
            <h3 className="ml-2 text-sm font-medium">{title}</h3>
          </div>
          <p className={`truncate rounded-xl bg-white px-4 py-8 text-left`}>
            {value}
          </p>
        </div>
      </Link>
    );
  }
  