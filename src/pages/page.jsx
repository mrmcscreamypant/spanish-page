function Section({children,name}){
    return (
        <div className="area">
            <h2>{name}</h2>
            <p>{children}</p>
        </div>
    )
}

function Page(){
    return (
        <>
            <Section name="Mi Barrio">Se llama Chestnut Hill<br/>Esta en Brookline</Section>
            <Section name="Es...">Tranquilo y Grande</Section>
            <Section name="No Es...">Turistico o Ruidoso</Section>
            <Section name="Hay En Mi Barrio">Hay el tren, el supermercado, y mi escuela</Section>
            <Section name="No Hay...">un aeropuerto, un volcán, o un isla</Section>
            <Section name="Yo va a">En la ano de escuela yo voy a mi escuela</Section>
            <Section name="Me gusta">Es Tranquilo</Section>
            <Section name="No me gusta">Es Grande</Section>
        </>
    )
}


export default Page;