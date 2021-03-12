const editInfo = (obj) => {
  return `
    <html>
        <head>
            <title>View</title>
            <link rel="stylesheet" href="https://unpkg.com/js-datepicker/dist/datepicker.min.css">
        </head>
        <body>
            <h1>User view</h1>
            <table>
            <tbody>
            
            <form>
                    <tr>
                        <td>First Name</td>
                        <td>
                            <input value="${obj.id}" type="hidden" id="id" name="id" placeholder="Id" />
                            <input value="${obj.first_name}" type="text" id="first_name" name="first_name" placeholder="First name" />
                        </td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>
                            <input value="${obj.last_name}" type="text" id="last_name" name="last_name" placeholder="Last name" />
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                            <input value="${obj.email_id}" type="text" id="email_id" name="email_id" placeholder="Email" />
                        </td>
                    </tr>
                    <tr>
                        <td>DOB</td>
                        <td>
                            <input value="${obj.dob}" type="text" id="dob" name="dob" placeholder="DOB" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button type="button" value="Submit" onclick="submitFormData()">Submit </button>
                        </td>
                    </tr>
                 </form>
                 <script>
                 async function submitFormData() {
                    const id = document.getElementById("id").value;
                    const first_name = document.getElementById("first_name").value;
                    const last_name = document.getElementById("last_name").value;
                    const email_id = document.getElementById("email_id").value;
                    const formData = {
                      first_name: first_name,
                      last_name: last_name,
                      email_id: email_id,
                    };
                    console.log("id", id);
                    console.log("FORM DATA", formData);
                    const request = new Request('http://localhost:8000/api/users/'+id,{
                        method: "PATCH",
                        body: JSON.stringify(formData),
                        headers:{
                            'Content-Type': "application/json",
                            'Accept':"application/json"
                        }
                    });
                    fetch(request).then(result=>{
                        console.log("RESULT",result);
                    }).catch(err=>{
                        console.log("ERROR",err)
                    })
                    console.log("RESULT", request);
                    if (request.status == 200) {
                      console.log("Form submited successfully");
                    } else {
                      console.log("Form not submitted successfully");
                    }
                  }
                  </script>
            </tbody>
            </table>
        </body>
        <script src="/js/datepicker.js"></script>
        <script>
            const picker = datepicker("#dob", {})
        </script>
    </html>
    `;
};

// const result = await fetch(
//     "http://localhost:8000/api/users/"+id,
//     {
//       method: "PATCH",
//       data: JSON.stringify(formData),
//       Content-Type: "application/json; charset=utf-8",
//     }
//   );

// <form method="POST" action="http://localhost:8000/api/users/editRecord/${obj.id}" enctype="application/x-www-form-urlencoded">
// <form action="#" onsubmit="submitFormData()">
// contentType: "application/json; charset=utf-8",
// action="url/${obj.id}"
// application/json; charset=utf-8
// async function submitFormData() {
//   alert("INSIDESUBMITFORMDATA");
//   //   let formData = new FormData();
//   let id = document.getElementById("id").value;
//   let first_name = document.getElementById("first_name").value;
//   let last_name = document.getElementById("last_name").value;
//   let email_id = document.getElementById("email_id").value;

//   const formData = {
//     first_name: first_name,
//     last_name: last_name,
//     email_id: email_id,
//   };

//   const result = await fetch(`url/${id}`, {
//     method: "POST",
//     body: formData,
//   });
//   if (result) {
//     alert("Form submited successfully");
//   }
// }

{
  /* <script> */
}

//   </script>

module.exports = editInfo;
