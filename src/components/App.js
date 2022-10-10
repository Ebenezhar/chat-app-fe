import react from 'react';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationsProvider';
import { SocketProvider } from '../contexts/SocketProvider';
import useLocalStorage from "../hooks/useLocalStorage";
import DashBoard from "./DashBoard";
import Login from "./Login";


function App() {
  const [id, setId] = useLocalStorage('id', null)
  console.log(id);
  const dashBoard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <DashBoard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  return (
    id ? dashBoard : <Login onIdSubmit={setId} />
  );
}

export default App;
