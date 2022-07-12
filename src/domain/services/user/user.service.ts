import { UserRepository } from '../../../infrastructure/repositories/user.repository';
import { IUserService } from './user.implementation';
import { HttpRequest } from '../../../infrastructure/entry-points/api/interfaces';
import { ObjectId } from 'mongodb';
import { keyJwt } from '../../../application/config/environment';
import { UserSchema } from '../../../infrastructure/orm/mongo/schema/user.schema';
var cron = require('node-schedule');

export class UserService implements IUserService {
  constructor(private readonly userRepository: UserRepository) { }

  getUser = async (_httpRequest: HttpRequest) => {
    let getDataUser = await this.userRepository.findOne({ user: _httpRequest.body.user, pass: _httpRequest.body.pass });
    if (getDataUser != null) {this.cronJob(getDataUser);}
    return getDataUser
  };

  saveUser = async (_httpRequest: HttpRequest) => {
    console.log()
    const userRecord = await this.userRepository.create({ ..._httpRequest.body, credit: 0 });
    console.log(userRecord);
    return 'succes';
  };

  updateUser = async (_httpRequest: HttpRequest) => {
    let contenidoUser = _httpRequest.body
    const userRecord = await this.userRepository.update({ _id: new ObjectId(contenidoUser._id) }, contenidoUser.update);
    console.log(userRecord);
    return 'succes';
  };

  cronJob = async (dataUser: UserSchema) => {
    const idCron = JSON.stringify(dataUser._id)
    if(typeof cron.scheduledJobs[idCron] == 'undefined'){
      let cronjob = await cron.scheduleJob(idCron, '* * * * *', () => {
        const updateCreditser = this.userRepository.updateCredit({ _id: new ObjectId(dataUser._id) }, { credit: 1 });
      })
    }
  }
}
