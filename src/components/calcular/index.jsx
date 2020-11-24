import React, {useState} from 'react'
import {Button, Container, Grid, TextField, Typography} from '@material-ui/core'
import './calcular.css'
import dados from '../../data'

export default ()=>{

    const [result, setResult] = useState();
    const [pesquisa, setPesquisa] = useState();
    const [empresa, setEmpresa] = useState();
    // const [] = useState();


    let VPL = (rate, nper, pmt) => {
        rate = parseFloat(rate)/ 100.0;
        return pmt / rate * (1 - Math.pow(1 + rate, -nper));
    }

    let calcular = () =>{
        
        dados.map((emp)=>{
            const d = emp.nome.toLowerCase();
            
            if(pesquisa != '' && pesquisa != ' ' && pesquisa != '  '){
                if( d === pesquisa.toLowerCase()){
                    setEmpresa(emp.nome)
                    setResult(VPL( emp.tempoFluxoDeCaixa, emp.taixaDeDesconto, emp.fluxoDeCaixa))            
                }
            }
        })

    }

    

    return(
        <div className="calcular">
            <Container fixed>

                <Grid container justify="center" spacing="4">
                    <Grid item >
                        <Typography variant="h3" align="center">Calcular </Typography>
                        <Typography variant="h6"> Pesquise a empresa cadastrada e calcule o VPL</Typography>
                    </Grid>
                    
                        <Grid item container direction="column" justify="space-between" alignItems="center" >
                        <TextField label="Nome da empresa"  value={pesquisa} onChange={e => setPesquisa(e.target.value)} className="textFild" variant="filled" required></TextField>
                    </Grid>    

                    <Grid justify="center" alignItems="center" container direction="column">
                        <Button justify="center" alignItems="center" onClick={()=>calcular()} variant="contained" color="primary"> Calcular </Button>     
                    </Grid> 
                
                </Grid>
                   
                    <Grid className="cardCalculo">
                        { result &&
                            <div className="card1">
                                <div className="title">{empresa}</div>
                                <div className="cardContent1">{result} </div>
                            </div>
                        }
                    </Grid>

            </Container>
        </div>
    )
}