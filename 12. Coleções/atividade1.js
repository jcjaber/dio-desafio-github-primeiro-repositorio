function getAdmins (map) {
  let admins = [];

  for([key, value] of map) {
    if(value == 'Admin') {
      admins.push(key)
    }
  }
  
  return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Bianca', 'User');
usuarios.set('Roberto', 'User');
usuarios.set('Luma', 'User');
usuarios.set('Angélica', 'Admin');
usuarios.set('Aderbal', 'User');
usuarios.set('Inácio', 'Admin');
usuarios.set('Fernanda', 'Admin');

console.log(getAdmins(usuarios))