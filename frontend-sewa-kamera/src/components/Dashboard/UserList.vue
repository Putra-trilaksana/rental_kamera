<template>
    <div>
        <table class="table table-hover table-bordered mx-auto">
            <thead>
              <tr class="table-primary">
                <th style="width: 4%; font-weight: bold;">ID</th>
                <th style="width: 10%; font-weight: bold;">Email</th>
                <th style="width: 10%; font-weight: bold;">Password</th>
                <th style="width: 10%; font-weight: bold;">Username</th>
                <th style="width: 13%; font-weight: bold;">Alamat</th>
                <th style="width: 10%; font-weight: bold;">CretedAt</th>
                <th style="width: 7%; font-weight: bold;">Opsi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id" class="">
                <td>{{ item.id }}</td>
                <td>{{ item.email}}</td>
                <td>{{ item.password}}</td>
                <td>{{ item.username}}</td>
                <td>{{ item.alamat}}</td>
                <td>{{ item.createdAt}}</td>
                <td class="d-flex gap-2 flex-column justify-content-center mx-auto">
                    <button type="button" class="btn btn-success px-0" data-bs-toggle="modal" data-bs-target="#exampleModal" style="width: 80px; font-size: 10px">Edit</button>
                    
                <!-- Modal Body -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit User</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" class="control col-12 d-flex flex-column gap-3" enctype="multipart/form-data">
                                        <div>
                                            <input class="col-12 form-control" type="text" id="merek" placeholder="Email" v-model="this.items.email"/>
                                        </div>
                                        <div>
                                            <input class="col-12 form-control" type="text" id="nama" placeholder="Username" v-model="this.items.username"/>
                                        </div>
                                        <div>
                                            <input class="col-12 form-control" type="text" id="tipe" placeholder="Password" v-model="this.items.password"/>
                                        </div>
                                        <div>
                                            <input class="col-12 form-control" type="text" id="tipe" placeholder="Konfirmasi Password" v-model="this.items.password"/>
                                        </div>
                                        <div>
                                            <input class="col-12 form-control" type="text" id="nama" placeholder="Alamat" v-model="this.items.alamat"/>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" @click="editProduct(item.id)" data-bs-target="#exampleModal2" data-bs-toggle="modal">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal Body -->

                    <!-- MOdal Body 2 -->
                        <div class="modal fade modal-dialog-scrollable" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="alert alert-success" role="alert">
                                        Berhasil mengubah data
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="pushData">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- MOdal Body 2 -->
                    <button class="btn btn-danger px-0" @click="deleteUser(item.id)" style="width: 80px; font-size: 10px;">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            items: [],
        };
    },
    created() {
        this.getUsers();
    },
    methods:{
        async getUsers() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/getUser`);
                this.items = response.data;
                console.log("Data Masuk");
                console.log(this.items);
            } catch (error) {
                console.log(error);
            }
        },

        async deleteUser(id) {
            try {
                const response =  await axios.delete(`${import.meta.env.VITE_API_URL}/users/deleteUser/${id}`);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        },

        async logout() {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/users/logout`, {
            method: "POST",
            credentials: "include",
          });

          if(!response){
            console.log(response);
          }
          else {
            this.$router.push({name: "Login"})
            console.log("Berhasil Logout");
          }
        } catch (error) {
          console.log(error);
        }
      }
    }    
}
</script>
<style>
table {
    table-layout: fixed;
    word-wrap: break-word;
    text-align: center;
}

th {
    position: sticky;
    top: 0;
}
</style>