const Contacts = () => {
    return ( 
        <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Le Havre, France</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Mobile/ WhatsApp</h2>
                        <p><a href="tel:+33783677216">(+33)7.83.67.72.16</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:gras.job76@gmail.com">gras.job76@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
     );
}
 
export default Contacts;
