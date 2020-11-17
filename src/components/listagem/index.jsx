import {Container, Grid, Typography , Card, CardContent} from '@material-ui/core'
import './listagem.css'

import dados from "../../data"

export default ()=>{

    const creatCards = ()=> {

        return dados.map(item=>{
            return( 
                <Grid item xs={12} sm={4} key={item.id}>
                             <Card className="card">
                                <CardContent>
                                    <Typography variant="h4" className="title" gutterBottom>
                                        {item.nome}
                                    </Typography>
                                    
                                    <Typography component="h2">
                                    Fluxo de caixa liquido: {item.fluxoDeCaixa}
                                    </Typography>
                                    
                                    <Typography className="pos">
                                        Taixa de Desconto: {item.taixaDeDesconto}
                                    </Typography>
                                    
                                    <Typography variant="body2" component="p">
                                       Tempo de fluxo de caixa: {item.tempoFluxoDeCaixa}
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