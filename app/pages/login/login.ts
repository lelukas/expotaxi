/**
 * Created by lelukas on 22/06/2016.
 */
import {Page, NavController} from 'ionic-angular';
import {Cadastro} from '../cadastro/cadastro';
import {HelloIonicPage as Hello} from '../hello-ionic/hello-ionic';

@Page({
    templateUrl: 'build/pages/login/login.html'
})

export class Login {
    nav: NavController;
    static get parameters(){
        return [[NavController]]
    }

    constructor(nav: NavController){
        this.nav = nav
    }

    cadastro(){
        // let modal = Modal.create(Cadastro);
        // this.nav.present(modal);
        this.nav.push(Cadastro)
    }

    login(){
        this.nav.setRoot(Hello);
    }
}