<script setup>
    import { ref } from 'vue';
    import router from "../../router/index.js";

    const username = ref("");
    const password1 = ref("");
    const password2 = ref("");
    const alamat = ref("");
    const email = ref("");
    const error = ref("");

    const onSubmit = async (e) => {
        e.preventDefault();
        if(validate()){
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/users/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        email: email.value,
                        password: password1.value,
                        username: username.value,
                        alamat: alamat.value,
                    }),
                }
            );
            if(!response.ok) {
                error.value = "Something Wrong";
            }
            else {
                router.push({path: "/"})
                console.log('Berhasil Register')
            } 
        } catch (error) {
            console.log(error);
        }
    }
    };

    const validate = () => {
        if(!username.value || !email.value || !password1.value || !password2.value) {
            error.value = "Field Tidak Boleh Kosong!";
            return false;
        }

        if(password1.value !== password2.value) {
            console.log(password1.value)
            console.log(password2.value)
            error.value = "Password Tidak Sama!";
            return false
        }

        if(password1.value.length < 8){
            error.value = "Password Kurang dari 8 Karakter";
            return false
        }
        return true;
    };

</script>

<template>
    <div class="containe">
        <div class="loginPage d-flex">
            <img style="width: 600px; height: 700px;" src="../../assets/bg.jpeg" alt="">
            <div class="p-4 loginItem">
                <h1 class="d-flex col-12 justify-content-start pb-2">Register</h1>
                <p class="d-flex col-12 justify-content-start">Pilih Peralatan yang Kamu Suka</p>
                <form action="" @submit="onSubmit" class="position-absolute col-10 mt-3">
                    <div>
                        <div class="m-0 mb-2">
                            <label for="username_input" class="fs-6 fw-semibold">Username</label>
                            <input 
                                type="username" 
                                class="form-control form"
                                id="username_input"
                                v-model="username"
                                placeholder="Username"
                                />
                        </div>   
                        <div class="mb-2">
                            <label for="email_input" class="fs-6 fw-semibold">Email Address</label>
                            <input 
                            type="email" 
                            class="form-control form"
                            id="email_input"
                            aria-describedby="emailHelp"
                            v-model="email"
                            placeholder="Email Address"
                            />
                        </div>
                        <div class="m-0 mb-2">
                            <label for="password1_input" class="fs-6 fw-semibold">Password</label>
                            <input 
                                type="password" 
                                class="form-control form"
                                id="password1_input"
                                v-model="password1"
                                placeholder="Min. 8 Karakter"
                                />
                        </div>                        
                        <div class="m-0 mb-2">
                            <label for="password2_input" class="fs-6 fw-semibold">Konfirmasi Password</label>
                            <input 
                                type="password" 
                                class="form-control form"
                                id="password2_input"
                                v-model="password2"
                                placeholder="Min. 8 Karakter"
                                />
                        </div>                        
                        <div class="m-0 mb-2">
                            <label for="alamat_input" class="fs-6 fw-semibold">Alamat</label>
                            <input 
                                type="address" 
                                class="form-control form"
                                id="alamat_input"
                                v-model="alamat"
                                placeholder="Alamat"
                                />
                        </div>
                        <div class="d-flex gap-2">
                            <input id="remember" type="checkbox">
                            <label for="remember" class="fw-semibold">Accept Terms & Conditions</label>
                        </div> 
                    </div>
                    <div v-if="error" class="alertPwd mb-2 d-flex" role="alert">
                        {{error}}
                    </div>
                    <button class="btn btn-primary col-12 p-2 fw-bold mb-2" type="submit">Register</button>
                    <div class="register">
                        <h1>Have an Account?<a href="login"> Login</a></h1>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>


* {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;

}

.containe {
    background-color: rgb(235, 235, 235);
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.loginPage {
    margin: auto;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 4px 15px #808080;
    border-radius: 20px;
}

.loginPage img{
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;

}

.loginItem {
    width: 600px;
    height: 700px;
    background: white;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
}

.loginItem h1 {
    font-size: 30px;
    font-weight: 500;
}

.alertPwd {
    color: red;
    justify-content: center;
}

.loginItem div {
    margin-bottom: 40px;
}
.form {
    height: 40px;
    background-color: rgba(224, 224, 224, 0.3);
    padding: 10px;
    font-size: 14px;
}

.register h1{
    font-size: 14px;
    font-weight: 500;
}

.register h1 a{
    font-weight: bold;
    color: rgb(0, 110, 255);
    text-decoration: none;
}

</style>