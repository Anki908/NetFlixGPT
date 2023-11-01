export const Validate = (email , password) => {

    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isValidEmail) return "Email is Not Valid";

    if(!isValidPassword) return "Password is Not Valid";

    return null;
}