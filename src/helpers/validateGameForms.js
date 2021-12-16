const validateGameForms = (data) => {
  let errorsMessages = []
  Object.keys(data).map( key => {
    // console.log("ParseInt", parseInt(data[key]))
    // console.log("Type of", typeof parseInt(data[key]))
    console.log("isNan", data[key], Number.isNaN(data[key]))
  })

  Object.keys(data).map( key => {
    switch (key) {
      case "name":
        if(!data[key] && data[key].length === 0){
          errorsMessages.push("Le champ Nom du jeu est obligatoire")
        }
        break
      case "description":
        if(!data[key] && data[key].length === 0){
          errorsMessages.push("Le champ Description est obligatoire")
        }
        break
      case "creator":
        if(!data[key] && data[key].length === 0){
          errorsMessages.push("Le champ Créateur est obligatoire")
        }
        break
      case "max_player":
        if(!data[key] && data[key].length === 0){
          errorsMessages.push("Le champ Max players est obligatoire")
        }else if (Number.isNaN(parseInt(data[key]))){
          errorsMessages.push("Le champ Max players doit être un nombre")
        }
        break
      case "min_player":
        if(!data[key] && data[key].length === 0 && !Number.isNaN(parseInt(data[key]))){
          errorsMessages.push("Le champ Min players est obligatoire")
        }else if (Number.isNaN(parseInt(data[key]))){
          errorsMessages.push("Le champ Min players doit être un nombre")
        }
        break
      case "min_age":
        if(!data[key] && data[key].length === 0 && !Number.isNaN(parseInt(data[key]))){
          errorsMessages.push("Le champ Age est obligatoire")
        }else if (Number.isNaN(parseInt(data[key]))){
          errorsMessages.push("Le champ Age doit être un nombre")
        } else {}
        break
      case "price":
        if(!data[key] && data[key].length === 0 && !Number.isNaN(parseInt(data[key]))){
          errorsMessages.push("Le champ  Prix est obligatoire")
        }else if (Number.isNaN(parseInt(data[key]))){
          errorsMessages.push("Le champ Prix doit être un nombre")
        }
        break
      case "sell_stock":
        if(!data[key] && data[key].length === 0 && !Number.isNaN(parseInt(data[key]))){
          errorsMessages.push("Le champ  Sell stock est obligatoire")
        }else if (Number.isNaN(parseInt(data[key]))){
          errorsMessages.push("Le champ Sell stock doit être un nombre")
        }
        break
      case "rent_stock":
        if(!data[key] && data[key].length === 0 && !Number.isNaN(parseInt(data[key]))){
          errorsMessages.push("Le champ Rent stock est obligatoire")
        }else if (Number.isNaN(parseInt(data[key]))){
          errorsMessages.push("Le champ Rent stock doit être un nombre")
        }
        break
      default:
        break
    }
  });
  return (errorsMessages.length > 0 && errorsMessages.join(". ")+ ".")
}

export default validateGameForms