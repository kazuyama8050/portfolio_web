import { IconType } from 'react-icons';

export interface IconSection {
    title: string;
    description: string;
    link: string;
    linkText: string;
    icon: IconType;
}

export interface IconSectionProps {
    iconSections: IconSection[];
}