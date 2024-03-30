import "./Header.sass";

const Header = ({ add, setAdd }) => {
    return (
        <div className="header">
            <div className="header__container">
                <img
                    src="img/logo-small.png"
                    alt="logo"
                    className="header__logo"
                />
                <img
                    src={!add ? "svgs/circle-plus.svg" : "svgs/circle-x.svg"}
                    alt=""
                    style={{ cursor: "pointer" }}
                    onClick={() => setAdd(!add)}
                />
                <div></div>
            </div>
        </div>
    );
};

export default Header;
