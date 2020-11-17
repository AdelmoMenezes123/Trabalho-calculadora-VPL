import {Container, Grid, Typography} from '@material-ui/core'
import './header.css'

export default () =>{
    return(
      <div className="header">
      <Container fixed>
           <Grid container justify="center" alignItems="center" spacing={5}>
                <Grid item xs={12} sm={6} >
                    <Typography variant="h3" className="header__title">Calculadora VPL </Typography>
                    <Typography variant="h5" className="header__title">Trabalho N2 - Gest. Financeira - Calculadora VPL </Typography>
                    <Typography >O que é VPL?  Valor Presente Líquido (VPL) é calculado para sabermos qual o valor atual de um investimento, bem como a sua rentabilidade.</Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <img src="/VPL.jpeg" alt='Foto da Formula vpl'/>
                </Grid>
           </Grid>
      </Container>
      </div>
    )
  }