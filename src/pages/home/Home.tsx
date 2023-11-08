function Home() {
    return (
        <>
            <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center"
            }}>
                <div>
                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <h2>MercaDela!</h2>
                        <p>Site em construção!</p>
                    </div>

                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <img 
                            src="src\assets\MercaDela_Logo.jpg" 
                            alt="Imagem da Página Home" 
                            width="400px"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home