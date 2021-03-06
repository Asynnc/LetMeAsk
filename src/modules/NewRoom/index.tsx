import { Link } from 'react-router-dom';
import illustrationIMG from '../../assets/faq.svg';
import logoIMG from '../../assets/logo.svg';
import Button from '../../components/Button';
// import { useAuth } from '../../hooks/auth/useAuth';
import './style.scss';


export function NewRoom() {

  // const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationIMG} alt="" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoIMG} alt="imagem de um balão de diálogo do letmeask" />
          <h2>Criar uma nova sala</h2>
          <form action="">
            <input
              type="text"
              placeholder="Nome da salva"
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link> </p>
        </div>
      </main>
    </div>
  )
}