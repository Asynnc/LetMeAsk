import { useHistory } from 'react-router-dom'
import illustrationIMG from '../../assets/illustration.svg'
import logoIMG from '../../assets/logo.svg'
import googleICON from '../../assets/google-icon.svg'
import './style.scss'
import Button from '../../components/Button';

export function Home() {

  const history = useHistory();

  function navigateToNewRoom(){
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
          <button className="create-room" onClick={navigateToNewRoom}>
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