import logo from '../assets/imgs/logo.png'

export function Header() {
  return (
    <header>
      <img src={logo} alt='Logo' id='logo' />
       | Inicio
    </header>
  )
}