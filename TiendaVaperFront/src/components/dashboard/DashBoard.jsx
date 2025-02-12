

const Dashboard = () =>{
    return (
        <div id="dashboard-container">
      <header style={{ width: "100vw", height: "100%  " }}>
        <Navbar />
      </header>
      <div className="dashboard-container-main">
        <h2>Tienda para autos</h2>
        <h3>Lavame</h3>
        <Button variant="warning" onClick={buttonHandler}>
          Ingresar
        </Button>
      </div>
    </div>
    );
}

export default Dashboard;