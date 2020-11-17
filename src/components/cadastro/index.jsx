import {Button, Container, Grid, TextField, Typography} from '@material-ui/core'
import './cadastro.css'

export default ()=>{
    return(
        <div className="cadastrar">
           <Container fixed>

                <Grid container justify="center" alignItems="center" spacing="4">
                    <Grid item >
                        <Typography variant="h3">Cadastrar VPL</Typography>
                        <Typography> Cadastre os valores para conseguir calcular o VPL</Typography>
                    </Grid>
                    
                    <Grid item className="grid" container direction="column" justify="space-between" alignItems="center" >
                    <TextField label="Nome da empresa" className="textFild" variant="filled" required></TextField>
                        <TextField label="Fluxo de caixa liquido" className="textFild" variant="filled" required></TextField>
                        <TextField label="Taxa de desconto" className="textFild" variant="filled" required></TextField>
                        <TextField label="Tempo de fluxo de caixa" className="textFild" variant="filled" required></TextField>
                    </Grid>    
    
                    <Grid justify="center" alignItems="center">
                        <Button justify="center" alignItems="center" variant="contained" color="primary"> Cadastrar </Button>     
                    </Grid>
               
                </Grid>
                
           </Container>
        </div>
    )
}