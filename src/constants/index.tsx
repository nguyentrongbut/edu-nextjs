import { IconExplore, IconPlay } from "@/components/icons"
import { TMenuItem } from "@/types"


export const menuItems:TMenuItem[] = [
        {
            url: "/",
            title: "Khu vuc hoc tap",
            icon: <IconPlay className="size-5"/>,
        },
        {
            url: "/explore",
            title: "Kham pha",
            icon: <IconExplore className="size-5"/>,
        }
    ]