import './header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img className="headerImg" src="../../public/assets/domenico-loia-hGV2TfOh0ns-unsplash.jpg" alt="" />
        </div>
    )
}
