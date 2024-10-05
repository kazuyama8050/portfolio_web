import {Description} from "@/app/ui/common/description"
import {Title} from "@/app/ui/common/service_title"
import RenderIconSections from "@/app/ui/common/icon_sections"
import { IconSection } from "@/app/types/componentTypes"
import { CiSearch } from "react-icons/ci";
import { IoIosDocument } from "react-icons/io";
import { PiCursorClick } from "react-icons/pi";

export default async function Page() {
  const description = [
    "CanSlimにもどづいた銘柄選定を行います。",
    "現時点の対象市場は日本市場および米国市場のみです。",
    "銘柄選定は定期的に毎月1日に更新されます。",
  ]

  const iconSections: IconSection[] = [
    {
      title: "ドキュメント",
      description: "CanSlimに基づいた銘柄選定のドキュメント",
      link: "/service/canslim/document",
      linkText: "詳細",
      icon: IoIosDocument
    },
    {
      title: "銘柄選定",
      description: "CanSlimに基づいた銘柄選定情報の取得",
      link: "/service/canslim/search",
      linkText: "検索",
      icon: CiSearch
    },
    {
      title: "銘柄選定バッチ実行",
      description: "CanSlimに基づいた銘柄選定バッチの実行",
      link: "/service/canslim/batch",
      linkText: "実行画面へ",
      icon: PiCursorClick
    }
  ]

  return (
    <main>
      <Title serviceName="canslim" />
      <Description texts={ description } />
      <RenderIconSections iconSections={iconSections} />
    </main>
  )
}