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
        var endereco=
        {"bairro" : $scope.bairro, "rua": $scope.rua, "estado" : $scope.estado, "cidade" : $scope.cidade, "numero" : $scope.numero};

        var usuario =
        {"nome" : $scope.nome, idade : $scope.idade, "sexo": $scope.sexo, "login" : $scope.login, "senha" : $scope.pass, endereco : endereco};

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post('https://expotaxi.herokuapp.com/usuario/add',
            JSON.stringify(usuario),
            {headers:headers})
            .map((res: Response) => res.json())
            .subscribe((res:Person) => this.postResponse = res);

    }


    /*var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://expotaxi.herokuapp.com/usuario/add", true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(usuario));*/



}