/**
 * Created by lelukas on 22/06/2016.
 */
import {Page, NavController,ViewController} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/cadastro/cadastro.html'
})

export class Cadastro {
    static get parameters(){
        return [[ViewController]]
    }

    constructor(private nav: NavController){

    }
}