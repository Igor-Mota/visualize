
import { useState } from "react";
import { MouseEvent } from "react";



const linksInMenu = [
    {name:'Home', to:'#banner'},
    {name:'Segmento', to:'#about'},
    {name:'Soluções',to:'#solutions'},
    {name:'Code Sistemas',to:'#Acode'},
    {name:'Funcionalidades',to:'#functionalities'},
    {name:'Contato',to:'#contact'}
]

export const Mobile = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
    setOpen(!open);
    };

    const handleOpenMenu = (e:MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        toggleMenu()
    }

    return (
        <>
    <nav className="d-flex flex-column shadow align-items-end d-md-none">
        <a href="#" onClick={handleOpenMenu}>
            {!open && <i className="pi pi-bars" style={{ fontSize: "2rem" }}></i> }
            {open && <i className="pi pi-times" style={{ fontSize: "2rem" }}></i>}
        </a>
    </nav>

    <div 
        style={{background:'#fff'}}
        className={`${open ? 'open-menu' : 'close-menu'} mobile-menu position-absolute w-100 d-flex flex-column align-items-center justify-content-start`} >
        {linksInMenu.map(el => {
            return <a className={open ? 'opacity-1' : 'opacity-0'} key={el.name} href={el.to}>{el.name}</a>
        })}
    </div>
    </>
    );
};
