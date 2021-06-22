import illustrationIMG from '../../assets/illustration.svg'
import logoIMG from '../../assets/logo.svg'
import './style.scss'

import Button from '../../components/Button';

export function NewRoom() {
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
          <p>Quer entrar em uma sala existente? <a href="##">Clique aqui</a> </p>
        </div>
      </main>
    </div>
  )
}