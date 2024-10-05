import Link from "next/link"
import { FC } from 'react';
import { IconSection, IconSectionProps } from "@/app/types/componentTypes"

const RenderIconSections: FC<IconSectionProps> = ({ iconSections }) => {
  console.log(iconSections[0])
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
        {iconSections.map((iconSection) => (
          <RenderIconSection iconSection={iconSection} />
        ))}
      </div>
    </div>
  )
}


function RenderIconSection(iconSection: IconSection) {
  console.log(iconSection)
  const Icon = iconSection.iconSection.icon
  return (
    <div className="">
      <Link 
        className="group flex flex-col justify-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        href={iconSection.iconSection.link}
      >
      <Icon size={30} />
      
        <div className="mt-5">
          <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">{iconSection.iconSection.title}</h3>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">{iconSection.iconSection.description}</p>
          <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
            {iconSection.iconSection.linkText}
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </span>
        </div>
      </Link>
    </div>
  )
}

export default RenderIconSections;