import esilo from './LoginForm.module.css';

function LoginForm() {
    return (
        <section className={esilo['form-section']}>
            <form action="" className={esilo['form-login']}>
                <h3>LOGIN</h3>
                <label>
                    Email
                    <input type="email"
                        placeholder='Insira o seu e-mail'
                        className={esilo['input-email-login']} />
                </label>
                <label>
                    Senha
                    <input type="password"
                        placeholder='Insira o sua senha'
                        className={esilo['input-password-login']} />
                </label>

                <input
                    type="button"
                    value="Entrar" 
                    className={esilo['input-button-login']} />
            </form>
        </section>
    );
}

export default LoginForm;