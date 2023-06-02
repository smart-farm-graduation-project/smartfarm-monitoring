import { useRouter } from "next/router";
const Header = () => {
    const route = useRouter();


    return(
        <div className="flex flex-row flex-grow">
            <div className="basis-1/4">dashboard</div>
            <div className="basis-1/4">cctv</div>
            <div className="basis-1/4"> control</div>
        </div>
    )
}

export default Header;