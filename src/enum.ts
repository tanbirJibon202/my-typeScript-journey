// set of fixed string leteral

// type UserRoles = "Admin" | "Editor" | "Viewer";
// const canEdit = (role: UserRoles)=> {
//   return role === "Admin" || role === "Editor";
// };
// const isEditPermissable = canEdit("Admin");
// console.log(isEditPermissable);

enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}
const canEdit = (role: UserRoles) => {
  return role === UserRoles.Admin || role === UserRoles.Editor;
};
const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);


