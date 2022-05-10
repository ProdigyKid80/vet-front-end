const url = "http://localhost:8080/v1/users";

//-------------------- LOG IN -----------------
document.forms.login.addEventListener("submit", (e) => {
  e.preventDefault();

  const userData = {
    email: login.email.value.toLowerCase().trim(),
    password: login.pass.value,
  };

  loginFunc(userData);
});

const loginFunc = async (userData) => {
  try {
    const res = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();

    if (data.err) {
      return alert(data.err);
    }

    localStorage.setItem("token", data.token);
    location.replace("/dashboard.html");
  } catch (err) {
    alert(err);
  }
};

//-------------------- SIGN UP -----------------
document.forms.signup.addEventListener("submit", (e) => {
  e.preventDefault();

  const userData = {
    name: signup.name.value.trim(),
    email: signup.sEmail.value.toLowerCase().trim(),
    password: signup.sPass.value,
  };

  signinFunc(userData);
});

const signinFunc = async (userData) => {
  try {
    const res = await fetch(`${url}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();

    if (data.err) {
      return alert(data.err);
    }

    alert(`${data.msg}
      Please, log in now.
    `);

    location.replace("/index.html");
  } catch (err) {
    alert(err);
  }
};

// const nums = [-1, 0, 1, 2, -1, -4];
// const output = [];

// const findTriplets = (arr) => {
//   for (i = 0; i < arr.length; i++) {
//     const a = arr[i];

//     for (j = i + 1; j < arr.length; j++) {
//       const b = arr[j];

//       for (k = j + 1; k < arr.length; k++) {
//         const c = arr[k];

//         if (a + b + c === 0) {
//           const numVar = [a, b, c].sort();
//           output.push(numVar);
//         }
//       }
//     }
//   }

//   // for (l = 0; l < arr.length; l++) {
//   //   for (m = 0; m < 3; m++) {}
//   // }

//   // const uniq = [...new Set(output)];
//   console.log(output);
// };

// findTriplets(nums);

// const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// // const keys = Object.keys(heights);
// let water = [];
// let plotas = 0;

// const maxWater = (arr) => {
//   for (i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[i] >= arr[j]) {
//         plotas = arr[j] * (j - i);
//       } else {
//         plotas = arr[i] * (j - i);
//       }
//       water.push(plotas);
//     }
//   }

//   console.log(water);

//   console.log(Math.max(...water));

//   return Math.max(...water);
// };

// maxWater(heights);
