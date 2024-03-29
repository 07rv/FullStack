import AxiosServices from "./AxiosServices";
import Configuration from '../configurations/Configuation';

const axiosServices = new AxiosServices();


export default class AuthServices{
    SignUp(data){
        return axiosServices.post(Configuration.SignUp, data, false)
    }
    SignIn(data){
        return axiosServices.post(Configuration.SignIn, data, false)
    }
    GetDoctor(){
        return axiosServices.get(Configuration.Doctors, false)
    }
    UpdateUser(data){
        return axiosServices.post(Configuration.Update, data, false)
    }
}
