<template>
       

    <div class="col-12">
          <!-- Table -->
        <table class="table table-hover table-bordered mx-auto">
            <thead>
              <tr class="table-primary">
                <th style="width: 7%; font-weight: bold;">ID</th>
                <th style="width: 10%; font-weight: bold;">Jenis</th>
                <th style="width: 10%; font-weight: bold;">Merek</th>
                <th style="width: 10%; font-weight: bold;">Tipe</th>
                <th style="width: 10%; font-weight: bold;">Nama</th>
                <th style="width: 13%; font-weight: bold;">Deskripsi</th>
                <th style="width: 10%; font-weight: bold;">Harga</th>
                <th style="width: 10%; font-weight: bold;">Diskon</th>
                <th style="width: 10%; font-weight: bold;">Gambar</th>
                <th style="width: 10%; font-weight: bold;">Opsi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id" class="">
                <td class="">{{ item.id }}</td>
                <td>{{ item.jenis }}</td>
                <td>{{ item.merek}}</td>
                <td>{{ item.tipe}}</td>
                <td>{{ item.nama}}</td>
                <td style="text-align: left;">{{ item.desc}}</td>
                <td>Rp. {{ item.harga}}</td>
                <td>Rp. {{ item.disc}}</td>
                <td class="image">
                    <img :src="`http://127.0.0.1:5000/uploads/${item.image}`" style="height:50px;" :alt="`${item.nama}`">
                </td>
                <td class="d-flex gap-2 flex-column justify-content-center mx-auto">
                    <button type="button" class="btn btn-success px-0" data-bs-toggle="modal" data-bs-target="#exampleModal" style="width: 80px; font-size: 10px">Edit</button>

                <!-- Modal Body -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" class="control col-12 d-flex flex-column gap-3" enctype="multipart/form-data">
                                        <div>
                                            <input class="col-12 form-control" type="text" id="jenis" placeholder="Kategori" v-model="this.items.jenis"/>
                                        </div>
                                        <div>
                                            <input class="col-12 form-control" type="text" id="merek" placeholder="Brand" v-model="this.items.merek"/>
                                        </div>
                                        <div>
                                            <input class="col-12 form-control" type="text" id="tipe" placeholder="Seri" v-model="this.items.tipe"/>
                                        </div>
                                        <div>
                                            <input class="col-12 form-control" type="text" id="nama" placeholder="Nama Product" v-model="this.items.nama"/>
                                        </div>
                                        <div>
                                            <textarea class="col-12 form-control" type="text" id="desc" placeholder="Deskripsi" v-model="this.items.desc"/>
                                        </div>
                                        <div>
                                            <input class="col-12 form-control" type="text" id="harga" placeholder="Harga" v-model="this.items.harga"/>
                                        </div>
                                        <div>
                                            <input class="col-12 form-control" type="text" id="disc" placeholder="Diskon" v-model="this.items.disc"/>
                                        </div>
                                        <div>
                                            <label for="customFile">Image:</label>
                                            <input type="file" @change="getFiles" class="form-control" id="customFile">
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
                    <button class="btn btn-danger px-0" @click="deleteProduct(item.id)" style="width: 80px; font-size: 10px;">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
    </div>
</template>


<script>
import axios from "axios";
import addItem from "../Dashboard/AddItem.vue"

export default {
    name: "ProductList",
    components: {addItem},
    data() {
        return {
            items: [],
        };
    },

    created() {
        this.getProducts();
    },

    methods: {
        // Get All Products
        async getProducts() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/getItem`);
                this.items = response.data;
            } catch (error) {
                console.log(error);
            }
        },
        // Delete Product
        async deleteProduct(id) {
            try {
                await axios.delete(`${import.meta.env.VITE_API_URL}/admin/deleteItem/${id}`);
                this.getProducts();
                console.log("Data Terhapus")
            } catch (error) {
                console.log(error)
            }
        },
        getFiles (file){
            this.items.image = file.target.files[0];
        },

        // Edit Product
        async editProduct(id) {
            const formData = new FormData();  
            formData.append('jenis', this.items.jenis)
            formData.append('merek', this.items.merek)
            formData.append('tipe', this.items.tipe)
            formData.append('nama', this.items.nama)
            formData.append('desc', this.items.desc)
            formData.append('harga', this.items.harga)
            formData.append('disc', this.items.disc)
            formData.append('image', this.items.image)
            try {
                await axios.put(`${import.meta.env.VITE_API_URL}/admin/updateItem/${id}`, formData);
                console.log("Data Updated!");
                this.success.value = "Data Updated Successfully";

            } catch (error) {
                console.log(error);
            }
        },

        async pushData() {
            location.reload()
        },
    }
};
</script>


<style scoped>
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