import { logOut } from "../../firebase";

export default function DashBoard() {
  return (
    <div>
      <h1>Welcome Home</h1>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}
