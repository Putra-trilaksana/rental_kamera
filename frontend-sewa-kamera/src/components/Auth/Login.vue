<script setup>
    import { ref } from 'vue';
    import router from "../../router/index.js";

    const email = ref('');
    const password = ref('');
    const error = ref("");

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/users/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        email: email.value,
                        password: password.value
                    }),
                }
            );
            if(!response.ok) {
                error.value = "Email atau Password Salah!";
            }
            else {
                router.push('/');
                console.log('Berhasil Login');
            }

        } catch (error) {
            console.log(error);
        }
};
</script>

<template>
    <div class="containe">
        <div class="loginPage d-flex">
            <img style="width: 400px; height: 500px;" src="../../assets/bg.jpeg" alt="">
            <div class="p-5 loginItem">
                <h1 class="d-flex col-12 justify-content-start pb-2" style="color: black;">Login</h1>
                <p class="d-flex col-12 justify-content-start">Pilih Peralatan yang Kamu Suka</p>
                <form action="" @submit="onSubmit" class="position-absolute col-8 mt-5">
                    <div>
                        <div class="mb-3 col-4">
                            <label for="username_input" class="fw-semibold form-item">Email Address</label>
                            <input 
                                type="email" 
                                class="form-control form"
                                id="username_input"
                                aria-describedby="emailHelp"
                                v-model="email"
                                placeholder="Email Address"
                                />
                            </div>
                            <div class="m-0 mb-2 col-4">
                                <label for="password_input" class="fw-semibold form-item">Password</label>
                                <input 
                                type="password" 
                                class="form-control form"
                                id="password_input"
                                v-model="password"
                                placeholder="Min. 8 Karakter"
                                autocomplete="off"
                                />
                            </div>   
                            <div class="mt-0 d-flex gap-2">
                                <input id="remember" type="checkbox">
                                <label for="remember" class="fw-semibold">Remember Me?</label>
                            </div> 
                        </div>
                        <div v-if="error" class="alertPwd m-0" role="alert">
                            {{error}}
                        </div>
                        <button class="btn btn-primary col-4 p-2 fw-bold mt-2" type="submit">Login</button>
                        <div class="register">
                            <h1>Don't Have an Account?<a href="/register" to="/register"> Create an Account</a></h1>
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

.form-item {
    font-size: 12px;
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
    width: 400px;
    height: 500px;
    background: white;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
}

.loginItem h1 {
    font-size: 30px;
    font-weight: 500;
}

.alertPwd {
    display: flex;
    color: red;
    justify-content: center;
}

.loginItem div {
    margin-bottom: 20px;
}
.form {
    height: 30px;
    background-color: rgba(224, 224, 224, 0.3);
    padding: 10px;
    font-size: 11px;
}

.register h1{
    font-size: 12px;
    font-weight: 500;
    margin-top: 13px;
}

.register h1 a{
    font-weight: bold;
    color: rgb(0, 110, 255);
    text-decoration: none;
}

</style>