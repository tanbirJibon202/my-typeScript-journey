// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }
const UserRoles = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

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


  user['id'] >>> 1

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
    'ADMIN' | 'EDITOR' | 'VIEWER'

    UserRoles['Admin'] >>> 'ADMIN'
    typeof UserRoles[keyof typeof UserRoles] 
}
*/

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  return role === UserRoles.Admin || role === UserRoles.Editor;
};
const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
