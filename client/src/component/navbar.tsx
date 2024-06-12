import React, { useEffect,useState } from "react";
 
// depends on data 
// const isUser; 

function useTheme():UseThemeReturnType{
    const currentTheme = window.matchMedia("(prefers-color-scheme: light)");
    const [theme, settheme] = useState(currentTheme?'light':'dark');
    const toggle = () => {
        settheme(theme => theme === 'light'? 'dark': 'light');
    }
    // useEffect(()=>{
    //     // apply to the list!
    // });
    return {theme, toggle};
}

interface UseThemeReturnType {
    theme: string;
    toggle: () => void;
}

function Navbar(){
    let {theme, toggle} = useTheme();
    return( 
    <nav>
        <ol>
            <li>
                <button onClick={toggle}>
                    {theme === 'light'?<img src="../public/pixelPage_light.png" alt="logo" />: <img src="../public/pixelPage_dark.png" alt="logo" />  }
                </button>
            </li>
            {/* {isUser ? (
                <li>
                    <a href='../pages/dashboard'>
                        Dashboard
                    </a>
                </li>
                ) :(
                    <>
                    <li>
                        <a href="../pages/login">
                        Login
                        </a>
                    </li>
                    <li>
                        <a href="../pages/signup">
                        Sign Up
                        </a>
                    </li>
                    </>
                )} */}
            <li>
                <button onClick={toggle}>
                    {theme === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-regular fa-sun"></i>}
                </button>
            </li>
        </ol>
    </nav>
    )
}
export default Navbar;