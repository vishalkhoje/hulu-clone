import Image from "next/image";
import HeaderItems from "./HeaderItems";
import {
    HomeIcon,
    UserIcon,
    SearchIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon
} from "@heroicons/react/outline"

//hulu green logo : https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2020-08/Hulu_Logo-01_newgreen.png
// hulu white logo : https://links.papareact.com/ua6
function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItems title="HOME" Icon={HomeIcon} />
                <HeaderItems title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItems title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItems title="SEARCH" Icon={SearchIcon} />
                <HeaderItems title="ACCOUNT" Icon={UserIcon} />
            </div>
            <Image
                src="https://links.papareact.com/ua6"
                className="object-contain"
                width={200}
                height={100}
            />
        </header>
    )
}

export default Header
