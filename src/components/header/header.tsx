import HeaderButton from './../headerButton/headerButton.tsx'
import './header.css'

function Header() {
  const goToGithub = () => {
    window.open("https://github.com/rainbowdesert57", "_blank");
  }

  const goToPortfolio = () => {
    window.open("https://rainbowdesert57.github.io", "_blank")
  }
  return (
    <div className="header">
      <div className="headerLeft">
        <h2 className="headerHeading">HyperCaption<span> - Snaps on the go!</span></h2>
      </div>

      <div className="headerRight">
        <HeaderButton label="GitHub" onClick={goToGithub} />
        <HeaderButton label="About Us" onClick={goToPortfolio} />
        <HeaderButton label="Begin" />
      </div>
    </div>
  )
}

export default Header
