import{BiMenuAltRight} from 'react-icons/bi'
import{AiOutlineClose} from 'react-icons/ai'
import classes from './Navbar.module.scss'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const history = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 874 && menuOpen) {
            setMenuOpen(true);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };
    
    const clickHandler = () =>{
        history.push("/")
    }

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <h2 className={classes.header__content__logo}>ロゴ</h2>            
            <nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ""}`}>
                <ul>    
                            <li>
                                <Link to="/">ホーム</Link>
                            </li>
                            <li>
                                <Link to="/products">商品</Link>
                            </li>
                            <li>
                                <Link to="/about">お買い物ガイド</Link>
                            </li>
                            <li>
                                <Link to="/contacts">会社情報</Link>
                            </li>
                </ul>
                <button>ログイン／登録</button>
            </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler}/>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Navbar;