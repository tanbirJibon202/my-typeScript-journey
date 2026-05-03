"use strict";
// set of fixed string leteral
// type UserRoles = "Admin" | "Editor" | "Viewer";
// const canEdit = (role: UserRoles)=> {
//   return role === "Admin" || role === "Editor";
// };
// const isEditPermissable = canEdit("Admin");
// console.log(isEditPermissable);
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
const canEdit = (role) => {
    return role === UserRoles.Admin || role === UserRoles.Editor;
};
const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
