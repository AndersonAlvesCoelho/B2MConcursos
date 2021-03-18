import { errorsMessage } from '../utils/errorsMessage';

// Validação do registro de usuário
export const validationRegister = (requestAccess) => {

    const { name, email, password } = requestAccess;

    const fieldEmptyu = () => {
        if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
            return errorsMessage['auth/invalid-empty-field']
        }
        return false;
    }

    const nameValidation = () => {
        if (name.trim() === '') {
            return errorsMessage['auth/invalid-empty-field-name'];
        }
        if (/[^a-zA-Z -]/.test(name)) {
            return errorsMessage['auth/invalid-name'];
        }
        if (name.trim().length < 3) {
            return errorsMessage['auth/invalid-min-name'];
        }
        if (name.trim().length > 20) {
            return errorsMessage['auth/invalid-max-name'];
        }
        return false;
    };

    const emailValidation = () => {
        if (password.trim() === '') {
            return errorsMessage['auth/invalid-empty-field-email'];
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            return errorsMessage['auth/invalid-email'];
        }
        if (email.trim().length < 3) {
            return errorsMessage['auth/invalid-min-email'];
        }
        if (email.trim().length > 50) {
            return errorsMessage['auth/invalid-max-email'];
        }

        return false;
    };

    const passwordValidation = () => {
        if (password.trim() === '') {
            return errorsMessage['auth/invalid-empty-field-passowrd']
        }
        if (password.length < 6) {
            return errorsMessage['auth/invalid-shot-password'];
        }
        return false;

    }

    const successValidation = () => {
        if (!fieldEmptyu() && !nameValidation() && !emailValidation() && !passwordValidation()) return true;
        return false;
    }


    return {
        success: successValidation(),
        erroAll: fieldEmptyu(),
        erroName: nameValidation(),
        erroEmail: emailValidation(),
        erroPassowrd: passwordValidation()
    };
}

// Validação do registro de usuário
export const validationLogin = (requestAccess) => {

    const { email, password } = requestAccess;

    const fieldEmptyu = () => {
        if (email.trim() === '' || password.trim() === '') {
            return errorsMessage['auth/invalid-empty-field']
        }
        return false;
    }

    const successValidation = () => {
        if (!fieldEmptyu()) return true;
        return false;
    }


    return {
        success: successValidation(),
        erroAll: fieldEmptyu(),
    };
}
