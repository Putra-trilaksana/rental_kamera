<template>
    <div>
        <div class="row mb-3 mx-1">
            <h3 class="col-11 d-flex justify-content-center m-auto flex-row">Add Item</h3>
            <button class="col-1 btn btn-primary d-flex justify-content-center mx-auto" @click="addProduct">Submit</button>
        </div>
        <form action="" class="control" enctype="multipart/form-data">
            <div class="form mb-4">
                <input type="text" id="Kategori" class="form-control" v-model="item.jenis" placeholder="Kategori"/>
            </div>
            <div class="form mb-4">
              <input type="text" id="brand" class="form-control" v-model="item.merek" placeholder="Brand"/>
            </div>
            <div class="form mb-4">
              <input type="text" id="type" class="form-control" v-model="item.tipe" placeholder="Seri"/>
            </div>
            <div class="form mb-4">
              <input type="text" id="name" class="form-control" v-model="item.nama" placeholder="Nama Product"/>
            </div>
            <div class="form mb-4">
              <textarea class="form-control" id="desc" rows="2" v-model="item.desc" placeholder="Deskripsi"></textarea>
            </div>
            <div class="form mb-4">
              <input type="text" id="price" class="form-control" v-model="item.harga" placeholder="Harga"/>
            </div>
            <div class="form mb-4">
              <input type="text" id="disc" class="form-control" v-model="item.disc" placeholder="Diskon"/>
            </div>
            <div>
              <label for="customFile">Image:</label>
              <input @change="getFiles" type="file" class="form-control" id="customFile"/>
            </div>
          </form>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "addProduct",
    data:() => {
        return {
            item: {
              jenis:'',
              merek:'',
              tipe:'',
              nama:'',
              desc:'',
              harga:'',
              disc:'',
              image:'',
            }
        };
    },
    methods: {
        getFiles (file){
          this.item.image = file.target.files[0];
        },
        // Add Product
        async addProduct() {
            const formData = new FormData();  
            formData.append('jenis', this.item.jenis)
            formData.append('merek', this.item.merek)
            formData.append('tipe', this.item.tipe)
            formData.append('nama', this.item.nama)
            formData.append('desc', this.item.desc)
            formData.append('harga', this.item.harga)
            formData.append('disc', this.item.disc)
            formData.append('image', this.item.image)
            try {
                await axios.post(`http://127.0.0.1:5000/admin/addItem`, formData);
                console.log("Masuk Breh");
                this.$router.push("/productList");
            } catch (error) {
              console.log(error)
            }

        }
    }
};
</script>