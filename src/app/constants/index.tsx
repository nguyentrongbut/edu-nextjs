import IconExplore from "@/components/icons/IconExplore"
import IconPlay from "@/components/icons/IconPlay"

export const menuItems: {
    url: string,
    title: string,
    icon: React.ReactNode
}[] = [
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