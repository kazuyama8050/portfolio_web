import { AiOutlineStock } from "react-icons/ai";
import { IoLogoYen } from "react-icons/io";
import { CiBank } from "react-icons/ci";
import { RiStockFill } from "react-icons/ri";

export const services = 
{
  "canslim": { 
    name: 'CanSlim',
    value: 'CanSlimに基づいた銘柄選定',
    href: '/service/canslim',
    icon: RiStockFill 
  },
  "mt5": { 
    name: 'MT5',
    value: 'FX自動トレードシステム',
    href: '/service/mt5',
    icon: AiOutlineStock 
  },
  "bank": { 
    name: '家計簿',
    value: '各銀行・証券口座の保有資産を一括管理',
    href: '/service/bank',
    icon: CiBank 
  },
};