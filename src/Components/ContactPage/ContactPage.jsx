import React from 'react';
import cls from './ContactPage.module.css';

const ContactPage =(props) => {

    return(
        <div>
            <ul className={cls.contacts}>
                <li><b>Телефон:</b> +375(xx)xxx-xx-xx </li>
                <li><b>Почта:</b> +375(xx)xxx-xx-xx </li>
                <li><b>Адрес:</b> г Минск,Хмельницкого,9 </li>
            </ul>
        </div>
    )
}

export default ContactPage;