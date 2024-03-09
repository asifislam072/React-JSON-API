import { useEffect, useState } from "react";

export default function Users() {
  const [user, setusers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setusers(data));
  }, []);
  return (
    <div>
      <h3>Users {user.length}</h3>
    </div>
  );
}
