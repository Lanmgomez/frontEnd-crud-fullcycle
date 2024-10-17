import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer-upside">
        <div className="footer-div">
          <h4>Mapa do Site</h4>
          <a href="#">Quem somos</a>
          <a href="#">Investidores</a>
          <a href="#">Notícias</a>
          <a href="#">Promoções</a>
          <a href="#">FAQ Loja</a>
        </div>

        <div className="footer-div">
          <h4>Lojas Associadas</h4>
          <a href="#">Lorem Ipsum</a>
          <a href="#">Lorem Ipsum</a>
          <a href="#">Lorem Ipsum</a>
          <a href="#">Lorem Ipsum</a>
        </div>

        <div className="footer-div">
          <h4>Precisa de Suporte?</h4>
          <a href="#">
            <i className="bi bi-chat-dots" />
            Chat Online
          </a>
          <a href="#">
            <i className="bi bi-envelope-at" />
            Email
          </a>
          <a href="#">
            <i className="bi bi-telephone-forward" />
            Fale Conosco
          </a>
        </div>

        <div className="footer-div">
          <h4>Siga-nos</h4>
          <a href="#">
            <i className="bi bi-facebook" />
            Facebook
          </a>
          <a href="#">
            <i className="bi bi-youtube" />
            You Tube
          </a>
          <a href="#">
            <i className="bi bi-instagram" />
            Instagram
          </a>
          <a href="#">
            <i className="bi bi-linkedin" />
            Linkedin
          </a>
        </div>
      </footer>

      <footer className="footer-mainside">
        <p>Plataforma de estudos, Copyright © 2024, Versão 1.0</p>
      </footer>

      <footer className="footer-downside">
        <div className="footer-div-downside">
          <div>ACESSIBILIDADE</div>
          <div>TERMOS & CONDIÇÕES LOJA ONLINE</div>
          <div>PRIVACIDADE</div>
          <div>LEGAL</div>
        </div>

        <div className="footer-div-downside-lorem">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            molestiae facilis porro nam quaerat cum minima esse assumenda
            distinctio tempore repudiandae mollitia, modi iste maxime blanditiis
            vel commodi aliquid sint?
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
