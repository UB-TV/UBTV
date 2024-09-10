import Menu from "@/Components/Dashboard/Menu"
import Button from "@/Components/Shared/Button"
import { ILayoutMenu } from "@/models/generalinterfaces"
import { getLayoutMenu, useGetUserRole } from "@/util/RoleData"

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({
    children
}: LayoutProps) => {

    const role = useGetUserRole();
    const menus = getLayoutMenu(role)

    return (
        <div className="flex items-start justify-between bg-white w-full min-h-screen p-6">
            <aside className="sticky top-6 left-0 flex flex-col items-start justify-between w-full max-w-[20%] h-[95vh] p-6 bg-white border border-solid border-grey-300 rounded-lg shadow-1">
                <div className="w-full">
                    <img src="/icon/logo.svg" alt="UBTV Logo" className="w-[60%] mb-12" />
                    <div className="flex flex-col gap-6">
                        {menus.map((menu: ILayoutMenu, index: number) => {
                            return (
                                <Menu key={index} {...menu} />
                            )
                        })}
                    </div>
                </div>
                <Button
                    type="button"
                    label="Keluar"
                    style="Outlined"
                    color="Error"
                    width="Full"
                    size="Medium"
                    icon="/icon/logout.svg"
                    iconPosition="Left"
                />
            </aside>
            <main className="flex flex-col items-start gap-6 w-full max-w-[78%] min-h-screen h-fit p-6 bg-white border border-solid border-grey-300 rounded-lg shadow-1">
                {children}
            </main>
        </div>
    )
}

export default Layout
