import { Input, Button } from "../../components";

import "./SignPage.sass";

const SignPage = ({ setIsSigned }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const target = e.target;

        if (
            target.login.value === "ecoproduct" &&
            target.password.value === "Ecoproduct123"
        ) {
            setIsSigned(true);
        }
    };

    return (
        <div className="sign-page">
            <div className="sign-page__main">
                <div className="sign-page__logo">
                    <img src="img/logo-big.png" alt="logo-big" />
                </div>

                <form className="sign-page__form" onSubmit={handleSubmit}>
                    <Input
                        placeholder="Логин"
                        type="text"
                        styleType="sign"
                        name="login"
                        style={{ marginBottom: "30px" }}
                    />
                    <Input
                        placeholder="Пароль"
                        type="password"
                        styleType="sign"
                        name="password"
                        style={{ marginBottom: "30px" }}
                    />

                    <Button text="Войти" styleType="sign" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default SignPage;
