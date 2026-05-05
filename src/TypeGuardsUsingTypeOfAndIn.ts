// in typeof

type Alphanumeric = number | string;
const add = (num_1: Alphanumeric, num_2: Alphanumeric): number | string => {
  if (typeof num_1 === "number" && typeof num_2 === "number") {
    return num_1 + num_2;
  } else {
    return num_1.toString() + num_2.toString();
  }
};

add(2, 2);
add(2, "2");
add("2", 2);
add("2", "2");

// in guard

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`${user.name} and his role is: ${user.role}`);
  } else {
    console.log(`${user.name}`);
  }
};

getUserInfo({ name: "Normal" });
getUserInfo({ name: "AdminUser", role: "Admin" });
