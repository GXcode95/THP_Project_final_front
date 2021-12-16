const validateSignUpForm = (data) => {
  let errorsMessages = []

  let emailRegex = (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

  Object.keys(data).map( key => {
    switch (key) {
      case "email":
        if(!data[key] || data[key].length === 0){
          errorsMessages.push("Le champ Nom du jeu est obligatoire")
        }else if (!data[key].match(emailRegex)){
          errorsMessages.push("L'email fournit n'est pas valide")
        }
        break
      case "password":
        if(!data[key] || data[key].length === 0){
          errorsMessages.push("Le champ Description est obligatoire")
        }
        break
      case "password_confirmation":
        if(!data[key] || data[key].length === 0){
          errorsMessages.push("Le champ Créateur est obligatoire")
        }
        break
      case "first_name":
        if(!data[key] || data[key].length === 0){
          errorsMessages.push("Le champ Max players est obligatoire")
        }else if(data[key].length < 2 && data[key].length > 20){
          errorsMessages.push("Le champ Prénom doit contenir entre 2 et 20 caractères")
        }
        break
      case "last_name":
        if(!data[key] || data[key].length === 0){
          errorsMessages.push("Le champ Min players est obligatoire")
        }else if(data[key].length < 2 && data[key].length > 20){
          errorsMessages.push("Le champ Nom doit contenir entre 2 et 20 caractères")
        }
        break
      case "phone":
        if(!data[key] || data[key].length < 7 || data[key].length > 20 || !Number.isNaN(parseInt(data[key]))){
          errorsMessages.push("Le champ Age est obligatoire")
        }else if (Number.isNaN(parseInt(data[key]))){
          errorsMessages.push("Le champ Age doit être un nombre et contenir en 7 et 20 chiffres")
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