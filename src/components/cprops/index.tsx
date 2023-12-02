type Prop = {
    NomeUsuario?: String;
}

function Props(listaProps:Prop) {
    return(
        <div>
            {listaProps.NomeUsuario}
        </div>
    )
}

export default Props