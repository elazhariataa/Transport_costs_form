import React, { Component } from 'react'

class Calcul extends Component{
    constructor(props){
        super(props);
        this.state = {
            capital:0,
            taux : 0,
            duree : 0,
            mensualite : 0,
            distance : 0,
            poids : 0,
            modet : "normal",
            cout : 0
        };
        this.handelSubmit = this.handelSubmit.bind(this);
        this.handelOnChange = this.handelOnChange.bind(this);
        this.calculer = this.calculer.bind(this);
        this.calcout = this.calcout.bind(this);
    }
    handelSubmit(e){
        e.preventDefault();
    }
    handelOnChange(e){
        const name = e.target.name;
        const value = e.target.value;
        const type = e.target.type;

        this.setState({[name] : type==='checkbox'? e.target.checked : value})
    }
    calculer(){
        let result = (this.state.capital * (this.state.taux/100/12))/(1-(Math.pow((1+(this.state.taux/100/12)),-this.state.duree)));
        this.setState({mensualite : result});
    }
    calcout(){
        let result1 = 0
        if(this.state.poids < 10){
            result1  = this.state.distance * 0.5
        }else{
            result1 = this.state.distance * (this.state.poids/10)*0.3
        }

        if(this.state.modet==='express'){
            
            this.setState({cout : result1 + result1*0.2});
        }else{
            this.setState({cout : result1});
        }
        
        

    }
    

    render(){
        return <div className='content'>
            <div className='form1'>
                <form onSubmit={this.handelSubmit}>
                    <fieldset>
                        <legend>calculer la mensualité </legend>
                    <table>
                    <tr>
                        <td><label>Capitale emprunte </label></td>
                        <td><input type="number" name='capital' value={this.state.capital} onChange={this.handelOnChange}/> DH</td>
                    </tr>
                    <tr>
                        <td><label>Taux d'interet annuel </label></td>
                        <td><input type="number" name='taux' value={this.state.taux} onChange={this.handelOnChange}/> %</td>
                    </tr>
                    <tr>
                        <td><label>Duree de rembourssement </label></td>
                        <td><input type="number" name='duree' value={this.state.duree} onChange={this.handelOnChange} /> mois</td>
                    </tr>
                    <tr><td colSpan={2} className="btn"><button onClick={this.calculer}>Calculler</button></td></tr>
                    <tr>
                        <td><label>La mensualite </label></td>
                        <td><input type="number" name='mensualite' value={this.state.mensualite} onChange={this.handelOnChange} /> DH</td>
                    </tr>
                    </table>
                    </fieldset>
                </form>
            </div>
            <div className='form2'>
                <form onSubmit={this.handelSubmit}>
                    <fieldset>
                        <legend>calculer les frais de transport des colis</legend>
                    <tr>
                        <td><label>Distance </label></td>
                        <td><input type="number" name='distance' value={this.state.distance} onChange={this.handelOnChange}/> KM</td>
                    </tr>
                    <tr>
                        <td><label>Pois </label></td>
                        <td><input type="number" name='poids' value={this.state.poids} onChange={this.handelOnChange}/> KG</td>
                    </tr>
                    <tr>
                        <td><label>Mode de transport</label></td>
                        <td>
                            <input type="radio" name='modet' value="express" checked={this.state.modet==='express'} onChange={this.handelOnChange} />Express
                            <input type="radio" name='modet' value="normal" checked={this.state.modet==='normal'} onChange={this.handelOnChange} />Normal
                        </td>
                    </tr>
                    <tr><td colSpan={2} className="btn"><button onClick={this.calcout}>Calculler</button></td></tr>
                    <tr>
                        <td><label>Cout total </label></td>
                        <td><input type="number" name='cout' value={this.state.cout} onChange={this.handelOnChange} /> DH</td>
                    </tr>
                    </fieldset>
                </form>
            </div>

        </div>
    }
}

export default Calcul;