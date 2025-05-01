import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

function ContactList() {
    const contacts = useSelector(state => state.contacts.items);
    const search = useSelector(state => state.filters.name);
    const filteredContacts = contacts?.filter(contact =>
        contact.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <ul className={s.list}>
            {filteredContacts?.map(contact => (
                <Contact
                    contact={contact}
                    key={contact.id}
                />
            ))}
        </ul>
    );
}

export default ContactList;