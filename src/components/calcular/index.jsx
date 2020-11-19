import {Button, Container, Grid, TextField, Typography} from '@material-ui/core'
import './calcular.css'

export default ()=>{
    return(
        <div className="calcular">
           <Container fixed>

                <Grid container justify="center" spacing="4">
                    <Grid item >
                        <Typography variant="h3" align="center">Calcular </Typography>
                        <Typography variant="h6"> Pesquise a empresa cadastrada e calcule o VPL</Typography>
                    </Grid>
                    
                     <Grid item container direction="column" justify="space-between" alignItems="center" >
                        <TextField label="Nome da empresa" className="textFild" variant="filled" required></TextField>
                    </Grid>    
    
                    <Grid justify="center" alignItems="center" container direction="column">
                        <Button justify="center" alignItems="center" variant="contained" color="primary"> Calcular </Button>     
                    </Grid> 
               
                </Grid>
                
           </Container>
        </div>
    )
}