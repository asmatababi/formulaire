import './App.css';
import asma from "./asma.avif";

function App() {
  return (
    <fragment>
       <div  styles={{ backgroundImage:`url(${asma.avif})` }}>
       </div>
      <div id="container">
        <form action="verification.php" method="POST">
          <h1>Connexion</h1>

          <label>
            <b>Nom d'utilisateur</b>
          </label>
          <input
            type="text"
            placeholder="Entrer le nom d'utilisateur"
            name="username"
            required
          />

          <label>
            <b>Mot de passe</b>
          </label>
          <input
            type="password"
            placeholder="Entrer le mot de passe"
            name="password"
            required
          />

          <input type="submit" id="submit" value="LOGIN" />
        </form>
      </div>
      
    </fragment>
  );
}
export default App;
