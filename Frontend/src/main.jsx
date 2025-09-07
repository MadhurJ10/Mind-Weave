import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { store } from './app/store.js'
import { Provider } from 'react-redux';
import ChatProvider from './context/ChatProvider.jsx';
import UserProvider from './context/UserProvider.jsx';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <UserProvider>
      <ChatProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChatProvider>

    </UserProvider>
  </Provider>
)
