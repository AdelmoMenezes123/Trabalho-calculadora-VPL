import React, {useState} from 'react'
import {Button, Container, Grid, TextField, Typography} from '@material-ui/core'
import './calcular.css'
import dados from '../../data'
import { AddRounded } from '@material-ui/icons'

export default ()=>{

    const [result, setResult] = useState();
    const [pesquisa, setPesquisa] = useState();
    const [empresa, setEmpresa] = useState();
    // const [] = useState();


    var VPL = (tempo, desconto, fluxo, investimento) => {
        let valor = 0;
        let f = 0;

        desconto = parseFloat(desconto) / 100

        for(let i= 1; i <= tempo; i++ ){
            f = fluxo / Math.pow( (1 + desconto) , i ) 
            valor = valor + f;
        }

        investimento = investimento / Math.pow( (1 + desconto), 0 )

        return (valor + (investimento)).toFixed(2) 
        
    }

    let calcular = () =>{
        
        dados.map((emp)=>{
            const d = emp.nome.toLowerCase();
            if(pesquisa != '' && pesquisa != ' ' && pesquisa != '  '){
                if( d === pesquisa.toLowerCase()){
                    setEmpresa(emp.nome)
                    let x = VPL( emp.tempoFluxoDeCaixa,emp.taixaDeDesconto, emp.fluxoDeCaixa, emp.investimento)
                    setResult(x)
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