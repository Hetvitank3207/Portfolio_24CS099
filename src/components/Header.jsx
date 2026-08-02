function Header({ name, color }) {
  return (
    <header style={{ backgroundColor: color, padding: "15px" }}>
      <h1>{name}</h1>
      <p>Student Portfolio</p>
    </header>
  );
}

export default Header;