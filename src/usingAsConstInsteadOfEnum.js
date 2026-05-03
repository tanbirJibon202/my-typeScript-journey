"use strict";
// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }
const UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
};
/*
{
  readonly Admin : "Admin",
  readonly Editor : "Editor",
  readonly Viewer : "Viewer",

  1.typeof perator
  2. keyof operator

  const user = {
  id: 1,
  name: "Tanbir"
  }
  typeof user;

  typer user{
    id: number
    name: string
  }
    typeof UserRoles

    {

    Admin: 'Admin',
    Editor: "Editor",
    Viewer: "Viewer",

    }
    keyof typeof UserRoles
    'Admin' | 'Editor' | 'Viewer'
}
*/
const canEdit = (role) => {
    return role === UserRoles.Admin || role === UserRoles.Editor;
};
const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
