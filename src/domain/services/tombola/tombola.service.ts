import { TombolaRepository } from '../../../infrastructure/repositories/tombola.repository';
import { ITombolaService } from './tombola.implementation';
import { HttpRequest } from '../../../infrastructure/entry-points/api/interfaces';
import { ObjectId } from 'mongodb';
import { UserRepository } from '../../../infrastructure/repositories/user.repository';

export class TombolaService implements ITombolaService {
  constructor(private readonly tombolaRepository: TombolaRepository, private readonly userRepository: UserRepository) {}

  getTombola = () => {
    return this.tombolaRepository.find();
  };

  saveTombola = async (_httpRequest:HttpRequest) => {
    console.log()
    const tombolaRecord = await this.tombolaRepository.create(_httpRequest.body);
    console.log(tombolaRecord);
    return 'succes';
  };

  updateTombola = async (_httpRequest:HttpRequest) => {
    let contenidoTombola = _httpRequest.body
    const tombolaRecord = await this.tombolaRepository.update({_id: new ObjectId(contenidoTombola._id)}, contenidoTombola.update);
    console.log(tombolaRecord);
    return 'succes';
  };

  deleteTombola = async (_httpRequest:HttpRequest) => {
    const tombolaRecord = await this.tombolaRepository.delete({_id: new ObjectId(_httpRequest.body._id)});
    console.log(tombolaRecord);
    return 'succes';
  };

  getResultTombola = async (_httpRequest:HttpRequest) => {
    const tombolaRecord:any = await this.tombolaRepository.findOne({_id: new ObjectId(_httpRequest.body.tombolaId)})
    const userRecord:any = await this.userRepository.findOne({_id: new ObjectId(_httpRequest.body.userId)})
    if(userRecord?.credit < tombolaRecord?.cost) return {code: 4, message: "Creditos Insuficientes"}
    return {message: await this.objectConvertToArray(tombolaRecord)}
  }

  objectConvertToArray = async (tambolaItems: any) =>{
    let tambolaItemsD = tambolaItems.awards.map((tambola:any) => { return [tambola.award, tambola.percentage];});
    return await this.ObtenerResultado(tambolaItemsD)
}

ObtenerResultado = async  (tambolaItems:any) => {
    const limiteDatos = await this.limiteDatos(tambolaItems)
    let valores = await this.rellenar(tambolaItems, limiteDatos)
    var n100 = await Math.floor(Math.random() * valores.length);
    return await valores[n100]
}

limiteDatos = async (tambolaItems:any) => {
    let porcentajeMenor:any = (""+tambolaItems[0][1]).split('.')
    porcentajeMenor = (typeof porcentajeMenor[1] != 'undefined') ? (""+porcentajeMenor[1]).length : 0
    for(let cont = 1; cont < tambolaItems.length; cont++){
        let cantidad:any = (""+tambolaItems[cont][1]).split('.')
        cantidad = (typeof cantidad[1] != 'undefined') ? (""+cantidad[1]).length : 0
        if(porcentajeMenor < cantidad) porcentajeMenor = cantidad
    }
    porcentajeMenor = await this.addCero(porcentajeMenor)
    return porcentajeMenor
}

rellenar = async (tambolaItems:any, limiteDatos:number) => {
    let resultadoArreglo:any = []
    for(let i = 0; i < tambolaItems.length; i++){
        for(let j = 0; j < (tambolaItems[i][1]*limiteDatos); j++){
          resultadoArreglo.push(tambolaItems[i][0])
        }
    }
    resultadoArreglo = resultadoArreglo.sort(() => {return Math.random() -0.5})
    return resultadoArreglo
}

addCero = async (porcentajeMenor:string) => {
    let min = '1'
    for(let i=0; i< +porcentajeMenor; i++) min+='0'
    return +min
}
}
