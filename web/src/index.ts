import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";
// import { UserForm } from "./views/UserForm";

// const collection = User.buildUserCollection();

// collection.on('change', () => {
//   console.log(collection)
// });

// collection.fetch();

const user = User.buildUser({ name: "Anjali", age: 12 });
const root = document.querySelector('#root');
if(root) {
  const userEdit = new UserEdit(root, user);

  userEdit.render();
  console.log(userEdit);
} else{
  throw new Error('Root element not found');
}
