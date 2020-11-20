import {Container, Grid, Typography , Card, CardContent} from '@material-ui/core'
import './listagem.css'

import dados from "../../data"

export default ()=>{

    const creatCards = ()=> {

        return dados.map(item=>{
            return( 
                <Grid item xs={12} sm={4} key={item.id}>
                             <Card className="card">
                                <CardContent className="cardContent">
                                    <Typography variant="h4" className="title" gutterBottom>
                                        {item.nome}
                                    </Typography>
                                    
                                    <Typography component="h2" variant="h6">
                                    Fluxo de caixa: R$: {item.fluxoDeCaixa.toFixed(2)}
                                    </Typography>
                                    
                                    <Typography className="pos" variant="h6">
                                        Taixa de Desconto:  {item.taixaDeDesconto}% 
                                    </Typography>
                                    
                                    <Typography variant="h6" component="p">
                                       T Fluxo de caixa: {item.tempoFluxoDeCaixa}
                                    </Typography>
                                </CardContent>
                            </Card>                            
                        </Grid>
            )
        })
    }    

    return(
        <div>
            <Container fixed>
                <Grid container justify="center" alignItems="center" spacing={5}>
                       
                        {creatCards()}

                </Grid>
            </Container>
        </div>
    )
}