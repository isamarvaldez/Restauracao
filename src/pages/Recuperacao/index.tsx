import './style.css'
import LogoMobile from "../../assets/img/logo_mobile.png"
import LogoEscuro from "../../assets/img/logo_escuro.png"
import Zoio from "../../assets/img/zoio.png"
import Rodape from "../../assets/img/rodape_desenv.png"
import FundoDestok from "../../assets/img/fundo_destok.png"






function Recuperacao() {
  return (
    <main>
      <section className="paginatotal">
        <div className="quadrado_branco">
          {/* <div class="alinhamento_login"> */}
          <img
            className="Logo_Integradash"
            src={LogoEscuro}
            alt="Logo da Instegradash Fundo Claro"
          />
          <img
            className="Logo_Claro"
            src={LogoMobile}
            alt="Logo da Instegradash Fundo Escuro"
          />
          <div className="teste1">
            <h1>Recuperacao de conta</h1>
            <form className="alinhamento_input" action="login">
              <label className="negrito" htmlFor="email">
                Insira o seu email
              </label>
              <div className="zoinho">
                <input
                  className="senha"
                  id="senha"
                  type="password"
                  name="Senha"
                  placeholder="nome@gmail.com"
                />
                <img
                  className="zoio"
                  src={Zoio}
                  alt="mostrar - ocultar password"
                />
              </div>
              <button className="botao_entrar">Enviar</button>
            </form>
          </div>
          <div>
            <img
              className="desenvolvido_por"
              src={Rodape}
              alt="Desenvolvido por Integradash"
            />
          </div>
        </div>
        <section className="pagina_metade1">
          <div>
            <img
              className="rapaz_dashboard"
              src={FundoDestok}
              alt="Rapaz em frente a um Dashboard apontando pra ele"
            />
          </div>
        </section>
      </section>
      <section className="responsivo">
        <div className="quadrado_branco_responsivo">
          {/* <div class="alinhamento_login"> */}
          <img
            className="Logo_Integradash"
            src={LogoEscuro}
            alt="Logo da Instegradash Fundo Claro"
          />
          <img
            className="Logo_Claro"
            src={LogoMobile}
            alt="Logo da Instegradash Fundo Escuro"
          />
          <div className="teste1">
            <h1>Recuperacao de conta</h1>
            <form className="alinhamento_input" action="login">
              <label className="negrito" htmlFor="email">
                Insira o seu email
              </label>
              <div className="zoinho">
                <input
                  className="senha"
                  id="senha"
                  type="password"
                  name="Senha"
                  placeholder="nome@gmail.com"
                />
                <img
                  className="zoio"
                  src={Zoio}
                  alt="mostrar - ocultar password"
                />
              </div>
              <button className="botao_entrar">Enviar</button>
            </form>
          </div>
          <div>
            <img
              className="desenvolvido_por"
              src={Rodape}
              alt="Desenvolvido por Integradash"
            />
          </div>
        </div>
        <section className="pagina_metade1">
          <div>
            <img
              className="rapaz_dashboard"
              src={FundoDestok}
              alt="Rapaz em frente a um Dashboard apontando pra ele"
            />
          </div>
        </section>
      </section>
    </main>





  )

}
export default Recuperacao