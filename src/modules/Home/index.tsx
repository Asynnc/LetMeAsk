import { useHistory } from 'react-router-dom';
import googleICON from '../../assets/google-icon.svg';
import illustrationIMG from '../../assets/faq.svg';
import logoIMG from '../../assets/logo.svg';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth/useAuth';
import './style.scss';


export function Home() {

  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }
    history.push('/rooms/new')
  }

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
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleICON} alt="" />
            Crie sua sala com o Google
          </button>

          <div className="separator">Ou entre em uma sala</div>
          <form action="">
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  )
}