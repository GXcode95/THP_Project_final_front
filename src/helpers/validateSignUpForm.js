const validateSignUpForm = (data) => {
  let errorsMessages = []

  let emailRegex = (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  let password = data["password"]

  Object.keys(data).map( key => {
    switch (key) {
      case "email":
        if(!data[key] || data[key].length === 0){
          errorsMessages.push("Le champ Email du jeu est obligatoire")
        }else if (!data[key].match(emailRegex)){
          errorsMessages.push("L'email fournit n'est pas valide")
        }
        break
      case "password":
        if(!data[key] || data[key].length === 0){
          errorsMessages.push("Le champ Mot de passe est obligatoire")
        } else if (data[key].length < 6) {
          errorsMessages.push("Le champ Mot de passe doit contenir au moins 6 caractères")
        }
        break
      case "password_confirmation":
        if(!data[key] || data[key].length === 0){
          errorsMessages.push("Le champ Confirmation mot de passe est obligatoire")
        }else if ( data[key] !== password){
          errorsMessages.push("Le champ Mot de passe et Confirmation de mot de passe doivent être identiques")
        }
        break
      case "first_name":
        if(!data[key] || data[key].length === 0){
          errorsMessages.push("Le champ Prénom est obligatoire")
        }else if(data[key].length < 2 && data[key].length > 20){
          errorsMessages.push("Le champ Prénom doit contenir entre 2 et 20 caractères")
        }
        break
      case "last_name":
        if(!data[key] || data[key].length === 0){
          errorsMessages.push("Le champ Nom est obligatoire")
        }else if(data[key].length < 2 && data[key].length > 20){
          errorsMessages.push("Le champ Nom doit contenir entre 2 et 20 caractères")
        }
        break
      case "phone":
        if(!data[key]){
          errorsMessages.push("Le champ Téléphone est obligatoire")
        }else if (data[key].length < 7 || data[key].length > 20 || Number.isNaN(parseInt(data[key]))){
          errorsMessages.push("Le champ Téléphone doit être un nombre et contenir en 7 et 20 chiffres")
        }
        break
      case "address":
        if(!data[key] || data[key].length === 0){
          errorsMessages.push("Le champ Adresse est obligatoire")
        }
        break
      default:
        break
    }
  });
  return (errorsMessages.length > 0 && errorsMessages.join(". ")+ ".")
}

export default validateSignUpForm