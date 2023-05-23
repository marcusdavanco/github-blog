import logo from "../../assets/logo.svg"
import { HeaderContainer } from './styles'

export function Header() {
	return (
		<HeaderContainer>
			<a href="/">
				<img src={logo} alt="logo" />
			</a>
		</HeaderContainer>
	)
}
