import "./HeaderLogo.css";
import logoMb from "../../../assets/Icons/logo mb_image.svg";

export default function HeaderLogo() {
    return (
        <>
            <a className="header__logo-link text-white" href="">
                <img 
                    className="header__logo-image w-17.75px h-48px md:w-24.75 md:h-18.5 xl:w-30.75 xl:h-23" 
                    src={logoMb} 
                    alt="logo" 
                />
            </a>
        </>
    );
}