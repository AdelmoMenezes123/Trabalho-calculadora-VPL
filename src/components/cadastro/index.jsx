import {Button, Container, Grid, TextField, Typography} from '@material-ui/core'
import { useState } from 'react'
import './cadastro.css'

import data from '../../data'
export default ()=>{

    const [empresa, setEmpresa] = useState()
    const [fluxo, setFluxo] = useState()
    const [taxa, setTaxa] = useState()
    const [tempo, setTempo] = useState()

    const [arr, setArr] = useState({})


    let cadastro = ()=>{
        console.log('cadastrado com sucesso')

    }

    return(
        <div className="cadastrar">
           <Container fixed>

                <Grid container justify="center" spacing="4">
                    <Grid item >
                        <Typography variant="h3">Cadastrar VPL</Typography>
                        <Typography variant="h6"> Cadastre os valores para conseguir calcular o VPL</Typography>
                    </Grid>
                    
                    <Grid item className="grid" container direction="column" justify="space-between" alignItems="center">
                        <TextField label="Nome da empresa" value={empresa} onChange={e => setEmpresa(e.target.value)} className="textFild" variant="filled" required></TextField>
                        <TextField label="Fluxo de caixa liquido" value={fluxo} onChange={e => setFluxo(e.target.value)} className="textFild" variant="filled" required></TextField>
                        <TextField label="Taxa de desconto" value={taxa} onChange={e => setTaxa(e.target.value)} className="textFild" variant="filled" required></TextField>
                        <TextField label="Tempo de fluxo de caixa" value={tempo} onChange={e => setTempo(e.target.value)} className="textFild" variant="filled" required></TextField>
                    </Grid>    
    
                    <Grid justify="center" alignItems="center">
                        <Button justify="center" alignItems="center" variant="contained" color="primary" onClick={()=>cadastro()}> Cadastrar </Button>     
                    </Grid>
               
                </Grid>
                
           </Container>
        </div>
    )
}