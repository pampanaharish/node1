import bcrypt from 'bcrypt';
import environment from '../config/environment';

class PasswordUtils {
    static async hashPassword(password){
        return bcrypt.hash(password,environment.saltRounds);
    }
    static async comparePassword(password, environment.hashPassword){
        return bcrypt.compare(password,hashPassword);
    }

}

export default PasswordUtils;